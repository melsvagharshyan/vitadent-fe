import { Link as ScrollLink } from 'react-scroll'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { CiMenuFries } from 'react-icons/ci'
import clsx from 'clsx'
import { navLinks } from './utils/constants'
import { ContactModal } from '~/modals/ContactModal'

const Navbar = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [active, setActive] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [open, setOpen] = useState(false)
  const [forceActive] = useState(false)

  const isHomePage = location.pathname === '/'

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
  }, [isMenuOpen])

  const handleNavigation = (href: string, title: string) => {
    if (title === 'Contact') {
      setOpen(true)
      return
    }

    if (!isHomePage) {
      navigate('/')
      setTimeout(() => {
        const element = document.getElementById(href)
        if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 100)
    }
    setIsMenuOpen(false)
  }

  const toggleMenu = () => setIsMenuOpen((prev) => !prev)

  useEffect(() => {
    const onScroll = () => {
      if (!isMenuOpen) setActive(window.scrollY > 0 || !isHomePage)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [isMenuOpen, isHomePage])

  const isNavActive = forceActive || active

  const getNavText = (title: string) => {
    const navTexts: { [key: string]: string } = {
      About: 'О НАС',
      Experience: 'ОПЫТ',
      Projects: 'ПРОЕКТЫ',
      Consultation: 'ЗАПИСЬ',
      Contact: 'КОНТАКТЫ',
    }
    return navTexts[title] || title.toUpperCase()
  }

  return (
    <>
      {/* Navbar */}
      <nav
        className={clsx(
          'fixed top-10 left-0 right-0 z-[9999] h-16 px-6 md:px-20 flex justify-between items-center transition-colors duration-300 border-b',
          isNavActive
            ? 'bg-white/95 backdrop-blur border-slate-200 shadow-sm'
            : 'bg-transparent border-transparent',
        )}
      >
        {/* Logo */}
        <div className="flex items-center">
          <button
            onClick={() => {
              navigate('/')
              // Scroll to top after navigation
              setTimeout(() => {
                window.scrollTo(0, 0)
              }, 100)
            }}
            className="cursor-pointer flex items-center gap-2"
          >
            <img
              src="https://res.cloudinary.com/dxfqf6fgv/image/upload/v1762437338/vita-logo_osqg0g.svg"
              alt="Vitadent Logo"
              width={240}
              height={100}
            />
          </button>
        </div>

        <div className="relative group md:hidden">
          <button
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            className={clsx(
              'relative flex items-center justify-center p-2 rounded-md transition-colors duration-300',
              isNavActive
                ? 'bg-transparent text-gray-500 shadow-none border-none hover:text-gray-700'
                : 'bg-white/10 border border-white/20 text-white shadow-lg hover:shadow-2xl hover:bg-white/20',
            )}
          >
            <CiMenuFries size={28} className="relative z-10 transition-colors duration-300" />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 z-[9998]"
              onClick={toggleMenu}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
            />

            <motion.div
              className="fixed top-0 left-0 w-full h-1/2 bg-white z-[9999] shadow-xl p-8 flex flex-col"
              initial={{ y: '-100%' }}
              animate={{ y: 0 }}
              exit={{ y: '-100%' }}
              transition={{ type: 'tween', stiffness: 300, damping: 30 }}
            >
              <button
                onClick={toggleMenu}
                className="self-end mb-6 text-gray-600 text-xl font-semibold hover:text-gray-900 transition-colors"
              >
                ✕
              </button>

              <ul className="flex flex-col gap-6">
                {navLinks.map(({ title, href }) => (
                  <li key={title}>
                    {isHomePage ? (
                      <ScrollLink
                        to={href === 'contact' ? '#' : href}
                        smooth={true}
                        duration={500}
                        offset={href === 'contacts' ? -80 : 50}
                        onClick={() => setIsMenuOpen(false)}
                        className="text-gray-800 font-semibold text-lg hover:text-sky-500 transition-colors cursor-pointer"
                      >
                        {getNavText(title)}
                      </ScrollLink>
                    ) : (
                      <button
                        onClick={() => handleNavigation(href, title)}
                        className="text-gray-800 font-semibold text-lg hover:text-sky-500 transition-colors"
                      >
                        {getNavText(title)}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <ContactModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  )
}

export default Navbar
