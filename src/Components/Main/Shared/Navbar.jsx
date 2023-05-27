import { useState } from "react";
import logo from "../../../assets/Navbar/graduated-removebg-preview.png";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  return (
    <div className="grid grid-cols-2 bg-background-500 h-24 px-20 sticky top-0 z-50">
      <Link to="/" className="flex items-center font-primary cursor-pointer">
        <div className="cursor-pointer">
          <img className="w-16 f-16" src={logo} alt="" />
        </div>
        <p className="text-center text-white cursor-pointer">
          <span className="text-3xl tracking-wider font-medium leading-none cursor-pointer">
            <span className="text-primary-500 cursor-pointer">UNI</span>
            <span className="text-secondary-500 cursor-pointer">VAST</span>
          </span>
          <br />
          <span className="text-xs tracking-widest leading-none text-p-white">
            UNIVERSITY
          </span>
        </p>
      </Link>
      <div className="grid items-center justify-end">
        <div onClick={() => setMenu(true)} className="p-3 cursor-pointer">
          <p className="flex items-center text-p-white text-xl gap-2">
            <AiOutlineMenu className="" /> Menu
          </p>
        </div>
        <div
          className={`w-full min-h-screen px-20 bg-background-500 absolute top-0 animate-menu ${
            menu ? "left-0" : "-left-full"
          }`}
        >
          <div className="grid grid-cols-2 h-24">
            <div className="flex items-center font-primary">
              <div>
                <img className="w-16 f-16" src={logo} alt="" />
              </div>
              <p className="text-center text-white">
                <span className="text-3xl tracking-wider font-medium leading-none">
                  <span className="text-primary-500">UNI</span>
                  <span className="text-secondary-500">VAST</span>
                </span>
                <br />
                <span className="text-xs tracking-widest leading-none text-p-white">
                  UNIVERSITY
                </span>
              </p>
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
          <div className="w-full menu-list font-primary">
            <ul className="text-p-white h-full text-5xl flex flex-col justify-center gap-8">
              <li className="cursor-pointer hover:underline underline-offset-[12px] transition">
                <Link onClick={() => setMenu(false)} to="/">
                  Home
                </Link>
              </li>
              <li className="cursor-pointer hover:underline underline-offset-[12px] transition">
                <Link onClick={() => setMenu(false)} to="/admission">
                  Admissions
                </Link>
              </li>
              <li className="cursor-pointer hover:underline underline-offset-[12px] transition">
                Academics
              </li>
              <li className="cursor-pointer hover:underline underline-offset-[12px] transition">
                Research
              </li>
              <li className="cursor-pointer hover:underline underline-offset-[12px] transition">
                Campus
              </li>
              <li className="cursor-pointer hover:underline underline-offset-[12px] transition">
                About
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
