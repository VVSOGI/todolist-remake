import { BadRequestException } from '@nestjs/common'
import { TypiaExceptionHandler } from 'src/common'
import { UpdateTodolistOrderValidator, UpdateTodolistValidator } from '../../todolist/decorator'
import { checkRequestValidate } from '../test.utils'

describe('Testing Update Todolist', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  describe('UpdateTodolistValidator test', () => {
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
    it('should return UpdateTodolistOrderDto[] when send right request', async () => {
      const request = {
        body: [
          {
            id: '1',
            order: 0
          }
        ]
      }
      const todolist = new UpdateTodolistOrderValidator(request).validate()
      expect(todolist[0].id).toBe('1')
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
