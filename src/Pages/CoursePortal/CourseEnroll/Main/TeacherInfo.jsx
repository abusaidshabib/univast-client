import { useParams } from "react-router-dom";
import { useGetTeacherByIdQuery } from "../../../../features/teacher/teacherApi";
import { useGetSemestersQuery } from "../../../../features/semester/semesterApi";
import { useEffect, useState } from "react";
import moment from "moment";
import { RiDeleteBin6Line } from "react-icons/ri";
import CourseEnrollModal from "./CourseEnrollModal";
import { useTeacherEnrollCourseDeleteMutation } from "../../../../features/course/courseApi";
import toast from "react-hot-toast";

const TeacherInfo = () => {
  const router = useParams();
  const { id } = router;
  const { data, refetch } = useGetTeacherByIdQuery(id);
  const teacher = data?.data[0];
  const enrollDate = moment(teacher?.personal?.enrollDate).format("YYYY-MM-DD");
  let { data: semesters } = useGetSemestersQuery({
    startDate: enrollDate,
    endDate: moment().format("YYYY-MM-DD"),
  });
  const [selectedSemester, setSelectedSemester] = useState("");
  const [courseEnrollModal, setCourseEnrollModal] = useState(false);
  const filteredCourses = teacher?.courses_taught?.find(
    (item) => item.semester === selectedSemester
  );

  const [deleteEnrollCourse, { isSuccess, isLoading, isError, error }] =
    useTeacherEnrollCourseDeleteMutation();

  useEffect(() => {
    setSelectedSemester(semesters?.data[0]);
  }, [semesters]);

  const handleDelete = (courseCode, teacherId) => {
    const data = {
      teacherId,
      semester: selectedSemester,
      courseCode: [courseCode],
    };
    deleteEnrollCourse(data);
  };

  useEffect(() => {
    if(isLoading){
      toast.loading("Course Removing", { id: "remove" });
    }
    else if (isSuccess) {
      toast.success("Course Removed", { id: "remove" });
      refetch();
    } else if (isError) {
      console.log(error);
      toast.error(error?.data?.message, { id: "remove" });
    }
  }, [isSuccess, isLoading, isError]);

  return (
    <div className="min-h-[calc(100vh-80px)] w-full bg-gray-200 p-5 font-sans">
      {courseEnrollModal && (
        <CourseEnrollModal
          setCourseEnrollModal={setCourseEnrollModal}
          semester={selectedSemester}
          teacherId={teacher?.teacherId}
          refetch={refetch}
        ></CourseEnrollModal>
      )}
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

        {selectedSemester === semesters?.data[0] && (
          <div className="flex justify-end mt-6">
            <button
              onClick={() => setCourseEnrollModal(true)}
              className="px-8 py-2.5 leading-5 text-primary-white transition-colors duration-300 transform bg-primary-blue rounded-md hover:bg-gray-600 focus:outline-none"
            >
              Add Course
            </button>
          </div>
        )}

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
                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                          <div className="flex items-center gap-x-6">
                            <button
                              onClick={() => {
                                const confirmation =
                                  window.confirm("Are you sure?");
                                if (confirmation) {
                                  handleDelete(
                                    course.courseCode,
                                    teacher?.teacherId
                                  );
                                }
                              }}
                              className="text-gray-500 transition-colors duration-200 dark:hover:text-red-500 dark:text-gray-300 hover:text-red-500 focus:outline-none text-xl"
                            >
                              <RiDeleteBin6Line />
                            </button>
                          </div>
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

export default TeacherInfo;
