import { useEffect } from "react";
import { useGetStudentsQuery } from "../../../features/student/studentApi";
import { useGetDropoutPredictionMutation } from "../../../features/student/predictionApi";
import { Link } from "react-router-dom";

const AllStudents = () => {
  const { data: students } = useGetStudentsQuery();

  console.log(students);

  const [getPrediction, { data: prediction, isLoading, isSuccess }] =
    useGetDropoutPredictionMutation();

  useEffect(() => {
    const allStudentData = [];

    if (students?.data?.length > 0) {
      students.data.forEach((student) => {

        const semester1resArr = student?.results?.filter(
          (result) => result?.course?.semester === 1
        );
        const semester1Grade =
          semester1resArr.reduce((sum, gradeObj) => sum + gradeObj?.grade, 0) /
          semester1resArr.length;

        const semester2resArr = student?.results?.filter(
          (result) => result?.course?.semester === 2
        );
        const semester2Grade =
          semester2resArr.reduce((sum, gradeObj) => sum + gradeObj?.grade, 0) /
          semester2resArr.length;

        const semester3resArr = student?.results?.filter(
          (result) => result?.course?.semester === 3
        );
        const semester3Grade =
          semester3resArr.reduce((sum, gradeObj) => sum + gradeObj?.grade, 0) /
          semester3resArr.length;


        const data = {
          marital:
            student.personal.marital === "Single"
              ? 0
              : student.personal.marital === "Married"
              ? 1
              : 2,
          application_mode: 0,
          application_order: 1,
          courses_taught: 3,
          education_shift: student.general === "Day" ? 0 : 1,
          education: 2,
          nationality: student.personal.nationality === "Bangladeshi" ? 1 : 0,
          mothers_qualification: 2,
          fathers_qualification: 3,
          mother_occupation: 1,
          father_occupation: 2,
          displaced: 0,
          educational_special_needs: 1,
          debtor: 0,
          tuition_fees_up_to_date: 1,
          gender: student.personal.gender === "Male" ? 0 : 1,
          scholarship_holder: 1,
          age_at_enrollment: 20,
          international: student.personal.nationality === "Bangladeshi" ? 0 : 1,
          curricular_units_1st_sem_grade : !isNaN(semester1Grade) ? semester1Grade : 0,
          curricular_units_2nd_sem_grade : !isNaN(semester2Grade) ? semester2Grade : 0,
          curricular_units_3rd_sem_grade : !isNaN(semester3Grade) ? semester3Grade : 0,
        };
        allStudentData.push(data);
      });

      getPrediction(allStudentData);
    }
  }, [students]);

  useEffect(() => {
    if (isSuccess) {
      console.log(prediction);
    }
  }, [isSuccess]);

  return (
    <div className="min-h-[calc(100vh-80px)] w-full bg-gray-200 p-5 font-sans">
      {/* <ConfirmationModal/> */}
      <div className="p-10 bg-white">
        <div className="flex items-center gap-x-3">
          <h2 className="text-4xl font-semibold">All Students</h2>

          <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">
            {students?.data?.length} Student
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
                        Shift
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Dropout Prediction
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
                    {students?.data?.map((student, i) => (
                      <tr key={student._id}>
                        <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                          <div className="inline-flex items-center gap-x-3">
                            <input
                              type="checkbox"
                              className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700"
                            />

                            <div className="flex items-center gap-x-2">
                              <img
                                className="object-cover w-10 h-10 rounded-full"
                                src={student.personal.image}
                                alt=""
                              />
                              <div>
                                <h2 className="font-medium text-gray-800 dark:text-white ">
                                  {student.personal.firstName +
                                    " " +
                                    student.personal.lastName}
                                </h2>
                                <p className="text-sm font-normal text-gray-600 dark:text-gray-400">
                                  Id: {student.studentId}
                                </p>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-12 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          {student.general.program_type}
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          {student.programName}
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          {student.personal.email}
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          {student.general.education_shift}
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          {isLoading && <span>Loading...</span>}
                          {isSuccess && (
                            <span>
                              {prediction[i] === 0
                                ? "Dropout"
                                : prediction[i] === 1
                                ? "Enrolled"
                                : "Graduate"}
                            </span>
                          )}
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          <Link
                            to={`details?email=${student.personal.email}`}
                            className="bg-primary-blue rounded-md hover:bg-gray-600 text-primary-white px-2 py-1"
                          >
                            Details
                          </Link>
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

export default AllStudents;
