import typia from 'typia'
import { BadRequestException } from '@nestjs/common'
import { CustomIValidation } from 'src/common'
import { CreateTodolistDto } from '../../types'
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
    const checkValidate: CustomIValidation<CreateTodolistDto> = typia.validateEquals<CreateTodolistDto>(this.body)
    const { success, errors } = checkValidate

    if (success) {
      return this.body
    }

    throw new BadRequestException(errors[0])
  }
}
