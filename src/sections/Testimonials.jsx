import TestimonialsCard from '@/components/TestimonialsCard.jsx';

const Testimonials = () => {
  return (
    <section id="testimonials" className="relative container bg-background">
      <h1 className="title text-5xl md:text-8xl font-medium text-primary">
        <span className="block mb-2 md:mb-4 md:text-7xl">🤝</span>Testimoni <span className="relative bg-clip-text bg-gradient-to-br from-blue-500 to-blue-800 text-transparent font-semibold ">Nyata, Hasil</span> Nyata
      </h1>
      <p className="mt-4 md:mt-6 text-lg md:text-3xl md:leading-relaxed text-gray-500">
        Lebih dari <span className="font-semibold text-primary">1.000</span> alumni
        telah merasakan dampaknya—profil lebih profesional, koneksi bertambah,
        dan peluang karier meningkat.
      </p>

      <h2 className="mt-14 mb-8 text-3xl md:text-6xl font-medium">Apa kata mereka?</h2>
      <TestimonialsCard />
    </section>
  )
}

export default Testimonials
