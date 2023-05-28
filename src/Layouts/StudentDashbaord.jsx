import { Outlet } from "react-router-dom";
import Menu from "../Components/StudentDashboard/Shared/Menu";
import TopMenu from "../Components/StudentDashboard/Shared/TopMenu";

const StudentDashbaord = () => {
  return (
    <div className="bg-primary-900 min-h-screen min-w-screen flex pr-5">
      <Menu></Menu>
      <div className="w-full">
        <TopMenu></TopMenu>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default StudentDashbaord;