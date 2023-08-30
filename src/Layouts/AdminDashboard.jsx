import { Outlet } from "react-router-dom";
import Menu from "../Pages/AdminPortal/Shared/Menu";
import TopMenu from "../Pages/AdminPortal/Shared/TopMenu";

const AdminDashboard = () => {
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

export default AdminDashboard;
