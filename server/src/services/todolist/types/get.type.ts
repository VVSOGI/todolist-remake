export type GetTodolistDto = 'true' | 'false' | undefined

export interface GetTodolistDtoFilters {
  categoryId: string
  checked: boolean
}
