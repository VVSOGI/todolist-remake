import typia from 'typia'
import { CreateRequest } from '..'
import { CreateCategoryDto } from '../../types'
import { BadRequestException } from '@nestjs/common'

/**
 * @description
 * CreateCategory의 typia validate 미들웨어
 * - request의 body가 CreateCategoryDto와 일치하지 않으면 에러를 뱉음.
 */
export class CreateCategoryValidator {
  private body: CreateCategoryDto

  constructor(request: CreateRequest) {
    this.body = request.body
  }

  validate(): CreateCategoryDto | never {
    const checkValidate: typia.IValidation<CreateCategoryDto> = typia.validateEquals<CreateCategoryDto>(this.body)
    const { success, errors } = checkValidate

    if (success) {
      return this.body
    }

    throw new BadRequestException(errors[0])
  }
}
