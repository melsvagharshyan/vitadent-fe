import { ReactNode } from 'react'
import Navbar from '../navbar/Navbar'
import TopInfoBar from '../header/TopInfoBar'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <TopInfoBar />
      <Navbar />
      {children}
    </>
  )
}

export default Layout
