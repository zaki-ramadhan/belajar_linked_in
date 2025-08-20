import { testimonials } from "@/data/testimonialsData.js";

const TestimonialsCard = () => {
    return (
        <div className="tertimonial-cards-wrp group mb-4 grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-10 md:gap-y-3 lg:gap-y-10">
            {testimonials.map((item) => (
                <div
                    key={item.id}
                    className="testimonial-card md:mt-16 xl:mt-6 flex gap-5 md:gap-10"
                >
                    <img src={item.pfp} alt={`Profile ${item.name}`} className="relative size-30 md:size-48 lg:size-46 rounded-2xl md:rounded-4xl border-4 border-white shadow-xl rotate-5 duration-150 hover:rotate-0 active:rotate-0 " />

                    <div className="texts-wrp flex flex-col gap-1 md:gap-4">
                        <div className="name-status-wrp w-full flex justify-between">
                            <h3 className="name font-medium text-lg md:text-4xl xl:text-3xl line-clamp-1">{item.name}</h3>
                            <span className="text-sm md:text-2xl xl:text-base font-medium px-2 py-1 rounded-full bg-blue-100/80 text-blue-600 border border-blue-500 flex justify-center items-center">Alumni</span>
                        </div>
                        <p className="line-clamp-3 md:text-3xl xl:text-xl md:leading-relaxed text-gray-600">{item.msg}</p>
                        <span className="text-sm md:text-2xl xl:text-base mt-2 text-gray-500 text-right place-self-end">{item.date}</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TestimonialsCard;
