import { useLocation } from 'react-router-dom';
import { useGetTeacherByEmailQuery } from '../../../features/teacher/teacherApi';
import TpersonalInfo from '../../EnrollPortal/TSingleApplication/Sections/TPersonalInfo/TpersonalInfo';

const TeacherDetails = () => {
      const location = useLocation();
      const searchParams = new URLSearchParams(location.search);

      // Access individual query parameters
      const email = searchParams.get("email");
      let { isSuccess, data } = useGetTeacherByEmailQuery(email);
      data = data?.data[0];

      console.log(email, data);
    return (
      <div className="bg-gray-200 min-h-[calc(100vh-80px)] grid gap-5 text-gray-900 p-5">
        {isSuccess && (
          <>
            <div className="bg-white p-5">
              <TpersonalInfo data={data?.personal} data1={data} />
            </div>
          </>
        )}
      </div>
    );
};

export default TeacherDetails;