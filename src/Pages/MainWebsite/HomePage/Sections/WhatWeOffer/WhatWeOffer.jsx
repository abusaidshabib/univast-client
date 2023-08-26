import { BsShieldCheck } from "react-icons/bs";
import { MdEmojiTransportation, MdOutlineSportsBaseball } from "react-icons/md";
import { IoLibraryOutline, IoPeopleOutline } from "react-icons/io5";
import { AiOutlineLaptop } from "react-icons/ai";


const WhatWeOffer = () => {
  return (
    <div className="min-h-screen grid grid-cols-12 bg-background-500 text-primary-gray p-20 gap-20">
      <div className="col-span-7">
        <h1 className="text-6xl font-extrabold uppercase font-sans leading-relaxed mb-10">
          What We{" "}
          <span className="underline-offset-2 border-b-4 border-primary-orange">
            Offer
          </span>
        </h1>
        <p className="text-lg mb-10 font-serif">
          At Univast International University, students get the opportunity to
          think, learn and grow.
        </p>
        <div className="grid grid-cols-2 gap-10">
          <div className="flex gap-5">
            <div>
              <div className="flex items-center justify-center bg-secondary-blue w-20 h-20 rounded-full text-primary-white text-4xl">
                <BsShieldCheck />
              </div>
            </div>
            <div>
              <h2 className="text-3xl mb-5 font-bold">Accommodation</h2>
              <p className="text-lg font-serif">
                We are providing a secure and convenient living facility for our
                students. DIU dormitories are a home away from home...
              </p>
            </div>
          </div>
          <div className="flex gap-5">
            <div>
              <div className="flex items-center justify-center bg-secondary-blue w-20 h-20 rounded-full text-primary-white text-4xl">
                <MdEmojiTransportation />
              </div>
            </div>
            <div>
              <h2 className="text-3xl mb-5 font-bold">Transportation</h2>
              <p className="text-lg font-serif">
                To make the student’s life easier and safe, we are providing 50+
                buses from different points of Dhaka city to t...
              </p>
            </div>
          </div>
          <div className="flex gap-5">
            <div>
              <div className="flex items-center justify-center bg-secondary-blue w-20 h-20 rounded-full text-primary-white text-4xl">
                <IoLibraryOutline />
              </div>
            </div>
            <div>
              <h2 className="text-3xl mb-5 font-bold">Library</h2>
              <p className="text-lg font-serif">
                DIU library has a collection of over 50000 books, journals,
                research papers and enriching the resources day by day.
              </p>
            </div>
          </div>
          <div className="flex gap-5">
            <div>
              <div className="flex items-center justify-center bg-secondary-blue w-20 h-20 rounded-full text-primary-white text-4xl">
                <AiOutlineLaptop />
              </div>
            </div>
            <div>
              <h2 className="text-3xl mb-5 font-bold">
                One student one laptop
              </h2>
              <p className="text-lg font-serif">
                Under the ‘One student one laptop’ project, DIU has distributed
                over 25000 free laptops among the student...
              </p>
            </div>
          </div>
          <div className="flex gap-5">
            <div>
              <div className="flex items-center justify-center bg-secondary-blue w-20 h-20 rounded-full text-primary-white text-4xl">
                <IoPeopleOutline />
              </div>
            </div>
            <div>
              <h2 className="text-3xl mb-5 font-bold">
                Blended Learning Platform
              </h2>
              <p className="text-lg font-serif">
                To engage students in learning after face-to-face classes, our
                faculty members and students collaborate in the online...
              </p>
            </div>
          </div>
          <div className="flex gap-5">
            <div>
              <div className="flex items-center justify-center bg-secondary-blue w-20 h-20 rounded-full text-primary-white text-4xl">
                <MdOutlineSportsBaseball />
              </div>
            </div>
            <div>
              <h2 className="text-3xl mb-5 font-bold">
                Sports Club & Gymnasium
              </h2>
              <p className="text-lg font-serif">
                To ensure the mental and physical well being of our students and
                employees, we are providing a well-equipped gymnasiu...
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-5 offer-right border-primary-blue border-8"></div>
    </div>
  );
};

export default WhatWeOffer;
