import { ApiDocsEndpoint, EndpointDecoratorMetadata } from 'src/common'

export const DocsCreateTodolist = () => {
  const metadata: EndpointDecoratorMetadata<{
    body: 'title' | 'categoryId'
    response: 'id' | 'categoryId' | 'title' | 'checked' | 'order' | 'createdAt' | 'updatedAt'
  }> = {
    description: 'Create a new todolist',
    request: {
      body: {
        type: 'object',
        properties: {
          title: {
            type: 'string',
            description: 'Write title of todolist create you want'
          },
          categoryId: {
            type: 'string',
            description: 'The location category ID for which you want to create a todolist'
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
        categoryId: {
          type: 'string',
          description: 'The location category ID for which you want to create a todolist'
        },
        title: {
          type: 'string',
          description: 'Created todolist title'
        },
        checked: {
          type: 'boolean',
          description: 'Check todolist completion status'
        },
        createdAt: {
          type: 'string',
          description: 'Created todolist createdAt'
        },
        updatedAt: {
          type: 'string',
          description: 'Created todolist updatedAt'
        },
        order: {
          type: 'number',
          description: `The order of the generated todolists`
        }
      },
      example: {
        id: 'ea2a1198-9b29-4258-9021-409b81f57caf',
        categoryId: 'f144cc78-34d9-4d0a-9e95-48cf7102dce3',
        title: 'create test todolist',
        checked: false,
        order: 13,
        createdAt: '2025-02-11T09:30:08.938Z',
        updatedAt: '2025-02-11T09:30:08.938Z'
      }
    }
  }

  return ApiDocsEndpoint(metadata)
}
