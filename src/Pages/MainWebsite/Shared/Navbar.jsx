import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  return (
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
      <div className="grid items-center justify-end">
        <div onClick={() => setMenu(true)} className="p-3 cursor-pointer">
          <p className="flex items-center text-p-white text-xl gap-2">
            <AiOutlineMenu className="" /> Menu
          </p>
        </div>
        <div
          className={`w-full min-h-screen px-20 bg-secondary-blue absolute top-0 animate-menu font-sans ${
            menu ? "left-0" : "-left-full"
          }`}
        >
          <div className="grid grid-cols-2 h-24 pt-10">
            <div className="flex items-center">
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
            </div>
            <div className="grid items-center justify-end">
              <div
                onClick={() => setMenu(false)}
                className="p-3 cursor-pointer"
              >
                <p className="text-p-white flex items-center gap-2 text-xl">
                  Close{" "}
                  <span className="border border-p-white rounded-full p-1">
                    <RxCross1 className="text-sm" />
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="w-full menu-list uppercase">
            <ul className="text-accent-blue h-full text-5xl font-bold flex flex-col justify-center gap-8">
              <li className="cursor-pointer hover:underline hover:text-primary-white underline-offset-[12px] transition">
                <Link onClick={() => setMenu(false)} to="/">
                  Home
                </Link>
              </li>
              <li className="cursor-pointer hover:underline hover:text-primary-white underline-offset-[12px] transition">
                <Link onClick={() => setMenu(false)} to="/admission">
                  Admissions
                </Link>
              </li>
              <li className="cursor-pointer hover:underline hover:text-primary-white underline-offset-[12px] transition">
                Academics
              </li>
              <li className="cursor-pointer hover:underline hover:text-primary-white underline-offset-[12px] transition">
                Research
              </li>
              <li className="cursor-pointer hover:underline hover:text-primary-white underline-offset-[12px] transition">
                Campus
              </li>
              <li className="cursor-pointer hover:underline hover:text-primary-white underline-offset-[12px] transition">
                About
              </li>
              <li className="cursor-pointer hover:underline hover:text-primary-white underline-offset-[12px] transition">
                <Link to="/control-panel">C-Panel</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
