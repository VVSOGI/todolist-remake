import { NextResponse } from 'next/server'
import { fetchToBackend } from '@/app/utils'

export async function GET(req: Request) {
  const { data, status } = await fetchToBackend('/category', { method: 'GET', headers: req.headers })

  return NextResponse.json(data, { status })
}

export async function POST(req: Request) {
  const body = await req.json()

  const { data, status } = await fetchToBackend('/category', {
    method: 'POST',
    headers: req.headers,
    body: JSON.stringify(body)
  })

  return NextResponse.json(data, {
    status
  })
}
