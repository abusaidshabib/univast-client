/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useUpdateFacultyMutation } from "../../../features/faculty/facultyApi";
import { useGetTeachersQuery } from "../../../features/teacher/teacherApi";
import { RxCross1 } from "react-icons/rx";
import toast from "react-hot-toast";

const FaqEditModal = ({ faculty, setModal }) => {
  const { data: teachers } = useGetTeachersQuery();
  const [updateFaculty, { isLoading, isSuccess, isError, error }] =
    useUpdateFacultyMutation();
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
    console.log(data);
    updateFaculty(data);
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Faculty successfully edited");
      setModal(false);
    } else if (isError) {
      toast.error(error.data?.message);
    }
  }, [isError, isSuccess]);

  return (
    <>
      <div
        onClick={() => setModal(false)}
        className="bg-black/30 fixed top-0 z-50 left-0 w-full h-screen gap-5 text-gray-900 p-5 grid place-items-center"
      ></div>
      <section className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 p-6 bg-white rounded-md shadow-md dark:bg-gray-800">
        <div className="relative">
          <span
            onClick={() => {
              setModal(false);
            }}
            className="absolute -top-2 -right-2 hover:bg-black/10 cursor-pointer transition-colors duration-300 p-2 rounded-full"
          >
            <RxCross1 />
          </span>
          <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
            Edit Faculty
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
                  defaultValue={faculty?.facultyCode}
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
                  defaultValue={faculty?.facultyName}
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
                  defaultValue={faculty?.contactNumber}
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
                  defaultValue={faculty?.email}
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
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                >
                  <option value="">Select Dean</option>
                  {teachers?.data?.map((teacher) => (
                    <option
                      selected={
                        faculty?.dean ===
                        teacher.personal.firstName +
                          " " +
                          teacher.personal.lastName
                      }
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
                Update
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default FaqEditModal;
