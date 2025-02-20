import { ApiDocsEndpoint, EndpointDecoratorMetadata } from 'doke'

export const DocsDeleteCategory = () => {
  const metadata: EndpointDecoratorMetadata<{
    params: 'categoryId'
    response: 'id' | 'title' | 'createdAt' | 'updatedAt' | 'deleted'
  }> = {
    description: 'Delete a category you want',
    request: {
      params: {
        properties: {
          categoryId: {
            type: 'string',
            description: 'Target category id that you want delete'
          }
        },
        required: ['categoryId']
      }
    },
    response: {
      properties: {
        id: {
          type: 'string',
          description: 'category ID'
        },
        title: {
          type: 'string',
          description: 'category title'
        },
        createdAt: {
          type: 'string',
          description: 'category createdAt'
        },
        updatedAt: {
          type: 'string',
          description: 'category updatedAt'
        },
        deleted: {
          type: 'boolean',
          description: 'Updated category deleted'
        }
      },
      example: {
        id: '98874008-8915-4d53-9239-3913f7ee2089',
        title: 'Test title',
        createdAt: '2025-02-10T13:00:27.440Z',
        updatedAt: '2025-02-10T13:00:27.440Z',
        deleted: true
      }
    }
  }

  return ApiDocsEndpoint(metadata)
}
