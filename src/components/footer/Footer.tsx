import React from 'react'
import { Link as ScrollLink } from 'react-scroll'
import { Link, useLocation, useNavigate } from 'react-router-dom'

import clsx from 'clsx'

const Footer: React.FC = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const isInProjectsPage = location.pathname.includes('project')
  const isHomePage = location.pathname === '/'

  const services: string[] = [
    'ДЕТСКАЯ СТОМАТОЛОГИЯ',
    'ТЕРАПЕВТИЧЕСКАЯ СТОМАТОЛОГИЯ',
    'ОРТОПЕДИЧЕСКАЯ СТОМАТОЛОГИЯ',
    'ХИРУРГИЧЕСКАЯ СТОМАТОЛОГИЯ',
    'ГИГИЕНА ПОЛОСТИ РТА',
    'ОРТОДОНТИЯ',
  ]

  const schedule: { day: string; time: string }[] = [
    { day: 'Понедельник', time: '10:00 - 19:00' },
    { day: 'Вторник', time: '12:00 - 20:00' },
    { day: 'Среда', time: '10:00 - 19:00' },
    { day: 'Четверг', time: '10:00 - 20:00' },
    { day: 'Пятница', time: '10:00 - 19:00' },
    { day: 'Суббота', time: '10:00 - 19:00' },
  ]

  const currentDayName = (() => {
    const dayIdx = new Date().getDay() // 0 - воскресенье
    const map = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']
    return map[dayIdx]
  })()

  return (
    <footer className="bg-[#2B354B] text-white w-full pt-10 pb-0 md:pt-12">
      <section className="grid grid-cols-1 md:grid-cols-3 gap-10 px-6 md:px-10">
        {/* Left: Logo, description, flags, CTA */}
        <div className="w-full max-w-xl flex flex-col space-y-5">
          {isInProjectsPage ? (
            <Link to="/" aria-label="Homepage">
              <img
                src="https://res.cloudinary.com/dxfqf6fgv/image/upload/v1746817593/script_oyyrxy.png"
                alt="Logo"
                width={120}
                className="cursor-pointer"
              />
            </Link>
          ) : isHomePage ? (
            <ScrollLink
              to="navbar"
              smooth={true}
              duration={500}
              className="cursor-pointer flex items-center gap-3"
            >
              <img
                src="https://res.cloudinary.com/dxfqf6fgv/image/upload/v1762437338/vita-logo_osqg0g.svg"
                alt="Vitadent Logo"
                width={240}
                height={100}
                className={clsx('transition-transform duration-300 group-hover:rotate-6')}
              />
            </ScrollLink>
          ) : (
            <button
              onClick={() => {
                navigate('/')
                setTimeout(() => {
                  window.scrollTo(0, 0)
                }, 100)
              }}
              className="cursor-pointer flex items-center gap-3"
              aria-label="Homepage"
            >
              <img
                src="https://res.cloudinary.com/dxfqf6fgv/image/upload/v1754223427/vahan/download_v2dtpq.svg"
                alt="Vitadent Logo"
                width={56}
                height={56}
                className={clsx('transition-transform duration-300 group-hover:rotate-6')}
              />
              <span
                style={{ fontFamily: '"Parisienne", cursive' }}
                className="text-3xl font-bold bg-gradient-to-r from-[#2af1f4] via-[#0284e4] to-[#2af1f4] text-transparent bg-clip-text"
              >
                Вита Дент
              </span>
            </button>
          )}

          <p className="text-silver text-sm leading-6">
            Стоматологическая клиника «Вита Дент» — это приятный опыт для всей семьи. Мы уделяем
            приоритет не только здоровью полости рта, но и создаём тёплую атмосферу для максимально
            комфортного посещения.
          </p>

          {isHomePage ? (
            <ScrollLink
              to="consultation"
              smooth={true}
              duration={500}
              className="cursor-pointer w-fit"
            >
              <button
                type="button"
                className="cursor-pointer text-[12px] px-6 py-2.5 text-white font-semibold rounded-sm bg-[#1DA6E2] hover:opacity-90 transition-colors"
              >
                ЗАПИСАТЬСЯ НА ПРИЁМ
              </button>
            </ScrollLink>
          ) : (
            <button
              onClick={() => {
                navigate('/')
                setTimeout(() => {
                  const target = document.getElementById('consultation')
                  target?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }, 100)
              }}
              type="button"
              className="cursor-pointer text-sm px-6 py-3 text-white font-semibold  bg-[#1DA6E2] hover:opacity-90 transition-colors w-fit"
            >
              ЗАПИСАТЬСЯ НА ПРИЁМ
            </button>
          )}
        </div>

        {/* Middle: Services */}
        <div>
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">Наши услуги</h3>
          <div className="h-0.5 w-12 bg-cyan-500 mb-4" />
          <ul className="text-silver text-sm">
            {services.map((s, idx) => (
              <li key={s} className={idx !== services.length - 1 ? 'border-b border-gray-600' : ''}>
                <span className="block py-3 hover:text-white transition-colors">{s}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Working hours */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Часы работы</h3>
          <div className="h-0.5 w-12 bg-cyan-500 mb-4" />
          <ul className="text-silver text-sm">
            {schedule.map(({ day, time }) => {
              const isToday = day === currentDayName
              return (
                <li
                  key={day}
                  className="flex items-center justify-between py-3 border-b border-gray-600 last:border-b-0"
                >
                  <span className={isToday ? 'text-cyan-400' : ''}>{day}</span>
                  <span className={isToday ? 'text-cyan-400' : ''}>{time}</span>
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      <div className="w-full mt-8 border-t border-gray-600 py-4 text-center text-gray-400 text-xs bg-[#172137]">
        © {new Date().getFullYear()} Вита Дент. Все права защищены | Политика конфиденциальности |
        Юридическая информация
      </div>
    </footer>
  )
}

export default Footer
