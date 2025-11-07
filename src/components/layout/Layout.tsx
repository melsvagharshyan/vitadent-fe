import { ReactNode } from 'react'
import TopInfoBar from '../header/TopInfoBar'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <TopInfoBar />
      {children}
    </>
  )
}

export default Layout
