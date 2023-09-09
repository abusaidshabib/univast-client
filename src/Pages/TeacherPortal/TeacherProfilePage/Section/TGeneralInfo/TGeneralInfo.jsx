import { useContext } from "react";
import { AuthContext } from "../../../../../Context/UserContext";
import profile from "../../../../../assets/Student-dashboard/teacher.png";
import { useGetTeacherByEmailQuery } from "../../../../../features/teacher/teacherApi";
import { convertDate } from "../../../../../utils/ConvertDate";

const TGeneralInfo = () => {
  const { user } = useContext(AuthContext);
  const { data, isSuccess } = useGetTeacherByEmailQuery(user?.email);

  if (isSuccess) {
    const teacherData = data?.data;
    // console.log(teacherData);

    // eslint-disable-next-line no-unsafe-optional-chaining
    const {
      firstName,
      lastName,
      email,
      address,
      image,
      father_name,
      mother_name,
      enrollDate,
      gender,
      birth_date,
      religion,
      blood_group,
      nationality,
      country,
      // eslint-disable-next-line no-unsafe-optional-chaining
    } = teacherData?.personal;

    return (
      <div className="flex gap-10">
        <div>
          <img className="border-2 p-2 w-56 mb-3" src={image} alt="" />
          <button className="w-full bg-primary-200 py-2 font-medium">
            Reset Password
          </button>
        </div>
        <div className="flex-grow">
          <table className="text-lg">
            <tr className="p-5 border-y">
              <td className="py-3 text-right text-primary-blue">Teacher ID:</td>
              <td className="py-3 pl-5">{teacherData?.teacherId}</td>
            </tr>
            <tr className="p-5 border-b">
              <td className="py-3 text-right text-primary-blue">Full Name:</td>
              <td className="py-3 pl-5">
                {firstName}, {lastName}
              </td>
            </tr>
            <tr className="p-5 border-y">
              <td className="py-3 text-right text-primary-blue">
                Father's Name:
              </td>
              <td className="py-3 pl-5">{father_name}</td>
            </tr>
            <tr className="p-5 border-y">
              <td className="py-3 text-right text-primary-blue">
                Mother's Name:
              </td>
              <td className="py-3 pl-5">{mother_name}</td>
            </tr>
            <tr className="p-5 border-y">
              <td className="py-3 text-right text-primary-blue">
                Enrolled In:
              </td>
              <td className="py-3 pl-5">{teacherData?.departmentName}</td>
            </tr>
            <tr className="p-5 border-y">
              <td className="py-3 text-right text-primary-blue">
                Enroll Date:
              </td>
              <td className="py-3 pl-5">{convertDate(enrollDate)}</td>
            </tr>
            <tr className="p-5 border-y">
              <td className="py-3 text-right text-primary-blue">Gender:</td>
              <td className="py-3 pl-5">{gender}</td>
            </tr>
            <tr className="p-5 border-y">
              <td className="py-3 text-right text-primary-blue">
                Date of Birth:
              </td>
              <td className="py-3 pl-5">{birth_date}</td>
            </tr>
            <tr className="p-5 border-y">
              <td className="py-3 text-right text-primary-blue">Religion:</td>
              <td className="py-3 pl-5">{religion}</td>
            </tr>
            <tr className="p-5 border-y">
              <td className="py-3 text-right text-primary-blue">Email:</td>
              <td className="py-3 pl-5">{email}</td>
            </tr>
            <tr className="p-5 border-y">
              <td className="py-3 text-right text-primary-blue">
                Blood Group:
              </td>
              <td className="py-3 pl-5">{blood_group}</td>
            </tr>
            <tr className="p-5 border-y">
              <td className="py-3 text-right text-primary-blue">
                Nationality:
              </td>
              <td className="py-3 pl-5">{nationality}</td>
            </tr>
            <tr className="p-5 border-y">
              <td className="py-3 text-right text-primary-blue">Country:</td>
              <td className="py-3 pl-5">{country}</td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
};

export default TGeneralInfo;
