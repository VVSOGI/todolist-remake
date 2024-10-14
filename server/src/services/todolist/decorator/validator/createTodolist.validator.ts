import typia from 'typia'
import { CreateTodolistDto } from '../../types'
import { BadRequestException } from '@nestjs/common'
import { CreateTodolistRequest } from '..'

/**
 * @description
 * CreateCategory의 typia validate 미들웨어
 * - request의 body가 CreateTodolistDto와 일치하지 않으면 에러를 뱉음.
 */
export class CreateTodolistValidator {
  private body: CreateTodolistDto

  constructor(request: CreateTodolistRequest) {
    this.body = request.body
  }

  validate(): CreateTodolistDto | never {
    const checkValidate: typia.IValidation<CreateTodolistDto> = typia.validateEquals<CreateTodolistDto>(this.body)
    const { success, errors } = checkValidate

    if (success) {
      return this.body
    }

    throw new BadRequestException(errors[0])
  }
}
