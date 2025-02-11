import { applyDecorators } from '@nestjs/common'
import { ApiBody, ApiResponse } from '@nestjs/swagger'

export function SwaggerCreateTodolist() {
  return applyDecorators(
    ApiBody({
      schema: {
        type: 'object',
        properties: {
          title: {
            type: 'string',
            description: 'Write title that make you want todolist',
            example: 'create test todolist'
          },
          categoryId: {
            type: 'string',
            description: 'Write category id where create todolist',
            example: 'f144cc78-34d9-4d0a-9e95-48cf7102dce3'
          }
        }
      },
      description: `
## POST API for creating a category.
You must attach a title to the body as a required DTO.

### Success case [201 status code]

    {
        "id": "ea2a1198-9b29-4258-9021-409b81f57caf",
        "categoryId": "f144cc78-34d9-4d0a-9e95-48cf7102dce3",
        "title": "create test todolist",
        "checked": false,
        "order": 13,
        "createdAt": "2025-02-11T09:30:08.938Z",
        "updatedAt": "2025-02-11T09:30:08.938Z"
    }

### If you sent invalid type data [400 ERROR]

    {
        "message": "Received unexpected data 'title' [INVALID TYPE ERROR]",
        "error": "Bad Request",
        "statusCode": 400
    }

### If you sent not a uuid categoryId 

    {
        "message": "Received unmatched data 'categoryId' [INVALID UUID TYPE ERROR]",
        "error": "Bad Request",
        "statusCode": 400
    }

### If category that having categoryId not exist

    {
      "message": "Received unmatched data 'categoryId' [INVALID UUID TYPE ERROR]",
      "error": "Bad Request",
      "statusCode": 400
    }

### If you sent missing data [404 ERROR]

    {
        "message": "Received unexpected data 'title' [MISSING DATA ERROR]",
        "error": "Not Found",
        "statusCode": 404
    }

    {
        "message": "Received unexpected data 'categoryId' [MISSING DATA ERROR]",
        "error": "Not Found",
        "statusCode": 404
      }
`
    }),
    ApiResponse({
      status: 201,
      description: 'success'
    })
  )
}
