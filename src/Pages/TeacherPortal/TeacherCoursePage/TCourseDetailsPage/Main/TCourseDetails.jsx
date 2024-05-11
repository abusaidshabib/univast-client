import { useContext, useEffect, useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { useGetSemestersQuery } from "../../../../../features/semester/semesterApi";
import moment from "moment";
import { useGetTeacherByEmailQuery } from "../../../../../features/teacher/teacherApi";
import { AuthContext } from "../../../../../Context/UserContext";

const TCourseDetails = () => {
  const [selectedSemester, setSelectedSemester] = useState("");

  const { user } = useContext(AuthContext);
  const { data } = useGetTeacherByEmailQuery(user?.email);
  const teacherData = data?.data[0];
  const enrollDate = moment(teacherData?.personal?.enrollDate).format(
    "YYYY-MM-DD"
  );

  let { data: semesters } = useGetSemestersQuery({
    startDate: enrollDate,
    endDate: moment().format("YYYY-MM-DD"),
  });

  const location = useLocation();
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const semester = queryParams.get("semester");
    if (semester) {
      setSelectedSemester(semester);
    } else {
      setSelectedSemester(semesters?.data[0]);
    }
  }, [semesters, location]);

  return (
    <div className="student-course-details bg-gray-200 w-full min-h-[calc(100vh-80px)] p-5">
      <div className="bg-white px-10 py-7 min-h-[calc(100vh-100px)]">
        <div className="flex justify-between">
          <nav className="navigation-tab flex gap-5 font-semibold text-lg">
            <NavLink className="underline-offset-8" to={`outline?semester=${selectedSemester}`}>
              Outline
            </NavLink>
            <NavLink className="underline-offset-8" to={`lectures?semester=${selectedSemester}`}>
              Lectures
            </NavLink>
            <NavLink className="underline-offset-8" to={`classwork?semester=${selectedSemester}`}>
              Classwork
            </NavLink>
            <NavLink className="underline-offset-8" to={`results?semester=${selectedSemester}`}>
              Result
            </NavLink>
            <NavLink className="underline-offset-8" to={`notice?semester=${selectedSemester}`}>
              Notice
            </NavLink>
          </nav>
          <select
            name="semester"
            id="semester"
            onChange={(e) => {
              setSelectedSemester(e.target.value);
            }}
            value={selectedSemester}
            className="w-72 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
          >
            <option value="">Select Semester</option>
            {semesters?.data?.map((semester, i) => (
              <option key={i} value={semester}>
                {semester}
              </option>
            ))}
          </select>
        </div>
        <div>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default TCourseDetails;
