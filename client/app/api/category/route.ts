import { NextResponse } from 'next/server'
import { fetchToBackend } from '@/app/utils'

export async function GET(req: Request) {
  try {
    const data = await fetchToBackend('/category', { method: 'GET', headers: req.headers })
    return NextResponse.json(data, { status: 200 })
  } catch (err: any) {
    return NextResponse.json(
      { message: err.message || 'Internal Server Error', statusCode: err.cause?.statusCode || 500 },
      { status: err.cause?.statusCode || 500 }
    )
  }
}

export async function POST(req: Request) {
  const body = await req.json()
  const data = await fetchToBackend('/category', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })

  return NextResponse.json(data, {
    status: 201
  })
}
