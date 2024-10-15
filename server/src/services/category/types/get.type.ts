import { tags } from 'typia'

export interface GetCategoryDto {
  categoryId: string & tags.Format<'uuid'>
}
