import typia from 'typia'
import { GetRequest } from '..'
import { CreateCategoryDto, GetCategoryDto } from '../../types'
import { BadRequestException } from '@nestjs/common'

/**
 * @description
 * 의 typia validate 미들웨어
 * - request의 body가 Dto와 일치하지 않으면 에러를 뱉음.
 */
export class GetIdParamsValidator {
  private params: GetCategoryDto

  constructor(request: GetRequest) {
    this.params = request.params
  }

  validate(): any {
    const checkValidate: typia.IValidation<GetCategoryDto> = typia.validateEquals<GetCategoryDto>({ categoryId: this.params.categoryId })
    const { success, errors } = checkValidate

    if (success) {
      return this.params
    }

    throw new BadRequestException(errors[0])
  }
}
