import { ApiDocsEndpoint, EndpointDecoratorMetadata } from 'doke'

export const DocsGetTodolist = () => {
  const metadata: EndpointDecoratorMetadata<{
    response: 'id' | 'categoryId' | 'title' | 'checked' | 'order' | 'createdAt' | 'updatedAt'
  }> = {
    description: `This endpoint retrieves all todolist items across all categories in the system.
  It returns a comprehensive array of todolist objects containing complete details for each item.
  Each todolist object includes its unique identifier, associated category, title, completion status, order position, and timestamp information.
  This endpoint is useful for global views, dashboard displays, or administrative interfaces that need to show all todolist items regardless of category.`,
    request: {},
    response: {
      properties: {
        id: {
          type: 'string',
          description: 'Created category ID'
        },
        categoryId: {
          type: 'string',
          description: 'The location category ID'
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
      example: [
        {
          id: 'ea2a1198-9b29-4258-9021-409b81f57caf',
          categoryId: 'f144cc78-34d9-4d0a-9e95-48cf7102dce3',
          title: 'create test todolist',
          checked: false,
          order: 1,
          createdAt: '2025-02-11T09:30:08.938Z',
          updatedAt: '2025-02-11T09:30:08.938Z'
        },
        {
          id: '252a1198-9b29-4258-9021-409b81f57caf',
          categoryId: 'f144cc78-34d9-4d0a-9e95-48cf7102dce3',
          title: 'create test todolist',
          checked: false,
          order: 2,
          createdAt: '2025-02-11T09:30:08.938Z',
          updatedAt: '2025-02-11T09:30:08.938Z'
        },
        {
          id: '132a1198-9b29-4258-9021-409b81f57caf',
          categoryId: 'f144cc78-34d9-4d0a-9e95-48cf7102dce3',
          title: 'create test todolist',
          checked: false,
          order: 3,
          createdAt: '2025-02-11T09:30:08.938Z',
          updatedAt: '2025-02-11T09:30:08.938Z'
        }
      ]
    }
  }

  return ApiDocsEndpoint(metadata)
}
