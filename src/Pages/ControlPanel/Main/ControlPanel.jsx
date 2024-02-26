import { Link } from "react-router-dom";
import { IoIosLogOut } from "react-icons/io";
import { MdOutlineAddTask } from "react-icons/md";
import { RiAdminLine } from "react-icons/ri";
import { BiBookAlt, BiCollection } from "react-icons/bi";
import { BsCashCoin, BsQuestionDiamond } from "react-icons/bs";
import { useContext } from "react";
import { AuthContext } from "../../../Context/UserContext";

const ControlPanel = () => {
    const { logOut } = useContext(AuthContext);
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
        <Link
          className="justify-end flex items-center text-p-white underline hover:no-underline"
          to="/"
        >
          Go to home
        </Link>
      </div>
      <div className="bg-gray-200 min-h-[calc(100vh-5rem)] flex flex-col justify-center items-center">
        <p className="text-4xl font-semibold text-center pb-14">Applications</p>
        <div className="grid grid-cols-2 gap-10 divide-x-2 divide-primary-blue text-gray-900 font-sans mx-auto">
          <div className="justify-self-end flex flex-col gap-2">
            <Link
              className="w-80 transition-all duration-300 bg-accent-blue/70 hover:bg-secondary-blue border-2 border-secondary-blue hover:text-p-white rounded-lg flex"
              to="/admin/home"
            >
              <p className="text-5xl grid place-content-center text-p-white">
                <span className="p-3">
                  <RiAdminLine />
                </span>
              </p>
              <p className="text-xl grid place-content-center font-medium">
                Admin Panel
              </p>
            </Link>
            <Link
              className="w-80 transition-all duration-300 bg-accent-blue/70 hover:bg-secondary-blue border-2 border-secondary-blue hover:text-p-white rounded-lg flex"
              to="/enroll/home"
            >
              <p className="text-5xl grid place-content-center text-p-white">
                <span className="p-3">
                  <MdOutlineAddTask />
                </span>
              </p>
              <p className="text-xl grid place-content-center font-medium">
                Enroll Management
              </p>
            </Link>

            <Link
              className="w-80 transition-all duration-300 bg-accent-blue/70 hover:bg-secondary-blue border-2 border-secondary-blue hover:text-p-white rounded-lg flex"
              to="/course/home"
            >
              <p className="text-5xl grid place-content-center text-p-white">
                <span className="p-3">
                  <BiBookAlt />
                </span>
              </p>
              <p className="text-xl grid place-content-center font-medium">
                Course Management
              </p>
            </Link>
            <div
              onClick={logOut}
              className="w-80 cursor-pointer transition-all duration-300 bg-red-500/70 hover:bg-red-500 border-2 border-red-500 text-p-white rounded-lg flex"
              to="/course"
            >
              <p className="text-5xl grid place-content-center text-p-white">
                <span className="p-3">
                  <IoIosLogOut />
                </span>
              </p>
              <p className="text-xl grid place-content-center font-medium">
                Logout
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 pl-10">
            <p className="text-xl font-semibold text-center bg-primary-blue p-2 rounded-lg text-p-white">
              Upcoming
            </p>
            <Link
              className="w-80 transition-all duration-300 opacity-60 bg-accent-blue/70 hover:bg-secondary-blue border-2 border-secondary-blue hover:text-p-white rounded-lg flex"
              to="/exam"
            >
              <p className="text-5xl grid place-content-center text-p-white">
                <span className="p-3">
                  <BsQuestionDiamond />
                </span>
              </p>
              <p className="text-xl grid place-content-center font-medium">
                Exam ManageMent
              </p>
            </Link>
            <Link
              className="w-80 transition-all duration-300 opacity-60 bg-accent-blue/70 hover:bg-secondary-blue border-2 border-secondary-blue hover:text-p-white rounded-lg flex"
              to="/financial"
            >
              <p className="text-5xl grid place-content-center text-p-white">
                <span className="p-3">
                  <BsCashCoin />
                </span>
              </p>
              <p className="text-xl grid place-content-center font-medium">
                Financial Managemet
              </p>
            </Link>
            <Link
              className="w-80 transition-all duration-300 opacity-60 bg-accent-blue/70 hover:bg-secondary-blue border-2 border-secondary-blue hover:text-p-white rounded-lg flex"
              to="/resource"
            >
              <p className="text-5xl grid place-content-center text-p-white">
                <span className="p-3">
                  <BiCollection />
                </span>
              </p>
              <p className="text-xl grid place-content-center font-medium">
                HR Management
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ControlPanel;
