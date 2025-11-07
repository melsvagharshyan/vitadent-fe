import { easeInOut, motion } from 'framer-motion'
import Navbar from '../navbar/Navbar'
import TopInfoBar from './TopInfoBar'
import { useMediaQuery } from 'react-responsive'
import { Link as ScrollLink } from 'react-scroll'

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easeInOut, delay: i * 0.2 },
  }),
}

const individualButtonVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeInOut, delay: i * 0.15 },
  }),
  hover: {
    scale: 1.03,
    transition: { duration: 0.2 },
  },
  tap: {
    scale: 0.98,
  },
}

const Header = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

  return (
    <header
      id="navbar"
      role="banner"
      aria-label="Site header"
      className="w-full bg-cover bg-center relative overflow-hidden"
      style={{
        backgroundImage: isMobile
          ? `url(https://res.cloudinary.com/dxfqf6fgv/image/upload/v1762511838/2_jjjyxz.png)`
          : `url(https://res.cloudinary.com/dxfqf6fgv/image/upload/v1762511838/2_jjjyxz.png)`,
      }}
    >
      {/* Fixed top information bar */}
      <TopInfoBar />
      {/* Fixed main navbar sits below top bar */}
      <Navbar />
      {/* Spacer so hero isn't hidden behind fixed bars (top bar + navbar) */}
      <div className="h-24" />
      {/* Overlay for better text contrast */}
      <div className="absolute inset-0 bg-slate-900/60" />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        className={`flex flex-col items-center text-center gap-6 relative z-10 ${
          isMobile ? 'px-4 py-20' : 'px-20 py-36'
        }`}
      >
        <motion.h1
          custom={0}
          variants={textVariants}
          className={`text-white font-semibold tracking-wide ${isMobile ? 'text-2xl' : 'text-4xl'}`}
        >
          ПРОФЕССИОНАЛЬНАЯ СТОМАТОЛОГИЯ
        </motion.h1>

        <motion.p
          custom={1}
          variants={textVariants}
          className={`${isMobile ? 'text-base' : 'text-xl'} text-white/95 max-w-4xl`}
        >
          Профессиональный уход за здоровьем вашей улыбки. Современные технологии, индивидуальный
          подход и комфортное лечение для всей семьи
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className={`flex gap-6 mt-6 ${isMobile ? 'flex-col items-center' : ''}`}
        >
          <ScrollLink to="contacts" smooth={true} duration={500} className="cursor-pointer">
            <motion.button
              custom={0}
              variants={individualButtonVariants}
              whileHover="hover"
              whileTap="tap"
              className="group relative rounded-md overflow-visible shadow-md hover:shadow-lg duration-300 ease-in-out flex items-center justify-center gap-2 cursor-pointer bg-[#1DA6E2] hover:bg-sky-600 text-white py-3 px-8 font-semibold transition-all"
            >
              <span className="relative z-10 flex items-center gap-2">Записаться на прием</span>

              {/* animated soft border pulse effect */}
              <span className="absolute inset-0 rounded-md border border-sky-300 opacity-40 animate-softPing scale-110 translate-x-[-50%] translate-y-[-50%] left-1/2 top-1/2 w-full h-full"></span>
            </motion.button>
          </ScrollLink>
        </motion.div>
        <style>
          {`
            @keyframes softPing {
              0% { transform: scale(1); opacity: 0.4; }
              70% { transform: scale(1.25); opacity: 0; }
              100% { transform: scale(1.25); opacity: 0; }
            }
            .animate-softPing {
              animation: softPing 2.5s ease-out infinite;
              position: absolute;
              pointer-events: none;
            }
          `}
        </style>
      </motion.div>
    </header>
  )
}

export default Header
