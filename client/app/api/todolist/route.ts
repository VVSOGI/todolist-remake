import { NextResponse } from 'next/server'
import { fetchToBackend } from '@/app/utils'

export async function POST(req: Request) {
  const body = await req.json()

  const data = await fetchToBackend(`/todolist`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body),
    cache: 'no-cache'
  })

  return NextResponse.json(data, {
    status: 201
  })
}

export async function PATCH(req: Request) {
  const body = await req.json()

  const data = await fetchToBackend(`/todolist`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body),
    cache: 'no-cache'
  })

  return NextResponse.json(data, {
    status: 200
  })
}
