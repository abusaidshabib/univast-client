import { NavLink, Outlet } from "react-router-dom";

const SCourseDetails = () => {
  return (
    <div className="student-course-details bg-gray-200 w-full min-h-[calc(100vh-80px)] p-5">
      <div className="bg-white p-10 min-h-[calc(100vh-100px)]">
        <nav className="flex gap-5 font-semibold text-lg mb-10">
          <NavLink
            className="underline-offset-8"
            to="outline"
          >
            Outline
          </NavLink>
          <NavLink
            className="underline-offset-8"
            to="lectures"
          >
            Lectures
          </NavLink>
          <NavLink
            className="underline-offset-8"
            to="classwork"
          >
            Classwork
          </NavLink>
          <NavLink
            className="underline-offset-8"
            to="notice"
          >
            Notice
          </NavLink>
        </nav>
        <div>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default SCourseDetails;
