import { ApiDocsEndpoint, EndpointDecoratorMetadata } from 'src/common'

export const DocsCreateCategory = () => {
  const metadata: EndpointDecoratorMetadata<{
    body: 'title'
    response: 'id' | 'title' | 'createdAt' | 'updatedAt' | 'deleted'
  }> = {
    description: 'Create a new category',
    request: {
      body: {
        type: 'object',
        properties: {
          title: {
            type: 'string',
            description: '카테고리 제목'
          }
        },
        required: ['title']
      }
    },
    response: {
      type: 'object',
      properties: {
        id: {
          type: 'string',
          description: 'Created category ID'
        },
        title: {
          type: 'string',
          description: 'Created category title'
        },
        createdAt: {
          type: 'string',
          description: 'Created category createdAt'
        },
        updatedAt: {
          type: 'string',
          description: 'Created category updatedAt'
        },
        deleted: {
          type: 'boolean',
          description: 'Created category deleted'
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
