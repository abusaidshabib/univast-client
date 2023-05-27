import {BsShieldCheck} from 'react-icons/bs';

const WhatWeOffer = () => {
  return (
    <div className="min-h-screen grid grid-cols-12 bg-background-500">
      <div className="col-span-7 text-p-white p-20">
        <h1 className="text-5xl text-primary-500 font-serif leading-relaxed mb-10">
          What We{" "}
          <span className="underline-offset-2 border-b-4 border-accent-500 text-p-white">
            Offer
          </span>
        </h1>
        <p className="text-xl mb-10">
          At Univast International University, students get the opportunity to
          think, learn and grow.
        </p>
        <div>
            <div className='flex'>
                <div className='bg-secondary-500 w-24 h-24 rounded-full text-background-500 text-xl'>
                    <BsShieldCheck/>
                </div>
                <div>
                    <h2>Accommodation</h2>
                    <p>We are providing a secure and convenient living facility for our students. DIU dormitories are a home away from home...</p>
                </div>
            </div>
        </div>
      </div>
      <div className="col-span-5 offer-right"></div>
    </div>
  );
};

export default WhatWeOffer;
