import CountUp from './motion/CountUp.jsx';
import lecturerPict1 from "@image/person 1.jpeg";
import lecturerPict2 from "@image/person 2.jpeg";
import lecturerPict3 from "@image/person 3.jpeg";
import lecturerPict4 from "@image/person 4.jpeg";

const LecturersCard = () => {
  return (
    <div className="absolute bottom-1 left-1/2 -translate-x-1/2 z-50 pl-7 pr-4 py-2 rounded-2xl bg-white backdrop-blur-lg border-2 border-white shadow-xl shadow-gray-200 before:w-1 before:h-1/2 before:bg-blue-300 before:rounded-full before:absolute before:top-1/2 before:left-0.5 before:-translate-y-1/2">
      <p className="text-primary font-medium text-nowrap text-lg">Bergabung bersama mereka:</p>

      <div className="profile-wrp flex mt-2">
        <img src={lecturerPict1} alt="lecturer 1" className="size-14 shadow-md shadow-gray-200 border-2 border-white rounded-full" />
        <img src={lecturerPict2} alt="lecturer 2" className="size-14 shadow-md shadow-gray-200 border-2 border-white rounded-full -ml-5" />
        <img src={lecturerPict3} alt="lecturer 3" className="size-14 shadow-md shadow-gray-200 border-2 border-white rounded-full -ml-5" />
        <img src={lecturerPict4} alt="lecturer 4" className="size-14 shadow-md shadow-gray-200 border-2 border-white rounded-full -ml-5" />

        {/* amount of students */}
        <span className="text-blue-700 text-2xl font-bold ml-1 translate-y-1/5 tracking-tight scale-y-110">
          +
          <CountUp
            from={0}
            to={200}
            separator=","
            direction="up"
            duration={1}
            className="count-up-text"
          />
        </span>

      </div>
    </div>
  )
}

export default LecturersCard;