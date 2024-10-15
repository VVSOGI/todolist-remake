import { UUID } from '@/app/types'
import { NextResponse } from 'next/server'

interface Params {
  params: {
    categoryId: UUID
  }
}

export async function GET(req: Request, { params: { categoryId } }: Params) {
  const response = await fetch(`${process.env.BACKEND_SERVER_URL}/todolist/${categoryId}`, {
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
