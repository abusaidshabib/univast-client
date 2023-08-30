import { Outlet } from "react-router-dom";
import TopMenu from "../Pages/CoursePortal/Shared/TopMenu";
import Menu from "../Pages/CoursePortal/Shared/Menu";

const CourseDashboard = () => {
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

export default CourseDashboard;
