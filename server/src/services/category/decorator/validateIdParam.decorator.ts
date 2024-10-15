import { createParamDecorator, ExecutionContext } from '@nestjs/common'
import { TypiaExceptionHandler } from 'src/common'
import { GetIdParamsValidator } from './validator'

export interface GetRequest {
  params: {
    categoryId: string
  }
}

export const ValidateIdParamDTO = createParamDecorator((data: unknown, ctx: ExecutionContext) => {
  try {
    const request = ctx.switchToHttp().getRequest<GetRequest>()
    return new GetIdParamsValidator(request).validate()
  } catch (err) {
    new TypiaExceptionHandler(err.response).handleValidationError()
  }
})
