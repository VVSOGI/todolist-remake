import StyledComponentsRegistry from '@/lib/registry'
import './globals.css'
import { Suspense } from 'react'
import Loading from './loading'

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
