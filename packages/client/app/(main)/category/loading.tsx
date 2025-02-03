'use client'

import { Skeleton, CreateCategory } from '@vvsogi/ui-components/app'

export default function HomeLoading() {
  async function mock() {
    return { response: {}, status: 100 }
  }

  return (
    <div>
      <CreateCategory createCategory={mock} />
      <div
        style={{
          width: '100%',
          height: '60%',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem'
        }}
      >
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </div>
    </div>
  )
}
