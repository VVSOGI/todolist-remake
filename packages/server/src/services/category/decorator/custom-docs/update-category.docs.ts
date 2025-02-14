import { ApiDocsEndpoint, EndpointDecoratorMetadata } from 'src/common'

export const DocsUpdateCategory = () => {
  const metadata: EndpointDecoratorMetadata<{
    params: 'categoryId'
    response: 'id' | 'title' | 'createdAt' | 'updatedAt' | 'deleted'
  }> = {
    description: 'Update a category you want',
    request: {
      params: {
        type: 'string',
        properties: {
          categoryId: {
            type: 'string',
            description: 'Target category id that you want update'
          }
        },
        required: ['categoryId']
      }
    },
    response: {
      type: 'object',
      properties: {
        id: {
          type: 'string',
          description: 'category ID'
        },
        title: {
          type: 'string',
          description: 'Updated category title'
        },
        createdAt: {
          type: 'string',
          description: 'category createdAt'
        },
        updatedAt: {
          type: 'string',
          description: 'Updated category updatedAt'
        },
        deleted: {
          type: 'boolean',
          description: 'category deleted'
        }
      },
      example: {
        id: '98874008-8915-4d53-9239-3913f7ee2089',
        title: 'Test title',
        createdAt: '2025-02-10T13:00:27.440Z',
        updatedAt: '2025-02-10T13:00:27.440Z',
        deleted: false
      }
    }
  }

  return ApiDocsEndpoint(metadata)
}
