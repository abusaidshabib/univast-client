import { RiDeleteBin6Line } from "react-icons/ri";
import { AiOutlineEye } from "react-icons/ai";
import { IoMdCheckmark } from "react-icons/io";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { toast } from "react-hot-toast";
import { usePostUserMutation } from "../../../../features/user/userApi";
import { AuthContext } from "../../../../Context/UserContext";
import { usePostTeacherMutation } from "../../../../features/teacher/teacherApi";
import {
  useDeleteLecturerApplicationMutation,
  useGetLecturerApplicationsQuery,
} from "../../../../features/application/lecturerApplicationApi";

const TeacherEnroll = () => {
  const { createUser } = useContext(AuthContext);
  const { data } = useGetLecturerApplicationsQuery();
  const applications = data?.data;
  console.log(applications);

  const [postTeacher, { isLoading, isError, error, isSuccess }] =
    usePostTeacherMutation();

  const [deleteApplication] = useDeleteLecturerApplicationMutation();
  const [postUser] = usePostUserMutation();

  const handleApprove = async (data) => {
    const teacherData = {
      personal: data.personal,
      education: data.education,
      experience: data.experience,
      publication: data.publication,
      research_interests: data.research_interests,
      courses_taught: data.courses_taught,
      others: data.others,
    };
    console.log(teacherData);
    const confirmation = window.confirm("Are you sure?");
    if (confirmation) {
      const data = await postTeacher(teacherData);
      console.log(data);
      if (data?.data?.status) {
        const email = data?.data?.data?.personal.email;
        const password = "teacher123";
        const firstName = data?.data?.data?.personal.firstName;
        const lastName = data?.data?.data?.personal.lastName;
        const role = "teacher";

        createUser(email, password)
          .then((result) => {
            console.log(result);
            const userData = {
              firstName,
              lastName,
              role,
              email,
              firebaseId: result.user.uid,
            };
            console.log(userData);
            postUser(userData);
            deleteApplication(email);
          })
          .catch((error) => console.log(error));
      }
    }
  };

  useEffect(() => {
    if (isLoading) {
      toast.loading("Saving data", { id: "saveApplication" });
    }
    if (isSuccess) {
      toast.success("Successfully Added", { id: "saveApplication" });
    }

    if (isError) {
      console.log(error.data);
      toast.error(error.data.message, { id: "saveApplication" });
    }
  }, [error, isError, isLoading, isSuccess]);

  return (
    <div className="min-h-[calc(100vh-80px)] w-full bg-gray-200 p-5 font-sans">
      {/* <ConfirmationModal/> */}
      <div className="p-10 bg-white">
        <div className="flex items-center gap-x-3">
          <h2 className="text-4xl font-semibold">Teacher Applied</h2>

          <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">
            {applications?.length} Teacher
          </span>
        </div>

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
                        Email Address
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Education
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Experience
                      </th>

                      <th scope="col" className="relative py-3.5 px-4">
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                    {applications?.map((app) => (
                      <tr key={app._id}>
                        <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                          <div className="inline-flex items-center gap-x-3">
                            <input
                              type="checkbox"
                              className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700"
                            />

                            <div className="flex items-center gap-x-2">
                              <img
                                className="object-cover w-10 h-10 rounded-full"
                                src={app.personal.image}
                                alt=""
                              />
                              <div>
                                <h2 className="font-medium text-gray-800 dark:text-white ">
                                  {app.personal.firstName +
                                    " " +
                                    app.personal.lastName}
                                </h2>
                                <p className="text-sm font-normal text-gray-600 dark:text-gray-400">
                                  Id: {app._id}
                                </p>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-12 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          {app.personal.email}
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          {app.education.map((edu, index) => (
                            <p key={index}>
                              <span>{edu.exam}</span> : &nbsp;
                              <span>{edu.result}</span>
                            </p>
                          ))}
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          {app.experience.map((exp, index) => (
                            <p key={index}>
                              <span>{exp.designation}</span>
                              <br />
                              <span>{exp.institution_name}</span>
                            </p>
                          ))}
                        </td>
                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                          <div className="flex items-center gap-x-6">
                            <button
                              onClick={() => {
                                const confirmation =
                                  window.confirm("Are you sure?");
                                if (confirmation) {
                                  deleteApplication(app.personal.email);
                                }
                              }}
                              className="text-gray-500 transition-colors duration-200 dark:hover:text-red-500 dark:text-gray-300 hover:text-red-500 focus:outline-none text-xl"
                            >
                              <RiDeleteBin6Line />
                            </button>
                            <Link
                              to={`/enroll/teacherEnroll/query?email=${app.personal.email}`}
                              className="text-gray-500 transition-colors duration-200 dark:hover:text-red-500 dark:text-gray-300 hover:text-red-500 focus:outline-none text-xl"
                            >
                              <AiOutlineEye />
                            </Link>
                            <button
                              onClick={() => handleApprove(app)}
                              className="text-gray-500 transition-colors duration-200 dark:hover:text-red-500 dark:text-gray-300 hover:text-red-500 focus:outline-none text-xl"
                            >
                              <IoMdCheckmark />
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

export default TeacherEnroll;
