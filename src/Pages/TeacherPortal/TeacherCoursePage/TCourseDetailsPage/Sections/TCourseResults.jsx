import { useLocation, useParams } from "react-router-dom";
import { useGetStudentByCourseQuery } from "../../../../../features/student/studentApi";
import SingleStudentRow from "./SingleStudentRow";
import { useEffect, useState } from "react";

const TCourseResults = () => {
  
  const { courseCode } = useParams();
  const { data: students } = useGetStudentByCourseQuery(courseCode);

  const location = useLocation();
  const [selectedSemester, setSelectedSemester] = useState("");

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const semester = queryParams.get("semester");
    setSelectedSemester(semester);
  }, [location]);

  return (
    <div>

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
                        <span>SI No.</span>
                      </div>
                    </th>

                    <th
                      scope="col"
                      className="px-12 py-3.5 text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      Student ID
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      Student Name
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-center rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      Mid
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-center rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      Final
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-center rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      Attendance
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-center rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      Assesments/ Presentation
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-center rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      Total
                    </th>

                    {/* <th
                      scope="col"
                      className="px-4 py-3.5 text-center rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      Grades
                    </th> */}
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-center rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                  {students?.data?.map((item, i) => (
                    <SingleStudentRow
                      key={i}
                      item={item}
                      i={i}
                      selectedSemester={selectedSemester}
                    ></SingleStudentRow>
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

export default TCourseResults;
