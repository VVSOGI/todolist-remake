import typia from 'typia'
import { BadRequestException, NotFoundException } from '@nestjs/common'
import { CreateCategoryValidator } from '../../category/decorator'
import { checkRequestValidate } from '../test.utils'
import { TypiaExceptionHandler } from 'src/common'
import { CreateCategoryDto } from 'src/services/category/types'

describe('Testing Create Category', () => {
  describe('CreateCategoryValidator test', () => {
    it('should return CreateCategoryDto to controller', async () => {
      const request = {
        body: {
          title: 'test title'
        }
      }

      const result = new CreateCategoryValidator(request).validate()
      expect(typia.equals<CreateCategoryDto>(result)).toBe(true)
    })

    it('should throw error when sent wrong data', async () => {
      const request = {
        body: {
          title: 'test title',
          hack: 'hack'
        }
      }

      const typiaError = await checkRequestValidate(CreateCategoryValidator, request)
      try {
        new TypiaExceptionHandler(typiaError.response).handleValidationError()
      } catch (err) {
        expect(err).toBeInstanceOf(BadRequestException)
        expect(err.response.message).toBe(`Received unexpected data 'hack' [WRONG DATA SENT ERROR]`)
      }
    })

    it('should throw error when forget sent essential data', async () => {
      const request = {
        body: {}
      }

      const typiaError = await checkRequestValidate(CreateCategoryValidator, request)
      try {
        new TypiaExceptionHandler(typiaError.response).handleValidationError()
      } catch (err) {
        expect(err).toBeInstanceOf(NotFoundException)
        expect(err.response.message).toBe(`Received unexpected data 'title' [MISSING DATA ERROR]`)
      }
    })
  })
})
