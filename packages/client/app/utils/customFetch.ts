export type EndPoint = string
export type HTTPMethods = 'GET' | 'POST' | 'PATCH' | 'DELETE'

let serverUrl: string | undefined

if (process.env.NEXT_PUBLIC_ENVIRONMENT === 'local') {
  serverUrl = typeof window === 'undefined' ? process.env.NEXT_PUBLIC_BACKEND_URL : 'http://localhost:3000'
} else {
  serverUrl = process.env.NEXT_PUBLIC_BACKEND_URL
}

export const BACKEND_SERVER_URL = serverUrl

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
