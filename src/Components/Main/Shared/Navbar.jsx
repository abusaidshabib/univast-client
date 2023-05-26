import logo from "../../../assets/Navbar/graduated-removebg-preview.png";

const Navbar = () => {
  return (
    <div className="grid grid-cols-2">
      <div className="flex items-center">
        <div>
          <img className="w-10 f-10" src={logo} alt="" />
        </div>
        <p className="text-center font-display">
          <span className="text-3xl tracking-widest font-medium">UNIVAST</span>
          <br />
          <span className="text-sm tracking-wide">UNIVERSITY</span>
        </p>
      </div>
      <div className="grid place-content-end">
        <p className="text-center">
          <span>UNIVAST</span>
          <br />
          <span>UNIVERSITY</span>
        </p>
      </div>
    </div>
  );
};

export default Navbar;
