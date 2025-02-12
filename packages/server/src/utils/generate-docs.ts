import * as fs from 'fs'
import * as path from 'path'

import { NestFactory, DiscoveryService } from '@nestjs/core'
import { RequestMethod } from '@nestjs/common'
import { AppModule } from '../app.module'
import { ApiController, ApiEndpoint } from '../common/types/api-docs.type'

export class ApiDocsGenerator {
  static async generateDocs(app: any) {
    const discoveryService = app.get(DiscoveryService)
    const controllers = discoveryService.getControllers()
    const docs: ApiController[] = []

    for (const wrapper of controllers) {
      if (!wrapper.instance || !wrapper.metatype) continue

      const prototype = Object.getPrototypeOf(wrapper.instance)
      const controllerPath = Reflect.getMetadata('path', wrapper.metatype)
      const endpoints = this.getControllerEndpoints(prototype)

      docs.push({
        controllerName: wrapper.metatype.name,
        basePath: controllerPath,
        endpoints
      })
    }

    const docsPath = path.join(process.cwd(), 'api-docs')
    if (!fs.existsSync(docsPath)) {
      fs.mkdirSync(docsPath)
    }

    fs.writeFileSync(path.join(docsPath, 'api-documentation.json'), JSON.stringify(docs, null, 2))
  }

  private static getControllerEndpoints(prototype: any) {
    const endpoints: ApiEndpoint[] = []
    const methodNames = Object.getOwnPropertyNames(prototype).filter(
      (prop) => prop !== 'constructor' && typeof prototype[prop] === 'function'
    )

    for (const methodName of methodNames) {
      const endpoint = this.getEndpointMetadata(prototype, methodName)
      if (endpoint) {
        endpoints.push(endpoint)
      }
    }

    return endpoints
  }

  private static getEndpointMetadata(prototype: any, methodName: string) {
    const metadata = Reflect.getMetadata('api:endpoint', prototype, methodName)
    const path = Reflect.getMetadata('path', prototype[methodName])
    const method = Reflect.getMetadata('method', prototype[methodName])

    if (!metadata || !path || !method) return null

    return {
      path,
      method: RequestMethod[method],
      name: methodName,
      ...metadata
    }
  }
}

async function generateDocs() {
  const app = await NestFactory.create(AppModule)
  await ApiDocsGenerator.generateDocs(app)
  await app.close()
}

generateDocs()
  .then(() => {
    console.log('API documentation generated successfully!')
    process.exit(0)
  })
  .catch((error) => {
    console.error('Failed to generate API documentation:', error)
    process.exit(1)
  })
