import { applyDecorators } from '@nestjs/common'
import { ApiQuery, ApiResponse } from '@nestjs/swagger'

export function SwaggerGetCategory() {
  return applyDecorators(
    ApiQuery({
      name: 'deleted',
      schema: {
        type: 'boolean',
        default: false
      },
      description: `
## GET API get all category Based on the query.
if you don't enter a query, it will automatically request false.

### Success case [200 status code]

    {
        "data": [
            {
                "id": "16874008-8915-4d53-9239-3913f7ee2089",
                "title": "Test title",
                "createdAt": "2025-02-10T13:00:27.440Z",
                "updatedAt": "2025-02-10T13:00:27.440Z",
                "deleted": false
            },
            {
                "id": "a1b0b12f-a010-4a40-ae96-519d070a3a3a",
                "title": "Test title",
                "createdAt": "2025-02-10T12:29:24.504Z",
                "updatedAt": "2025-02-10T12:29:24.504Z",
                "deleted": false
            } ...
        ],
        "total": n
    }
`
    }),
    ApiResponse({
      status: 200,
      description: 'success'
    })
  )
}
