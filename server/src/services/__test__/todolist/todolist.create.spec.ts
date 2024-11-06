import { CreateTodolistValidator } from '../../todolist/decorator'
import { BadRequestException, NotFoundException } from '@nestjs/common'
import { checkRequestValidate } from '../test.utils'
import { TypiaExceptionHandler } from 'src/common'

describe('Testing Create Todolist', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  describe('function createTodolist(@ValidateCreateTodolistDTO() createTodolistDto: CreateTodolistDto) {...}', () => {
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
