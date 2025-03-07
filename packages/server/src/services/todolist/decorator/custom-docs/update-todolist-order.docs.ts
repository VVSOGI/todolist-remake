import { ApiDocsEndpoint, EndpointDecoratorMetadata } from 'doke'

export const DocsUpdateTodolistOrder = () => {
  const metadata: EndpointDecoratorMetadata<{
    body: 'id' | 'order'
  }> = {
    description: `This endpoint updates the display order of a specific todolist item within its category.
  It requires both the todolist's unique identifier and the new numerical order position to be provided.
  The order value determines the position of the todolist item when displayed in a sequence with other items.
  This endpoint is essential for implementing drag-and-drop reordering functionality or manual sorting of todolist items.`,
    request: {
      body: {
        properties: {
          id: {
            type: 'string',
            description: 'Target todolist id that you want update',
            required: true
          },
          order: {
            type: 'number',
            description: 'The order number of the todolist you want to update',
            required: true
          }
        }
      }
    },
    response: {}
  }

  return ApiDocsEndpoint(metadata)
}
