import Button from '@/components/Button.jsx';
import curvedLine from '@image/curved-line.svg'

const CallToAction = () => {
  return (
    <section id="cta" className="relative container bg-radial-[at_50%_100%] from-blue-950 from-20% to-blue-900 flex flex-col justify-center overflow-hidden">
      <img src={curvedLine} alt="curved line" className='absolute top-1/2 left-0 -translate-y-1/2 opacity-15 scale-240 blur-[3px]' />
      <h1 className="title text-5xl md:text-7xl text-center font-medium text-white z-20">
        Tunggu Apalagi?
      </h1>
      <p className="text-lg md:text-3xl xl:text-2xl md:leading-relaxed text-center text-gray-300 mt-5 md:mt-7 lg:mt-8 z-20">
        Mulai langkah baru untuk membangun karier lebih percaya diri, terarah, dan penuh peluang.
      </p>
      <Button text="Daftar Sekarang" className="mt-7 md:mt-9 lg:mt-12 px-16 md:px-20 xl:px-18 py-2 max-w-fit place-self-center z-20" />
    </section>
  )
}

export default CallToAction
