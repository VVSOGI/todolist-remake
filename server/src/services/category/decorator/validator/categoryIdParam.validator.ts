import typia from 'typia'
import { BadRequestException } from '@nestjs/common'
import { CustomIValidation } from 'src/common'
import { CategoryIdParamsDto } from '../../types'
import { Request } from '..'

export class CategoryIdParamsValidator {
  private params: CategoryIdParamsDto

  constructor(request: Request) {
    this.params = request.params
  }

  validate(): any {
    const checkValidate: CustomIValidation<CategoryIdParamsDto> = typia.validateEquals<CategoryIdParamsDto>({
      categoryId: this.params.categoryId
    })
    const { success, errors } = checkValidate

    if (success) {
      return this.params
    }

    throw new BadRequestException(errors[0])
  }
}
