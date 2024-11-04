import { fetchToBackend } from '@/app/utils'
import { NextResponse } from 'next/server'

export async function PATCH(req: Request) {
  const body = await req.json()

  const { data, status } = await fetchToBackend(`/todolist/order`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body),
    cache: 'no-cache'
  })

  return NextResponse.json(data, {
    status
  })
}
