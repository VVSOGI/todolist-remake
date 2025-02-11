import { applyDecorators } from '@nestjs/common'
import { ApiResponse } from '@nestjs/swagger'

export function SwaggerGetTodolist() {
  return applyDecorators(
    ApiResponse({
      status: 200,
      description: 'Get all todolists'
    })
  )
}
