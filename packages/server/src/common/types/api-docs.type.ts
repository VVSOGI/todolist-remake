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
  type: string
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

type MetadataPropertiesKeys = 'body' | 'query' | 'params' | 'response'

export type DefaultMetadataProperties = {
  [P in MetadataPropertiesKeys]?: string
}

export interface EndpointDecoratorMetadata<P extends DefaultMetadataProperties> {
  description: string
  request?: {
    body?: {
      type: string
      properties: P['body'] extends string ? Record<P['body'], ApiProperty> : never
      required?: string[]
    }
    query?: {
      type: string
      properties: P['query'] extends string ? Record<P['query'], ApiProperty> : never
      required?: string[]
    }
    params?: {
      type: string
      properties: P['params'] extends string ? Record<P['params'], ApiProperty> : never
      required?: string[]
    }
  }
  response?: {
    type: string
    properties?: P['response'] extends string ? Record<P['response'], ApiProperty> : never
    example?: P['response'] extends string ? Record<P['response'], any> : never
  }
  deprecated?: boolean
  tags?: string[]
}
