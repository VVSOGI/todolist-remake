import { NextResponse } from 'next/server'

export async function GET(req: Request) {
  const response = await fetch(`${process.env.BACKEND_SERVER_URL}/category`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    cache: 'no-cache'
  })

  const data = await response.json()

  return NextResponse.json(data, {
    status: 200
  })
}

export async function POST(req: Request) {
  const body = await req.json()

  const response = await fetch(`${process.env.BACKEND_SERVER_URL}/category`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })

  const data = await response.json()

  return NextResponse.json(data, {
    status: data.statusCode
  })
}
