import { useState } from "react";
import { useGetDepartmentsByFacultyCodeQuery } from "../../../features/department/department";
import { useGetFacultiesQuery } from "../../../features/faculty/facultyApi";

const CreateProgram = () => {
  const { data: faculties } = useGetFacultiesQuery();
  const [selectedFaculty, setSelectedFaculty] = useState();
  let { data: departments } =
    useGetDepartmentsByFacultyCodeQuery(selectedFaculty);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const departmentCode = form.departmentCode.value;
    const programCode = form.programCode.value;
    const programName = form.programName.value;
    const programType = form.programType.value;
    const programLevel = form.programLevel.value;
    const programDuration = form.programDuration.value;
    const shiftsInputArr = document.getElementsByName("shifts");
    const shifts = [];

    for (let index = 0; index < shiftsInputArr.length; index++) {
      if (shiftsInputArr[index].checked === true) {
        shifts.push(shiftsInputArr[index].value);
      }
    }

    const data = {
      departmentCode,
      programCode,
      programName,
      programType,
      programLevel,
      programDuration,
      shifts,
    };

    console.log(data);
    // form.reset();
  };

  return (
    <div className="bg-gray-200 min-h-[calc(100vh-80px)] gap-5 text-gray-900 p-5 grid place-items-center">
      <section className="p-6 bg-white rounded-md shadow-md dark:bg-gray-800">
        <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
          Add New Program
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
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                onChange={(e) => setSelectedFaculty(e.target.value)}
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
                htmlFor="programType"
              >
                Program Type
              </label>
              <select
                name="programType"
                id="programType"
                required
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              >
                <option value="">Select Program Type</option>
                <option value="Undergaduate">Undergaduate</option>
                <option value="Graduate">Graduate</option>
              </select>
            </div>
            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="programLevel"
              >
                Program Level
              </label>
              <select
                name="programLevel"
                id="programLevel"
                required
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              >
                <option value="">Select Program Level</option>
                <option value="Bachelor">Bachelor</option>
                <option value="Masters">Masters</option>
              </select>
            </div>
            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="programCode"
              >
                Program Code
              </label>
              <input
                name="programCode"
                id="programCode"
                required
                placeholder="Type here"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="programName"
              >
                Program Name
              </label>
              <input
                name="programName"
                id="programName"
                required
                placeholder="Type here"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="programDuration"
              >
                Program Duration
              </label>
              <input
                name="programDuration"
                id="programDuration"
                required
                placeholder="Type here"
                type="number"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-gray-700 dark:text-gray-200">
                Program Shifts
              </label>
              <div className="flex items-center px-4 py-2 mt-2 gap-10">
                <div className="flex items-center gap-2">
                  <input
                    name="shifts"
                    id="day"
                    required
                    placeholder="Type here"
                    type="checkbox"
                    value="Day"
                    className="text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  />
                  <label
                    htmlFor="day"
                    className="text-gray-700 dark:text-gray-200"
                  >
                    Day
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    name="shifts"
                    id="evening"
                    required
                    placeholder="Type here"
                    type="checkbox"
                    value="Evening"
                    className="text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  />
                  <label
                    htmlFor="evening"
                    className="text-gray-700 dark:text-gray-200"
                  >
                    Evening
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <button
              // disabled={isLoading}
              type="submit"
              className="px-8 py-2.5 leading-5 text-primary-white transition-colors duration-300 transform bg-primary-blue rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            >
              Submit
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default CreateProgram;
