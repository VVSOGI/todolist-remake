import * as fs from 'fs'
import * as path from 'path'

import { NestFactory, DiscoveryService } from '@nestjs/core'
import { INestApplication, RequestMethod } from '@nestjs/common'
import { AppModule } from '../app.module'
import { ApiController, ApiEndpoint } from '../common/types/api-docs.type'

interface DocsDefaultMetadata {
  name: string
  description: string
  version: string
}

interface CompleteDocsMetadata extends DocsDefaultMetadata {
  routes: string[]
}

export class ApiDocsGenerator {
  static async generateDocs(app: INestApplication<any>, info: DocsDefaultMetadata, createPath: string) {
    const discoveryService = app.get(DiscoveryService)
    const controllers = discoveryService.getControllers()
    const docs: ApiController[] = []
    const projects: CompleteDocsMetadata = { ...info, routes: [] }

    for (const wrapper of controllers) {
      if (!wrapper.instance || !wrapper.metatype) continue

      const prototype = Object.getPrototypeOf(wrapper.instance)
      const controllerPath = Reflect.getMetadata('path', wrapper.metatype)
      const endpoints = this.getControllerEndpoints(prototype)

      projects.routes.push(controllerPath)

      docs.push({
        controllerName: wrapper.metatype.name,
        basePath: controllerPath,
        endpoints
      })
    }

    const docsPath = path.join(process.cwd(), createPath)
    this.createDirectory(docsPath)

    for (const doc of docs) {
      fs.writeFileSync(path.join(docsPath, `routes/${doc.basePath}.json`), JSON.stringify(doc, null, 2))
    }
  }

  private static createDirectory(docsPath: string) {
    const pathes = [docsPath, docsPath + '/routes']
    pathes.forEach((target) => {
      if (!fs.existsSync(target)) {
        fs.mkdirSync(target)
      }
    })
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

    if (!metadata || !path || method === undefined) return null

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
  const info: DocsDefaultMetadata = {
    name: 'free-todolist',
    description: `A full-stack todo list application designed for practice, focusing on improving architectural skills and testing various design patterns (container-presenter, layered ...) in both frontend and backend development.`,
    version: '1.0.0'
  }

  await ApiDocsGenerator.generateDocs(app, info, 'api-docs')
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
