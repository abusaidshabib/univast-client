import { useState } from "react";
import { useGetDepartmentsQuery } from "../../../../features/department/department";
import { useGetFilteredTeachersQuery } from "../../../../features/teacher/teacherApi";
import { Link } from "react-router-dom";

const CourseEnroll = () => {
  let { data: departments } = useGetDepartmentsQuery();
  const [selectedDepartment, setSelectedDepartment] = useState();
  const [teacherQuery, setTeacherQuery] = useState("");
  const { data: teachers, refetch } = useGetFilteredTeachersQuery({
    teacherQuery,
    selectedDepartment,
  });
  // const { data: teachers } = useGetTeachersQuery();
  console.log(teacherQuery, selectedDepartment, teachers);

  return (
    <div className="min-h-[calc(100vh-80px)] w-full bg-gray-200 p-5 font-sans">
      <div className="p-10 bg-white">
        <div className="flex items-center gap-x-3">
          <h2 className="text-4xl font-semibold">Course Enrollment</h2>
        </div>
        <form>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <label
                htmlFor="search"
                className="block text-sm text-gray-500 dark:text-gray-300"
              >
                Find Teacher
              </label>

              <input
                onChange={(e) => {
                  setTeacherQuery(e.target.value);
                  refetch();
                }}
                type="search"
                placeholder="Search by Teacher's ID or name"
                className="mt-2 block w-full placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
              />
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
                onChange={(e) => {
                  setSelectedDepartment(e.target.value);
                  refetch();
                }}
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
          </div>
        </form>

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
                          <span>Name</span>
                        </div>
                      </th>

                      <th
                        scope="col"
                        className="px-12 py-3.5 text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Department
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Designation
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Email address
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                    {teachers?.data.map((teacher) => (
                      <tr key={teacher._id}>
                        <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                          <div className="inline-flex items-center gap-x-3">
                            <input
                              type="checkbox"
                              className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700"
                            />

                            <div className="flex items-center gap-x-2">
                              <img
                                className="object-cover w-10 h-10 rounded-full"
                                src={teacher.personal.image}
                                alt=""
                              />
                              <div>
                                <h2 className="font-medium text-gray-800 dark:text-white ">
                                  {teacher.personal.firstName +
                                    " " +
                                    teacher.personal.lastName}
                                </h2>
                                <p className="text-sm font-normal text-gray-600 dark:text-gray-400">
                                  Id: {teacher.teacherId}
                                </p>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-12 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          {teacher.departmentName}
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          {teacher.designation}
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          {teacher.personal.email}
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          <Link to={`${teacher.teacherId}`}>Details</Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mt-6">
          <a
            href="#"
            className="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 rtl:-scale-x-100"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
              />
            </svg>

            <span>previous</span>
          </a>

          <div className="items-center hidden lg:flex gap-x-3">
            <a
              href="#"
              className="px-2 py-1 text-sm text-blue-500 rounded-md dark:bg-gray-800 bg-blue-100/60"
            >
              1
            </a>
            <a
              href="#"
              className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
            >
              2
            </a>
            <a
              href="#"
              className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
            >
              3
            </a>
            <a
              href="#"
              className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
            >
              ...
            </a>
            <a
              href="#"
              className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
            >
              12
            </a>
            <a
              href="#"
              className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
            >
              13
            </a>
            <a
              href="#"
              className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
            >
              14
            </a>
          </div>

          <a
            href="#"
            className="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800"
          >
            <span>Next</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 rtl:-scale-x-100"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CourseEnroll;
