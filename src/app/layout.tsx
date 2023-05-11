import './globals.css'
import { Inter } from 'next/font/google'
import { PlayerContextProvider } from '@/contexts/PlayerContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Spotify',
  description: 'Listen to music.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <PlayerContextProvider>
      <body className="bg-zinc-900 text-zinc-50">{children}</body>
    </PlayerContextProvider>
    </html>
  )
}
