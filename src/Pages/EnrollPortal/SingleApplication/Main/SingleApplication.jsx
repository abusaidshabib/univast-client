import { useParams } from "react-router-dom";
import { useGetApplicationByEmailQuery } from "../../../../features/application/applicationApi";
import PersonalInfo from "../Sections/PersonalInfo/PersonalInfo";

const SingleApplication = () => {
  const { id } = useParams();
  let application = useGetApplicationByEmailQuery(id);
  application = application?.data?.data?.data;
  console.log("Personal", application?.personal);

  return (
    <div className="bg-gray-200 min-h-[calc(100vh-80px)] text-gray-900 p-5">
      <div className="bg-white p-24">
        <PersonalInfo data={application?.personal} />
      </div>
    </div>
  );
};

export default SingleApplication;
