import { applyDecorators } from '@nestjs/common'
import { ApiBody, ApiResponse } from '@nestjs/swagger'

export function SwaggerUpdateTodolistOrder() {
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
          order: {
            type: 'number',
            description: `Properties that update that a Todo's order`,
            default: 1
          }
        }
      },
      description: `
## GET API for get a category by id.

### Success case [200 status code]

  {
    "data": "success"
  }


### If sent invalid data type [400 ERROR]

    {
        "message": "Received unmatched data 'id' [INVALID UUID TYPE ERROR]",
        "error": "Bad Request",
        "statusCode": 400
    }

    {
        "message": "Received unexpected data 'order' [INVALID TYPE ERROR]",
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
        "message": "Received unexpected data 'order' [MISSING DATA ERROR]",
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
