import { CiLight } from "react-icons/ci";
import { FaRegLightbulb } from "react-icons/fa";
import { BsFillPencilFill } from "react-icons/bs";
import { AiOutlineCodepen } from "react-icons/ai";

const Futures = () => {
  return (
    <div className="min-h-screen w-full bg-background-500 about-section grid items-center px-20 font-sans text-primary-gray">
      <div>
        <p className="text-6xl font-extrabold leading-relaxed">
          Empowering Minds, Inspiring&nbsp;
          <span className="underline-offset-2 border-b-4 border-primary-orange">
            Futures
          </span>
        </p>
        <p className="py-6"></p>
        <p className="font-serif text-lg">
          Welcome to Univast University, where knowledge meets opportunity and
          dreams take flight. As a renowned institution of higher education, we
          are dedicated to empowering minds and inspiring futures. Our
          commitment to academic excellence, innovative teaching methodologies,
          and a vibrant campus community sets us apart.{" "}
        </p>
        <div className="grid grid-cols-4 gap-12 py-20">
          <div className="p-10 bg-orange-600 rounded-2xl shadow-xl">
            <CiLight className="text-7xl text-p-white" />
            <h1 className="text-2xl text-p-white pt-3 font-bold">
              Explore Our Programs, we offer an extensive range.
            </h1>
            <p className="pt-5 font-serif text-lg text-p-white">
              From undergraduate degrees to specialized graduate studies, our
              curriculum is crafted to provide a comprehensive educational
              experience.
            </p>
          </div>
          <div className="p-10 bg-violet-600 rounded-2xl shadow-xl">
            <FaRegLightbulb className="text-7xl text-p-white" />
            <h1 className="text-2xl text-p-white pt-3 font-bold">
              Faculty Excellence
            </h1>
            <p className="pt-5 font-serif text-lg text-p-white">
              Explore our transformative programs, distinguished faculty,
              state-of-the-art facilities, and a supportive learning environment
              that fosters personal growth and intellectual curiosity.
            </p>
          </div>
          <div className="p-10 bg-white rounded-2xl shadow-xl text-primary-gray">
            <BsFillPencilFill className="text-7xl " />
            <h1 className="text-2xl pt-3 font-bold">
              State-of-the-Art Facilities
            </h1>
            <p className="pt-5 font-serif text-lg ">
              Our faculty&apos;s commitment to fostering intellectual curiosity
              and critical thinking ensures that you receive a well-rounded
              education and are prepared for the challenges of the future.
            </p>
          </div>
          <div className="p-10 bg-blue-600 rounded-2xl shadow-xl text-white">
            <AiOutlineCodepen className="text-7xl" />
            <h1 className="text-2xl pt-3 font-bold">
              Knowledge and skills you need to succeed
            </h1>
            <p className="pt-5 font-serif text-lg">
              Our commitment to academic excellence, innovative teaching
              methodologies, and a vibrant campus community sets us apart.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Futures;
