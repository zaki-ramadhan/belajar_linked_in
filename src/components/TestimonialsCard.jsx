import { testimonials } from "@/data/testimonialsData.js";

const TestimonialsCard = () => {
    return (
        <div className="tertimonial-cards-wrp group ">
            {testimonials.map((item) => (
                <div
                    key={item.id}
                    className="testimonial-card mt-5 md:mt-16 flex gap-5 md:gap-8"
                >
                    <img src={item.pfp} alt={`Profile ${item.name}`} className="relative size-30 md:size-44 rounded-2xl md:rounded-4xl border-4 border-white shadow-xl rotate-5 duration-150 hover:rotate-0" />

                    <div className="texts-wrp flex flex-col gap-1 md:gap-3">
                        <div className="name-status-wrp w-full flex justify-between">
                            <h3 className="name font-medium text-lg md:text-4xl line-clamp-1">{item.name}</h3>
                            <span className="text-sm md:text-xl font-medium px-2 py-1 rounded-full bg-blue-100/80 text-blue-600 border border-blue-500">Alumni</span>
                        </div>
                        <p className="line-clamp-3 md:text-2xl md:leading-relaxed">{item.msg}</p>
                        <span className="text-sm md:text-xl mt-2 text-gray-500 text-right place-self-end">{item.date}</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TestimonialsCard;
