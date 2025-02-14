import { ApiDocsEndpoint, EndpointDecoratorMetadata } from 'src/common'

export const DocsUpdateTodolistOrder = () => {
  const metadata: EndpointDecoratorMetadata<{
    body: 'id' | 'order'
  }> = {
    description: 'Update a todolist you want',
    request: {
      body: {
        type: 'string',
        properties: {
          id: {
            type: 'string',
            description: 'Target todolist id that you want update'
          },
          order: {
            type: 'number',
            description: 'The order number of the todolist you want to update'
          }
        },
        required: ['categoryId']
      }
    },
    response: {
      type: 'string'
    }
  }

  return ApiDocsEndpoint(metadata)
}
