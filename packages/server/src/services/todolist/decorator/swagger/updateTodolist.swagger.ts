import { applyDecorators } from '@nestjs/common'
import { ApiBody, ApiResponse } from '@nestjs/swagger'

export function SwaggerUpdateTodolist() {
  return applyDecorators(
    ApiBody({
      schema: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            description: `Target todo's Id`,
            example: 'd55232cb-c8df-465e-8ea7-ce11e884dc2e'
          },
          title: {
            type: 'string',
            description: 'Write contents to target that update category you want',
            example: 'update title'
          },
          checked: {
            type: 'boolean',
            description: `Properties that confirm that a Todo is complete`,
            default: true
          }
        }
      },
      description: `
## GET API for get a category by id.

### Success case [200 status code]

    {
        "id": "d55232cb-c8df-465e-8ea7-ce11e884dc2e",
        "categoryId": "f144cc78-34d9-4d0a-9e95-48cf7102dce3",
        "title": "update title",
        "checked": true,
        "order": 2,
        "createdAt": "2025-01-22T03:04:28.724Z",
        "updatedAt": "2025-02-11T10:01:42.379Z"
    }

### If sent invalid data type [400 ERROR]

    {
        "message": "Received unmatched data 'id' [INVALID UUID TYPE ERROR]",
        "error": "Bad Request",
        "statusCode": 400
    }

    {
        "message": "Received unexpected data 'title' [INVALID TYPE ERROR]",
        "error": "Bad Request",
        "statusCode": 400
    }

    {
        "message": "Received unexpected data 'checked' [INVALID TYPE ERROR]",
        "error": "Bad Request",
        "statusCode": 400
    }

### If doesn't exist properties [404 ERROR]

    {
        "message": "Received unexpected data 'id' [MISSING DATA ERROR]",
        "error": "Not Found",
        "statusCode": 404
    }

    {
        "message": "Received unexpected data 'title' [MISSING DATA ERROR]",
        "error": "Not Found",
        "statusCode": 404
    }

    {
        "message": "Received unexpected data 'checked' [MISSING DATA ERROR]",
        "error": "Not Found",
        "statusCode": 404
    }
`
    }),
    ApiResponse({
      status: 200,
      description: 'success'
    })
  )
}
