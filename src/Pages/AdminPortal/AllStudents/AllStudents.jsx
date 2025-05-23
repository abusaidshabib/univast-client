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
          courses_taught: student.courses_taught.length,
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
          curricular_units_1st_sem_credited: 19,
          curricular_units_1st_sem_enrolled: 7,
          curricular_units_1st_sem_evaluations: 7,
          curricular_units_1st_sem_approved: 7,
          curricular_units_1st_sem_grade: !isNaN(semester1Grade)
            ? semester1Grade
            : 0,
          curricular_units_1st_sem_without_evaluations: 0,
          curricular_units_2nd_sem_credited: 19,
          curricular_units_2nd_sem_enrolled: 7,
          curricular_units_2nd_sem_evaluations: 7,
          curricular_units_2nd_sem_approved: 7,
          curricular_units_2nd_sem_grade: !isNaN(semester2Grade)
            ? semester2Grade
            : 0,
          curricular_units_2nd_sem_without_evaluations: 0,
          unemployment_rate: 13.9,
          inflation_rate: -0.3,
          gdp: 0.79,
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

          <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full">
            {students?.data?.length} Student
          </span>
        </div>

        <div className="flex flex-col mt-6">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                <table className="min-w-full border-collapse w-full text-lg bg-p-white">
                  <thead className="bg-gray-50 text-sm uppercase font-normal tracking-wider">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 px-4 text-left rtl:text-right text-gray-500"
                      >
                        <div className="flex items-center gap-x-3">
                          <span>Name</span>
                        </div>
                      </th>

                      <th
                        scope="col"
                        className="px-12 py-3.5 text-left rtl:text-right text-gray-500"
                      >
                        Program Type
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left rtl:text-right text-gray-500"
                      >
                        Program
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left rtl:text-right text-gray-500"
                      >
                        Email address
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left rtl:text-right text-gray-500"
                      >
                        Shift
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left rtl:text-right text-gray-500"
                      >
                        Dropout Prediction
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left rtl:text-right text-gray-500"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {students?.data?.map((student, i) => (
                      <tr key={student._id}>
                        <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                          <div className="inline-flex items-center gap-x-3">
                            <div className="flex items-center gap-x-2">
                              <img
                                className="object-cover w-10 h-10 rounded-full"
                                src={student.personal.image}
                                alt=""
                              />
                              <div>
                                <h2 className="font-medium text-gray-800">
                                  {student.personal.firstName +
                                    " " +
                                    student.personal.lastName}
                                </h2>
                                <p className="text-sm font-normal text-gray-600">
                                  Id: {student.studentId}
                                </p>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-12 py-4 text-sm text-gray-500 whitespace-nowrap">
                          {student.general.program_type}
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                          {student.programName}
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                          {student.personal.email}
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                          {student.general.education_shift}
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                          {isLoading && <span>Loading...</span>}
                          { isSuccess ? (
                            <span>
                              {prediction[i] === 0
                                ? "Dropout"
                                : prediction[i] === 1
                                ? "Enrolled"
                                : "Graduate"}
                            </span>
                          ): <>{(!isLoading && !isSuccess) && "Pending" }</> }
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
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


      </div>
    </div>
  );
};

export default AllStudents;
