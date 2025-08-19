import { benefits } from "@/data/benefitsData.js";

const BenefitsCard = () => {
  return (
    benefits.map((item) => (
      <div key={item.id} class="benefit-card group">
        <div class="img-wrp relative">
          <span className="card-number text-2xl font-semibold size-12 bg-blue-600/90 group-odd:bg-gray-50 text-white group-odd:text-blue-500 backdrop-blur-xs rounded-2xl border-2 border-white absolute bottom-3 left-3 place-content-center text-center">{item.id}</span>
          <img src={item.image} alt={item.alt} className="rounded-3xl aspect-video" />
        </div>
        <div className="bg-white py-5 mb-2">
          <h2 className="text-2xl font-medium">{item.title}</h2>
          <p className="text-lg text-gray-500">{item.desc}</p>
        </div>
      </div>
    ))
  )
}

const Benefits = () => {
  return (
    <section id="benefits" className="relative container bg-white">
      <h1 className="title text-5xl font-medium text-primary">
        <span className="text-gray-400"><span className="text-4xl block mb-2">🚀</span>Manfaat join Kelas </span>Mastering <span className="relative bg-clip-text bg-gradient-to-br from-blue-500 to-blue-800 text-transparent font-semibold ">LinkedIn</span> for Career Growth
      </h1>

      {/* benefits */}
      <div class="benefits-wrp grid grid-cols-1 gap-2 mt-10">
        <BenefitsCard />
      </div>
    </section>
  )
}

export default Benefits
