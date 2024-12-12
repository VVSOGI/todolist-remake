import { NextRequest, NextResponse } from 'next/server'
import { fetchToBackend } from '@/app/utils'
import { UUID } from '@/app/types'

interface Params {
  params: {
    categoryId: UUID
  }
}

export async function GET(req: NextRequest, { params: { categoryId } }: Params) {
  const checked = req.nextUrl.searchParams.get('checked') || 'false'

  const { data, status } = await fetchToBackend(`/todolist/${categoryId}?checked=${checked}`, {
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
