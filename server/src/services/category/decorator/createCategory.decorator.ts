import typia from 'typia';
import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { TypiaExceptionHandler } from 'src/common';
import { CreateCategoryValidator } from './validator';
import { CreateCategoryDto } from '../types';

export interface CreateRequest {
  body: CreateCategoryDto | any;
}

export const ValidateCreateDTO = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest<CreateRequest>();
    const result = new CreateCategoryValidator(request).validate();

    if (typia.is<typia.IValidation.IError>(result)) {
      const exceptionHandler = new TypiaExceptionHandler(result);
      return exceptionHandler.handleValidationError();
    }

    return result;
  },
);
