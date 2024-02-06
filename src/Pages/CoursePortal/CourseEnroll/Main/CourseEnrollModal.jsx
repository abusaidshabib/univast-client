/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useGetFacultiesQuery } from "../../../../features/faculty/facultyApi";
import { useGetDepartmentsByFacultyCodeQuery } from "../../../../features/department/department";
import { useGetProgramsByDepartmentCodeQuery } from "../../../../features/programs/programApi";
import {
  useGetCoursesQuery,
  useTeacherEnrollCourseMutation,
} from "../../../../features/course/courseApi";
import { RxCross2 } from "react-icons/rx";
import toast from "react-hot-toast";

const CourseEnrollModal = ({
  setCourseEnrollModal,
  semester,
  teacherId,
  refetch,
}) => {
  const { data: faculties } = useGetFacultiesQuery();
  const [selectedFaculty, setSelectedFaculty] = useState();
  let { data: departments } =
    useGetDepartmentsByFacultyCodeQuery(selectedFaculty);
  const [selectedDepartment, setSelectedDepartment] = useState();
  let { data: programs } =
    useGetProgramsByDepartmentCodeQuery(selectedDepartment);
  const [selectedProgram, setSelectedProgram] = useState();
  const { data: courses } = useGetCoursesQuery();
  console.log(courses);

  const [selectedCourses, setSelectedCourses] = useState([]);

  const [enrollCourse, { isLoading, isError, isSuccess, error }] =
    useTeacherEnrollCourseMutation();

  const handleSave = async () => {
    const data = {
      teacherId,
      semester,
      courseCode: selectedCourses,
    };
    console.log(data);
    await enrollCourse(data);
  };

  useEffect(() => {
    if (isLoading) {
      toast.loading("Courses Adding", { id: "enroll" });
    }
    else if (isSuccess) {
      toast.success("Courses Added Successfully", { id: "enroll" });
      setCourseEnrollModal(false)
      refetch();
    }
    else if(isError){
      console.log(error)
      toast.error(error?.data?.message, { id: "enroll" });
    }
  }, [isSuccess, isLoading, isError]);

  return (
    <div>
      <div className="absolute w-screen h-screen left-0 top-0 z-50 backdrop-opacity-10 backdrop-invert bg-white/30"></div>
      <div className="bg-white absolute z-50 w-[80vw] h-[80vh] rounded-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-y-scroll">
        <div className="absolute z-40 top-5 right-5">
          <button
            onClick={() => setCourseEnrollModal(false)}
            className="p-2 rounded-full transition-all bg-gray-200 hover:bg-red-500 hover:text-primary-white"
          >
            <RxCross2 />
          </button>
        </div>

        <div className="px-16 py-10">
          <form>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3">
              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  htmlFor="facultyCode"
                >
                  Faculty
                </label>
                <select
                  name="facultyCode"
                  id="facultyCode"
                  onChange={(e) => setSelectedFaculty(e.target.value)}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                >
                  <option value="">Select Faculty</option>
                  {faculties?.data?.map((faculty) => (
                    <option key={faculty._id} value={faculty.facultyCode}>
                      {faculty.facultyName}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  htmlFor="departmentCode"
                >
                  Department
                </label>
                <select
                  name="departmentCode"
                  id="departmentCode"
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                >
                  <option value="">Select Department</option>
                  {departments?.data?.map((department) => (
                    <option
                      key={department._id}
                      value={department.departmentCode}
                    >
                      {department.departmentName}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  htmlFor="programCode"
                >
                  Program
                </label>
                <select
                  name="programCode"
                  id="programCode"
                  onChange={(e) => setSelectedProgram(e.target.value)}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                >
                  <option value="">Select Program</option>
                  {programs?.data?.map((program) => (
                    <option key={program._id} value={program.programCode}>
                      {program.programName}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </form>

          <div className="mt-3 flex items-center gap-2">
            <span>Selected Courses :</span>{" "}
            <p className="flex items-center gap-2">
              {selectedCourses?.map((course, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full bg-primary-blue text-primary-white text-xs"
                >
                  {course}
                </span>
              ))}
            </p>
          </div>

          <div className="flex flex-col mt-6">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                  <table
                    id="courses"
                    className="min-w-full border-collapse w-full text-lg bg-p-white"
                  >
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
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                      {courses?.data
                        ?.filter((course) => {
                          if (
                            (!selectedFaculty ||
                              course.facultyCode === selectedFaculty) &&
                            (!selectedDepartment ||
                              course.departmentCode === selectedDepartment) &&
                            (!selectedProgram ||
                              course.programCode === selectedProgram)
                          ) {
                            return true;
                          }

                          return false;
                        })
                        .map((course, i) => (
                          <tr key={course._id}>
                            <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                              <div className="inline-flex items-center gap-x-3">
                                <input
                                  type="checkbox"
                                  value={course.courseCode}
                                  onChange={(e) => {
                                    setSelectedCourses((prev) => {
                                      if (
                                        prev.find(
                                          (course) => course === e.target.value
                                        )
                                      ) {
                                        return prev.filter(
                                          (course) => course !== e.target.value
                                        );
                                      } else {
                                        return [...prev, e.target.value];
                                      }
                                    });
                                  }}
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
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sticky w-full left-0 bottom-0 bg-white border-t-2">
          <div className="flex justify-end py-3 px-10">
            <button
              onClick={handleSave}
              className="px-8 py-2.5 leading-5 text-primary-white transition-colors duration-300 transform bg-primary-blue rounded-md hover:bg-gray-600 focus:outline-none"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseEnrollModal;
