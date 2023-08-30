import { Outlet } from "react-router-dom";
import TopMenu from "../Pages/CoursePortal/Shared/TopMenu";
import Menu from "../Pages/ExamPortal/Shared/Menu";

const ExamDashboard = () => {
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

export default ExamDashboard;
