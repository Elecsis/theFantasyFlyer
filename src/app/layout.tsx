import './globals.css'
import type { Metadata } from 'next'
import { Kameron } from 'next/font/google'
import AuthProvider from '@/utils/AuthProvider'
import Footer from './componets/footer'
import Navbar from './componets/navbar'

const kameron = Kameron({
   subsets: ['latin'],
   weight: ['400', '700']
  })

export const metadata: Metadata = {
  title: 'The Fantasy Flyer',
  description: 'We Fly High and Hunt Fantasy Football Championships!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='bg-white'>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <body className={kameron.className}>
        <AuthProvider>
          <Navbar/>
          {children}
          <Footer/>
        </AuthProvider>
      </body>
    </html>
  )
}
