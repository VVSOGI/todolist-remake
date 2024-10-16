type EndPoint = string
type HTTPMethods = 'GET' | 'POST' | 'PATCH' | 'DELETE'

interface CustomRequestInit extends RequestInit {
  method: HTTPMethods
}

interface CustomResponse<T> extends Response {
  json: () => Promise<T>
}

export async function customFetch<T>(endpoint: EndPoint, init?: CustomRequestInit | undefined): Promise<CustomResponse<T>> {
  const response = await fetch(`http://localhost:3001/${endpoint}`, init)

  if (response.ok) {
    return response
  }

  const { message, status } = await response.json()

  throw new Error(
    JSON.stringify({
      message,
      status
    })
  )
}
