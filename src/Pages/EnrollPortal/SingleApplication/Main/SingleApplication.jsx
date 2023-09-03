import { useParams } from "react-router-dom";
import { useGetApplicationByEmailQuery } from "../../../../features/application/applicationApi";
import PersonalInfo from "../Sections/PersonalInfo/PersonalInfo";

const SingleApplication = () => {
  const {email} = useParams()
  console.log(email);
  let application = useGetApplicationByEmailQuery(email);
  application = application?.data?.data?.data;
  console.log(application)
  return (
    <div className="grid grid-cols-4 gap-5 p-5 bg-gray-200 min-h-[calc(100vh-80px)] text-gray-900">
      <div className="col-span-3">
        <PersonalInfo />
      </div>
    </div>
  );
};

export default SingleApplication;
