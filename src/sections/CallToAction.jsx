import Button from '@/components/Button.jsx';

const CallToAction = () => {
  return (
    <section id="call-to-action" className="relative container bg-radial-[at_50%_100%] from-blue-950 from-20% to-blue-900 flex flex-col justify-center">
      <h1 className="title text-5xl text-center font-medium text-white">
        Tunggu Apalagi?
      </h1>
      <p className="text-lg text-center text-gray-300 mt-5  ">
        Mulai langkah baru untuk membangun karier lebih percaya diri, terarah, dan penuh peluang.
      </p>
      <Button text="Daftar" className="mt-7 px-24 py-2 max-w-fit place-self-center"/>
    </section>
  )
}

export default CallToAction
