import { Link } from "react-router-dom";
import logo from "../../../assets/Navbar/graduated-removebg-preview.png";
import { AiOutlineLogout } from "react-icons/ai";
import { FiMail, FiSettings } from "react-icons/fi";

const Menu = () => {
  return (
    <div className="bg-primary-900 grid grid-rows-3 gap-20">
      <div className="p-5">
        <Link to="/" className="font-primary cursor-pointer">
          <div className="cursor-pointer">
            <img className="w-12 f-12" src={logo} alt="" />
          </div>
        </Link>
      </div>
      <div className="">
        <ul className="grid place-content-center text-p-white">
          <li className="pb-6">
            <Link className="">
              <FiMail className="text-2xl" />
            </Link>
          </li>
          <li className="pb-6">
            <Link className="">
              <FiMail className="text-2xl" />
            </Link>
          </li>
          <li className="pb-6">
            <Link className="">
              <FiMail className="text-2xl" />
            </Link>
          </li>
          <li className="pb-6">
            <Link className="">
              <FiSettings className="text-2xl" />
            </Link>
          </li>
        </ul>
      </div>
      <div className="grid place-content-center">
        <AiOutlineLogout className="text-p-white text-2xl" />
      </div>
    </div>
  );
};

export default Menu;
