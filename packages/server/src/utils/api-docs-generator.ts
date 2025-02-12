import * as fs from 'fs'
import * as path from 'path'
import { RequestMethod } from '@nestjs/common'
import { ApiController, ApiEndpoint } from 'src/common/types/api-docs.type'

export class ApiDocsGenerator {
  static async generateDocs(app: any) {
    const controllers = app.getControllers()
    const docs: ApiController[] = []

    for (const controller of controllers) {
      const controllerInstance = app.get(controller)
      const prototype = Object.getPrototypeOf(controllerInstance)
      const controllerPath = Reflect.getMetadata('path', controller)
      const endpoints = this.getControllerEndpoints(prototype)

      docs.push({
        controllerName: controller.name,
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
      const endpoint: ApiEndpoint = this.getEndpointMetadata(prototype, methodName)
      if (endpoint) {
        endpoints.push(endpoint)
      }
    }

    return endpoints
  }

  private static getEndpointMetadata(prototype: any, methodName: string) {
    const metadata = Reflect.getMetadata('api:endpoint', prototype, methodName)
    const path = Reflect.getMetadata('path', prototype, methodName)
    const method = Reflect.getMetadata('method', prototype, methodName)

    if (!metadata || !path || !method) return null

    return {
      path,
      method: RequestMethod[method],
      name: methodName,
      ...metadata
    }
  }
}
