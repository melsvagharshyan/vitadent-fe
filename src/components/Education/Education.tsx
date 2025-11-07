import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { ChevronLeft } from 'lucide-react'
import Certifications from '../certifications/Certifications'
import Licenses from '../certifications/Licenses'
import Layout from '../layout/Layout'

const Education = () => {
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
      <div className="min-h-screen  bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-xl mx-auto">
          {/* Back Button */}
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
            <h2 className="text-3xl sm:text-5xl font-bold uppercase font-sans text-[#1DA6E2] tracking-wide mb-4">
              ЛИЦЕНЗИИ И СЕРТИФИКАТЫ
            </h2>
          </header>

          {/* Content */}
          <div className="w-full mt-16 sm:mt-20">
            <Certifications />
          </div>

          <Licenses />
        </div>
      </div>
    </Layout>
  )
}

export default Education
