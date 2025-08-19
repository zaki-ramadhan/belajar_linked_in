import { benefits } from "@/data/benefitsData.js";

const BenefitCard = () => {
  return (
    benefits.map((item) => (
      <div key={item.id} className="benefit-card group">
        <div className="img-wrp relative">
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

export default BenefitCard