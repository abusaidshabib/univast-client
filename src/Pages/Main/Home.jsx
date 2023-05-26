import AboutUs from "../../Components/Main/Home/AboutUs";
import CampusLife from "../../Components/Main/Home/CampusLife";
import EventNews from "../../Components/Main/Home/EventNews";
import HeroSection from "../../Components/Main/Home/HeroSection";

const Home = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <AboutUs></AboutUs>
      <EventNews></EventNews>
      <CampusLife></CampusLife>
    </div>
  );
};

export default Home;