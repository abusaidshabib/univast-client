import { useLocation } from "react-router-dom";
import EducationInfo from "../../EnrollPortal/SingleApplication/Sections/EducationInfo/EducationInfo";
import FamilyInfo from "../../EnrollPortal/SingleApplication/Sections/FamilyInfo/FamilyInfo";
import PersonalInfo from "../../EnrollPortal/SingleApplication/Sections/PersonalInfo/PersonalInfo";
import OtherInfo from "../../EnrollPortal/SingleApplication/Sections/OtherInfo/OtherInfo";
import { useGetStudentByEmailQuery } from "../../../features/student/studentApi";

const StudentDetails = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  // Access individual query parameters
  const email = searchParams.get("email");
  let { isSuccess, data } = useGetStudentByEmailQuery(email);
  data = data?.data;

  console.log(email);
  return (
    <div className="bg-gray-200 min-h-[calc(100vh-80px)] grid gap-5 text-gray-900 p-5">
      {isSuccess && (
        <>
          <div className="bg-white p-5">
            <PersonalInfo data={data?.personal} data1={data?.general} />
          </div>
          <div className="bg-white p-5">
            <FamilyInfo data={data?.family} />
          </div>
          <div className="bg-white p-5">
            <EducationInfo data={data?.education} />
          </div>
          <div className="bg-white p-5">
            <OtherInfo data={data?.others} />
          </div>
        </>
      )}
    </div>
  );
};

export default StudentDetails;
