import About from "../Sections/About/About";
import CampusLife from "../Sections/CampusLife/CampusLife";
import EventNews from "../Sections/EventNews/EventNews";
import Futures from "../Sections/Futures/Futures";
import HeroSection from "../Sections/HeroSection/HeroSection";
import Services from "../Sections/Services/Services";
import WhatWeOffer from "../Sections/WhatWeOffer/WhatWeOffer";

const Home = () => {
  return (
    <div className="">
      <HeroSection></HeroSection>
      <Services></Services>
      <About></About>
      <Futures></Futures>
      <WhatWeOffer></WhatWeOffer>
      <EventNews></EventNews>
      <CampusLife></CampusLife>
    </div>
  );
};

export default Home;