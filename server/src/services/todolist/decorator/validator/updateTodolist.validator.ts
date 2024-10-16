import typia from 'typia'
import { UpdateTodolistDto } from '../../types'
import { BadRequestException } from '@nestjs/common'
import { UpdateTodolistRequest } from '..'

/**
 * @description
 * UpdateTodolist의 typia validate 미들웨어
 * - request의 body가 UpdateTodolistDto와 일치하지 않으면 에러를 뱉음.
 */
export class UpdateTodolistValidator {
  private body: UpdateTodolistDto

  constructor(request: UpdateTodolistRequest) {
    this.body = request.body
  }

  validate(): UpdateTodolistDto | never {
    const checkValidate: typia.IValidation<UpdateTodolistDto> = typia.validateEquals<UpdateTodolistDto>(this.body)
    const { success, errors } = checkValidate

    if (success) {
      return this.body
    }

    throw new BadRequestException(errors[0])
  }
}
