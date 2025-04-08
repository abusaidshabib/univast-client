import { useParams } from "react-router-dom";
import { useGetAttendanceRecordByMonthQuery } from "../../../../../features/teacher/teacherApi";
import { MonthPicker, MonthInput } from "react-lite-month-picker";
import { useState } from "react";
import moment from "moment";

const AttendanceRecord = () => {
  const { semester, courseCode, courseTitle } = useParams();
  const [selectedMonthData, setSelectedMonthData] = useState({
    month: 1,
    year: 2024,
  });

  const { data: attendaceData } = useGetAttendanceRecordByMonthQuery({
    semester,
    courseCode,
    month: `${selectedMonthData.year}-${selectedMonthData.month}`,
  });

  console.log(attendaceData);
  const [isPickerOpen, setIsPickerOpen] = useState(false);
  return (
    <div className="min-h-[calc(100vh-80px)] w-full bg-gray-200 p-5">
      <div className="bg-white p-10 rounded-lg">
        <div className="flex justify-between mb-10">
          <p className="text-4xl font-semibold">Take Attendance</p>
          <div className="text-right">
            <p className="text-lg">{courseTitle}</p>
            <p className="text">Course Code: {courseCode}</p>
            <p className="text">Semester: {semester}</p>
          </div>
        </div>

        <div className="flex justify-between items-end">
          <div>
            <p>Total Students: {attendaceData?.tableData?.length}</p>
            {/* <p>
              Attendace Percentage:{" "}
              {(attendaceData?.data?.filter((item) => item.status === true)
                .length *
                100) /
                attendaceData?.data?.length}
              %
            </p> */}
          </div>

          <div className="">
            <MonthInput
              selected={selectedMonthData}
              setShowMonthPicker={setIsPickerOpen}
              showMonthPicker={isPickerOpen}
              size="small"
            />
            {isPickerOpen ? (
              <MonthPicker
                setIsOpen={setIsPickerOpen}
                selected={selectedMonthData}
                onChange={setSelectedMonthData}
                size="small"
              />
            ) : null}
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
                          <input
                            type="checkbox"
                            className="text-blue-500 border-gray-300 rounded"
                          />
                          <span>SI No.</span>
                        </div>
                      </th>

                      <th
                        scope="col"
                        className="px-12 py-3.5 text-left rtl:text-right text-gray-500"
                      >
                        Student ID
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left rtl:text-right text-gray-500"
                      >
                        Student Name
                      </th>

                      {attendaceData?.tableHeadings?.map((item, i) => (
                        <th
                          scope="col"
                          className="px-4 py-3.5 text-center rtl:text-right text-gray-500"
                          key={i}
                        >
                          {moment(item).format("DD")}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {attendaceData?.tableData?.map((item, i) => (
                      <tr key={item._id}>
                        <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                          <div className="inline-flex items-center gap-x-3">
                            <input
                              type="checkbox"
                              className="text-blue-500 border-gray-300 rounded"
                            />

                            <div className="">{i + 1}</div>
                          </div>
                        </td>
                        <td className="px-12 py-4 text-sm text-gray-500 whitespace-nowrap">
                          {item.studentId}
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                          {item.studentName}
                        </td>
                        {attendaceData?.tableHeadings?.map((date, i) => (
                          <td
                            key={i}
                            className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap text-center"
                          >
                            {item[date] === true ? (
                              <span className="text-green-500">Present</span>
                            ) : (
                              <span className="text-red-500">Absent</span>
                            )}
                          </td>
                        ))}
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

//localhost:8000/api/v1/student-attendance/month?courseCode=CSE-1101&semester=Spring-2024&date=01-2024

export default AttendanceRecord;
