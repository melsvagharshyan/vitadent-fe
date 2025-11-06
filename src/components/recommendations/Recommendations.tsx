import { motion } from 'framer-motion'
import { FaStar, FaQuoteLeft } from 'react-icons/fa'
import Slider from 'react-slick'
import { useMediaQuery } from 'react-responsive'
import { useMemo, useState } from 'react'
import { RecommendationModal } from '~/modals/RecommendationModal'
import { useGetRecommendationsQuery } from '~/app/recommendations/recommendations.api'

const defaultAvatar =
  'https://res.cloudinary.com/dxfqf6fgv/image/upload/v1746967371/orig_sxg7yl.svg'

const Recommendations = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 640px)' })
  const { data: recommendations } = useGetRecommendationsQuery()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const sliderSettings = useMemo(
    () => ({
      infinite: true,
      speed: 500,
      slidesToShow: isMobile ? 1 : 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      dots: true,
      arrows: false,
    }),
    [isMobile],
  )

  return (
    <section id="recommendations" className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
      {/* ===== Header ===== */}
      <header className="max-w-screen-xl mx-auto text-center mb-12">
        <h2 className="text-2xl sm:text-4xl font-bold uppercase font-sans text-[#1DA6E2] tracking-wide">
          Отзывы пациентов
        </h2>
      </header>

      {/* ===== Slider Section ===== */}
      <div className="max-w-screen-xl mx-auto px-2 sm:px-4">
        <Slider {...sliderSettings}>
          {recommendations?.map((rec) => (
            <motion.article
              key={rec._id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="px-2 sm:px-3"
            >
              <div className="flex flex-col bg-white rounded-lg border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden h-[420px] sm:h-[460px]">
                {/* --- Top Section: Avatar & Rating --- */}
                <div className="relative bg-gradient-to-br from-gray-50 to-white p-4 sm:p-6 text-center flex-shrink-0">
                  <div className="flex flex-col items-center">
                    {/* Avatar + Quote Icon */}
                    <div className="relative mb-3">
                      <img
                        src={rec.image?.url || defaultAvatar}
                        alt={`Portrait of ${rec.fullName}`}
                        className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-4 border-white shadow-lg"
                      />
                      <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-gray-100 border-2 border-white rounded-full flex items-center justify-center">
                        <FaQuoteLeft className="text-[#1DA6E2] text-sm" />
                      </div>
                    </div>

                    {/* Name */}
                    <h3 className="text-lg sm:text-xl font-bold text-gray-700 mb-1">
                      {rec.fullName}
                    </h3>

                    {/* Stars */}
                    <div className="flex gap-1 mb-2">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <FaStar
                          key={i}
                          className={`w-4 h-4 sm:w-5 sm:h-5 ${
                            i < rec?.stars ? 'text-yellow-400' : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* --- Text Section --- */}
                <div className="flex flex-col flex-grow px-5 sm:px-6 pb-5 sm:pb-6">
                  <blockquote
                    className="text-gray-700 text-sm sm:text-base leading-relaxed flex-grow flex items-center justify-center text-center overflow-hidden"
                    style={{
                      display: '-webkit-box',
                      WebkitLineClamp: 5,
                      WebkitBoxOrient: 'vertical',
                    }}
                  >
                    “{rec.recommendation}”
                  </blockquote>

                  {/* Decorative Divider */}
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-center">
                      <div className="h-1 w-16 bg-[#1DA6E2] rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </Slider>
      </div>

      {/* ===== Button ===== */}
      <div className="mt-12 flex justify-center">
        <button
          onClick={() => setIsModalOpen(true)}
          className="relative overflow-hidden bg-[#1DA6E2] hover:bg-[#0284e4] text-white font-semibold py-3 px-6 rounded-md flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition duration-300"
        >
          <span className="relative z-10">Оставить отзыв</span>
        </button>
      </div>

      {/* ===== Modal ===== */}
      {isModalOpen && (
        <RecommendationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      )}

      {/* ===== Slick Custom Styles ===== */}
      <style>{`
        .slick-dots li button:before {
          color: #1DA6E2 !important;
          opacity: 0.3;
        }
        .slick-dots li.slick-active button:before {
          color: #1DA6E2 !important;
          opacity: 1;
        }
        .slick-slide > div {
          padding: 0 8px;
        }
        @media (min-width: 640px) {
          .slick-slide > div {
            padding: 0 12px;
          }
        }
      `}</style>
    </section>
  )
}

export default Recommendations
