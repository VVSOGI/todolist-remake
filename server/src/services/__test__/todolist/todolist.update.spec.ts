import typia from 'typia'
import { BadRequestException } from '@nestjs/common'
import { TypiaExceptionHandler } from 'src/common'
import { UpdateTodolistOrderValidator, UpdateTodolistValidator } from '../../todolist/decorator'
import { checkRequestValidate } from '../test.utils'
import { UpdateTodolistDto, UpdateTodolistOrderDto } from 'src/services/todolist/types'

describe('Testing Update Todolist', () => {
  describe('UpdateTodolistValidator test', () => {
    it('should return UpdateTodolistDto to controller', async () => {
      const request = {
        body: {
          id: '1',
          title: 'test title',
          checked: true
        }
      }

      const result = new UpdateTodolistValidator(request).validate()
      expect(typia.equals<UpdateTodolistDto>(result)).toBe(true)
    })

    it('should throw error when sent wrong data', async () => {
      const request = {
        body: {
          id: '1',
          title: 'test title',
          checked: false,
          hack: 'hack'
        }
      }

      const typiaError = await checkRequestValidate(UpdateTodolistValidator, request)

      try {
        new TypiaExceptionHandler(typiaError.response).handleValidationError()
      } catch (err) {
        expect(err).toBeInstanceOf(BadRequestException)
        expect(err.response.message).toBe(`Received unexpected data 'hack' [WRONG DATA SENT ERROR]`)
      }
    })
  })

  describe('UpdateTodolistOrderValidator test', () => {
    it('should return UpdateTodolistOrderDto to controller', async () => {
      const request = {
        body: [
          {
            id: '1',
            order: 0
          }
        ]
      }

      const result = new UpdateTodolistOrderValidator(request).validate()
      expect(typia.equals<UpdateTodolistOrderDto[]>(result)).toBe(true)
    })

    it('should throw error when sent wrong data', async () => {
      const request = {
        body: [
          {
            id: '1',
            order: 0,
            hack: ''
          }
        ]
      }

      const typiaError = await checkRequestValidate(UpdateTodolistOrderValidator, request)

      try {
        new TypiaExceptionHandler(typiaError.response).handleValidationError()
      } catch (err) {
        expect(err).toBeInstanceOf(BadRequestException)
        expect(err.response.message).toBe(`Received unexpected data 'hack' [WRONG DATA SENT ERROR]`)
      }
    })
  })
})
