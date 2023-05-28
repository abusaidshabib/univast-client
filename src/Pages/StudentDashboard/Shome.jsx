import { BsPerson } from "react-icons/bs";

const Shome = () => {
  return (
    <div className="grid grid-cols-4 text-gray-900">
      <div className="col-span-3"></div>
      <div className="col-span-1 w-full h-full bg-p-white rounded-lg p-10">
        <div className="flex justify-between items-center ">
          <div>
            <p className="">Hello,</p>
            <p className="text-2xl font-semibold">Mehedi Pulok</p>
          </div>
          <div>
            <div className="p-5 bg-gray-300 rounded-full">
              <BsPerson className="text-4xl" />
            </div>
          </div>
        </div>
        <div>
          
        </div>
      </div>

    </div>
  );
};

export default Shome;