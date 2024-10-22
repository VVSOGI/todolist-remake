import { createParamDecorator, ExecutionContext } from '@nestjs/common'
import { TypiaExceptionHandler } from 'src/common'
import { CategoryIdParamsValidator } from './validator'

export interface Request {
  params: {
    categoryId: string
  }
}

export const ValidateIdParamDTO = createParamDecorator((data: unknown, ctx: ExecutionContext) => {
  try {
    const request = ctx.switchToHttp().getRequest<Request>()
    return new CategoryIdParamsValidator(request).validate()
  } catch (err) {
    new TypiaExceptionHandler(err.response).handleValidationError()
  }
})
