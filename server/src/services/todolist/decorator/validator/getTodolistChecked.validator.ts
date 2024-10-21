import typia from 'typia'
import { GetTodolistDto } from '../../types'
import { BadRequestException } from '@nestjs/common'
import { GetTodolistRequest } from '..'

/**
 * @description
 * GetTodolist의 typia validate 미들웨어
 */
export class GetTodolistCheckedValidator {
  private checked: GetTodolistDto

  constructor(request: GetTodolistRequest) {
    if (this.insertQueryButNoContents(request.query.checked)) {
      this.checked = ' ' as any
    } else {
      this.checked = request.query.checked
    }
  }

  private insertQueryButNoContents(checked: any) {
    if (checked === '') {
      return true
    }

    return false
  }

  validate(): GetTodolistDto | never {
    const checkValidate: typia.IValidation<GetTodolistDto> = typia.validateEquals<GetTodolistDto>(this.checked)
    const { success, errors } = checkValidate

    if (success) {
      return this.checked
    }

    throw new BadRequestException(errors[0])
  }
}
