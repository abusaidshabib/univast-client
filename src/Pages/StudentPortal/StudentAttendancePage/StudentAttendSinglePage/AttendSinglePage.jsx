import { useParams } from "react-router-dom";
import {
  useGetStudentAttendanceQuery,
  useGetStudentByEmailQuery,
} from "../../../../features/student/studentApi";
import AttendedTable from "./AttendedTable";
import DetailAttendance from "./DetailAttendance";
import { useContext } from "react";
import { AuthContext } from "../../../../Context/UserContext";

const AttendSinglePage = () => {
  const { user } = useContext(AuthContext);
  const { semester, courseCode, courseName } = useParams();
  console.log(semester, courseCode);
  const { data } = useGetStudentByEmailQuery(user?.email);
  const studentId = data?.data?.studentId;

  console.log(data);
  const { data: attendanceData } = useGetStudentAttendanceQuery({
    semester,
    courseCode,
    studentId,
  });
  console.log(attendanceData);
  return (
    <div className="min-h-[calc(100vh-80px)] w-full bg-gray-200 p-5 flex flex-col gap-5">
      <div className="bg-white p-10 rounded-lg">
        <div className="flex justify-between items-center text-gray-900 col-span-3 mb-5">
          <div>
            <p className="text-4xl font-semibold">
              Class Attendance of{" "}
              <span className="text-accent-blue">{courseName}</span>
            </p>
          </div>
        </div>
        <div>
          <p className="text-lg">
            Total Classes: {attendanceData?.data?.length}
          </p>
          <p className="text-lg">
            Total Presents:{" "}
            {
              attendanceData?.data?.filter((item) => item.status === true)
                .length
            }
          </p>
          <p className="text-lg">
            Attendance Percentage:{" "}
            {(attendanceData?.data?.filter((item) => item.status === true)
              ?.length *
              100) /
              attendanceData?.data?.length}
            %
          </p>
        </div>
      </div>
      <AttendedTable attendanceData={attendanceData?.data}></AttendedTable>
    </div>
  );
};

export default AttendSinglePage;
