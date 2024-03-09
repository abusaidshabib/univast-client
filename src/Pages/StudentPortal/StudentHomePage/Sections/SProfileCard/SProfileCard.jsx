import cover from "../../../../../assets/Student-dashboard/cover.jpg";
import { MdOutlineAssignment } from 'react-icons/md';
import { AiOutlineNotification } from 'react-icons/ai';
import { useGetStudentByEmailQuery } from "../../../../../features/student/studentApi";
import { useContext } from "react";
import { AuthContext } from "../../../../../Context/UserContext";
import { convertDate } from "../../../../../utils/ConvertDate";


const SProfileCard = () => {
  const { user } = useContext(AuthContext);
  const { data } = useGetStudentByEmailQuery(user?.email);
  const studentData = data?.data;
  console.log(studentData)
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
            src={studentData?.personal.image}
            alt=""
          />
        </div>
        <div className="text-center pt-16">
          <h2 className="text-lg font-semibold">
            {studentData?.personal.firstName +
              " " +
              studentData?.personal.lastName}
          </h2>
          <p className="text-gray-600">
            Id: {studentData?.studentId} ({studentData?.general.education_shift}
            )
          </p>
          <p>{studentData?.personal.email}</p>
          <p>
            {studentData?.personal.address.present_address.present_city},
            {studentData?.personal.address.present_address.present_country}
          </p>
          <div>
            <div className="bg-gray-100 rounded-lg p-3 mt-3 text-left">
              <h1 className="text-xl font-semibold mb-1">
                {convertDate(studentData?.admission_date)}
              </h1>
              <p className="text-xs text-gray-600">Addmission Date</p>
            </div>
            <div className="bg-gray-100 rounded-lg p-3 mt-3 text-left">
              <h1 className="text-xl font-semibold mb-1">
                {studentData?.programName}
              </h1>
              <p className="text-xs text-gray-600">Enrolled in</p>
            </div>
            <div className="grid grid-cols-3 gap-3 my-3">
              <div className="bg-gray-100 rounded-lg p-3 text-left">
                <h1 className="text-xl font-semibold mb-1">CSE</h1>
                <p className="text-xs text-gray-600">Department</p>
              </div>
              <div className="bg-gray-100 rounded-lg p-3 text-left">
                <h1 className="text-xl font-semibold mb-1">56</h1>
                <p className="text-xs text-gray-600">Batch</p>
              </div>
              <div className="bg-gray-100 rounded-lg p-3 text-left">
                <h1 className="text-xl font-semibold mb-1">3.50</h1>
                <p className="text-xs text-gray-600">CGPA</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 my-3">
              <div className="bg-gray-100 rounded-lg p-3 text-left">
                <h1 className="text-xl font-semibold mb-1">Graduating</h1>
                <p className="text-xs text-gray-600">Student Status</p>
              </div>
              <div className="bg-gray-100 rounded-lg p-3 text-left">
                <h1 className="text-xl font-semibold mb-1">138</h1>
                <p className="text-xs text-gray-600">Completed Credit</p>
              </div>
            </div>
          </div>
          <div className="assignments mt-5">
            <h1 className="text-left font-semibold text-lg text-green-600 mb-5">
              Due Assignments
            </h1>
            <div className="assignments-container grid gap-3">
              <div className="assignment-card px-3 flex items-start gap-3 text-left">
                <div className="bg-blue-500 p-2 flex items-center justify-center rounded-full">
                  <MdOutlineAssignment className="text-white text-2xl" />
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
              <hr />
              <div className="assignment-card px-3 flex items-start gap-3 text-left">
                <div className="bg-blue-500 p-2 flex items-center justify-center rounded-full">
                  <MdOutlineAssignment className="text-white text-2xl" />
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
              <div className="assignment-card px-3 flex items-start gap-3 text-left">
                <div className="bg-blue-500 p-2 flex items-center justify-center rounded-full">
                  <MdOutlineAssignment className="text-white text-2xl" />
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

export default SProfileCard;
