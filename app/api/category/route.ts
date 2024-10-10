import { mockCategory } from '@/mock/mock'
import { NextResponse } from 'next/server'

export async function GET(req: Request) {
  return NextResponse.json(
    {
      data: mockCategory
    },
    {
      status: 200
    }
  )
}
