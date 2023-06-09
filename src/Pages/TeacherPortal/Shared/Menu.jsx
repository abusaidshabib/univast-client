import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/Navbar/graduated-removebg-preview.png";
import { AiOutlineLogout } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { GoBook } from "react-icons/go";
import { BsCalendar2Check } from "react-icons/bs";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import {  MdOutlineDashboardCustomize, } from "react-icons/md";

const Menu = () => {
  return (
    <div className="bg-white px-10 grid justify-center gap-20 text-gray-900 h-screen sticky left-0 top-0">
      <div className="p-5">
        <Link to="/" className="font-primary cursor-pointer">
          <div className="cursor-pointer">
            <img className="w-12 f-12 mx-auto" src={logo} alt="" />
          </div>
        </Link>
      </div>
      <div className="">
        <ul className="grid d-side-bar gap-6 place-content-center">
          <li className="">
            <NavLink to="/teacher/home" className="flex gap-3">
              <MdOutlineDashboardCustomize className="text-2xl" />
              <p>Home</p>
            </NavLink>
          </li>
          <li className="">
            <NavLink to="/teacher/profile/general_information" className="flex gap-3">
              <BiUser className="text-2xl" />
              <p>Profile</p>
            </NavLink>
          </li>
          <li className="">
            <NavLink to="/teacher/courses" className="flex gap-3">
              <GoBook className="text-2xl" />
              <p>Courses</p>
            </NavLink>
          </li>
          <li className="">
            <NavLink to="/teacher/attendance" className="flex gap-3">
              <BsCalendar2Check className="text-2xl" />
              <p>Attendance</p>
            </NavLink>
          </li>
          <li className="">
            <NavLink to="/teacher/finance" className="flex gap-3">
              <FaRegMoneyBillAlt className="text-2xl" />
              <p>Financial</p>
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
