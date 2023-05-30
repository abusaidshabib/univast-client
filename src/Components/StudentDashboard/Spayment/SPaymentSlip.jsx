import logo from "../../../assets/Navbar/graduated-removebg-preview.png"

const SPaymentSlip = () => {
  return (
    <div className="bg-white rounded-lg p-10">
      <p className="text-4xl font-semibold">Download Payment Slip</p>
      <p className="py-5"></p>
      <div className="grid grid-cols-2">
        <div className="border-r-2 border-gray-700">
          <div className="grid place-content-center">
            <div className="flex items-center font-primary cursor-pointer justify-center pb-5">
              <div className="cursor-pointer">
                <img className="w-16 f-16" src={logo} alt="" />
              </div>
              <p className="text-center text-white cursor-pointer">
                <span className="text-3xl tracking-wider font-medium leading-none cursor-pointer">
                  <span className="text-primary-500 cursor-pointer">UNI</span>
                  <span className="text-secondary-500 cursor-pointer">
                    VAST
                  </span>
                </span>
                <br />
                <span className="text-xs tracking-widest leading-none text-gray-800">
                  UNIVERSITY
                </span>
              </p>
            </div>
            <p className="text-lg">
              123 panir tanki2, Gorom Chayer dokar, Imran er hotel
            </p>
          </div>
        </div>

        {/* another slip */}
        <div className="">
          <div className="grid place-content-center">
            <div className="flex items-center font-primary cursor-pointer justify-center pb-5">
              <div className="cursor-pointer">
                <img className="w-16 f-16" src={logo} alt="" />
              </div>
              <p className="text-center text-white cursor-pointer">
                <span className="text-3xl tracking-wider font-medium leading-none cursor-pointer">
                  <span className="text-primary-500 cursor-pointer">UNI</span>
                  <span className="text-secondary-500 cursor-pointer">
                    VAST
                  </span>
                </span>
                <br />
                <span className="text-xs tracking-widest leading-none text-gray-800">
                  UNIVERSITY
                </span>
              </p>
            </div>
            <p className="text-lg">
              123 panir tanki2, Gorom Chayer dokar, Imran er hotel
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SPaymentSlip;
