import { NavLink, Outlet } from "react-router-dom";

const TProfile = () => {
  return (
    <div className="teacher-profile bg-gray-200 w-full min-h-[calc(100vh-80px)] p-5">
      <div className="bg-white p-10 min-h-[calc(100vh-100px)]">
        <p className="p-3 bg-primary-300 mb-5">
          *** For any kind of query about your profile information please
          contact with the registar&apos;s office. ***
        </p>
        <nav className="navigation-tab flex gap-5 font-semibold text-lg mb-10">
          <NavLink className="underline-offset-8" to="personal">
            Personal Info
          </NavLink>
          <NavLink className="underline-offset-8" to="address">
            Address
          </NavLink>
          <NavLink className="underline-offset-8" to="publication">
            Publication
          </NavLink>
        </nav>
        <div>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default TProfile;
