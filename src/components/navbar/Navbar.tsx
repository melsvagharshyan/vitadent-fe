import { Link as ScrollLink } from 'react-scroll'
import { useEffect, useState } from 'react'
import clsx from 'clsx'
import { navLinks } from './utils/constants'
import { CiMenuFries } from 'react-icons/ci'
import { useDrag } from '@use-gesture/react'
import { useSpring, animated } from '@react-spring/web'
import { ContactModal } from '~/modals/ContactModal'
import { useLocation, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [active, setActive] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [open, setOpen] = useState(false)
  const [forceActive, setForceActive] = useState(false)

  const [{ y }, api] = useSpring(() => ({ y: 0 }))
  const isHomePage = location.pathname === '/'

  const handleNavigation = (href: string, title: string) => {
    if (title === 'Contact') {
      setOpen(true)
      return
    }

    if (!isHomePage) {
      navigate('/')
      // Use setTimeout to ensure navigation completes before scrolling
      setTimeout(() => {
        const element = document.getElementById(href)
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          })
        }
      }, 100)
    }
  }

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY
      if (!isMenuOpen && !open) {
        setActive(scrollY >= 1 || !isHomePage)
        setForceActive(false)
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [isMenuOpen, open, isHomePage])

  useEffect(() => {
    if (!isHomePage) {
      setActive(true)
    }
  }, [isHomePage])

  useEffect(() => {
    if (isMenuOpen) {
      api.start({ y: 0, config: { tension: 210, friction: 23 } })
    }
  }, [isMenuOpen, api])

  useEffect(() => {
    if (open) {
      const scrollY = window.scrollY

      if (scrollY >= 1) {
        setForceActive(true)
        setActive(true)
      }
    } else {
      setForceActive(false)
    }
  }, [open])

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev)
  }

  const bind = useDrag(
    ({
      last,
      movement: [, my],
    }: {
      last: boolean
      movement: [number, number]
      cancel?: () => void
    }) => {
      if (my < 0) return

      if (last) {
        if (my > 100) {
          api.start({ y: 250, onResolve: () => setIsMenuOpen(false) })
        } else {
          api.start({ y: 0 })
        }
      } else {
        api.start({ y: my })
      }
    },
    { from: () => [0, y.get()], filterTaps: true },
  )

  const linkStyle = (isActive: boolean) =>
    clsx(
      "font-mono cursor-pointer relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:transition-all after:duration-300 hover:after:w-full",
      isActive ? 'text-[#212121] after:bg-[#212121]' : 'text-white after:bg-white',
    )

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
    <nav
      aria-label="Main navigation"
      className={clsx(
        'flex justify-between items-center h-16 px-6 md:px-20 fixed top-10 left-0 right-0 z-40 transition-colors duration-300 border-b',
        isNavActive
          ? 'bg-white/95 backdrop-blur border-slate-200 shadow-sm'
          : 'bg-transparent border-transparent',
      )}
    >
      {isHomePage ? (
        <ScrollLink
          offset={-80}
          to="navbar"
          className="cursor-pointer flex items-center gap-2 group"
          aria-label="Homepage"
        >
          <img
            src="https://res.cloudinary.com/dxfqf6fgv/image/upload/v1762437338/vita-logo_osqg0g.svg"
            alt="Vitadent Logo"
            width={240}
            height={100}
          />
        </ScrollLink>
      ) : (
        <button
          onClick={() => {
            navigate('/')
            // Scroll to top after navigation
            setTimeout(() => {
              window.scrollTo(0, 0)
            }, 100)
          }}
          className="cursor-pointer flex items-center gap-2 group"
          aria-label="Homepage"
        >
          <img
            src="https://res.cloudinary.com/dxfqf6fgv/image/upload/v1762437338/vita-logo_osqg0g.svg"
            alt="Vitadent Logo"
            width={240}
            height={100}
          />
        </button>
      )}

      <div className="flex gap-10 items-center">
        <ul className="hidden md:flex gap-10 items-center" role="menubar">
          {navLinks.map(({ title, href }) => (
            <li key={title} role="none">
              {isHomePage ? (
                <ScrollLink
                  onClick={() => handleNavigation(href, title)}
                  to={href === 'contact' ? '#' : href}
                  duration={500}
                  smooth={true}
                  offset={href === 'contacts' ? -80 : 50}
                  className={linkStyle(isNavActive)}
                  role="menuitem"
                >
                  {getNavText(title)}
                </ScrollLink>
              ) : (
                <button
                  onClick={() => handleNavigation(href, title)}
                  className={linkStyle(isNavActive)}
                  role="menuitem"
                >
                  {getNavText(title)}
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* CTA button on the right */}
      <div className="hidden md:block">
        {isHomePage ? (
          <ScrollLink
            to="contacts"
            duration={500}
            smooth={true}
            offset={-80}
            className="cursor-pointer"
          >
            <span className="inline-block bg-[#1DA6E2] hover:opacity-90 rounded-md transition-colors text-white font-semibold py-2 px-4 shadow-sm">
              Записаться на прием
            </span>
          </ScrollLink>
        ) : (
          <button
            onClick={() => {
              handleNavigation('contacts', 'Consultation')
            }}
            className="inline-block  bg-sky-500 hover:bg-sky-600 text-white font-semibold py-2 px-4 rounded-md shadow-sm"
          >
            Записаться на прием
          </button>
        )}
      </div>

      <button
        className="md:hidden "
        onClick={toggleMenu}
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
      >
        <CiMenuFries size={30} />
      </button>

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 transition-opacity duration-300"
          onClick={toggleMenu}
          aria-hidden="true"
        />
      )}

      {isMenuOpen && (
        <animated.aside
          {...bind()}
          className="fixed bottom-0 left-0 w-full h-96 bg-white/90 backdrop-blur-lg z-40 touch-none"
          style={{
            transform: y.to((v: number) => `translateY(${v}px)`),
            touchAction: 'none',
            borderRadius: '20px 20px 0 0',
            backgroundImage: `url(https://i.pinimg.com/736x/c4/d2/ef/c4d2ef90bd81e63e3ac9ab9562eebd80.jpg)`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
          onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
          aria-hidden={!isMenuOpen}
        >
          <div className="relative h-full flex flex-col justify-center items-center gap-10 px-8">
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-black/30 rounded-full" />
            <ul className="flex flex-col items-center gap-8" role="menu">
              {navLinks.map(({ title, href }) => (
                <li key={title} role="none">
                  {isHomePage ? (
                    <ScrollLink
                      to={href}
                      duration={500}
                      smooth={true}
                      offset={href === 'contacts' ? -80 : 50}
                      onClick={() => {
                        toggleMenu()
                        if (title === 'Contact') setOpen(true)
                      }}
                      className="font-bold mb-8 uppercase font-sans bg-gradient-to-r from-white via-cyan-200 to-white text-transparent bg-clip-text"
                      role="menuitem"
                    >
                      {getNavText(title)}
                    </ScrollLink>
                  ) : (
                    <button
                      onClick={() => {
                        toggleMenu()
                        handleNavigation(href, title)
                      }}
                      className="font-bold  mb-8 uppercase font-sans bg-gradient-to-r from-cyan-500 via-cyan-950 to-cyan-500 text-transparent bg-clip-text"
                      role="menuitem"
                    >
                      {getNavText(title)}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </animated.aside>
      )}

      <ContactModal isOpen={open} onClose={() => setOpen(false)} />
    </nav>
  )
}

export default Navbar
