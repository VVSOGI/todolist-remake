import { applyDecorators } from '@nestjs/common'
import { ApiBody, ApiParam, ApiResponse } from '@nestjs/swagger'

export function SwaggerUpdateCategory() {
  return applyDecorators(
    ApiParam({
      name: 'categoryId',
      schema: {
        type: 'string',
        default: 'f144cc78-34d9-4d0a-9e95-48cf7102dce3'
      },
      description: `
## GET API for get a category by id.

### Success case [200 status code]

    {
      "id": "f144cc78-34d9-4d0a-9e95-48cf7102dce3",
      "title": "update title",
      "createdAt": "2024-12-17T08:44:48.925Z",
      "updatedAt": "2025-02-10T04:34:17.832Z",
      "deleted": false
    }

### If doesn't exist data [404 ERROR]

    {
      "message": "Received unmatched data 'categoryId' [INVALID UUID TYPE ERROR]",
      "error": "Bad Request",
      "statusCode": 400
    }

### If sent invalid data type [400 ERROR]

    {
      "message": "Received unmatched data 'categoryId' [INVALID UUID TYPE ERROR]",
      "error": "Bad Request",
      "statusCode": 400
    }

### If you sent invalid type data [400 ERROR]

    {
        "message": "Received unexpected data 'title' [INVALID TYPE ERROR]",
        "error": "Bad Request",
        "statusCode": 400
    }

### If you sent less than three characters [400 ERROR]

    {
        "message": "You must enter at least three characters. [WRONG DATA SENT ERROR]",
        "error": "Bad Request",
        "statusCode": 400
    }

### If you sent missing data [404 ERROR]

    {
        "message": "Received unexpected data 'title' [MISSING DATA ERROR]",
        "error": "Not Found",
        "statusCode": 404
    }
`
    }),
    ApiBody({
      schema: {
        type: 'object',
        properties: {
          title: {
            type: 'string',
            description: 'Write contents to target that update category you want',
            example: 'update title'
          }
        }
      }
    }),
    ApiResponse({
      status: 200,
      description: 'success'
    })
  )
}
