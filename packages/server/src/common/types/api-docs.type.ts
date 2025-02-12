export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'

export interface ApiProperty {
  type: string
  description: string
  required?: boolean
  example?: any
  enum?: string[]
  items?: ApiProperty
}

export interface ApiParameters {
  type: 'object'
  properties: Record<string, ApiProperty>
  required?: string[]
}

export interface ApiRequest {
  body?: ApiParameters
  query?: ApiParameters
  params?: ApiParameters
  headers?: ApiParameters
}

export interface ApiResponse {
  type: string
  description?: string
  example?: any
  properties?: Record<string, ApiProperty>
}

export interface ApiEndpointMetadata {
  description: string
  requestExample?: any
  responseExample?: any
  deprecated?: boolean
  tags?: string[]
}

export interface ApiEndpoint {
  path: string
  method: HttpMethod
  name: string
  description: string
  deprecated?: boolean
  tags?: string[]
  request?: ApiRequest
  response: ApiResponse
}

export interface ApiController {
  controllerName: string
  basePath: string
  description?: string
  tags?: string[]
  endpoints: ApiEndpoint[]
}

export interface ApiDocumentation {
  info: {
    title: string
    description?: string
    version: string
    contact?: {
      name?: string
      email?: string
      url?: string
    }
  }
  servers: Array<{
    url: string
    description?: string
  }>
  controllers: ApiController[]
}

export interface EndpointDecoratorMetadata {
  description: string
  request?: {
    body?: {
      type: string
      properties: Record<string, ApiProperty>
      required?: string[]
    }
    query?: {
      type: string
      properties: Record<string, ApiProperty>
      required?: string[]
    }
    params?: {
      type: string
      properties: Record<string, ApiProperty>
      required?: string[]
    }
  }
  response?: {
    type: string
    properties?: Record<string, ApiProperty>
    example?: any
  }
  deprecated?: boolean
  tags?: string[]
}
