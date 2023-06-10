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
import SAdmitCard from "../../Pages/StudentPortal/StudentAdmitPage/Main/SAdmitCard";
import SCourse from "../../Pages/StudentPortal/StudentCoursePage/Main/SCourse";
import SCourseDetails from "../../Pages/StudentPortal/StudentCoursePage/SCourseDetailsPage/Main/SCourseDetails";
import ScourseOutline from "../../Pages/StudentPortal/StudentCoursePage/SCourseDetailsPage/Sections/ScourseOutline";
import SCourseLectures from "../../Pages/StudentPortal/StudentCoursePage/SCourseDetailsPage/Sections/SCourseLectures";
import SCourseClasswork from "../../Pages/StudentPortal/StudentCoursePage/SCourseDetailsPage/Sections/SCourseClasswork";
import SCourseNotice from "../../Pages/StudentPortal/StudentCoursePage/SCourseDetailsPage/Sections/SCourseNotice";
import TeacherDashboard from "../../Layouts/TeacherDashboard";
import Thome from "../../Pages/TeacherPortal/TeacherHomePage/Main/Thome";
import TProfile from "../../Pages/TeacherPortal/TeacherProfilePage/Main/TProfile";
import TPersonalInfo from "../../Pages/TeacherPortal/TeacherProfilePage/Section/TPersonalInfo/TPersonalInfo";
import TGeneralInfo from "../../Pages/TeacherPortal/TeacherProfilePage/Section/TGeneralInfo/TGeneralInfo";
import TCourse from "../../Pages/TeacherPortal/TeacherCoursePage/Main/TCourse";
import TCourseDetails from "../../Pages/TeacherPortal/TeacherCoursePage/TCourseDetailsPage/Main/TCourseDetails";
import TCourseOutline from "../../Pages/TeacherPortal/TeacherCoursePage/TCourseDetailsPage/Sections/TcourseOutline";
import TCourseLectures from "../../Pages/TeacherPortal/TeacherCoursePage/TCourseDetailsPage/Sections/TCourseLectures";
import TCourseClasswork from "../../Pages/TeacherPortal/TeacherCoursePage/TCourseDetailsPage/Sections/TCourseClasswork";
import TCourseNotice from "../../Pages/TeacherPortal/TeacherCoursePage/TCourseDetailsPage/Sections/TCourseNotice";
import TCourseResults from "../../Pages/TeacherPortal/TeacherCoursePage/TCourseDetailsPage/Sections/TCourseResults";
import TAttendance from "../../Pages/TeacherPortal/TeacherAttendancePage/Main/TAttendance";
import TFinance from "../../Pages/TeacherPortal/TeacherFinancePage/Main/TFinance";

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
        path: "/student",
        element: <Shome></Shome>,
      },
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
        element: <SCourse></SCourse>
      },
      {
        path: "/student/courses/details",
        element: <SCourseDetails></SCourseDetails>,
        children: [
          {
            path: '/student/courses/details',
            element: <ScourseOutline></ScourseOutline>
          },
          {
            path: '/student/courses/details/outline',
            element: <ScourseOutline></ScourseOutline>
          },
          {
            path: '/student/courses/details/lectures',
            element: <SCourseLectures></SCourseLectures>
          },
          {
            path: '/student/courses/details/classwork',
            element: <SCourseClasswork></SCourseClasswork>
          },
          {
            path: '/student/courses/details/notice',
            element: <SCourseNotice></SCourseNotice>
          },
        ]
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
      {
        path: "/student/admit-card",
        element: <SAdmitCard></SAdmitCard>
      }
    ],
  },
  {
    path: "/teacher",
    element: <TeacherDashboard></TeacherDashboard>,
    children: [
      {
        path: "/teacher",
        element: <Thome></Thome>,
      },
      {
        path: "/teacher/home",
        element: <Thome></Thome>,
      },
      {
        path: "/teacher/profile",
        element: <TProfile></TProfile>,
        children: [
          {
            path: "/teacher/profile",
            element: <TGeneralInfo></TGeneralInfo>
          },
          {
            path: "/teacher/profile/general_information",
            element: <TGeneralInfo></TGeneralInfo>
          },
          {
            path: "/teacher/profile/personal_information_&_parent_information",
            element: <TPersonalInfo></TPersonalInfo>
          }
        ]
      },
      {
        path: "/teacher/courses",
        element: <TCourse></TCourse>
      },
      {
        path: "/teacher/courses/details",
        element: <TCourseDetails></TCourseDetails>,
        children: [
          {
            path: '/teacher/courses/details',
            element: <TCourseOutline></TCourseOutline>
          },
          {
            path: '/teacher/courses/details/outline',
            element: <TCourseOutline></TCourseOutline>
          },
          {
            path: '/teacher/courses/details/lectures',
            element: <TCourseLectures></TCourseLectures>
          },
          {
            path: '/teacher/courses/details/classwork',
            element: <TCourseClasswork></TCourseClasswork>
          },
          {
            path: '/teacher/courses/details/results',
            element: <TCourseResults></TCourseResults>
          },
          {
            path: '/teacher/courses/details/notice',
            element: <TCourseNotice></TCourseNotice>
          },
        ]
      },
      {
        path: "/teacher/attendance",
        element: <TAttendance></TAttendance>,
      },
      {
        path: "/teacher/finance",
        element: <TFinance></TFinance>,
      },
    ],
  },
]);

export default router;