import { applyDecorators } from '@nestjs/common'
import { ApiParam, ApiResponse } from '@nestjs/swagger'

export function SwaggerGetCategoryById() {
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
      "title": "Testing update",
      "createdAt": "2024-12-17T08:44:48.925Z",
      "updatedAt": "2025-02-02T23:46:54.263Z",
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
`
    }),
    ApiResponse({
      status: 200,
      description: 'success'
    })
  )
}
