import { useLocation } from "react-router-dom";
import { useGetLecturerApplicationByEmailQuery } from "../../../../features/application/lecturerApplicationApi";
import TpersonalInfo from "../Sections/TPersonalInfo/TpersonalInfo";

const TSingleApplication = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  // Access individual query parameters
  const email = searchParams.get("email");
  let { isSuccess, data } = useGetLecturerApplicationByEmailQuery(email);
  if (isSuccess) {
    data = data?.data;
    console.log("data", data);
    return (
      <div className="bg-gray-200 min-h-[calc(100vh-80px)] grid gap-5 text-gray-900 p-5">
        <div className="bg-white p-5">
          <TpersonalInfo data={data?.personal} data1={data} />
        </div>
      </div>
    );
  }
};

export default TSingleApplication;
