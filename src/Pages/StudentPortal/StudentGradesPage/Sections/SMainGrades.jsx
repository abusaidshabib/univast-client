import { useContext, useEffect, useState } from "react";
import { useGetSemestersQuery } from "../../../../features/semester/semesterApi";
import moment from "moment";
import { useGetStudentByEmailQuery } from "../../../../features/student/studentApi";
import { AuthContext } from "../../../../Context/UserContext";
import SingleCourseResult from "./SingleCourseResult";

const SMainGrades = () => {
  const [selectedSemester, setSelectedSemester] = useState("");
  const { user } = useContext(AuthContext);
  const { data } = useGetStudentByEmailQuery(user?.email);
  const studentData = data?.data;
  const enrollDate = moment(studentData?.admission_date).format("YYYY-MM-DD");
  let { data: semesters } = useGetSemestersQuery({
    startDate: enrollDate,
    endDate: moment().format("YYYY-MM-DD"),
  });

  const filteredCourses = studentData?.courses_taught?.find(
    (item) => item.semester === selectedSemester
  );

  useEffect(() => {
    setSelectedSemester("Spring-2024");
  }, [semesters]);
  return (
    <div className="bg-p-white p-10 rounded-lg">
      <div className="flex justify-between items-center text-gray-900 col-span-3">
        <div>
          <p className="text-4xl font-semibold">Check Grades</p>
        </div>
        <div>
          <select
            name="semester"
            id="semester"
            onChange={(e) => {
              setSelectedSemester(e.target.value);
              // refetch();
            }}
            value={selectedSemester}
            className="w-72 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
          >
            <option value="">Select Semester</option>
            {semesters?.data?.map((semester, i) => (
              <option key={i} value={semester}>
                {semester}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="flex flex-col mt-6">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-200 md:rounded-lg">
              <table className="min-w-full border-collapse w-full text-lg bg-p-white">
                <thead className="bg-gray-50 text-sm uppercase font-normal tracking-wider">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 px-4 text-left rtl:text-right text-gray-500"
                    >
                      <div className="flex items-center gap-x-3">
                        <span>SI No.</span>
                      </div>
                    </th>

                    <th
                      scope="col"
                      className="px-12 py-3.5 text-left rtl:text-right text-gray-500"
                    >
                      Course Code
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-left rtl:text-right text-gray-500"
                    >
                      Course Title
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-left rtl:text-right text-gray-500"
                    >
                      Credit
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-left rtl:text-right text-gray-500"
                    >
                      Mid
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-left rtl:text-right text-gray-500"
                    >
                      Final
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-left rtl:text-right text-gray-500"
                    >
                      Attendance
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-left rtl:text-right text-gray-500"
                    >
                      Assesments/ Presentation
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-left rtl:text-right text-gray-500"
                    >
                      Total
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-left rtl:text-right text-gray-500"
                    >
                      Grades
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredCourses?.courses?.map((course, i) => (
                    <SingleCourseResult
                      key={i}
                      course={course}
                      i={i}
                      results={studentData?.results}
                    ></SingleCourseResult>
                  ))}
                </tbody>
              </table>
              <p className="text-right px-4 py-4">GPA : </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SMainGrades;
