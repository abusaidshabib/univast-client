import { useEffect } from "react";
import { usePostFacultyMutation } from "../../../features/faculty/facultyApi";
import { useGetTeachersQuery } from "../../../features/teacher/teacherApi";
import toast from "react-hot-toast";

const CreateFaculty = () => {
  const { data: teachers } = useGetTeachersQuery();
  const [postFaculty, { isLoading, isSuccess, isError, error }] =
    usePostFacultyMutation();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const facultyCode = form.facultyCode.value;
    const facultyName = form.facultyName.value;
    const contactNumber = form.contactNumber.value;
    const email = form.email.value;
    const dean = form.dean.value;

    const data = {
      facultyCode,
      facultyName,
      contactNumber,
      email,
      dean,
    };
    postFaculty(data);

    form.reset();
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Faculty successfully created");
    } else if (isError) {
      console.log(error);
      toast.error(error.data.message);
    }
  }, [isError, isSuccess]);

  return (
    <div className="bg-gray-200 min-h-[calc(100vh-80px)] gap-5 text-gray-900 p-5 grid place-items-center">
      <section className="p-6 bg-white rounded-md shadow-md dark:bg-gray-800">
        <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
          Add New Faculty
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="facultyCode"
              >
                Faculty Code
              </label>
              <input
                name="facultyCode"
                id="facultyCode"
                required
                placeholder="Type here"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="facultyName"
              >
                Faculty Name
              </label>
              <input
                name="facultyName"
                id="facultyName"
                required
                placeholder="Type here"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="contactNumber"
              >
                Contact Number
              </label>
              <input
                name="contactNumber"
                id="contactNumber"
                required
                placeholder="Type here"
                type="tel"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                name="email"
                id="email"
                required
                placeholder="Type here"
                type="email"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="dean"
              >
                Dean
              </label>
              <select
                name="dean"
                id="dean"
                required
                // onChange={(e) => setSelectedDean(e.target.value)}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              >
                <option value="">Select Dean</option>
                {teachers?.data?.map((teacher) => (
                  <option
                    key={teacher._id}
                    value={
                      teacher.personal.firstName +
                      " " +
                      teacher.personal.lastName
                    }
                  >
                    {teacher.personal.firstName +
                      " " +
                      teacher.personal.lastName}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <button
              disabled={isLoading}
              type="submit"
              className="px-8 py-2.5 leading-5 text-primary-white transition-colors duration-300 transform bg-primary-blue rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            >
              Create
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default CreateFaculty;
