import { createParamDecorator, ExecutionContext } from '@nestjs/common'
import { TypiaExceptionHandler } from 'src/common'
import { UpdateCategoryValidator } from './validator'
import { UpdateCategoryDto } from '../types'

export interface UpdateRequest {
  body: UpdateCategoryDto | any
}

export const ValidateUpdateDTO = createParamDecorator((data: unknown, ctx: ExecutionContext) => {
  try {
    const request = ctx.switchToHttp().getRequest<UpdateRequest>()
    return new UpdateCategoryValidator(request).validate()
  } catch (err) {
    new TypiaExceptionHandler(err.response).handleValidationError()
  }
})
