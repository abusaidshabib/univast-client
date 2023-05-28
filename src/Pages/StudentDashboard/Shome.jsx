import { BsPerson } from "react-icons/bs";
import cover from "../../assets/Student-dashboard/cover.jpg";
import profile from "../../assets/Student-dashboard/Profile.png";

const Shome = () => {
  return (
    <div className="grid grid-cols-4 rounded-tl-lg bg-gray-200 min-h-[calc(100vh-80px)] text-gray-900">
      <div className="col-span-3"></div>
      <div className="col-span-1 p-3 bg-white m-5 rounded-lg">
        <div className="profile-card relative">
          <div className="cover-photo">
            <img
              className="rounded-t-lg w-full h-28 object-cover"
              src={cover}
              alt=""
            />
          </div>
          <div className="profile-picture border-[6px] absolute top-14 left-1/2 -translate-x-1/2 border-gray-200 rounded-full">
            <img
              className="rounded-full w-24 h-24 object-cover"
              src={profile}
              alt=""
            />
          </div>
          <div className="text-center pt-16">
            <h2 className="text-lg font-semibold">Md Golam Mehedi</h2>
            <p className="text-gray-600">Id: 202011056070 (Day)</p>
            <p>mdpulokhasan@gmail.com</p>
            <p>Dhaka, Bangladesh</p>
            <div>
              <div className="bg-gray-100 rounded-lg p-3 mt-3 text-left">
                <h1 className="text-xl font-semibold mb-1">
                  December 15, 2019
                </h1>
                <p className="text-xs text-gray-600">Addmission Date</p>
              </div>
              <div className="grid grid-cols-3 gap-3 my-3">
                <div className="bg-gray-100 rounded-lg p-3 text-left">
                  <h1 className="text-xl font-semibold mb-1">CSE</h1>
                  <p className="text-xs text-gray-600">Department</p>
                </div>
                <div className="bg-gray-100 rounded-lg p-3 text-left">
                  <h1 className="text-xl font-semibold mb-1">56</h1>
                  <p className="text-xs text-gray-600">Batch</p>
                </div>
                <div className="bg-gray-100 rounded-lg p-3 text-left">
                  <h1 className="text-xl font-semibold mb-1">3.50</h1>
                  <p className="text-xs text-gray-600">CGPA</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 my-3">
                <div className="bg-gray-100 rounded-lg p-3 text-left">
                  <h1 className="text-xl font-semibold mb-1">Graduating</h1>
                  <p className="text-xs text-gray-600">Student Status</p>
                </div>
                <div className="bg-gray-100 rounded-lg p-3 text-left">
                  <h1 className="text-xl font-semibold mb-1">138</h1>
                  <p className="text-xs text-gray-600">Completed Credit</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shome;
