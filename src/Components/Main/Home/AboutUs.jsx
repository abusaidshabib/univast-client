import { CiLight } from "react-icons/ci";
import { FaRegLightbulb } from "react-icons/fa";
import { BsFillPencilFill } from "react-icons/bs";
import { AiOutlineCodepen } from "react-icons/ai";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background-500 grid items-center px-20">
      <div>
        <p className="text-5xl text-primary-500 font-serif leading-relaxed">
          Empowering Minds,
          <span className="text-p-white">
            {" "}
            Inspiring{" "}
            <span className="underline-offset-2 border-b-4 border-secondary-500">
              Futures
            </span>
          </span>
        </p>
        <p className="py-6"></p>
        <p className="text-p-white font-sans text-lg">
          Welcome to Univast University, where knowledge meets opportunity and
          dreams take flight. As a renowned institution of higher education, we
          are dedicated to empowering minds and inspiring futures. Our
          commitment to academic excellence, innovative teaching methodologies,
          and a vibrant campus community sets us apart.{" "}
        </p>
        <div className="grid grid-cols-4 gap-20 font-serif pt-20">
          <div className="p-10 bg-cyan-600 rounded-md">
            <CiLight className="text-7xl text-p-white" />
            <h1 className="text-2xl text-p-white pt-3 font-semibold">
              Explore Our Programs, we offer an extensive range.
            </h1>
            <p className="pt-5 font-sans text-p-white">
              From undergraduate degrees to specialized graduate studies, our
              curriculum is crafted to provide a comprehensive educational
              experience.
            </p>
          </div>
          <div className="p-10 bg-violet-600 rounded-md">
            <FaRegLightbulb className="text-7xl text-p-white" />
            <h1 className="text-2xl text-p-white pt-3 font-semibold">
              Faculty Excellence
            </h1>
            <p className="pt-5 font-sans text-p-white">
              Explore our transformative programs, distinguished faculty,
              state-of-the-art facilities, and a supportive learning environment
              that fosters personal growth and intellectual curiosity.
            </p>
          </div>
          <div className="p-10 bg-blue-600 rounded-md">
            <BsFillPencilFill className="text-7xl text-p-white" />
            <h1 className="text-2xl text-p-white pt-3 font-semibold">
              State-of-the-Art Facilities
            </h1>
            <p className="pt-5 font-sans text-p-white">
              Our faculty's commitment to fostering intellectual curiosity and
              critical thinking ensures that you receive a well-rounded
              education and are prepared for the challenges of the future.
            </p>
          </div>
          <div className="p-10 bg-p-white rounded-md text-background-500">
            <AiOutlineCodepen className="text-7xl" />
            <h1 className="text-2xl pt-3 font-semibold">
              Knowledge and skills you need to succeed
            </h1>
            <p className="pt-5 font-sans">
              Our commitment to academic excellence, innovative teaching
              methodologies, and a vibrant campus community sets us apart.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
