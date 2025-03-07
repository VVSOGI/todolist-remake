import { ApiDocsEndpoint, EndpointDecoratorMetadata } from 'doke'

export const DocsCreateTodolist = () => {
  const metadata: EndpointDecoratorMetadata<{
    body: 'title' | 'categoryId'
    response: 'id' | 'categoryId' | 'title' | 'checked' | 'order' | 'createdAt' | 'updatedAt'
  }> = {
    description: `
      This endpoint creates a new todolist item within a specified category. 
      Users must provide a title and a valid categoryId as required parameters. 
      The newly created todolist will be automatically assigned an order value within its category, a unique ID, 
      and will be set to unchecked (incomplete) status by default while timestamps for creation and updates are recorded.
    `,
    request: {
      body: {
        properties: {
          title: {
            type: 'string',
            description: 'Write title of todolist create you want',
            required: true
          },
          categoryId: {
            type: 'string',
            description: 'The location category ID for which you want to create a todolist',
            required: true
          }
        }
      }
    },
    response: {
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
