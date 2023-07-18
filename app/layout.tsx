import './globals.css'
import { Nunito } from 'next/font/google'
import NavBar from './components/navbar/NavBar'
import ClientOnly from './components/ClientOnly'
import Modal from './components/modals/modal'
import RegisterModal from './components/modals/RegisterModal'
import ToasterProvider from './components/Providers/ToasterProvider'
import LoginModal from './components/modals/LoginModal'
import getCurrentUser from './actions/etCurrentUser'
import RentModal from './components/modals/RentModal'

const font = Nunito({
  subsets: ['latin'],
})

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser()

  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <RegisterModal />
          <LoginModal />
          <RentModal />
          <NavBar currentUser={currentUser} />
        </ClientOnly>
        <div className='pb-20 pt-20'>{children}</div>
      </body>
    </html>
  )
}
