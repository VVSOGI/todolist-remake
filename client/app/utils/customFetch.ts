export type EndPoint = string
export type HTTPMethods = 'GET' | 'POST' | 'PATCH' | 'DELETE'

const UrlMap = {
  test: 'http://localhost:3000',
  development: process.env.NEXT_PUBLIC_BACKEND_DEVELOPMENT,
  production: process.env.NEXT_PUBLIC_BACKEND_PRODUCTION
}

const environment = process.env.RUN_ENVIRONMENT as 'test' | 'development' | 'production'
export const BACKEND_SERVER_URL = UrlMap[environment]

interface CustomRequestInit extends RequestInit {
  method: HTTPMethods
}

export async function fetchToBackend<T>(
  endpoint: EndPoint,
  init?: CustomRequestInit | undefined
): Promise<{ response: T; status: number }> {
  const response = await fetch(`${BACKEND_SERVER_URL}${endpoint}`, init)

  if (response.ok) {
    const data = await response.json()
    return { response: data, status: response.status }
  }

  const { message, statusCode } = await response.json()

  const error = {
    message: message || 'Unknown Error'
  }

  throw new Error(JSON.stringify({ response: error, status: statusCode || response.status }))
}
