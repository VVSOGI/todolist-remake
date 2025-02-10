import { applyDecorators } from '@nestjs/common'
import { ApiBody, ApiProperty } from '@nestjs/swagger'

class CreateCategory {
  @ApiProperty({
    example: `Test title`,
    description: `Decide on a title for the category you want to create`
  })
  title: string
  description: string
}

export function SwaggerCreateCategory() {
  return applyDecorators(
    ApiBody({
      type: CreateCategory,
      description: `
## POST API for creating a category.
You must attach a title to the body as a required DTO.

## If you sent invalid type data [400 ERROR]
    POST 
        {
            title: 1000,
        }

    Response
        {
            "message": "Received unexpected data 'title' [INVALID TYPE ERROR]",
            "error": "Bad Request",
            "statusCode": 400
        }

## If you sent less than three characters [400 ERROR]
    POST 
        {
            title: "",
        }

    Response
        {
            "message": "You must enter at least three characters. [WRONG DATA SENT ERROR]",
            "error": "Bad Request",
            "statusCode": 400
        }

## If you sent missing data [404 ERROR]
    POST 
        { NOTHING }

    Response
        {
            "message": "Received unexpected data 'title' [MISSING DATA ERROR]",
            "error": "Not Found",
            "statusCode": 404
        }

        
      `
    })
  )
}
