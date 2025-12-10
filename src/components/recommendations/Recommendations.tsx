import { motion } from 'framer-motion'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import Slider from 'react-slick'
import { useMemo, useRef, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { useGetRecommendationsQuery } from '~/app/recommendations/recommendations.api'
import { RecommendationModal } from '~/modals/RecommendationModal'
import './recommendations.css'

// const defaultAvatar =
//   'https://res.cloudinary.com/dxfqf6fgv/image/upload/v1746967371/orig_sxg7yl.svg'

const Recommendations = () => {
  const { data: recommendations } = useGetRecommendationsQuery()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const sliderRef = useRef<Slider | null>(null)

  const isMobile = useMediaQuery({ query: '(max-width: 640px)' })

  const sliderSettings = useMemo(
    () => ({
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4500,
      arrows: false,
      dots: false,
      centerMode: true,
      centerPadding: '0px',
      adaptiveHeight: true,
      variableWidth: false,
    }),
    [isMobile],
  )

  return (
    <section id="recommendations" className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <header className="max-w-screen-xl mx-auto text-center mb-10">
        <h2 className="text-2xl sm:text-4xl font-bold uppercase font-sans text-[#1DA6E2] tracking-wide">
          Отзывы пациентов
        </h2>
      </header>

      {/* Slider wrapper with custom arrows */}
      <div className="relative max-w-screen-xl mx-auto">
        {/* Left Arrow */}
        <button
          aria-label="Предыдущий отзыв"
          className="testimonial-arrow testimonial-arrow--left"
          onClick={() => sliderRef.current?.slickPrev()}
        >
          <FaChevronLeft className="text-white" />
        </button>
        {/* Right Arrow */}
        <button
          aria-label="Следующий отзыв"
          className="testimonial-arrow testimonial-arrow--right"
          onClick={() => sliderRef.current?.slickNext()}
        >
          <FaChevronRight className="text-white" />
        </button>

        <Slider ref={sliderRef} {...sliderSettings}>
          {recommendations?.map((rec) => (
            <motion.article
              key={rec._id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="px-2 sm:px-4 flex justify-center"
            >
              <div className="bg-[#2B354B] text-white rounded-xl shadow-xl border border-black/10 overflow-hidden max-w-[900px] w-[95%] sm:w-[80%] md:w-[70%] lg:w-[60%] mx-auto min-h-[180px] sm:min-h-[220px]">
                <div className="flex flex-col md:flex-row items-center md:items-stretch gap-6 p-6 sm:p-8">
                  {/* Avatar */}
                  {/* <div className="flex justify-center md:justify-start md:items-center">
                    <div className="relative">
                      <img
                        src={rec.image?.url || defaultAvatar}
                        alt={`Фото пациента ${rec.fullName}`}
                        className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-4 border-white/10 shadow-md mx-auto md:mx-0"
                      />
                      <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-white/10 rounded-full border border-white/20 flex items-center justify-center">
                        <FaQuoteLeft className="text-[#1DA6E2] text-sm" />
                      </div>
                    </div>
                  </div> */}

                  {/* Content */}
                  <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
                    {/* Name on top */}
                    <div className="mb-3 w-full">
                      <span className="text-base sm:text-lg font-semibold text-white/90 block">
                        {rec.fullName}
                      </span>
                    </div>

                    {/* Recommendation text */}
                    <blockquote className="testimonial-quote text-sm sm:text-base leading-relaxed text-center md:text-left">
                      “{rec.recommendation}”
                    </blockquote>

                    {/* Stars at bottom */}
                    <div className="mt-4 flex items-center gap-1 justify-center md:justify-start">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <svg
                          key={i}
                          viewBox="0 0 20 20"
                          fill={i < (rec?.stars || 0) ? '#FFD54A' : '#334155'}
                          className="w-4 h-4 sm:w-5 sm:h-5"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.388 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118l-3.388-2.46a1 1 0 00-1.176 0l-3.388 2.46c-.784.57-1.838-.197-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.044 9.393c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69L9.05 2.927z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </Slider>
      </div>

      {/* Button */}
      <div className="mt-12 flex justify-center">
        <button
          onClick={() => setIsModalOpen(true)}
          className="relative cursor-pointer overflow-hidden bg-[#1DA6E2] hover:bg-[#0284e4] text-white font-semibold py-3 px-6 rounded-md flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition duration-300"
        >
          <span className="relative z-10">Оставить отзыв</span>
        </button>
      </div>

      {isModalOpen && (
        <RecommendationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      )}

      {/* Slick paddings for nicer spacing */}
      <style>{`
        .slick-slide > div { padding: 0 8px; }
        @media (min-width: 640px) { .slick-slide > div { padding: 0 12px; } }
      `}</style>
    </section>
  )
}

export default Recommendations
