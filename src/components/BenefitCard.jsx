import { benefits } from "@/data/benefitsData.js";

const BenefitCard = () => {
  return (
    benefits.map((item) => (
      <div key={item.id} className="benefit-card group">
        <div className="img-wrp relative">
          <span className="card-number text-2xl md:text-4xl lg:text-3xl xl:text-2xl font-semibold size-12 md:size-20 lg:size-16 xl:size-14 bg-blue-500 group-odd:bg-gray-50 text-white group-odd:text-blue-500 backdrop-blur-xs rounded-2xl md:rounded-3xl lg:rounded-2xl border-2 border-white absolute bottom-3 left-3 place-content-center text-center">{item.id}</span>
          <img src={item.image} alt={item.alt} className="w-full rounded-3xl md:rounded-5xl aspect-video" />
        </div>
        <div className="bg-white py-5 my-2">
          <h2 className="text-2xl md:text-5xl xl:text-3xl font-medium">{item.title}</h2>
          <p className="text-lg md:text-3xl lg:text-2xl xl:text-xl md:leading-relaxed text-gray-500 md:pt-2">
            {item.desc}
          </p>
        </div>
      </div>
    ))
  )
}

export default BenefitCard