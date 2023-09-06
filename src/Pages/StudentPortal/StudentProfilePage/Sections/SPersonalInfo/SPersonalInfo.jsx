import { useContext } from "react";
import { useGetStudentByEmailQuery } from "../../../../../features/student/studentApi";
import { AuthContext } from "../../../../../Context/UserContext";

const SPersonalInfo = () => {
  const { user } = useContext(AuthContext);
  const { data } = useGetStudentByEmailQuery(user?.email);
  const studentData = data?.data;
  console.log(studentData)
  return (
    <div>
      <div className="grid grid-cols-2 gap-5">
        <table className="text-lg">
          <tr className="p-5 border-b">
            <td className="py-3 text-right text-primary-gray">
              Present Address:
            </td>
            <td className="py-3 pl-5">
              {studentData?.personal.address.present_address.present_street1}
            </td>
          </tr>
          <tr className="p-5 border-y">
            <td className="py-3 text-right text-primary-gray">Email:</td>
            <td className="py-3 pl-5">{studentData?.personal.email}</td>
          </tr>
          <tr className="p-5 border-y">
            <td className="py-3 text-right text-primary-gray">Gender:</td>
            <td className="py-3 pl-5">{studentData?.personal.gender}</td>
          </tr>
          <tr className="p-5 border-y">
            <td className="py-3 text-right text-primary-gray">Religion:</td>
            <td className="py-3 pl-5">{studentData?.personal.religion}</td>
          </tr>
          <tr className="p-5 border-y">
            <td className="py-3 text-right text-primary-gray">
              Father&apos;s Name:
            </td>
            <td className="py-3 pl-5">
              {studentData?.family.father.father_name}
            </td>
          </tr>
          <tr className="p-5 border-y">
            <td className="py-3 text-right text-primary-gray">
              Father&apos;s Mobile:
            </td>
            <td className="py-3 pl-5">
              {studentData?.family.father.father_mobile}
            </td>
          </tr>
          <tr className="p-5 border-y">
            <td className="py-3 text-right text-primary-gray">
              Father&apos;s Email:
            </td>
            <td className="py-3 pl-5">
              {studentData?.family.father.father_email}
            </td>
          </tr>
        </table>
        <table className="text-lg">
          <tr className="p-5 border-b">
            <td className="py-3 text-right text-primary-gray">
              Permanent Address:
            </td>
            <td className="py-3 pl-5">
              {
                studentData?.personal.address.permanent_address
                  .permanent_street1
              }
            </td>
          </tr>
          <tr className="p-5 border-y">
            <td className="py-3 text-right text-primary-gray">Phone:</td>
            <td className="py-3 pl-5">{studentData?.personal.mobile}</td>
          </tr>
          <tr className="p-5 border-y">
            <td className="py-3 text-right text-primary-gray">Nationality:</td>
            <td className="py-3 pl-5">{studentData?.personal.nationality}</td>
          </tr>
          <tr className="p-5 border-y">
            <td className="py-3 text-right text-primary-gray">Blood Group:</td>
            <td className="py-3 pl-5">{studentData?.personal.blood_group}</td>
          </tr>
          <tr className="p-5 border-y">
            <td className="py-3 text-right text-primary-gray">
              Mother&apos;s Name:
            </td>
            <td className="py-3 pl-5">
              {studentData?.family.mother.mother_name}
            </td>
          </tr>
          <tr className="p-5 border-y">
            <td className="py-3 text-right text-primary-gray">
              Mother&apos;s Mobile:
            </td>
            <td className="py-3 pl-5">
              {studentData?.family.mother.mother_mobile}
            </td>
          </tr>
          <tr className="p-5 border-y">
            <td className="py-3 text-right text-primary-gray">
              Mother&apos;s Email:
            </td>
            <td className="py-3 pl-5">
              {studentData?.family.mother.mother_email}
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default SPersonalInfo;
