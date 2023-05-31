import { IoNotificationsSharp } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-router-dom";

const TopMenu = () => {
  return (
    <div className="grid grid-cols-3 bg-white z-50 px-12 justify-between h-20 sticky top-0 left-0 items-center text-gray-900">
      <div className="flex justify-start">
        <p className="text-center text-white cursor-pointer">
          <span className="text-3xl tracking-wider font-medium leading-none cursor-pointer">
            <span className="text-primary-500 cursor-pointer">UNI</span>
            <span className="text-secondary-500 cursor-pointer">VAST</span>
          </span>
        </p>
      </div>
      <div className="flex justify-center">
        <p>
          <span className="text-lg tracking-widest leading-none text-gray-800">
            student portal
          </span>
        </p>
      </div>
      <ul className="text-2xl flex gap-6 justify-end">
        <li>
          <Link className="relative">
            <HiOutlineMail className="" />
            <span className="absolute animate-ping w-3 h-3 bg-secondary-500 rounded-full -top-1 -right-1"></span>
            <span className="absolute w-3 h-3 bg-secondary-500 rounded-full -top-1 -right-1"></span>
          </Link>
        </li>
        <li className="">
          <Link className="relative">
            <IoNotificationsSharp className="" />
            <span className="absolute animate-ping w-3 h-3 bg-secondary-500 rounded-full -top-1 -right-1"></span>
            <span className="absolute w-3 h-3 bg-secondary-500 rounded-full -top-1 -right-1"></span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default TopMenu;
