import { NextResponse } from 'next/server'
import { mockCategory } from '@/mock/mock'
import { GetResponseCategories } from '@/app/types'

export async function GET(req: Request) {
  const response: GetResponseCategories = {
    data: mockCategory
  }

  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        NextResponse.json(response, {
          status: 200
        })
      )
    }, 2000)
  })

  return NextResponse.json(response, {
    status: 200
  })
}
