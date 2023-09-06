import { useGetStudentByEmailQuery } from "../../../../../features/student/studentApi";

const SGeneralInfo = () => {
  const { data } = useGetStudentByEmailQuery("elizabeth69@gmial.com");
  const studentData = data?.data;
  console.log(data?.data);
  return (
    <div className="flex gap-10">
      <div>
        <img className="border-2 p-2 w-56 mb-3" src={studentData?.personal.image} alt="" />
        <button className="w-full bg-blue-200 py-2 font-medium">
          Reset Password
        </button>
      </div>
      <div className="flex-grow">
        <table className="text-lg">
          <tr className="p-5 border-b">
            <td className="py-3 text-right text-primary-gray">Full Name:</td>
            <td className="py-3 pl-5">
              {studentData?.personal.firstName +
                " " +
                studentData?.personal.lastName}
            </td>
          </tr>
          <tr className="p-5 border-y">
            <td className="py-3 text-right text-primary-gray">Student ID:</td>
            <td className="py-3 pl-5">{studentData?.studentId}</td>
          </tr>
          <tr className="p-5 border-y">
            <td className="py-3 text-right text-primary-gray">Enrolled In:</td>
            <td className="py-3 pl-5">
              {studentData?.programName}
              {/* Bachelor of Science in Computer Science and Engineering */}
            </td>
          </tr>
          <tr className="p-5 border-y">
            <td className="py-3 text-right text-primary-gray">Batch:</td>
            <td className="py-3 pl-5">56</td>
          </tr>
          <tr className="p-5 border-y">
            <td className="py-3 text-right text-primary-gray">
              Admission Date:
            </td>
            <td className="py-3 pl-5">{studentData?.admission_date}</td>
          </tr>
          <tr className="p-5 border-y">
            <td className="py-3 text-right text-primary-gray">
              Student Status:
            </td>
            <td className="py-3 pl-5">Graduating</td>
          </tr>
          <tr className="p-5 border-y">
            <td className="py-3 text-right text-primary-gray">Total Credit:</td>
            <td className="py-3 pl-5">161</td>
          </tr>
          <tr className="p-5 border-y">
            <td className="py-3 text-right text-primary-gray">
              Completed Credit:
            </td>
            <td className="py-3 pl-5">138</td>
          </tr>
          <tr className="p-5 border-y">
            <td className="py-3 text-right text-primary-gray">Current CGPA:</td>
            <td className="py-3 pl-5">3.58</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default SGeneralInfo;
