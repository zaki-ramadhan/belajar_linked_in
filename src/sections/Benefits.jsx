import BenefitCard from "@/components/BenefitCard"

const Benefits = () => {
  return (
    <section id="benefits" className="relative container bg-white">
      <h1 className="title text-5xl font-medium text-primary">
        <span className="text-gray-400"><span className="text-5xl block mb-2">🚀</span>Manfaat join Kelas </span>Mastering <span className="relative bg-clip-text bg-gradient-to-br from-blue-500 to-blue-800 text-transparent font-semibold ">LinkedIn</span> for Career Growth
      </h1>

      {/* benefits */}
      <div className="benefits-wrp grid grid-cols-1 gap-2 mt-10">
        <BenefitCard />
      </div>
    </section>
  )
}

export default Benefits
