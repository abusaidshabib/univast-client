import { Outlet } from "react-router-dom";
import Menu from "../Pages/EnrollPortal/Shared/Menu";
import TopMenu from "../Pages/EnrollPortal/Shared/TopMenu";

const EnrollmentDashboard = () => {
  return (
    <div className="bg-white min-h-screen min-w-screen flex">
      <Menu></Menu>
      <div className="w-full">
        <TopMenu></TopMenu>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default EnrollmentDashboard;
