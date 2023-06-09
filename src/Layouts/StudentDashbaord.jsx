import { Outlet } from "react-router-dom";
import TopMenu from "../Pages/StudentPortal/Shared/TopMenu";
import Menu from "../Pages/StudentPortal/Shared/Menu";


const StudentDashbaord = () => {
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

export default StudentDashbaord;