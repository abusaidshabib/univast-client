import { BsPerson } from "react-icons/bs";
import cover from "../../assets/Student-dashboard/cover.jpg";
import profile from "../../assets/Student-dashboard/Profile.png";

const Shome = () => {
  return (
    <div className="grid grid-cols-4 rounded-tl-lg bg-gray-200 min-h-[calc(100vh-80px)] text-gray-900">
      <div className="col-span-3"></div>
      <div className="col-span-1 p-4 bg-white m-5 rounded-lg">
        <div className="profile-card relative">
          <div className="cover-photo">
            <img className="rounded-t-lg w-full h-28 object-cover" src={cover} alt="" />
          </div>
          <div className="profile-picture border-[4px] absolute top-14 left-1/2 -translate-x-1/2 border-gray-200 rounded-full">
            <img className="rounded-full w-20 h-20 object-cover" src={profile} alt=""/>
          </div>
          <div className="h-40 pt-10">
          <h2 className="text-center text-lg font-">Md Golam Mehedi</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shome;
