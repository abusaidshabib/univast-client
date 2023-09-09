import { useContext } from "react";
import { AuthContext } from "../../../../../Context/UserContext";
import { useGetTeacherByEmailQuery } from "../../../../../features/teacher/teacherApi";

const TAddressInfo = () => {
  const { user } = useContext(AuthContext);
  const { data, isSuccess } = useGetTeacherByEmailQuery(user?.email);

  if (isSuccess) {
    const teacherData = data?.data;
    // console.log(teacherData);

    // eslint-disable-next-line no-unsafe-optional-chaining
    const {
      address,
      // eslint-disable-next-line no-unsafe-optional-chaining
    } = teacherData?.personal;

    const {
      present_country,
      present_state_division,
      present_thana,
      present_city,
      present_zip_code,
      present_street1,
      present_street2,
      // eslint-disable-next-line no-unsafe-optional-chaining
    } = address?.present_address;
    const {
      permanent_country,
      permanent_state_division,
      permanent_thana,
      permanent_city,
      permanent_zip_code,
      permanent_street1,
      permanent_street2,
      // eslint-disable-next-line no-unsafe-optional-chaining
    } = address?.permanent_address;

    return (
      <div className="grid grid-cols-2 gap-5">
        <table className="text-lg">
          <tr className="p-5">
            <td className="py-3 text-left text-lg font-semibold text-secondary-blue">
              Present Address
            </td>
          </tr>
          <tr className="p-5 border-b">
            <td className="py-3 text-right text-primary-900">Country:</td>
            <td className="py-3 pl-5">{present_country}</td>
          </tr>
          <tr className="p-5 border-b">
            <td className="py-3 text-right text-primary-900">City:</td>
            <td className="py-3 pl-5">{present_city}</td>
          </tr>
          <tr className="p-5 border-y">
            <td className="py-3 text-right text-primary-900">
              State/Division:
            </td>
            <td className="py-3 pl-5">{present_state_division}</td>
          </tr>
          <tr className="p-5 border-y">
            <td className="py-3 text-right text-primary-900">Thana:</td>
            <td className="py-3 pl-5">{present_thana}</td>
          </tr>
          <tr className="p-5 border-y">
            <td className="py-3 text-right text-primary-900">Zip Code:</td>
            <td className="py-3 pl-5">{present_zip_code}</td>
          </tr>
          <tr className="p-5 border-y">
            <td className="py-3 text-right text-primary-900">
              Street Address:
            </td>
            <td className="py-3 pl-5">{present_street1}</td>
          </tr>
          <tr className="p-5 border-y">
            <td className="py-3 text-right text-primary-900"></td>
            <td className="py-3 pl-5">{present_street2}</td>
          </tr>
        </table>
        <table className="text-lg">
          <tr className="p-5">
            <td className="py-3 text-left text-lg font-semibold text-secondary-blue">
              Permanent Address
            </td>
          </tr>
          <tr className="p-5 border-b">
            <td className="py-3 text-right text-primary-900">Country:</td>
            <td className="py-3 pl-5">{permanent_country}</td>
          </tr>
          <tr className="p-5 border-b">
            <td className="py-3 text-right text-primary-900">City:</td>
            <td className="py-3 pl-5">{permanent_city}</td>
          </tr>
          <tr className="p-5 border-y">
            <td className="py-3 text-right text-primary-900">
              State/Division:
            </td>
            <td className="py-3 pl-5">{permanent_state_division}</td>
          </tr>
          <tr className="p-5 border-y">
            <td className="py-3 text-right text-primary-900">Thana:</td>
            <td className="py-3 pl-5">{permanent_thana}</td>
          </tr>
          <tr className="p-5 border-y">
            <td className="py-3 text-right text-primary-900">Zip Code:</td>
            <td className="py-3 pl-5">{permanent_zip_code}</td>
          </tr>
          <tr className="p-5 border-y">
            <td className="py-3 text-right text-primary-900">
              Street Address:
            </td>
            <td className="py-3 pl-5">{permanent_street1}</td>
          </tr>
          <tr className="p-5 border-y">
            <td className="py-3 text-right text-primary-900"></td>
            <td className="py-3 pl-5">{permanent_street2}</td>
          </tr>
        </table>
      </div>
    );
  }
};

export default TAddressInfo;
