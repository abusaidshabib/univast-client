import { useEffect, useState } from "react";
import { useGetDepartmentsByFacultyCodeQuery } from "../../../../features/department/department";
import { useGetFacultiesQuery } from "../../../../features/faculty/facultyApi";
import { useGetProgramsByDepartmentCodeQuery } from "../../../../features/programs/programApi";
import { usePostCourseMutation } from "../../../../features/course/courseApi";
import { toast } from "react-hot-toast";


const CourseCreate = () => {
  const { data: faculties } = useGetFacultiesQuery();
  const [selectedFaculty, setSelectedFaculty] = useState();
  let { data: departments } = useGetDepartmentsByFacultyCodeQuery(selectedFaculty);
  const [selectedDepartment, setSelectedDepartment] = useState();
  console.log(selectedDepartment)
  let { data: programs } = useGetProgramsByDepartmentCodeQuery(selectedDepartment)

  const [postCourse, {isLoading, isError, error, isSuccess}] = usePostCourseMutation();


  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target

    const facultyCode = form.facultyCode.value;
    const departmentCode = form.departmentCode.value;
    const programCode = form.programCode.value;
    const courseName = form.courseName.value;
    const courseCode = form.courseCode.value;
    const credit = form.credit.value;

    const data = {
        facultyCode,
        departmentCode,
        programCode,
        courseName,
        courseCode,
        credit
    }

    console.log(data)
    postCourse(data)
    form.reset()

  }

  useEffect(() => {
    if(isSuccess){
        toast.success("Course Successfully Added")
    }
    if (isError) {
      console.log(error);
      toast.error(error.data.message._message);
    }
  },[error, isError, isSuccess])


  return (
    <div className="bg-gray-200 min-h-[calc(100vh-80px)] gap-5 text-gray-900 p-5 grid place-items-center">
      <section className="p-6 bg-white rounded-md shadow-md dark:bg-gray-800">
        <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
          Add New Course
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 lg:grid-cols-3">
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
                required
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
                required
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
                required
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              >
                <option value="">Select Program</option>
                {programs?.data?.map((program) => (
                  <option
                    key={program._id}
                    value={program.programCode}
                  >
                    {program.programName}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="courseName"
              >
                Course Title
              </label>
              <input
                name="courseName"
                id="courseName"
                required
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="courseCode"
              >
                Course Code
              </label>
              <input
                name="courseCode"
                id="courseCode"
                required
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="credit"
              >
                Course Credit
              </label>
              <input
                name="credit"
                id="credit"
                required
                type="number"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <button disabled={isLoading} type="submit" className="px-8 py-2.5 leading-5 text-primary-white transition-colors duration-300 transform bg-primary-blue rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
              Submit
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default CourseCreate;
