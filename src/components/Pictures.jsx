import about1 from "@image/two people dealing.jpeg";
import about2 from "@image/zoom meeting.jpeg";
import about3 from "@image/two people talking.jpeg";

const Pictures = () => {
  return (
    <div className="picture-wrp flex justify-center -space-x-10 mt-8 md:mt-14 lg:mt-20">
      <img
        src={about1}
        alt="Illustration of professionals studying LinkedIn"
        className="aspect-4/3 md:aspect-7/4 lg:aspect-8/4 rounded-3xl md:rounded-5xl -rotate-6 md:-rotate-10 translate-y-6 md:translate-y-12 grayscale brightness-75 blur-[1px] shadow-2xl shadow-gray-100"
      />
      <img
        src={about2}
        alt="Illustration of professionals studying LinkedIn"
        className="outline-4 md:outline-12 outline-white aspect-4/3 md:aspect-7/4 lg:aspect-8/4 rounded-3xl md:rounded-5xl shadow-xl shadow-black/10 duration-300 z-10"
      />
      <img
        src={about3}
        alt="Illustration of professionals studying LinkedIn"
        className="aspect-4/3 md:aspect-7/4 lg:aspect-8/4 rounded-3xl md:rounded-5xl rotate-6 md:rotate-10 translate-y-6 md:translate-y-12 grayscale brightness-75 blur-[1px] shadow-2xl shadow-gray-100"
      />
    </div>
  );
};

export default Pictures;