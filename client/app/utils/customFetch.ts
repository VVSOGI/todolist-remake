export type EndPoint = string
export type HTTPMethods = 'GET' | 'POST' | 'PATCH' | 'DELETE'
export const BACKEND_URL = process.env.BACKEND_SERVER_URL

interface CustomRequestInit extends RequestInit {
  method: HTTPMethods
}

export async function fetchToWebServer<T>(endpoint: EndPoint, init?: CustomRequestInit | undefined): Promise<T> {
  const response = await fetch(`http://localhost:3001${endpoint}`, init)

  if (response.ok) {
    return response.json()
  }

  const { message, statusCode } = await response.json()

  throw new Error(
    JSON.stringify({
      message,
      statusCode
    })
  )
}

export async function fetchToBackend<T>(endpoint: EndPoint, init?: CustomRequestInit | undefined): Promise<T> {
  const response = await fetch(`${BACKEND_URL}${endpoint}`, init)

  if (response.ok) {
    return response.json()
  }

  const error = await response.json()
  throw new Error(error.message || 'Unknown error', { cause: { statusCode: error.statusCode || response.status } })
}
