import campus from "../../../../../assets/about/view-stanford-university-palo-alto-silicon-valley-california-usa_479694-3092.jpg";
import { BsPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="p-20 grid grid-cols-2 gap-10 font-sans">
      <div className="">
        <h1 className="text-6xl font-extrabold uppercase leading-tight text-primary-gray mb-10">
          Univast International University
        </h1>
        <p className="text-primary-gray font-serif text-lg leading-loose">
          Being established in 2002, Univast International University has become
          a prominent private university in Bangladesh. Our 150 Acre campus is
          full of life and positive energy, fostering education and innovation
          for more than 20000 students. Here, students are encouraged to ask
          questions and think, debate and collaborate with professors to take
          ownership of their learning.
        </p>
      </div>
      <div>
        <div className="relative border-secondary-blue border-8">
          <img className="w-full" src={campus} alt="" />
          <div className="play-btn absolute cursor-pointer top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <BsPlayCircleFill className="text-8xl text-p-white bg-secondary-500 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
