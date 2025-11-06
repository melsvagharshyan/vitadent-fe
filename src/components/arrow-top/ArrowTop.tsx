import { IoIosArrowUp } from 'react-icons/io'
import React, { useEffect, useState } from 'react'

const ArrowTop: React.FC = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 100)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: -50, behavior: 'smooth' })
  }

  return (
    <div
      onClick={scrollToTop}
      className={`
        fixed bottom-32 rounded-md right-5 z-38 cursor-pointer 
        transition-all duration-500 ease-in-out 
         p-3 shadow-lg backdrop-blur-md 
        bg-[#1DA6E2] hover:bg-[#1DA6E2] hover:scale-110 hover:shadow-[#1DA6E2]
        ${visible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
      `}
    >
      <IoIosArrowUp size={28} className="text-white" />
    </div>
  )
}

export default ArrowTop
