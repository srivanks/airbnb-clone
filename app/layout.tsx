import './globals.css'
import { Nunito } from 'next/font/google'
import NavBar from './components/navbar/NavBar'
import ClientOnly from './components/ClientOnly'
import Modal from './components/modals/modal'
import RegisterModal from './components/modals/RegisterModal'
import ToasterProvider from './components/Providers/ToasterProvider'
import LoginModal from './components/modals/LoginModal'

const font = Nunito({
  subsets: ['latin'],
})

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <RegisterModal />
          <LoginModal />
          <NavBar />
        </ClientOnly>
        {children}
      </body>
    </html>
  )
}
