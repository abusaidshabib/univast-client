import logo from "../../../assets/Navbar/graduated-removebg-preview.png";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="grid grid-cols-2 bg-background-500 h-24 px-20 sticky top-0">
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
        <div className="bg-background-800 p-3">
          <AiOutlineMenu className="text-p-white text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
