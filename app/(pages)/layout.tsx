import '@mui/icons-material'
import '@/styles/globals.scss'
import type { Metadata } from 'next'
import Head from '@/components/Head/Head'
import { Roboto } from 'next/font/google'
import Header from '@/components/Header/Header'
import { CssBaseline, Container } from '@mui/material'

const font = Roboto({
  weight: '400',
  subsets: ['cyrillic'],
})

export const metadata: Metadata = {
  title: 'QR',
  description: 'QR Code Generator',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CssBaseline />
      <html lang='en'>
        <Head />
        <body className={font.className}>
          <Header />
          <Container maxWidth='xl'>{children}</Container>
        </body>
      </html>
    </>
  )
}
