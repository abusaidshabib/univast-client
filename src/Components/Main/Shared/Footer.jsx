import logo from "../../../assets/Navbar/graduated-removebg-preview.png";
const Footer = () => {
  return (
    <div className="border-t-[1px] border-accent-500 py-10 bg-background-500 px-20 grid grid-cols-4 gap-20 text-p-white">
      <div>
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
        <p className="pt-2 font-sans text-p-white">
          Nyenrode Business Universiteit was founded in 1946. Ever since, we
          have focused on creating a sustainable future by shaping, educating
          and moving people to become responsible leaders.
        </p>
      </div>
      <div>
        <p className="font-serif text-3xl font-semibold text-left">Programs</p>
        <ul className="list-none pt-3 text-xl">
          <li className="hover:text-accent-500">- Bachelor</li>
          <li className="hover:text-accent-500">- Master</li>
          <li className="hover:text-accent-500">- MBA</li>
          <li className="hover:text-accent-500">- Executive Education</li>
          <li className="hover:text-accent-500">- In company</li>
        </ul>
      </div>
      <div>
        <p className="font-serif text-3xl font-semibold text-left">Contact</p>
        <p className="text-lg pt-3">
          {" "}
          - 190 NE 12th St, Moore, Oklahoma, United States
        </p>
        <p className="text-lg">- +12 346 29 1211</p>
        <p className="text-lg">- univast@gmail.com</p>
      </div>
      <div>
        <p className="font-serif text-3xl font-semibold text-left">Pages</p>
        <ul className="list-none pt-3 text-xl">
          <li className="hover:text-accent-500">- Home</li>
          <li className="hover:text-accent-500">- About</li>
          <li className="hover:text-accent-500">- Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
