import typia from 'typia'
import { CreateTodolistValidator } from '../../todolist/decorator'
import { BadRequestException, NotFoundException } from '@nestjs/common'
import { checkRequestValidate } from '../test.utils'
import { TypiaExceptionHandler } from 'src/common'
import { CreateTodolistDto } from 'src/services/todolist/types'

describe('Testing Create Todolist', () => {
  describe('CreateTodolistValidator test', () => {
    it('should return CreateTodolistDto to controller', async () => {
      const request = {
        body: {
          title: 'test title',
          categoryId: '1'
        }
      }

      const result = new CreateTodolistValidator(request).validate()
      expect(typia.equals<CreateTodolistDto>(result)).toBe(true)
    })

    it('should throw error when sent wrong data', async () => {
      const request = {
        body: {
          title: 'test title',
          categoryId: '1',
          hack: 'hack'
        }
      }

      const typiaError = await checkRequestValidate(CreateTodolistValidator, request)

      try {
        new TypiaExceptionHandler(typiaError.response).handleValidationError()
      } catch (err) {
        expect(err).toBeInstanceOf(BadRequestException)
        expect(err.response.message).toBe(`Received unexpected data 'hack' [WRONG DATA SENT ERROR]`)
      }
    })

    it('should throw error when forget sent essential data', async () => {
      const request = {
        body: {
          title: 'test title',
          description: 'test description'
        }
      }

      const typiaError = await checkRequestValidate(CreateTodolistValidator, request)

      try {
        new TypiaExceptionHandler(typiaError.response).handleValidationError()
      } catch (err) {
        expect(err).toBeInstanceOf(NotFoundException)
        expect(err.response.message).toBe(`Received unexpected data 'categoryId' [MISSING DATA ERROR]`)
      }
    })
  })
})
