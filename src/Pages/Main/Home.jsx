import CampusLife from "../../Components/Main/Home/CampusLife";
import EventNews from "../../Components/Main/Home/EventNews";
import HeroSection from "../../Components/Main/Home/HeroSection";
import Services from "../../Components/Main/Home/Services";
import WhatWeOffer from "../../Components/Main/Home/WhatWeOffer";
import About from "../../Components/Main/Home/About";
import Futures from "../../Components/Main/Home/Futures";

const Home = () => {
  return (
    <div>
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