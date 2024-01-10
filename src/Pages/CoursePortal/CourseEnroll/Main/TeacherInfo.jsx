import { useParams } from "react-router-dom";
import { useGetTeacherByIdQuery } from "../../../../features/teacher/teacherApi";
import { useGetSemestersQuery } from "../../../../features/semester/semesterApi";
import { useState } from "react";
import moment from "moment";

const TeacherInfo = () => {
  const router = useParams();
  const { id } = router;
  const { data } = useGetTeacherByIdQuery(id);
  const teacher = data?.data[0];
  console.log(teacher)

  const enrollDate = moment(teacher?.personal?.enrollDate).format("YYYY-MM-DD"); 

  let { data: semesters } = useGetSemestersQuery({
    startDate: enrollDate,
    endDate: moment().format("YYYY-MM-DD")
  });

  // 2020-02-15&end=2022-05-23
  console.log("semesters", semesters);
  const [selectedSemester, setSelectedSemester] = useState();

  return (
    <div className="min-h-[calc(100vh-80px)] w-full bg-gray-200 p-5 font-sans">
      <div className="p-10 bg-white">
        <div className="flex gap-5 mb-5">
          <div>
            <img
              src={teacher?.personal.image}
              width={150}
              className="border-4 border-gray-400"
            />
          </div>
          <div>
            <h2 className="text-3xl mb-3 font-semibold">
              {teacher?.personal.firstName + " " + teacher?.personal.lastName}
            </h2>
            <p className="text-xl mb-2">Id: {teacher?.teacherId}</p>
            <p className="text-xl mb-3">
              {teacher?.designation}, {teacher?.departmentName}
            </p>
            <p className="text-xl">
              Total Enrolled Courses : {teacher?.courses_taught?.length}
            </p>
          </div>
        </div>
        <div className="flex justify-end">
          <select
            name="semester"
            id="semester"
            onChange={(e) => {
              setSelectedSemester(e.target.value);
              // refetch();
            }}
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
      </div>
    </div>
  );
};

export default TeacherInfo;
