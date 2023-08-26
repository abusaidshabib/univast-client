import { Link } from "react-router-dom";
import PrimaryButton from "../../../../../Components/Buttons/PrimaryButton";
import { MdOutlineStart} from "react-icons/md";

const HeroSection = () => {
  return (
    <div className="min-h-[calc(100vh-80px)] bg-primary-blue grid grid-cols-2 px-20 gap-20">
      <div className="grid place-items-center py-20 font-sans">
        <div>
          <h1 className="text-6xl font-extrabold uppercase leading-tight text-primary-white">
            Exploring The Nexus of Artificial Intelligence
          </h1>
          <p className="py-6"></p>
          <p className="text-p-white font-serif text-2xl font-light italic">
            This research study aims to delve into the complex relationship
            between artificial intelligence (AI) and ethical decision making. As
            AI systems continue to advance in their capabilities and integration
            into various domains, ethical considerations become increasingly
            crucial.
          </p>
          <p className="py-6"></p>
          <div>
            <PrimaryButton
              link="/"
              text="Apply Now"
              icon={<MdOutlineStart className="text-xl" />}
            />
          </div>
        </div>
      </div>
      <div className="absolute right-0 translate-y-1/4 uppercase text-background z-[0]">
        <ul className="flex flex-col gap-1">
          <li>
            <Link
              className="px-5 py-2 transition bg-primary-orange text-primary-white font-semibold hover:bg-primary-white hover:text-primary-gray w-full block"
              to="/"
            >
              Bachelor
            </Link>
          </li>
          <li>
            <Link
              className="px-5 py-2 transition bg-primary-orange text-primary-white font-semibold hover:bg-primary-white hover:text-primary-gray w-full block"
              to="/"
            >
              Master
            </Link>
          </li>
          <li>
            <Link
              className="px-5 py-2 transition bg-primary-orange text-primary-white font-semibold hover:bg-primary-white hover:text-primary-gray w-full block"
              to="/"
            >
              Mba
            </Link>
          </li>
          <li>
            <Link
              className="px-5 py-2 transition bg-primary-orange text-primary-white font-semibold hover:bg-primary-white hover:text-primary-gray w-full block"
              to="/"
            >
              Phd
            </Link>
          </li>
          <li>
            <Link
              className="px-5 py-2 transition bg-primary-orange text-primary-white font-semibold hover:bg-primary-white hover:text-primary-gray w-full block"
              to="/"
            >
              Programs
            </Link>
          </li>
          <li>
            <Link
              className="px-5 py-2 transition bg-primary-orange text-primary-white font-semibold hover:bg-primary-white hover:text-primary-gray w-full block"
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
