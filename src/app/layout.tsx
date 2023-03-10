'use client'
import { SessionProvider } from 'next-auth/react'
import CustomSession from './custom_session'
import '@/styles/global.scss'
import '@/styles/globals.css'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <SessionProvider>
          <CustomSession children={children} />
        </SessionProvider>
      </body>
    </html>
  )
}
