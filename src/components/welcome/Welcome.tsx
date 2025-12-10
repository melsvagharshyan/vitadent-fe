import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import clinicImage from '~/assets/vita-images/0bca77a5910d18c3470d7c1353d82fd9_1_emjqxp.jpg'
import logoImage from '~/assets/vita-images/vita-logo_osqg0g.svg'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeInOut',
      when: 'beforeChildren',
      staggerChildren: 0.15,
      delayChildren: 0.15,
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.4, ease: 'easeInOut' },
  },
}

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 10,
    },
  },
}

const Welcome = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/')
    }, 2500)
    return () => clearTimeout(timer)
  }, [navigate])

  return (
    <motion.div
      className="relative h-screen w-full bg-gradient-to-br from-cyan-500 via-cyan-600 to-cyan-700 flex flex-col items-center justify-center px-6 text-white text-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      style={{
        backgroundImage: `url(${clinicImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <motion.div className="flex items-center gap-3 mb-4" variants={textVariants}>
        <img
          src={logoImage}
          alt="Vitadent Logo"
          width={240}
          height={100}
        />
      </motion.div>
      <motion.h1
        className="text-5xl mb-60 md:text-7xl font-extrabold drop-shadow-lg"
        variants={textVariants}
      >
        Добро пожаловать
      </motion.h1>
    </motion.div>
  )
}

export default Welcome
