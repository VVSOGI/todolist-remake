import { BadRequestException, NotFoundException } from '@nestjs/common'
import { CategoryIdParamsValidator, UpdateCategoryValidator } from '../../category/decorator'
import { checkRequestValidate } from '../test.utils'
import { TypiaExceptionHandler } from 'src/common'

describe('Testing Update Category', () => {
  describe(`function updateCategory(@ValidateIdParamDTO() idParamsDto: CategoryIdParamsDto, @ValidateUpdateDTO() updateCategoryDto: UpdateCategoryDto) {...}`, () => {
    it('should throw error when sent wrong data in body validator', async () => {
      const request = {
        body: {
          title: 'test title',
          hack: 'hack'
        }
      }

      const typiaError = await checkRequestValidate(UpdateCategoryValidator, request)

      try {
        new TypiaExceptionHandler(typiaError.response).handleValidationError()
      } catch (err) {
        expect(err).toBeInstanceOf(BadRequestException)
        expect(err.response.message).toBe(`Received unexpected data 'hack' [WRONG DATA SENT ERROR]`)
      }
    })

    it('should throw error when forget sent essential data in body validator', async () => {
      const request = {
        body: {}
      }

      const typiaError = await checkRequestValidate(UpdateCategoryValidator, request)

      try {
        new TypiaExceptionHandler(typiaError.response).handleValidationError()
      } catch (err) {
        expect(err).toBeInstanceOf(NotFoundException)
        expect(err.response.message).toBe(`Received unexpected data 'title' [MISSING DATA ERROR]`)
      }
    })

    it('should throw error when sent wrong data in params validator', async () => {
      const request = {
        params: {
          categoryId: '123'
        }
      }

      const typiaError = await checkRequestValidate(CategoryIdParamsValidator, request)

      try {
        new TypiaExceptionHandler(typiaError.response).handleValidationError()
      } catch (err) {
        expect(err).toBeInstanceOf(BadRequestException)
        expect(err.response.message).toBe(`Received unmatched data 'categoryId' [INVALID UUID TYPE ERROR]`)
      }
    })

    it('should throw error when forget sent essential data in params validator', async () => {
      const request = {
        params: {}
      }

      const typiaError = await checkRequestValidate(CategoryIdParamsValidator, request)

      try {
        new TypiaExceptionHandler(typiaError.response).handleValidationError()
      } catch (err) {
        expect(err).toBeInstanceOf(NotFoundException)
        expect(err.response.message).toBe(`Received unexpected data 'categoryId' [MISSING DATA ERROR]`)
      }
    })
  })
})
