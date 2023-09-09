import { Link, NavLink } from "react-router-dom";
import { AiOutlineLogout } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { GoBook } from "react-icons/go";
import { BsCalendar2Check } from "react-icons/bs";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { useContext } from "react";
import { AuthContext } from "../../../Context/UserContext";

const Menu = () => {
  const { logOut } = useContext(AuthContext);

  return (
    <div className="bg-white px-10 grid justify-center gap-20 text-gray-900 h-screen sticky left-0 top-0">
      <div className="p-5">
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
            <NavLink to="/teacher/home" className="flex gap-3">
              <MdOutlineDashboardCustomize className="text-2xl" />
              <p className="font-semibold">Home</p>
            </NavLink>
          </li>
          <li className="">
            <NavLink
              to="/teacher/profile/general_info"
              className="flex gap-3"
            >
              <BiUser className="text-2xl" />
              <p className="font-semibold">Profile</p>
            </NavLink>
          </li>
          <li className="">
            <NavLink to="/teacher/courses" className="flex gap-3">
              <GoBook className="text-2xl" />
              <p className="font-semibold">Courses</p>
            </NavLink>
          </li>
          <li className="">
            <NavLink to="/teacher/attendance" className="flex gap-3">
              <BsCalendar2Check className="text-2xl" />
              <p className="font-semibold">Attendance</p>
            </NavLink>
          </li>
          <li className="">
            <NavLink to="/teacher/finance" className="flex gap-3">
              <FaRegMoneyBillAlt className="text-2xl" />
              <p className="font-semibold">Financial</p>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-3">
        <AiOutlineLogout className="text-2xl" />
        <button onClick={logOut}>Sign out</button>
      </div>
    </div>
  );
};

export default Menu;
