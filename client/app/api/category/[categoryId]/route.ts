import { NextResponse } from 'next/server'
import { UUID } from '@/app/types'
import { fetchToBackend } from '@/app/utils'

interface Params {
  params: {
    categoryId: UUID
  }
}

export async function GET(req: Request, { params: { categoryId } }: Params) {
  const { data, status } = await fetchToBackend(`/category/${categoryId}`, {
    method: 'GET',
    headers: req.headers,
    cache: 'no-cache'
  })

  return NextResponse.json(data, {
    status
  })
}

export async function PATCH(req: Request, { params: { categoryId } }: Params) {
  const body = await req.json()

  const { data, status } = await fetchToBackend(`/category/${categoryId}`, {
    method: 'PATCH',
    headers: req.headers,
    cache: 'no-cache',
    body: JSON.stringify(body)
  })

  return NextResponse.json(data, {
    status
  })
}

export async function DELETE(req: Request, { params: { categoryId } }: Params) {
  const { data, status } = await fetchToBackend(`/category/soft/${categoryId}`, {
    method: 'DELETE',
    headers: req.headers,
    cache: 'no-cache'
  })

  return NextResponse.json(data, {
    status
  })
}
