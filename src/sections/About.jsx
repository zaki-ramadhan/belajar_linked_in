import about1 from "@image/two people dealing.jpeg";
import about2 from "@image/zoom meeting.jpeg";
import about3 from "@image/two people talking.jpeg";

const About = () => {
  return (
    <section id="about-us" className="relative container py-16 bg-background pv overflow-visible">
      <h1 className="title text-5xl font-medium text-primary">
        <span className="text-gray-400">Apa itu </span>Mastering <span className="relative bg-clip-text bg-gradient-to-br from-blue-500 to-blue-800 text-transparent font-semibold ">LinkedIn</span> for Career Growth?
      </h1>

      <div className="picture-wrp flex justify-center -space-x-10 mt-8">
        <img src={about1} alt="Illustration of professionals studying LinkedIn" className="rounded-3xl -rotate-6 translate-y-6 grayscale brightness-75 blur-[1px]" />
        <img src={about2} alt="Illustration of professionals studying LinkedIn" className="rounded-3xl duration-300 z-10 hover:scale-103" />
        <img src={about3} alt="Illustration of professionals studying LinkedIn" className="rounded-3xl rotate-6 translate-y-6 grayscale brightness-75 blur-[1px]" />

      </div>
      
      <p className="mt-10 text-xl indent-5 leading-relaxed">Kelas online <strong>Mastering LinkedIn for Career Growth</strong> adalah program yang dirancang untuk membantu mahasiswa, fresh graduate, dan profesional muda memanfaatkan <a href="https://www.linkedin.com/" target="_blank" className="text-blue-700 font-semibold hover:underline hover:underline-offset-1">LinkedIn</a> secara efektif. Kamu akan belajar cara membangun profil yang menarik, menulis ringkasan profesional yang kuat, dan menampilkan pengalaman dengan cara yang meyakinkan. Selain itu, kelas ini juga membahas strategi memperluas koneksi, membuat konten yang meningkatkan personal branding, serta tips berinteraksi dengan perekrut. Dengan pendekatan praktis dan mudah dipahami, kelas ini akan membuka peluang lebih besar untuk diterima kerja, magang, atau mengembangkan karier profesional.</p>

    </section>
  )
}

export default About
