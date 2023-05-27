import AboutUs from "../../Components/Main/Home/AboutUs";
import CampusLife from "../../Components/Main/Home/CampusLife";
import EventNews from "../../Components/Main/Home/EventNews";
import HeroSection from "../../Components/Main/Home/HeroSection";
import Services from "../../Components/Main/Home/Services";
import WhatWeOffer from "../../Components/Main/Home/WhatWeOffer";

const Home = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <Services></Services>
      <WhatWeOffer></WhatWeOffer>
      <AboutUs></AboutUs>
      <EventNews></EventNews>
      <CampusLife></CampusLife>
    </div>
  );
};

export default Home;