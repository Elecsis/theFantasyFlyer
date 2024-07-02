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
  title: 'The Fanatasy Flyer',
  description: 'We Fly High and Hunt Championships!',
  manifest: '/favicon.ico',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='bg-white'>
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
