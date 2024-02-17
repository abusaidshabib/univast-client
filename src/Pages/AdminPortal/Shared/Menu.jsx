import { useContext } from "react";
import { AiOutlineLogout } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Context/UserContext";
import { PiStudent } from "react-icons/pi";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { FaUniversity } from "react-icons/fa";
import { GrGroup } from "react-icons/gr";
import { SiSemanticscholar } from "react-icons/si";

const Menu = () => {
  const { logOut } = useContext(AuthContext);
  return (
    <div className="bg-white px-10 flex flex-col justify-between text-gray-900 h-screen sticky left-0 top-0 font-sans">
      <div className="py-5">
        <Link to="/" className="flex items-center cursor-pointer">
          <span className="text-primary-blue cursor-pointer text-4xl font-bold pr-1">
            UNI
          </span>
          <span className="border-l-2 border-primary-orange pl-1">
            <span className="text-accent-blue cursor-pointer font-semibold text-lg leading-none">
              VAST
            </span>{" "}
            <br />
            <span className="text-primary-gray cursor-pointer leading-none text-base">
              University
            </span>
          </span>
        </Link>
      </div>
      <div className="">
        <ul className="grid d-side-bar gap-6 place-content-center">
          <li className="">
            <NavLink to="home" className="flex gap-3">
              <MdOutlineDashboardCustomize className="text-2xl" />
              <p className="font-semibold">Home</p>
            </NavLink>
          </li>
          <li className="">
            <NavLink to="students" className="flex gap-3">
              <PiStudent className="text-2xl" />
              <p className="font-semibold">Students</p>
            </NavLink>
          </li>
          <li className="">
            <NavLink to="teachers" className="flex gap-3">
              <LiaChalkboardTeacherSolid className="text-2xl" />
              <p className="font-semibold">Teacher</p>
            </NavLink>
          </li>
          <li className="">
            <NavLink to="faculties" className="flex gap-3">
              <FaUniversity className="text-2xl" />
              <p className="font-semibold">Faculties</p>
            </NavLink>
          </li>
          <li className="">
            <NavLink to="departments" className="flex gap-3">
              <GrGroup className="text-2xl" />
              <p className="font-semibold">Departments</p>
            </NavLink>
          </li>
          <li className="">
            <NavLink to="programs" className="flex gap-3">
              <SiSemanticscholar className="text-2xl" />
              <p className="font-semibold">Programs</p>
            </NavLink>
          </li>
        </ul>
      </div>
      <div
        onClick={logOut}
        className="flex gap-3 mb-10 cursor-pointer ml-2 font-semibold text-red-500/70 hover:text-red-500 transition-all"
      >
        <AiOutlineLogout className="text-2xl" />
        <p>Sign out</p>
      </div>
    </div>
  );
};

export default Menu;
