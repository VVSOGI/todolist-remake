type EndPoint = string
type HTTPMethods = 'GET' | 'POST' | 'PATCH' | 'DELETE'

interface CustomRequestInit extends RequestInit {
  method: HTTPMethods
}

interface CustomResponse<T> extends Response {
  json: () => Promise<T>
}

export async function customFetch<T>(endpoint: EndPoint, init?: CustomRequestInit | undefined): Promise<CustomResponse<T>> {
  return fetch(`http://localhost:3001/${endpoint}`, init)
}
