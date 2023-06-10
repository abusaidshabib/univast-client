import { Outlet } from "react-router-dom";
import Menu from "../Pages/TeacherPortal/Shared/Menu";
import TopMenu from "../Pages/TeacherPortal/Shared/TopMenu";

const TeacherDashboard = () => {
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

export default TeacherDashboard;
