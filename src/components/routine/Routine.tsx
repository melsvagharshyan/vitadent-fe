import { useNavigate } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'
import { useMemo } from 'react'
import Slider from 'react-slick'
import { clientResults, specialistImages } from './utils/constants'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Routine = () => {
  const navigate = useNavigate()
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
  const isTablet = useMediaQuery({ query: '(max-width: 1024px)' })

  const sliderSettings = useMemo(
    () => ({
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: isMobile ? 1 : isTablet ? 2 : 3,
      slidesToScroll: 1,
      autoplay: isMobile ? true : false,
      autoplaySpeed: 3000,
      arrows: false,
      responsive: [
        { breakpoint: 768, settings: { slidesToShow: 1 } },
        { breakpoint: 1024, settings: { slidesToShow: 2 } },
      ],
    }),
    [isMobile, isTablet],
  )

  const handleShowMore = () => navigate('/routine')
  const handleShowMoreResults = () => navigate('/client-results')

  return (
    <section id="routine" className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
      {/* Routine Header */}
      <header className="max-w-screen-xl mx-auto text-center mb-10 sm:mb-12">
        <h2 className="text-2xl sm:text-4xl font-bold uppercase font-sans text-[#1DA6E2]">
          Наши специалисты
        </h2>
        <p className="text-gray-600 text-base sm:text-lg mt-4 max-w-2xl mx-auto">
          Профессионалы, заботящиеся о вашей улыбке
        </p>
      </header>

      {/* Routine Slider */}
      <div className="max-w-screen-xl mx-auto">
        <Slider {...sliderSettings}>
          {specialistImages.map((item) => (
            <div key={item.id} className="px-2">
              <div className="h-80  lg:h-80 flex">
                <div className="relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 w-full flex h-full">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" />

                  {/* Blurred info overlay */}
                  <div className="absolute bottom-0 left-0 w-full p-4 bg-black/30 backdrop-blur-xs text-white">
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-sm line-clamp-4">{item.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Show More Button */}
      <div className="mt-10 sm:mt-16 flex justify-center">
        <button
          onClick={handleShowMore}
          className="relative overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer bg-[#1DA6E2] hover:bg-[#0284e4] text-white py-3 px-8 rounded-md font-semibold group transform hover:scale-105"
        >
          <span className="relative z-10">Показать больше</span>
          <span className="absolute left-0 top-0 h-full w-full transform -translate-x-full bg-white opacity-10 group-hover:translate-x-full transition-transform duration-700 ease-in-out"></span>
        </button>
      </div>

      {/* Client Results Section */}
      <div className="mt-20 pt-16">
        <header className="max-w-screen-xl mx-auto text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-4xl font-bold uppercase font-sans text-[#1DA6E2]">
            Результаты наших пациентов
          </h2>
          <p className="text-gray-600 text-base sm:text-lg mt-4 max-w-2xl mx-auto">
            Фотографии до и после лечения - наглядное подтверждение качества нашей работы
          </p>
        </header>

        {/* Client Results Slider */}
        <div className="max-w-screen-xl mx-auto">
          <Slider {...sliderSettings}>
            {clientResults.map((item) => (
              <div key={item.id} className="px-2">
                {/* SAME wrapper heights as routine items so all slides match */}
                <div className="h-56 sm:h-64 md:h-72 lg:h-80 flex">
                  <div className="relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 bg-white w-full flex flex-col h-full">
                    {/* Before/After Images - keep image area proportional */}
                    <div className="relative flex-shrink-0 h-1/2 overflow-hidden">
                      <div className="absolute top-0 left-0 w-full h-full">
                        <img
                          src={item.before}
                          alt={`До лечения - ${item.title}`}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-2 left-2 bg-[#1DA6E2]/60 text-white px-2 py-1 rounded text-xs font-semibold">
                          ДО
                        </div>
                      </div>
                    </div>

                    <div className="relative flex-shrink-0 h-1/2 overflow-hidden">
                      <div className="absolute top-0 left-0 w-full h-full">
                        <img
                          src={item.after}
                          alt={`После лечения - ${item.title}`}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-2 left-2 bg-[#1DA6E2]/60 text-white px-2 py-1 rounded text-xs font-semibold">
                          ПОСЛЕ
                        </div>
                      </div>
                    </div>

                    {/* Text area - fixed space at bottom */}
                    <div className="p-4 flex-none">
                      <h3 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h3>
                      <p className="text-gray-600 text-sm mb-2 line-clamp-2">{item.description}</p>
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>Возраст: {item.patientAge}</span>
                        <span>Лечение: {item.treatmentDuration}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* View All Results Button */}
        <div className="mt-10 sm:mt-16 flex justify-center">
          <button
            onClick={handleShowMoreResults}
            className="relative overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer bg-[#1DA6E2] hover:bg-[#0284e4] text-white py-3 px-8 rounded-md font-semibold group transform hover:scale-105"
          >
            <span className="relative z-10">Смотреть все результаты</span>
            <span className="absolute left-0 top-0 h-full w-full transform -translate-x-full bg-white opacity-10 group-hover:translate-x-full transition-transform duration-700 ease-in-out"></span>
          </button>
        </div>
      </div>

      {/* Dots Color */}
      <style>{`
        .slick-dots li button:before {
          color: #1DA6E2 !important;
          opacity: 0.3;
        }
        .slick-dots li.slick-active button:before {
          color: #1DA6E2 !important;
          opacity: 1;
        }
        /* line-clamp fallback if not using the plugin */
        .line-clamp-2 { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
        .line-clamp-3 { display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }
      `}</style>
    </section>
  )
}

export default Routine
