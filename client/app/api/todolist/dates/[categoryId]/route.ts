import { NextResponse } from 'next/server'
import { UUID } from '@/app/types'
import { fetchToBackend } from '@/app/utils'

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
