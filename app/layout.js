
import Navbar from '@/components/NavBar'

import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Awesome Todo App',
  description: 'simple next js Todo App',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className='max-w-3xl mx-auto p-4'>
      <Navbar />


      <div className='mt-8'>
      {children}
      </div>

      </div>
      
      </body>
    </html>
  )
}
