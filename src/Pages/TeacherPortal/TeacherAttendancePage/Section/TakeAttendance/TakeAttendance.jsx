import { DatePicker } from "@tremor/react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import {
  useGetAttendanceDateWiseQuery,
  usePostAttendanceMutation,
} from "../../../../../features/teacher/teacherApi";
import moment from "moment/moment";

const TakeAttendance = () => {
  const { semester, courseCode, courseTitle } = useParams();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const { data: attendaceData } = useGetAttendanceDateWiseQuery({
    courseCode,
    semester,
    date: moment(selectedDate).format("YYYY-MM-DD"),
  });

  const [postAttendance] = usePostAttendanceMutation();

  console.log(selectedDate, attendaceData);
  return (
    <div className="min-h-[calc(100vh-80px)] w-full bg-gray-200 p-5">
      <div className="bg-white p-10 rounded-lg">
        <div className="flex justify-between mb-10">
          <p className="text-4xl font-semibold">Take Attendance</p>
          <div className="w-72">
            <DatePicker
              onValueChange={setSelectedDate}
              value={selectedDate}
              className="max-w-sm mx-auto"
            />
          </div>
          <div className="text-right">
            <p className="text-lg">{courseTitle}</p>
            <p className="text">Course Code: {courseCode}</p>
            <p className="text">Semester: {semester}</p>
          </div>
        </div>

        <div>
          <p>Total Students: {attendaceData?.data?.length}</p>
          <p>
            Total Present Today:{" "}
            {attendaceData?.data?.filter((item) => item.status === true).length}
          </p>
          <p>
            Total Absent:{" "}
            {
              attendaceData?.data?.filter((item) => item.status === false)
                .length
            }
          </p>
          <p>
            Attendace Percentage:{" "}
            {(attendaceData?.data?.filter((item) => item.status === true)
              .length *
              100) /
              attendaceData?.data?.length}%
          </p>
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
                        className="px-4 py-3.5 text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Attendance
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                    {attendaceData?.data?.map((item, i) => (
                      <tr key={item._id}>
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
                          {item.studentId}
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          {item.student_name}
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          <span
                            onClick={() => {
                              const data = {
                                semester,
                                studentId: item.studentId,
                                courseCode,
                                date: moment(selectedDate).format("YYYY-MM-DD"),
                              };
                              postAttendance(data);
                            }}
                            className={`px-3 py-1 rounded-full cursor-pointer ${
                              item.status
                                ? "bg-green-500 text-white"
                                : "bg-gray-400 text-black"
                            }`}
                          >
                            {item.status ? "Present" : "Absent"}
                          </span>
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
    </div>
  );
};

export default TakeAttendance;
