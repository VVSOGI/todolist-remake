import { ApiDocsEndpoint, EndpointDecoratorMetadata } from 'doke'

export const DocsGetCategory = () => {
  const metadata: EndpointDecoratorMetadata<{
    query: 'deleted'
    response: 'id' | 'title' | 'createdAt' | 'updatedAt' | 'deleted'
  }> = {
    description: `This endpoint retrieves a list of all categories in the system with optional filtering by deletion status.
  It accepts an optional "deleted" query parameter that allows filtering results to show only active categories, only deleted categories, or all categories.
  The response returns an array of category objects, each containing complete information including identifier, title, timestamps, and deletion status.
  This endpoint is ideal for populating category selection dropdowns, displaying category management interfaces, or generating reports on category usage.`,
    request: {
      query: {
        properties: {
          deleted: {
            type: 'boolean',
            description: `Get all category Based on the query.`,
            required: false
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
