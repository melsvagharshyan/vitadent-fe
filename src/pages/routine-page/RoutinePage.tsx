import { useNavigate } from 'react-router-dom'
import { ChevronLeft } from 'lucide-react'
import Layout from '~/components/layout/Layout'
import { useEffect } from 'react'
import { specialistImages } from '~/components/routine/utils/constants'

const RoutinePage = () => {
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleBack = () => {
    if (window.history.state?.idx > 0) navigate(-1)
    else navigate('/')
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
            <h1 className="text-3xl sm:text-5xl font-bold uppercase font-sans bg-gradient-to-r text-[#1DA6E2] bg-clip-text mb-4">
              Наши специалисты
            </h1>
            <p className="text-gray-600 text-lg sm:text-xl max-w-3xl mx-auto">
              Профессиональные стоматологи клиники Вита Дент. Каждый врач обладает высокой
              квалификацией и опытом в своей специализации.
            </p>
          </header>

          {/* Images Grid with blurred overlay */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {specialistImages.map((item) => (
              <div
                key={item.id}
                className="relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 w-full flex h-80"
              >
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                {/* Blurred info overlay */}
                <div className="absolute bottom-0 left-0 w-full p-4 bg-black/30 backdrop-blur-xs text-white">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm line-clamp-4">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default RoutinePage
