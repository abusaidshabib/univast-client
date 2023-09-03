import { Outlet } from "react-router-dom";
import TopMenu from "../Pages/FinantialPortal/Shared/TopMenu";
import Menu from "../Pages/FinantialPortal/Shared/Menu";

const FinantialDashboard = () => {
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

export default FinantialDashboard;
