import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../../Context/UserContext";
import { useGetTeacherByEmailQuery } from "../../../../../features/teacher/teacherApi";
import moment from "moment";
import { useGetSemestersQuery } from "../../../../../features/semester/semesterApi";

const TMainAttendance = () => {
  const [selectedSemester, setSelectedSemester] = useState("");
  const { user } = useContext(AuthContext);
  const { data } = useGetTeacherByEmailQuery(user?.email);

  const teacher = data?.data[0];
  const enrollDate = moment(teacher?.personal?.enrollDate).format("YYYY-MM-DD");
  let { data: semesters } = useGetSemestersQuery({
    startDate: enrollDate,
    endDate: moment().format("YYYY-MM-DD"),
  });
  const filteredCourses = teacher?.courses_taught?.find(
    (item) => item.semester === selectedSemester
  );

  useEffect(() => {
    setSelectedSemester(semesters?.data[0]);
  }, [semesters]);
  return (
    <div className="bg-white p-10 rounded-lg">
      <div className="flex justify-between mb-10">
        <p className="text-4xl font-semibold">Enrolled Courses</p>
        <select
          name="semester"
          id="semester"
          onChange={(e) => {
            setSelectedSemester(e.target.value);
            // refetch();
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
      <div className="flex flex-col mt-6">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
              <table className="min-w-full border-collapse w-full text-lg bg-p-white">
                <thead className="bg-gray-50 dark:bg-gray-800 text-sm uppercase font-normal tracking-wider">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 px-4 text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      <div className="flex items-center gap-x-3">
                        <input
                          type="checkbox"
                          className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700"
                        />
                        <span>SI No.</span>
                      </div>
                    </th>

                    <th
                      scope="col"
                      className="px-12 py-3.5 text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      Course Code
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      Course Title
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      Credit
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                  {filteredCourses?.courses?.map((course, i) => (
                    <tr key={course._id}>
                      <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                        <div className="inline-flex items-center gap-x-3">
                          <input
                            type="checkbox"
                            className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700"
                          />

                          <div className="">{i + 1}</div>
                        </div>
                      </td>
                      <td className="px-12 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                        {course.courseCode}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                        {course.courseName}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                        {course.credit}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                        <Link
                          className="bg-primary-blue rounded-md hover:bg-gray-600 text-primary-white px-2 py-1"
                          to={`${selectedSemester}/${course.courseCode}/${course.courseName}`}
                        >
                          Take Attendance
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TMainAttendance;
