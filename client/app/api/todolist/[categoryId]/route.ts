import { NextRequest, NextResponse } from 'next/server'
import { UUID } from '@/app/types'
import { fetchToBackend } from '@/app/utils'

interface Params {
  params: {
    categoryId: UUID
  }
}

export async function GET(req: NextRequest, { params: { categoryId } }: Params) {
  const checked = req.nextUrl.searchParams.get('checked') || 'false'
  const data = await fetchToBackend(`/todolist/${categoryId}?checked=${checked}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    cache: 'no-cache'
  })

  return NextResponse.json(data, {
    status: 200
  })
}
