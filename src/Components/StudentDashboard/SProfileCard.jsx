import cover from "../../assets/Student-dashboard/cover.jpg";
import profile from "../../assets/Student-dashboard/Profile.png";
import { MdOutlineAssignment } from 'react-icons/md'

const SProfileCard = () => {
  return (
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
              <h1 className="text-xl font-semibold mb-1">December 15, 2019</h1>
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
          <div className="assignments mt-5">
            <h1 className="text-left font-semibold text-lg text-green-600 mb-3">
              Assignments
            </h1>
            <div className="assignments-container grid gap-5">
              <div className="assignment-card flex items-start gap-2 text-left">
                <div className="bg-blue-500 p-2 flex items-center justify-center rounded-full">
                  <MdOutlineAssignment className="text-white text-2xl"/>
                </div>
                <div>
                  <h1 className="font-semibold">Initial Investigation report </h1>
                  <p className="text-sm text-gray-600">CSE-4204 [System Analysis & Design]</p>
                </div>
              </div>
              <div className="assignment-card flex items-start gap-2 text-left">
                <div className="bg-blue-500 p-2 flex items-center justify-center rounded-full">
                  <MdOutlineAssignment className="text-white text-2xl"/>
                </div>
                <div>
                  <h1 className="font-semibold">Assessment for mid-term</h1>
                  <p className="text-sm text-gray-600">CSE-4204 [Accounting, Introduction to Finance & International Trade]</p>
                </div>
              </div>
              <div className="assignment-card flex items-start gap-2 text-left">
                <div className="bg-blue-500 p-2 flex items-center justify-center rounded-full">
                  <MdOutlineAssignment className="text-white text-2xl"/>
                </div>
                <div>
                  <h1 className="font-semibold">Initial Investigation report </h1>
                  <p className="text-sm text-gray-600">CSE-4204 [System Analysis & Design]</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SProfileCard;