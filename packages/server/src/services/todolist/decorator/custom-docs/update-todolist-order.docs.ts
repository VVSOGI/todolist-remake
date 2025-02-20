import { ApiDocsEndpoint, EndpointDecoratorMetadata } from 'doke'

export const DocsUpdateTodolistOrder = () => {
  const metadata: EndpointDecoratorMetadata<{
    body: 'id' | 'order'
  }> = {
    description: 'Update a todolist you want',
    request: {
      body: {
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
    response: {}
  }

  return ApiDocsEndpoint(metadata)
}
