import { useParams } from "react-router-dom";
import { useGetApplicationByEmailQuery } from "../../../../features/application/applicationApi";
import PersonalInfo from "../Sections/PersonalInfo/PersonalInfo";
import FamilyInfo from "../Sections/FamilyInfo/FamilyInfo";
import EducationInfo from "../Sections/EducationInfo/EducationInfo";
import OtherInfo from "../Sections/OtherInfo/OtherInfo";

const SingleApplication = () => {
  const { id } = useParams();
  let { isSuccess, data } = useGetApplicationByEmailQuery(id);
  data = data?.data?.data;

  if (isSuccess) {
    return (
      <div className="bg-gray-200 min-h-[calc(100vh-80px)] grid gap-5 text-gray-900 p-5">
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
      </div>
    );
  }
};

export default SingleApplication;
