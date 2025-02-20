import { ApiDocsEndpoint, EndpointDecoratorMetadata } from 'doke'

export const DocsGetCategoryById = () => {
  const metadata: EndpointDecoratorMetadata<{
    params: 'categoryId'
    response: 'id' | 'title' | 'createdAt' | 'updatedAt' | 'deleted'
  }> = {
    description: '',
    request: {
      params: {
        properties: {
          categoryId: {
            type: 'string',
            description: 'Target category Id that you find'
          }
        }
      }
    },
    response: {
      properties: {
        id: {
          type: 'string',
          description: 'Found category ID'
        },
        title: {
          type: 'string',
          description: 'Found category title'
        },
        createdAt: {
          type: 'string',
          description: 'Found category createdAt'
        },
        updatedAt: {
          type: 'string',
          description: 'Found category updatedAt'
        },
        deleted: {
          type: 'boolean',
          description: 'Found category deleted'
        }
      },
      example: {
        id: '16874008-8915-4d53-9239-3913f7ee2089',
        title: 'Test title',
        createdAt: '2025-02-10T13:00:27.440Z',
        updatedAt: '2025-02-10T13:00:27.440Z',
        deleted: false
      }
    }
  }

  return ApiDocsEndpoint(metadata)
}
