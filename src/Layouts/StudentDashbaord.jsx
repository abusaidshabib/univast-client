import { Outlet } from "react-router-dom";
import Menu from "../Components/StudentDashboard/Shared/Menu";
import TopMenu from "../Components/StudentDashboard/Shared/TopMenu";

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