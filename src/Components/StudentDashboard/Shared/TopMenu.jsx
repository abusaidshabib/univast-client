import { IoNotificationsSharp } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-router-dom";

const TopMenu = () => {
  return (
    <div className="flex justify-between h-16 items-center">
      <div></div>
      <ul className="text-2xl text-p-white flex gap-4">
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
