import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import clinicImage from '~/assets/vita-images/0bca77a5910d18c3470d7c1353d82fd9_1_emjqxp.jpg'

const About = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 1140)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const ClinicImage = clinicImage

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="w-full flex justify-center bg-gradient-to-br from-slate-50 to-gray-200 overflow-hidden"
    >
      <div className="flex flex-col md:flex-row items-center justify-between pt-20 pb-24 px-6 md:px-12 max-w-7xl w-full gap-12">
        {/* Mobile Layout */}
        {isMobile && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="flex flex-col items-center w-full text-center bg-white/70 backdrop-blur-md rounded-xl p-6 "
          >
            <div
              className="bg-cover bg-center w-full h-64 sm:h-72 rounded-xl shadow-2xl border border-gray-200"
              style={{ backgroundImage: `url(${ClinicImage})` }}
            />

            <h2
              id="about-heading"
              className="mt-8 uppercase tracking-wide"
              style={{ fontSize: '16px', color: '#1DA6E2', fontWeight: 600 }}
            >
              О нашей клинике
            </h2>

            <h3
              className="mt-3 mb-6 font-light leading-tight"
              style={{ fontSize: '18px', color: '#727272' }}
            >
              Здоровье и уверенность в каждой улыбке
            </h3>

            <p className="leading-relaxed mb-4" style={{ fontSize: '14px', color: '#959595' }}>
              Наша клиника — это современный центр стоматологии, где сочетаются профессионализм,
              передовые технологии и индивидуальный подход к каждому пациенту.
            </p>

            <p className="leading-relaxed mb-4" style={{ fontSize: '14px', color: '#959595' }}>
              Команда опытных врачей уделяет внимание не только качеству лечения, но и вашему
              комфорту. Мы используем только сертифицированные материалы и безопасные методы.
            </p>

            <p className="leading-relaxed" style={{ fontSize: '14px', color: '#959595' }}>
              Забота о вашей улыбке начинается с доверия. Именно поэтому мы создаём атмосферу, в
              которой каждый чувствует себя спокойно и уверенно.
            </p>
          </motion.div>
        )}

        {/* Desktop Layout */}
        {!isMobile && (
          <>
            <div className="flex-1 text-left max-w-2xl">
              <motion.article
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <h2
                  id="about-heading"
                  className="text-2xl md:text-3xl font-semibold mb-6 uppercase tracking-wide"
                  style={{ color: '#1DA6E2' }}
                >
                  О нашей клинике
                </h2>

                <h3 className="text-3xl md:text-4xl font-light mb-8 text-gray-800 leading-tight">
                  Здоровье и уверенность в каждой улыбке
                </h3>

                <p className="text-gray-600 text-base leading-relaxed mb-6">
                  Наша клиника — это современный центр стоматологии, где сочетаются профессионализм,
                  передовые технологии и индивидуальный подход к каждому пациенту.
                </p>

                <p className="text-gray-600 text-base leading-relaxed mb-6">
                  Команда опытных врачей уделяет внимание не только качеству лечения, но и вашему
                  комфорту. Мы используем только сертифицированные материалы и безопасные методы.
                </p>

                <p className="text-gray-600 text-base leading-relaxed">
                  Забота о вашей улыбке начинается с доверия. Именно поэтому мы создаём атмосферу, в
                  которой каждый чувствует себя спокойно и уверенно.
                </p>
              </motion.article>
            </div>

            <motion.figure
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
              viewport={{ once: false, amount: 0.3 }}
              className="flex-shrink-0"
              role="img"
              aria-label="Современная стоматологическая клиника"
            >
              <div
                className="bg-cover bg-center w-96 h-96 rounded-full shadow-2xl"
                style={{ backgroundImage: `url(${ClinicImage})` }}
              />
            </motion.figure>
          </>
        )}
      </div>
    </section>
  )
}

export default About
