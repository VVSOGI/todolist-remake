import { createParamDecorator, ExecutionContext } from '@nestjs/common'
import { TypiaExceptionHandler } from 'src/common'
import { UpdateTodolistDto } from '../types'
import { UpdateTodolistValidator } from './validator'

export interface UpdateTodolistRequest {
  body: UpdateTodolistDto | any
}

export const ValidateUpdateTodolistDto = createParamDecorator((data: unknown, ctx: ExecutionContext) => {
  try {
    const request = ctx.switchToHttp().getRequest<UpdateTodolistRequest>()
    return new UpdateTodolistValidator(request).validate()
  } catch (err) {
    new TypiaExceptionHandler(err.response).handleValidationError()
  }
})
