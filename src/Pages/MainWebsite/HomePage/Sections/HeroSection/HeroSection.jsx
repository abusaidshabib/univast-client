import { Link } from "react-router-dom";
import heroImg from "../../../../../assets/Home/Library with girl.jpg";

const HeroSection = () => {
  return (
    <div className="min-h-[calc(100vh-96px)] bg-background-500 grid grid-cols-2 px-20 gap-20">
      <div className="grid place-content-center py-20 font-serif">
        <h1 className="text-7xl text-primary-500 leading-tight">
          Exploring <span className="text-secondary-500">The Nexus</span> of
          Artificial Intelligence
        </h1>
        <p className="py-6"></p>
        <p className="text-p-white font-sans text-lg">
          This research study aims to delve into the complex relationship
          between artificial intelligence (AI) and ethical decision making. As
          AI systems continue to advance in their capabilities and integration
          into various domains, ethical considerations become increasingly
          crucial.
        </p>
        <p className="py-6"></p>
        <div>
          <Link className="text-background-500 font-sans uppercase font-semibold text-base bg-secondary-500 px-14 py-3 rounded-sm tracking-wider">
            Apply Now
          </Link>
        </div>
      </div>
      <div className="hero-right w-[90%]">
        <img className="" src={heroImg} alt="" />
      </div>
      <div className="absolute right-0 translate-y-1/4 uppercase text-background z-[0]">
        <ul className="flex flex-col gap-1">
          <li>
            <Link
              className="px-5 py-2 bg-secondary-500 transition hover:bg-secondary-600 hover:text-p-white w-full block"
              to="/"
            >
              Bachelor
            </Link>
          </li>
          <li>
            <Link
              className="px-5 py-2 bg-secondary-500 transition hover:bg-secondary-600 hover:text-p-white w-full block"
              to="/"
            >
              Master
            </Link>
          </li>
          <li>
            <Link
              className="px-5 py-2 bg-secondary-500 transition hover:bg-secondary-600 hover:text-p-white w-full block"
              to="/"
            >
              Mba
            </Link>
          </li>
          <li>
            <Link
              className="px-5 py-2 bg-secondary-500 transition hover:bg-secondary-600 hover:text-p-white w-full block"
              to="/"
            >
              Phd
            </Link>
          </li>
          <li>
            <Link
              className="px-5 py-2 bg-secondary-500 transition hover:bg-secondary-600 hover:text-p-white w-full block"
              to="/"
            >
              Programs
            </Link>
          </li>
          <li>
            <Link
              className="px-5 py-2 bg-secondary-500 transition hover:bg-secondary-600 hover:text-p-white w-full block"
              to="/"
            >
              International
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeroSection;
