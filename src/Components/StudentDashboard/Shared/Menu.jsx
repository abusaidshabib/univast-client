import { Link } from "react-router-dom";
import logo from "../../../assets/Navbar/graduated-removebg-preview.png";
import { AiOutlineLogout } from "react-icons/ai";
import { MdOutlineDashboardCustomize, MdOutlinePayment, MdOutlineSettings } from "react-icons/md";
import { HiOutlineAcademicCap } from "react-icons/hi";

const Menu = () => {
  return (
    <div className="bg-white grid grid-rows-3 gap-20 text-gray-900">
      <div className="p-5">
        <Link to="/" className="font-primary cursor-pointer">
          <div className="cursor-pointer">
            <img className="w-12 f-12" src={logo} alt="" />
          </div>
        </Link>
      </div>
      <div className="">
        <ul className="grid place-content-center">
          <li className="pb-6">
            <Link to="/student/home" className="">
              <MdOutlineDashboardCustomize className="text-2xl" />
            </Link>
          </li>
          <li className="pb-6">
            <Link className="">
              <MdOutlinePayment className="text-2xl" />
            </Link>
          </li>
          <li className="pb-6">
            <Link className="">
              <HiOutlineAcademicCap className="text-2xl" />
            </Link>
          </li>
          <li className="pb-6">
            <Link className="">
              <MdOutlineSettings className="text-2xl" />
            </Link>
          </li>
        </ul>
      </div>
      <div className="grid place-content-center">
        <AiOutlineLogout className="text-2xl" />
      </div>
    </div>
  );
};

export default Menu;
