import { Link } from "react-router-dom";
import { SiHtmlacademy } from "react-icons/si";
import { FaChalkboardTeacher } from "react-icons/fa";
import { MdOutlineAddTask } from "react-icons/md";
import { RiAdminLine } from "react-icons/ri";
import { BiBookAlt, BiCollection } from "react-icons/bi";
import { BsCashCoin, BsQuestionDiamond } from "react-icons/bs";

const ControlPanel = () => {
  return (
    <div>
      <div className="grid grid-cols-2 bg-secondary-blue h-20 px-20 sticky top-0 z-50 font-sans">
        <Link to="/" className="flex items-center cursor-pointer">
          <span className="text-primary-white cursor-pointer text-4xl font-bold pr-1">
            UNI
          </span>
          <span className="border-l-2 border-primary-orange pl-1">
            <span className="text-accent-blue cursor-pointer font-semibold text-lg leading-none">
              VAST
            </span>{" "}
            <br />
            <span className="text-primary-white cursor-pointer leading-none text-base">
              University
            </span>
          </span>
        </Link>
        <Link className="justify-end flex items-center text-p-white underline hover:no-underline" to="/">Go to home</Link>
      </div>
      <div className="bg-gray-200 p-24 min-h-screen">
        <p className="text-4xl font-semibold text-center pb-14">Applications</p>
        <div className="grid grid-cols-4 gap-10 text-gray-900 font-sans max-w-2xl mx-auto">
          <Link className="w-full" to="/student">
            <p className="text-5xl grid place-content-center text-p-white">
              <span className="bg-secondary-blue hover:bg-primary-blue p-3 rounded-full">
                <SiHtmlacademy />
              </span>
            </p>
            <p className="text-xl grid place-content-center font-medium">
              Student
            </p>
          </Link>
          <Link className="w-full" to="/teacher">
            <p className="text-5xl grid place-content-center text-p-white">
              <span className="bg-secondary-blue hover:bg-primary-blue p-3 rounded-full">
                <FaChalkboardTeacher />
              </span>
            </p>
            <p className="text-xl grid place-content-center font-medium">
              Teacher
            </p>
          </Link>
          <Link className="w-full" to="/enroll">
            <p className="text-5xl grid place-content-center text-p-white">
              <span className="bg-secondary-blue hover:bg-primary-blue p-3 rounded-full">
                <MdOutlineAddTask />
              </span>
            </p>
            <p className="text-xl grid place-content-center font-medium">
              Enroll
            </p>
          </Link>
          <Link className="w-full" to="/admin">
            <p className="text-5xl grid place-content-center text-p-white">
              <span className="bg-secondary-blue hover:bg-primary-blue p-3 rounded-full">
                <RiAdminLine />
              </span>
            </p>
            <p className="text-xl grid place-content-center font-medium">
              Admin
            </p>
          </Link>
          <Link className="w-full" to="/course">
            <p className="text-5xl grid place-content-center text-p-white">
              <span className="bg-secondary-blue hover:bg-primary-blue p-3 rounded-full">
                <BiBookAlt />
              </span>
            </p>
            <p className="text-xl grid place-content-center font-medium">
              Courses
            </p>
          </Link>
          <Link className="w-full" to="/exam">
            <p className="text-5xl grid place-content-center text-p-white">
              <span className="bg-secondary-blue hover:bg-primary-blue p-3 rounded-full">
                <BsQuestionDiamond />
              </span>
            </p>
            <p className="text-xl grid place-content-center font-medium">
              Exam
            </p>
          </Link>
          <Link className="w-full" to="/financial">
            <p className="text-5xl grid place-content-center text-p-white">
              <span className="bg-secondary-blue hover:bg-primary-blue p-3 rounded-full">
                <BsCashCoin />
              </span>
            </p>
            <p className="text-xl grid place-content-center font-medium">
              Financial
            </p>
          </Link>
          <Link className="w-full" to="/resource">
            <p className="text-5xl grid place-content-center text-p-white">
              <span className="bg-secondary-blue hover:bg-primary-blue p-3 rounded-full">
                <BiCollection />
              </span>
            </p>
            <p className="text-xl grid place-content-center font-medium">
              Resource
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ControlPanel;
