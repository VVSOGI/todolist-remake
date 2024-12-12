import { NextResponse } from 'next/server'
import { fetchToBackend } from '@/app/utils'
import { UUID } from '@/app/types'

interface Params {
  params: {
    categoryId: UUID
  }
}
export async function GET(req: Request, { params: { categoryId } }: Params) {
  const { data, status } = await fetchToBackend(`/todolist/dates/${categoryId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    cache: 'no-cache'
  })

  return NextResponse.json(data, {
    status
  })
}
