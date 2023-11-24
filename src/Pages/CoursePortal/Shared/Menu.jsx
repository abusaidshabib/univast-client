import { Link, NavLink } from "react-router-dom";
import { AiOutlineLogout } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { GoBook } from "react-icons/go";
import { MdOutlineDashboardCustomize } from "react-icons/md";

const Menu = () => {
  return (
    <div className="bg-white px-10 grid justify-center gap-20 text-gray-900 h-screen sticky left-0 top-0 font-sans">
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
            <NavLink to="/course/home" className="flex gap-3">
              <MdOutlineDashboardCustomize className="text-2xl" />
              <p className="font-semibold">Home</p>
            </NavLink>
          </li>
          <li className="">
            <NavLink to="/course/createCourse" className="flex gap-3">
              <BiUser className="text-2xl" />
              <p className="font-semibold">Create Course</p>
            </NavLink>
          </li>
          <li className="">
            <NavLink to="/course/allcourses" className="flex gap-3">
              <GoBook className="text-2xl" />
              <p className="font-semibold">All Courses</p>
            </NavLink>
          </li>
          <li className="">
            <NavLink to="/course/courseEnroll" className="flex gap-3">
              <GoBook className="text-2xl" />
              <p className="font-semibold">Enroll</p>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex gap-3">
        <AiOutlineLogout className="text-2xl" />
        <p>Sign out</p>
      </div>
    </div>
  );
};

export default Menu;
