import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="h-[calc(100vh-96px)] bg-background-500 grid grid-cols-2 px-20 gap-20">
      <div className="grid place-content-center font-serif">
        <h1 className="text-7xl text-primary-500 leading-tight">
          Exploring <span className="text-secondary-500">The Nexus</span>{" "}
          of Artificial Intelligence
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
      <div className="hero-right">

      </div>
    </div>
  );
};

export default HeroSection;
