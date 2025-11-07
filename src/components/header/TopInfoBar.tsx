import { FiClock, FiMail, FiMapPin, FiPhone } from 'react-icons/fi'

const TopInfoBar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-10 bg-slate-800 text-white text-xs">
      <div className="max-w-screen-xl h-full mx-auto px-4 flex items-center justify-between gap-4">
        {/* Left side: address & hours (hidden on mobile) */}
        <div className="hidden sm:flex items-center gap-6">
          <div className="flex items-center gap-2 whitespace-nowrap">
            <FiMapPin className="opacity-80" />
            <span>Тульская область, город Новомосковск, Трудовые резервы 25</span>
          </div>
          <div className="hidden md:flex items-center gap-2 whitespace-nowrap">
            <FiClock className="opacity-80" />
            <span>Пн - Сб: 10:00 - 19:00</span>
          </div>
        </div>

        {/* Right side: phone & email */}
        <div className="flex-1 flex items-center justify-center gap-6 sm:flex-none sm:justify-end">
          <a
            href="tel:+37411559609"
            className="flex items-center gap-2 whitespace-nowrap hover:opacity-90"
          >
            <FiPhone className="opacity-80" />
            <span>8(487 62) 6 15 00</span>
          </a>
          <a
            href="mailto:vita.dent71@mail.ru"
            className="flex items-center gap-2 whitespace-nowrap hover:opacity-90"
          >
            <FiMail className="opacity-80" />
            <span>vita.dent71@mail.ru</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default TopInfoBar
