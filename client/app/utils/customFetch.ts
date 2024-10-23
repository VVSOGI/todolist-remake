export type EndPoint = string
export type HTTPMethods = 'GET' | 'POST' | 'PATCH' | 'DELETE'
export const BACKEND_SERVER_URL = process.env.BACKEND_SERVER_URL
export const WEB_SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL

interface CustomRequestInit extends RequestInit {
  method: HTTPMethods
}

export async function fetchToWebServer<T>(endpoint: EndPoint, init?: CustomRequestInit | undefined): Promise<T> {
  const response = await fetch(`${WEB_SERVER_URL}${endpoint}`, init)

  if (response.ok) {
    return response.json()
  }

  const { message } = await response.json()

  throw new Error(
    JSON.stringify({
      message,
      status: response.status
    })
  )
}

export async function fetchToBackend<T>(
  endpoint: EndPoint,
  init?: CustomRequestInit | undefined
): Promise<{ data: Promise<T> | { message: string }; status: number }> {
  try {
    const response = await fetch(`${BACKEND_SERVER_URL}${endpoint}`, init)

    if (response.ok) {
      const data = await response.json()
      return { data, status: response.status }
    }

    const { message, statusCode } = await response.json()

    const error = {
      data: { message: message || 'Unknown Error' },
      status: statusCode || response.status
    }

    return error
  } catch (err: any) {
    return { data: { message: err.message }, status: 500 }
  }
}
