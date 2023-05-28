import { BsPerson } from "react-icons/bs";

const Shome = () => {
  return (
    <div className="grid grid-cols-4 text-p-white">
      <div className="col-span-3"></div>
      <div className="col-span-1 w-full h-full bg-primary-800 rounded-lg p-5">
        <div className="flex justify-between items-center p-5">
          <div>
            <p className="">Hello,</p>
            <p className="text-2xl font-semibold">Mehedi Pulok</p>
          </div>
          <div>
            <div className="p-5 bg-primary-700 rounded-full">
              <BsPerson className="text-4xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shome;