import BenefitCard from "@/components/BenefitCard"

const Benefits = () => {
  return (
    <section id="benefits" className="relative container bg-white">
      <h1 className="title text-5xl md:text-8xl xl:text-7xl font-medium text-primary">
        <span className="block mb-2 md:mb-4 md:text-7xl xl:text-6xl">🚀</span>
        <span className="text-gray-400">Manfaat join Kelas </span>Mastering <span className="relative bg-clip-text bg-gradient-to-br from-blue-500 to-blue-800 text-transparent font-semibold ">LinkedIn</span> for Career Growth
      </h1>

      {/* benefits */}
      <div className="benefits-wrp grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-8 mt-10 md:mt-14">
        <BenefitCard />
      </div>
    </section>
  )
}

export default Benefits
