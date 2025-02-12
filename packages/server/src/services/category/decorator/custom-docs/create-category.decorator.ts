import { ApiDocsEndpoint, EndpointDecoratorMetadata } from 'src/common'

export const DocsCreateCategory = () => {
  const metadata: EndpointDecoratorMetadata = {
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
      type: 'DefaultCategoryResponseType',
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
        }
      },
      example: {
        id: 'uuid-example',
        title: '새로운 카테고리',
        createdAt: '2024-02-12T00:00:00.000Z',
        updatedAt: '2024-02-12T00:00:00.000Z'
      }
    }
  }

  return ApiDocsEndpoint(metadata)
}
