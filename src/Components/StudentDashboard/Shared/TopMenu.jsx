import { IoNotificationsSharp } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-router-dom";

const TopMenu = () => {
  return (
    <div className="flex justify-between h-16 items-center px-5">
      <div></div>
      <ul className="text-2xl text-p-white flex">
        <li></li>
        <li>
          <Link>
            <HiOutlineMail className="" />
          </Link>
        </li>
        <li className="pl-5">
          <Link className="relative flex">
            <IoNotificationsSharp className="inline-flex w-full" />
            <span className="text-xs bg-secondary-500 rounded-full w-5 h-5 font-medium grid place-content-center">2</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default TopMenu;
