import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="border-t-2 bg-secondary-blue border-primary-orange py-10 bg-background-500 px-20 grid grid-cols-4 gap-20 text-p-white font-sans">
      <div>
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
        <p className="pt-2 font-serif text-p-white text-base">
          Nyenrode Business Universiteit was founded in 1946. Ever since, we
          have focused on creating a sustainable future by shaping, educating
          and moving people to become responsible leaders.
        </p>
      </div>
      <div>
        <p className="text-xl uppercase font-semibold text-left">Programs</p>
        <ul className="list-none pt-3 text-base">
          <li className="hover:text-accent-500">- Bachelor</li>
          <li className="hover:text-accent-500">- Master</li>
          <li className="hover:text-accent-500">- MBA</li>
          <li className="hover:text-accent-500">- Executive Education</li>
          <li className="hover:text-accent-500">- In company</li>
        </ul>
      </div>
      <div>
        <p className="text-xl uppercase font-semibold text-left">Contact</p>
        <p className="text-base text-primary-white pt-3">
          {" "}
           190 NE 12th St, Moore, Oklahoma, United States
        </p>
        <p className="text-base text-primary-white"> +12 346 29 1211</p>
        <p className="text-base text-primary-white"> univast@gmail.com</p>
      </div>
      <div>
        <p className="text-xl uppercase font-semibold text-left">Main Pages</p>
        <ul className="list-none pt-3 text-base">
          <li className="hover:text-accent-500">- Home</li>
          <li className="hover:text-accent-500">- About</li>
          <li className="hover:text-accent-500">- Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
