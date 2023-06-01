import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main";
import Home from "../../Pages/MainWebsite/HomePage/Main/Home";
import Admission from "../../Pages/MainWebsite/AdmissionPage/Main/Admission";
import AdmissionForm from "../../Pages/MainWebsite/AdmissionPage/Sections/AdmissionForm/AdmissionForm";
import StudentDashbaord from "../../Layouts/StudentDashbaord";
import Shome from "../../Pages/StudentPortal/StudentHomePage/Main/Shome";
import SProfile from "../../Pages/StudentPortal/StudentProfilePage/Main/SProfile";
import Spayment from "../../Pages/StudentPortal/StudentPaymentPage/Main/Spayment";
import SAttendance from "../../Pages/StudentPortal/StudentAttendancePage/Main/SAttendance";
import SGeneralInfo from "../../Pages/StudentPortal/StudentProfilePage/Sections/SGeneralInfo/SGeneralInfo";
import SPersonalInfo from "../../Pages/StudentPortal/StudentProfilePage/Sections/SPersonalInfo/SPersonalInfo";
import AttendSinglePage from "../../Pages/StudentPortal/StudentAttendancePage/StudentAttendSinglePage/AttendSinglePage";
import SGrades from "../../Pages/StudentPortal/StudentGradesPage/Main/SGrades";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/admission",
        element: <Admission></Admission>,
      },
      {
        path: "/admission/online",
        element: <AdmissionForm></AdmissionForm>,
      },
    ],
  },
  {
    path: "/student",
    element: <StudentDashbaord></StudentDashbaord>,
    children: [
      {
        path: "/student/home",
        element: <Shome></Shome>,
      },
      {
        path: "/student/profile",
        element: <SProfile></SProfile>,
        children: [
          {
            path: "/student/profile",
            element: <SGeneralInfo></SGeneralInfo>
          },
          {
            path: "/student/profile/general_information",
            element: <SGeneralInfo></SGeneralInfo>
          },
          {
            path: "/student/profile/personal_information_&_parent_information",
            element: <SPersonalInfo></SPersonalInfo>
          }
        ]
      },
      {
        path: "/student/courses",
        element: <Spayment></Spayment>,
      },
      {
        path: "/student/attendance",
        element: <SAttendance></SAttendance>,
      },
      {
        path: "/student/attendance/singlePage",
        element: <AttendSinglePage></AttendSinglePage>
      },
      {
        path: "/student/grades",
        element: <SGrades></SGrades>,
      },
      {
        path: "/student/payments",
        element: <Spayment></Spayment>,
      },
    ],
  },
]);

export default router;