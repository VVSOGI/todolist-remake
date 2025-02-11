import { applyDecorators } from '@nestjs/common'
import { ApiParam, ApiResponse } from '@nestjs/swagger'

export function SwaggerDeleteCategory() {
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
      "id": "a1b0b12f-a010-4a40-ae96-519d070a3a3a",
      "title": "Test title",
      "createdAt": "2025-02-10T12:29:24.504Z",
      "updatedAt": "2025-02-11T00:15:24.243Z",
      "deleted": true
    }

### If doesn't exist data [404 ERROR]

    {
      "message": "Received unmatched data 'categoryId' [INVALID UUID TYPE ERROR]",
      "error": "Bad Request",
      "statusCode": 400
    }

### If sent invalid data type like not uuid [400 ERROR]

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
