import { ApiDocsEndpoint, EndpointDecoratorMetadata } from 'doke'

export const DocsUpdateTodolist = () => {
  const metadata: EndpointDecoratorMetadata<{
    body: 'id' | 'title' | 'checked'
    response: 'id' | 'categoryId' | 'title' | 'checked' | 'order' | 'createdAt' | 'updatedAt'
  }> = {
    description: 'Update a todolist you want',
    request: {
      body: {
        properties: {
          id: {
            type: 'string',
            description: 'Target todolist id that you want update',
            required: true
          },
          title: {
            type: 'string',
            description: 'The title of the todolist you want to update',
            required: false
          },
          checked: {
            type: 'boolean',
            description: 'Update the completion status of the todolist you want to update property',
            required: false
          }
        }
      }
    },
    response: {
      properties: {
        id: {
          type: 'string',
          description: 'target category ID where placed todolist'
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
        id: 'd55232cb-c8df-465e-8ea7-ce11e884dc2e',
        categoryId: 'f144cc78-34d9-4d0a-9e95-48cf7102dce3',
        title: 'update title',
        checked: true,
        order: 2,
        createdAt: '2025-01-22T03:04:28.724Z',
        updatedAt: '2025-02-11T10:01:42.379Z'
      }
    }
  }

  return ApiDocsEndpoint(metadata)
}
