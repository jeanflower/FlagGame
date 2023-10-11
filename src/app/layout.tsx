import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Flags and more',
  description: 'A page for learning about Flags, BSL and more',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body 
        className={inter.className}
      >
        <div style={{
         backgroundColor: "rgb(179, 203, 223)"
        }}>
          {children}
        </div>
      </body>
    </html>
  )
}
