import {
  useDeleteApplicationMutation,
  useGetApplicationsQuery,
} from "../../../../features/application/applicationApi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AiOutlineEye } from "react-icons/ai";
import { IoMdCheckmark } from "react-icons/io";
import { Link } from "react-router-dom";
import { usePostStudentMutation } from "../../../../features/student/studentApi";
import { useContext, useEffect } from "react";
import { toast } from "react-hot-toast";
import { usePostUserMutation } from "../../../../features/user/userApi";
import { AuthContext } from "../../../../Context/UserContext";
import { useSendEmailMutation } from "../../../../features/sendEmail/sendEmailApi";
import { useStudentEnrollCourseMutation } from "../../../../features/course/courseApi";

const StudentEnroll = () => {
  const { createUser } = useContext(AuthContext);
  const { data } = useGetApplicationsQuery();
  const [postStudent, { isLoading, isError, error, isSuccess }] =
    usePostStudentMutation();
  const [enrollCourse] = useStudentEnrollCourseMutation();
  const [deleteApplication] = useDeleteApplicationMutation();
  const [postUser] = usePostUserMutation();
  const applications = data?.data;
  console.log(applications);

  const [sendEmail] = useSendEmailMutation();

  const handleApprove = async (data, semester, firebaseId) => {
    const studentData = {
      programCode: data.general.programCode,
      general: data.general,
      personal: data.personal,
      family: data.family,
      education: data.education,
      others: data.others,
    };
    const confirmation = window.confirm("Are you sure?");

    if (confirmation) {
      const data = await postStudent(studentData);
      console.log(data);
      if (data?.data?.status) {
        const studentId = await data?.data?.data?.studentId.toString();
        await enrollCourse({semester, studentId});
        const email = data?.data?.data?.personal.email;
        const password = "student123";
        const firstName = data?.data?.data?.personal.firstName;
        const lastName = data?.data?.data?.personal.lastName;
        const role = "student";

        const subject = `Congrats! ${firstName} + "" + ${lastName}. Now you are a official student of Our Univarsity`;
        const html = `<section className="max-w-2xl px-6 py-8 mx-auto bg-white dark:bg-gray-900">
            <header>
              <Link
                to="http://localhost:3000/"
                className="flex items-center cursor-pointer"
              >
                <span className="text-primary-blue cursor-pointer text-4xl font-bold pr-1">
                  UNI
                </span>
                <span className="border-l-2 border-primary-orange pl-1">
                  <span className="text-accent-blue cursor-pointer font-semibold text-lg leading-none">
                    VAST
                  </span>{" "}
                  <br />
                  <span className="text-primary-gray cursor-pointer leading-none text-base">
                    University
                  </span>
                </span>
              </Link>
            </header>

            <main className="mt-8">
              <h2 className="text-gray-700 dark:text-gray-200">
                Hi ${lastName},
              </h2>

              <p className="mt-2 leading-loose text-gray-600 dark:text-gray-300">
                I hope this email finds you in good health and high spirits. We
                are delighted to extend our warmest congratulations to you on
                being selected to join our University! Your exceptional academic
                achievements and dedication have truly set you apart, and we
                believe that you will thrive in our vibrant and diverse academic
                community. Univast is known for its commitment to academic
                excellence, innovation, and a supportive learning environment,
                and we are confident that you will contribute positively to our
                community.
              </p>

              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Your online portal Login credentials:
                <br />
                Email: ${email}
                <br />
                Password: ${password}
                <br />
              </p>

              <a href="http://localhost:3000/login" className="px-6 py-2 mt-8 text-sm font-medium tracking-wider text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                Login
              </a>
            </main>

            <footer className="mt-8">
              <p className="text-gray-500 dark:text-gray-400">
                Best regards, <br/>
                Univast Univarsity 
                Email: univast@gmail.com
                Contact: 0123456798
              </p>
            </footer>
          </section>`;

        const emailData = { email, subject, html };
        const userData = {
          firstName,
          lastName,
          role,
          email,
          firebaseId,
        };
        console.log(userData);
        await postUser(userData);
        await deleteApplication(email);
        await sendEmail(emailData);

        // createUser(email, password)
        //   .then((result) => {
        //     console.log(result);
        //   })
        //   .catch((error) => console.log(error));
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
          <h2 className="text-4xl font-semibold">Student Applied</h2>

          <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">
            {applications?.length} Student
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
                        Program Type
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Program
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
                        Results
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
                          {app.general.program_type}
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          {app.general.programName}
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
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
                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                          <div className="flex items-center gap-x-6">
                            <button
                              onClick={() =>
                                deleteApplication(app.personal.email)
                              }
                              className="text-gray-500 transition-colors duration-200 dark:hover:text-red-500 dark:text-gray-300 hover:text-red-500 focus:outline-none text-xl"
                            >
                              <RiDeleteBin6Line />
                            </button>
                            <Link
                              to={`/enroll/studentEnroll/query?email=${app.personal.email}`}
                              className="text-gray-500 transition-colors duration-200 dark:hover:text-red-500 dark:text-gray-300 hover:text-red-500 focus:outline-none text-xl"
                            >
                              <AiOutlineEye />
                            </Link>
                            <button
                              onClick={() =>
                                handleApprove(
                                  app,
                                  app.general.admission_semester,
                                  app?.firebaseId
                                )
                              }
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

export default StudentEnroll;
