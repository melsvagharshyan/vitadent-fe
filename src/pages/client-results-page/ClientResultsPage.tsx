import { useNavigate } from 'react-router-dom'
import { ChevronLeft } from 'lucide-react'
import { detailedClientResults } from '~/components/routine/utils/constants'
import Layout from '~/components/layout/Layout'
import { useEffect } from 'react'

const ClientResultsPage = () => {
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleBack = () => {
    if (window.history.state?.idx > 0) navigate(-1)
    else navigate('/')
  }

  const handleConsultationClick = () => {
    navigate('/')
    setTimeout(() => {
      const contactsSection = document.getElementById('contacts')
      if (contactsSection) {
        contactsSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      }
    }, 100)
  }

  return (
    <Layout>
      <div className="min-h-screen pt-20 bg-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-xl mx-auto">
          {/* Header with back button */}
          <div className="flex items-center mb-10">
            <button
              onClick={handleBack}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-white bg-[#1DA6E2] hover:bg-[#1691c7] shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
              <span className="font-semibold tracking-wide">Назад</span>
            </button>
          </div>

          {/* Page Title */}
          <header className="text-center mb-12">
            <h1 className="text-3xl sm:text-5xl font-bold uppercase font-sans bg-gradient-to-r text-[#1DA6E2]  bg-clip-text mb-4">
              Результаты наших пациентов
            </h1>
            <p className="text-gray-600 text-lg sm:text-xl max-w-3xl mx-auto">
              Галерея успешных лечений. Каждый случай демонстрирует профессиональный подход и
              высокое качество наших услуг.
            </p>
          </header>

          {/* Results Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {detailedClientResults.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-white"
              >
                <div className="relative h-80 sm:h-96">
                  <div className="absolute top-0 left-0 w-full h-1/2 overflow-hidden">
                    <img
                      src={item.before}
                      alt={`До лечения - ${item.title}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-3 left-3 bg-[#1DA6E2]/40 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                      ДО
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-1/2 overflow-hidden">
                    <img
                      src={item.after}
                      alt={`После лечения - ${item.title}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-3 left-3 bg-[#1DA6E2]/40 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                      ПОСЛЕ
                    </div>
                  </div>
                  <div className="absolute top-1/2 left-0 w-full h-1 bg-white transform -translate-y-1/2 z-10 shadow-md"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                {/* 
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-[#1DA6E2] transition-colors duration-200">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{item.description}</p>

                  <div className="flex justify-between items-center pt-3 border-t border-gray-100">
                    <div className="text-xs text-gray-500">
                      <span className="font-semibold">Возраст:</span> {item.patientAge}
                    </div>
                    <div className="text-xs text-gray-500">
                      <span className="font-semibold">Срок:</span> {item.treatmentDuration}
                    </div>
                  </div>
                </div> */}
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Хотите такой же результат?</h3>
              <p className="text-gray-600 mb-6">
                Запишитесь и начните путь к здоровой и красивой улыбке уже сегодня
              </p>
              <button
                onClick={handleConsultationClick}
                className="relative cursor-pointer overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-gradient-to-r from-[#1DA6E2] to-[#0284e4] text-white py-3 px-8 rounded-md font-semibold group transform hover:scale-105"
              >
                <span className="relative z-10">Записаться</span>
                <span className="absolute left-0 top-0 h-full w-full transform -translate-x-full bg-white opacity-10 group-hover:translate-x-full transition-transform duration-700 ease-in-out"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ClientResultsPage
