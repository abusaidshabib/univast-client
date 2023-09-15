import { Outlet } from "react-router-dom";
import Menu from "../Pages/ApplicantPortal/Shared/Menu";
import TopMenu from "../Pages/ApplicantPortal/Shared/TopMenu";

const ApplicantDashboard = () => {
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

export default ApplicantDashboard;
