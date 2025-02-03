'use client'

import { useEffect, useState } from 'react'
import { Button, Container } from '@vvsogi/ui-components/app'
import { InternalError } from '@/app/types'

export default function error(err: any) {
  const [receive, setReceive] = useState<InternalError>()

  useEffect(() => {
    if (!receive) {
      setReceive(JSON.parse(err.error.message))
    }
  }, [err, receive])

  return (
    <Container>
      <section className={`w-section-tablet p-[1.5rem] flex flex-col justify-between bg-white shadow-primary rounded-medium`}>
        <div className="flex justify-center text-xl font-[700]">{receive && receive.response.message}</div>
        <span className="flex justify-center mb-[0.75rem]">Error Status {receive && receive.status}</span>
        <div className="h-[2rem] flex justify-center">
          <Button size="medium" style={{ width: '9rem', borderRadius: '0.5rem' }} onClick={err.reset}>
            Try Reset
          </Button>
        </div>
      </section>
    </Container>
  )
}
