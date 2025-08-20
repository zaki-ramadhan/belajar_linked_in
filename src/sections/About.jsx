import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Pictures from "@/components/Pictures";

const About = () => {
  // ✅ perbaikan: useState harus array destructuring
  const [isReadMore, setIsReadMore] = useState(false);

  return (
    <section id="about-us" className="relative container bg-background">
      <h1 className="title text-5xl md:text-8xl font-medium text-primary">
        <span className="text-gray-400">
          <span className="block mb-2 md:mb-4 md:text-7xl">💡</span>Apa itu{" "}
        </span>
        Mastering{" "}
        <span className="relative bg-clip-text bg-gradient-to-br from-blue-500 to-blue-800 text-transparent font-semibold ">
          LinkedIn
        </span>{" "}
        for Career Growth?
      </h1>

      {/* pictures stack */}
      <Pictures />

      <div className="text-wrp relative">
        <p
          className={`mt-10 text-xl text-justify md:text-3xl indent-5 leading-relaxed ${isReadMore ? "line-clamp-none pb-0" : "line-clamp-5 pb-18 md:pb-22"
            }`}
        >
          Kelas online <strong>Mastering LinkedIn for Career Growth</strong> adalah
          program yang dirancang untuk membantu mahasiswa, fresh graduate, dan
          profesional muda memanfaatkan{" "}
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 font-semibold hover:underline hover:underline-offset-1"
          >
            LinkedIn
          </a>{" "}
          secara efektif. Kamu akan belajar cara membangun profil yang menarik,
          menulis ringkasan profesional yang kuat, dan menampilkan pengalaman
          dengan cara yang meyakinkan. Selain itu, kelas ini juga membahas
          strategi memperluas koneksi, membuat konten yang meningkatkan
          personal branding, serta tips berinteraksi dengan perekrut. Dengan
          pendekatan praktis dan mudah dipahami, kelas ini akan membuka peluang
          lebih besar untuk diterima kerja, magang, atau mengembangkan karier
          profesional.
        </p>

        {/* Read more / less */}
        {!isReadMore ? (
          <button
            onClick={() => setIsReadMore(true)}
            className="read-more-btn md:text-3xl flex justify-center items-center h-26 bg-gradient-to-t from-background from-60% to-background/0 text-blue-700 hover:text-blue-800 font-medium absolute bottom-0 left-0 right-0 z-20 cursor-pointer "
          >
            Baca Selengkapnya
            <ChevronDown className="ml-2 translate-y-0.5" />
          </button>
        ) : (
          <button
            onClick={() => setIsReadMore(false)}
            className="read-less-btn md:text-3xl mt-4 md:mt-8 text-blue-700 hover:text-blue-800 font-medium inline-flex items-center"
          >
            Baca Lebih Sedikit
            <ChevronDown className="ml-2 -scale-y-100" />
          </button>
        )}
      </div>
    </section>
  );
};

export default About;
