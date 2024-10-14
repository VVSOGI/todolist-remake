import typia from 'typia'

export interface TypiaAssertError {
  response: typia.IValidation.IError
  status: number
  options: any
}
