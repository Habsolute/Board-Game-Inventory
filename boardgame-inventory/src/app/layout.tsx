import './globals.css'
import { Header } from './component/header/header'
import { SideNavBar } from './component/navBar/sideNavBar'

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
        <Header />
        <div className='flex'>
          <SideNavBar />
          {children}
        </div>
      </body>
    </html>
  )
}
