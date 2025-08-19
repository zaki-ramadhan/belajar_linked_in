import Button from '@/components/Button.jsx';
import curvedLine from '@image/curved-line.svg'

const CallToAction = () => {
  return (
    <section id="call-to-action" className="relative container bg-radial-[at_50%_100%] from-blue-950 from-20% to-blue-900 flex flex-col justify-center overflow-hidden">
      <img src={curvedLine} alt="curved line" className='absolute top-1/2 left-0 -translate-y-1/2 opacity-15 scale-240 blur-[1px]'/>
      <h1 className="title text-6xl text-center font-medium text-white z-20">
        Tunggu Apalagi?
      </h1>
      <p className="text-lg text-center text-gray-300 mt-5 z-20">
        Mulai langkah baru untuk membangun karier lebih percaya diri, terarah, dan penuh peluang.
      </p>
      <Button text="Daftar" className="mt-7 px-24 py-2 max-w-fit place-self-center z-20" />
    </section>
  )
}

export default CallToAction
