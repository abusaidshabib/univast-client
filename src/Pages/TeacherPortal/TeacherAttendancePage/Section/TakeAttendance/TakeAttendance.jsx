import { useParams } from "react-router-dom";

const TakeAttendance = () => {
    const {semester, courseCode, courseTitle} = useParams()
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
      </div>
    </div>
  );
};

export default TakeAttendance;
