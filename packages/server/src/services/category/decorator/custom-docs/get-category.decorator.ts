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
      type: 'object',
      properties: {
        id: {
          type: 'string',
          description: '카테고리 ID'
        },
        title: {
          type: 'string',
          description: '카테고리 제목'
        },
        createdAt: {
          type: 'string',
          description: '생성 일시'
        },
        updatedAt: {
          type: 'string',
          description: '수정 일시'
        },
        deleted: {
          type: 'boolean',
          description: '삭제된 카테고리 분별'
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
