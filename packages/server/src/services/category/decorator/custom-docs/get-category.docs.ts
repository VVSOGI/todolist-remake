import { ApiDocsEndpoint, EndpointDecoratorMetadata } from 'src/common'

export const DocsGetCategory = () => {
  const metadata: EndpointDecoratorMetadata<{
    query: 'deleted'
    response: 'id' | 'title' | 'createdAt' | 'updatedAt' | 'deleted'
  }> = {
    description: '',
    request: {
      query: {
        type: 'boolean',
        properties: {
          deleted: {
            type: 'boolean',
            description: `Get all category Based on the query.`
          }
        }
      }
    },
    response: {
      type: 'array',
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
      example: [
        {
          id: '16874008-8915-4d53-9239-3913f7ee2089',
          title: 'Test title',
          createdAt: '2025-02-10T13:00:27.440Z',
          updatedAt: '2025-02-10T13:00:27.440Z',
          deleted: false
        },
        {
          id: '40874008-8915-4d53-9239-3913f7ee2089',
          title: 'Test title',
          createdAt: '2025-02-10T13:00:27.440Z',
          updatedAt: '2025-02-10T13:00:27.440Z',
          deleted: false
        },
        {
          id: '98874008-8915-4d53-9239-3913f7ee2089',
          title: 'Test title',
          createdAt: '2025-02-10T13:00:27.440Z',
          updatedAt: '2025-02-10T13:00:27.440Z',
          deleted: false
        }
      ]
    }
  }

  return ApiDocsEndpoint(metadata)
}
