import { NavLink, Outlet } from "react-router-dom";

const SProfile = () => {
  return (
    <div className="student-profile bg-gray-200 w-full min-h-[calc(100vh-80px)] p-5">
      <div className="bg-white p-10 min-h-[calc(100vh-100px)]">
        <p className="p-3 bg-accent-blue mb-5">
          *** For any kind of query about your profile information please
          contact with the registar&apos;s office. ***
        </p>
        <nav className="navigation-tab flex gap-5 font-semibold text-lg mb-10">
          <NavLink className="underline-offset-8" to="/student/profile/general_information">
            General Information
          </NavLink>
          <NavLink className="underline-offset-8" to="/student/profile/personal_information_&_parent_information">
            Personal & Parent Information
          </NavLink>
        </nav>
        <div>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default SProfile;
