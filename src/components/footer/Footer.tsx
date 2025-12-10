import React from 'react'
import { Link as ScrollLink } from 'react-scroll'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FaPhone, FaCalendarAlt, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'

import clsx from 'clsx'
import logoImage from '~/assets/vita-images/vita-logo_osqg0g.svg'

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
    { day: 'Понедельник', time: '09:00 - 19:00' },
    { day: 'Вторник', time: '09:00 - 19:00' },
    { day: 'Среда', time: '09:00 - 19:00' },
    { day: 'Четверг', time: '09:00 - 19:00' },
    { day: 'Пятница', time: '09:00 - 19:00' },
    { day: 'Суббота - Воскресенье', time: '10:00 - 15:00' },
  ]

  const currentDayName = (() => {
    const dayIdx = new Date().getDay() // 0 - воскресенье
    const map = [
      'Воскресенье',
      'Понедельник',
      'Вторник',
      'Среда',
      'Четверг',
      'Пятница',
      'Суббота - Воскресенье',
    ]
    return map[dayIdx]
  })()

  return (
    <footer className="bg-[#2B354B] text-white w-full pt-0 pb-0">
      {/* Contacts Section */}
      <section id="contacts" className="bg-white w-full py-8 md:py-10">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
            {/* Phone Contact */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                <FaPhone className="text-[#1DA6E2] text-xl" />
              </div>
              <div className="flex flex-col">
                <a
                  href="tel:+37411559609"
                  className="text-gray-700 text-base md:text-lg font-medium hover:text-[#1DA6E2] transition-colors"
                >
                  8(487 62) 6 15 00
                </a>
                <span className="text-gray-500 text-sm mt-1">Позвоните сегодня!</span>
              </div>
            </div>
            {/* Appointment/Email */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                <FaCalendarAlt className="text-[#1DA6E2] text-xl" />
              </div>
              <div className="flex flex-col">
                <span className="text-gray-700 text-base md:text-lg font-medium">
                  Записаться на прием
                </span>
                <a
                  href="mailto:vita.dent71@mail.ru"
                  className="text-gray-500 text-sm mt-1 hover:text-[#1DA6E2] transition-colors"
                >
                  vita.dent71@mail.ru
                </a>
              </div>
            </div>
            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                <FaMapMarkerAlt className="text-[#1DA6E2] text-xl" />
              </div>
              <div className="flex flex-col">
                <span className="text-gray-700 text-base md:text-lg font-medium">
                  Тульская область, город Новомосковск
                </span>
                <span className="text-gray-500 text-sm mt-1">Трудовые резервы 25</span>
              </div>
            </div>
            {/* Social Media */}

            <div className="flex items-center justify-center gap-3 md:justify-start">
              <a
                href="tel:84876261500"
                className="w-10 h-10 bg-[#1DA6E2] rounded-lg flex items-center justify-center hover:bg-[#0284e4] transition-colors flex-shrink-0"
                aria-label="Позвонить"
              >
                <FaPhoneAlt className="text-white text-lg" />
              </a>

              <a
                href="mailto:vita.dent71@mail.ru"
                className="w-10 h-10 bg-[#1DA6E2] rounded-lg flex items-center justify-center hover:bg-[#0284e4] transition-colors flex-shrink-0"
                aria-label="Написать на почту"
              >
                <FaEnvelope className="text-white text-lg" />
              </a>

              <a
                href="https://www.google.com/maps?q=Тульская+область,+город+Новомосковск,+Трудовые+резервы+25,+Вита+Дент"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#1DA6E2] rounded-lg flex items-center justify-center hover:bg-[#0284e4] transition-colors flex-shrink-0"
                aria-label="Открыть карту"
              >
                <FaMapMarkerAlt className="text-white text-lg" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Footer Content */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-10 px-6 md:px-10 pt-10 pb-0 md:pt-12">
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
                src={logoImage}
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
                src={logoImage}
                alt="Vitadent Logo"
                width={240}
                height={100}
                className={clsx('transition-transform duration-300 group-hover:rotate-6')}
              />
            </button>
          )}

          <p className="text-silver text-sm leading-6">
            Стоматологическая клиника «Вита Дент» — это приятный опыт для всей семьи. Мы уделяем
            приоритет не только здоровью полости рта, но и создаём тёплую атмосферу для максимально
            комфортного посещения.
          </p>

          {isHomePage ? (
            <ScrollLink to="contacts" smooth={true} duration={500} className="cursor-pointer w-fit">
              <button
                type="button"
                className="cursor-pointer text-[12px] px-6 py-2.5 text-white font-semibold rounded-md bg-[#1DA6E2] hover:opacity-90 transition-colors"
              >
                ЗАПИСАТЬСЯ НА ПРИЁМ
              </button>
            </ScrollLink>
          ) : (
            <button
              onClick={() => {
                navigate('/')
                setTimeout(() => {
                  const target = document.getElementById('contacts')
                  target?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }, 100)
              }}
              type="button"
              className="cursor-pointer rounded-md text-sm px-6 py-3 text-white font-semibold  bg-[#1DA6E2] hover:opacity-90 transition-colors w-fit"
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
