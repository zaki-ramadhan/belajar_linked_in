import Label from "@/components/Label.jsx";
import Button from "@/components/Button.jsx";
import LecturersCard from "@/components/LecturersCard.jsx";

import studentPict from "@image/student bring book.png";

const Hero = () => {
  return (
    <section id="hero" className="px-6 py-26">
      <Label text="#1 Indonesia Linkedin Academy" />

      <h1 className="title mt-5 text-6xl font-bold text-primary">Mastering <span className="bg-clip-text bg-gradient-to-br from-blue-500 to-blue-800 text-transparent">LinkedIn</span> for Career Growth</h1>
      {/* <img src="" alt=""/> */}
      <h2 className="text-xl leading-7 mt-4">
        🚀 Belajar Linkedin dari 0 sampai keterima kerja/magang | End-to-end Linkedin Clinic.
      </h2>

      <Button text="Daftar Sekarang!" />

      <div className="relative image-wrapper mt-14 size-88 overflow-hidden">
        <div className="skew-card bg-radial-[at_0%_0%] from-blue-200 to-80% to-blue-400 w-72 h-full absolute top-1/2 left-[48%] -translate-1/2 -skew-x-8 rounded-4xl -z-30 shadow-lg"></div>
        <div className="skew-card bg-radial-[at_50%_0%] from-blue-300 to-80% to-blue-600 w-72 h-full absolute top-[62%] left-[50%] -translate-1/2 -skew-x-8 rounded-4xl -z-40"></div>
        <div className="skew-card bg-radial-[at_50%_0%] from-blue-300 to-80% to-blue-800 w-72 h-full absolute top-[72%] left-[53%] -translate-1/2 -skew-x-8 rounded-4xl -z-50"></div>

        <img src={studentPict} alt="student bring book image" className="z-40 " />

        <div className="bottom-linear-gradient-overlay bg-gradient-to-t from-white to-white/0 absolute -bottom-1 left-0 right-0 h-40"></div>

        {/* lecturer profiles */}
        <LecturersCard/>

      </div>
    </section>
  )
}

export default Hero
