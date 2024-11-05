import typia from 'typia'
import { BadRequestException } from '@nestjs/common'
import { CustomIValidation } from 'src/common'
import { UpdateTodolistRequest } from '..'
import { UpdateTodolistOrderDto } from '../../types'
import { Todolist } from 'src/entities'

export class UpdateTodolistOrderValidator {
  private body: Todolist[]

  constructor(request: UpdateTodolistRequest) {
    this.body = request.body
  }

  validate(): Todolist[] | never {
    for (let i = 0; i < this.body.length; i++) {
      const checkValidate: CustomIValidation<UpdateTodolistOrderDto> = typia.validateEquals<UpdateTodolistOrderDto>(this.body[i])
      const { errors } = checkValidate
      if (errors.length) {
        throw new BadRequestException(errors[0])
      }
    }

    return this.body
  }
}