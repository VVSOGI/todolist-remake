/* eslint-disable @typescript-eslint/no-unused-vars */
import { EndpointDecoratorMetadata } from '../types/api-docs.type'

export const ApiEndpoint = (metadata: EndpointDecoratorMetadata): MethodDecorator => {
  return (target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor) => {
    Reflect.defineMetadata('api:endpoint', metadata, target, propertyKey)
    return descriptor
  }
}

export const ApiController = (metadata: { description?: string; tags?: string[] }): ClassDecorator => {
  return (target: any) => {
    Reflect.defineMetadata('api:controller', metadata, target)
    return target
  }
}

export const ApiBody = (metadata: { type: string; properties: Record<string, any>; required?: string[] }): ParameterDecorator => {
  return (target: any, propertyKey: string | symbol, parameterIndex: number) => {
    const existingMetadata = Reflect.getMetadata('api:body', target, propertyKey) || {}
    Reflect.defineMetadata('api:body', { ...existingMetadata, ...metadata }, target, propertyKey)
  }
}

export const ApiQuery = (metadata: { type: string; properties: Record<string, any>; required?: string[] }): ParameterDecorator => {
  return (target: any, propertyKey: string | symbol, parameterIndex: number) => {
    const existingMetadata = Reflect.getMetadata('api:query', target, propertyKey) || {}
    Reflect.defineMetadata('api:query', { ...existingMetadata, ...metadata }, target, propertyKey)
  }
}

export const ApiParam = (metadata: { type: string; properties: Record<string, any>; required?: string[] }): ParameterDecorator => {
  return (target: any, propertyKey: string | symbol, parameterIndex: number) => {
    const existingMetadata = Reflect.getMetadata('api:param', target, propertyKey) || {}
    Reflect.defineMetadata('api:param', { ...existingMetadata, ...metadata }, target, propertyKey)
  }
}
