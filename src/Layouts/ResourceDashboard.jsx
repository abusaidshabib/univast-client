import { Outlet } from "react-router-dom";
import Menu from "../Pages/ResourcePortal/Shared/Menu";
import TopMenu from "../Pages/ResourcePortal/Shared/TopMenu";

const ResourceDashboard = () => {
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

export default ResourceDashboard;
