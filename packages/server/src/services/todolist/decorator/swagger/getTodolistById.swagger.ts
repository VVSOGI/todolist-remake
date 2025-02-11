import { applyDecorators } from '@nestjs/common'
import { ApiParam, ApiResponse } from '@nestjs/swagger'

export function SwaggerGetTodolistById() {
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
        "data": [
            {
                "id": "8e6c7ba2-f21f-48ba-8cb7-728f9ba62769",
                "categoryId": "f144cc78-34d9-4d0a-9e95-48cf7102dce3",
                "title": "YEAH!!!!!!!!!",
                "checked": false,
                "order": 1,
                "createdAt": "2025-01-22T03:04:32.082Z",
                "updatedAt": "2025-02-02T23:46:22.079Z"
            },
            {
                "id": "d55232cb-c8df-465e-8ea7-ce11e884dc2e",
                "categoryId": "f144cc78-34d9-4d0a-9e95-48cf7102dce3",
                "title": "Something goooood",
                "checked": false,
                "order": 2,
                "createdAt": "2025-01-22T03:04:28.724Z",
                "updatedAt": "2025-01-28T00:32:51.424Z"
            },
            {
                "id": "e78a82ac-1325-401f-b387-3cd8ae7f366b",
                "categoryId": "f144cc78-34d9-4d0a-9e95-48cf7102dce3",
                "title": "aoaoaoaoa",
                "checked": false,
                "order": 3,
                "createdAt": "2025-01-23T23:31:04.342Z",
                "updatedAt": "2025-01-28T00:32:51.397Z"
            }...
        ],
        "total": 6
    }

### If doesn't exist data [404 ERROR]

    {
        "message": "The category you're looking for doesn't exist.",
        "error": "Not Found",
        "statusCode": 404
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
