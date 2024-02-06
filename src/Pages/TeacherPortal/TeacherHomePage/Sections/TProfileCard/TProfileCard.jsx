import cover from "../../../../../assets/Student-dashboard/cover.jpg";
import { AiOutlineNotification } from "react-icons/ai";
import { useContext } from "react";
import { AuthContext } from "../../../../../Context/UserContext";
import { useGetTeacherByEmailQuery } from "../../../../../features/teacher/teacherApi";
import { convertDate } from "../../../../../utils/ConvertDate";

const TProfileCard = () => {
  const { user } = useContext(AuthContext);
  const { data } = useGetTeacherByEmailQuery(user?.email);

  const teacherData = data?.data[0];
  console.log(data)

  return (
    <div className="col-span-1 p-3 bg-white rounded-lg">
      <div className="profile-card relative">
        <div className="cover-photo">
          <img
            className="rounded-t-lg w-full h-28 object-cover"
            src={cover}
            alt=""
          />
        </div>
        <div className="profile-picture border-[6px] absolute top-14 left-1/2 -translate-x-1/2 border-gray-200 rounded-full">
          <img
            className="rounded-full w-24 h-24 object-cover"
            src={teacherData?.personal?.image}
            alt=""
          />
        </div>
        <div className="text-center pt-16">
          <h2 className="text-lg font-semibold">
            {teacherData?.personal?.firstName} {teacherData?.personal?.lastName}
          </h2>
          <p className="text-gray-600">Id: {teacherData?.teacherId}</p>
          <p>{teacherData?.personal?.email}</p>
          <p>
            {teacherData?.personal?.address?.permanent_address?.permanent_city},{" "}
            {
              teacherData?.personal?.address?.permanent_address
                ?.permanent_country
            }
          </p>
          <div>
            <div className="bg-gray-100 rounded-lg p-3 mt-3 text-left">
              <h1 className="text-xl font-semibold mb-1">
                {convertDate(teacherData?.personal?.enrollDate)}
              </h1>
              <p className="text-xs text-gray-600">Enroll Date</p>
            </div>
            <div className="gap-3 my-3">
              <div className="bg-gray-100 rounded-lg p-3 text-left">
                <h1 className="text-xl font-semibold mb-1">{teacherData?.departmentName}</h1>
                <p className="text-xs text-gray-600">Department</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 my-3">
              <div className="bg-gray-100 rounded-lg p-3 text-left">
                <h1 className="text-xl font-semibold mb-1">
                  {teacherData?.courses_taught?.length}
                </h1>
                <p className="text-xs text-gray-600">Course Taking</p>
              </div>
              <div className="bg-gray-100 rounded-lg p-3 text-left">
                <h1 className="text-xl font-semibold mb-1">
                  {teacherData?.publication?.length}
                </h1>
                <p className="text-xs text-gray-600">Total Publication</p>
              </div>
            </div>
          </div>
          <div className="notices mt-5">
            <h1 className="text-left font-semibold text-lg text-red-500 mb-5">
              Important Notices
            </h1>
            <div className="notices-container grid gap-3">
              <div className="notice-card px-3 flex items-start gap-3 text-left">
                <div className="bg-red-500 p-2 flex items-center justify-center rounded-full">
                  <AiOutlineNotification className="text-white text-2xl" />
                </div>
                <div>
                  <h1 className="font-semibold">
                    Initial Investigation report
                  </h1>
                  <p className="text-sm text-gray-600">
                    CSE-4204 [System Analysis & Design]
                  </p>
                </div>
              </div>
              <hr />
              <div className="notice-card px-3 flex items-start gap-3 text-left">
                <div className="bg-red-500 p-2 flex items-center justify-center rounded-full">
                  <AiOutlineNotification className="text-white text-2xl" />
                </div>
                <div>
                  <h1 className="font-semibold">Assessment for mid-term</h1>
                  <p className="text-sm text-gray-600">
                    CSE-4204 [Accounting, Introduction to Finance &
                    International Trade]
                  </p>
                </div>
              </div>
              <hr />
              <div className="notice-card px-3 flex items-start gap-3 text-left">
                <div className="bg-red-500 p-2 flex items-center justify-center rounded-full">
                  <AiOutlineNotification className="text-white text-2xl" />
                </div>
                <div>
                  <h1 className="font-semibold">
                    Initial Investigation report{" "}
                  </h1>
                  <p className="text-sm text-gray-600">
                    CSE-4204 [System Analysis & Design]
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TProfileCard;
