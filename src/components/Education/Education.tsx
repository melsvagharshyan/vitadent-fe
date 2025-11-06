import Certifications from '../certifications/Certifications'

const Education = () => {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="w-full bg-white py-20 px-4 sm:px-6 flex flex-col items-center"
    >
      <h2 className="text-2xl sm:text-4xl text-center font-bold mb-12 uppercase font-sans text-[#1DA6E2] tracking-wide">
        ЛИЦЕНЗИИ И СЕРТИФИКАТЫ
      </h2>

      <div className="w-full max-w-screen-xl grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10"></div>

      <div className="w-full mt-16 sm:mt-20">
        <Certifications />
      </div>
    </section>
  )
}

export default Education
