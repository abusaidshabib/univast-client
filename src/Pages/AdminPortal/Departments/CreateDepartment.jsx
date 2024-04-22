import { useEffect } from "react";
import { usePostDepartmentMutation } from "../../../features/department/department";
import { useGetFacultiesQuery } from "../../../features/faculty/facultyApi";
import toast from "react-hot-toast";

const CreateDepartment = () => {
  const { data: faculties } = useGetFacultiesQuery();
  const [postDepartment, { isLoading, isSuccess, isError, error }] =
    usePostDepartmentMutation();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const facultyCode = form.facultyCode;
    const departmentCode = form.departmentCode;
    const departmentName = form.departmentName;

    const data = {
      facultyCode,
      departmentCode,
      departmentName,
    };

    console.log(data);
    postDepartment(data);
    form.reset();
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Department successfully created");
    } else if (isError) {
      console.log(error);
      toast.error(error.data.message);
    }
  }, [isError, isSuccess]);

  return (
    <div className="bg-gray-200 min-h-[calc(100vh-80px)] gap-5 text-gray-900 p-5 grid place-items-center">
      <section className="p-6 bg-white rounded-md shadow-md dark:bg-gray-800">
        <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
          Add New Department
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
                Department Code
              </label>
              <input
                name="departmentCode"
                id="departmentCode"
                required
                placeholder="Type here"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="departmentName"
              >
                Department Name
              </label>
              <input
                name="departmentName"
                id="departmentName"
                required
                placeholder="Type here"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <button
              disabled={isLoading}
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

export default CreateDepartment;
