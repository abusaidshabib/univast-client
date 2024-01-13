import StudentDashbaord from "../../Layouts/StudentDashbaord";
import SAdmitCard from "../../Pages/StudentPortal/StudentAdmitPage/Main/SAdmitCard";
import SAttendance from "../../Pages/StudentPortal/StudentAttendancePage/Main/SAttendance";
import AttendSinglePage from "../../Pages/StudentPortal/StudentAttendancePage/StudentAttendSinglePage/AttendSinglePage";
import SCourse from "../../Pages/StudentPortal/StudentCoursePage/Main/SCourse";
import SCourseDetails from "../../Pages/StudentPortal/StudentCoursePage/SCourseDetailsPage/Main/SCourseDetails";
import SCourseClasswork from "../../Pages/StudentPortal/StudentCoursePage/SCourseDetailsPage/Sections/SCourseClasswork";
import SCourseLectures from "../../Pages/StudentPortal/StudentCoursePage/SCourseDetailsPage/Sections/SCourseLectures";
import SCourseNotice from "../../Pages/StudentPortal/StudentCoursePage/SCourseDetailsPage/Sections/SCourseNotice";
import ScourseOutline from "../../Pages/StudentPortal/StudentCoursePage/SCourseDetailsPage/Sections/ScourseOutline";
import SGrades from "../../Pages/StudentPortal/StudentGradesPage/Main/SGrades";
import Shome from "../../Pages/StudentPortal/StudentHomePage/Main/Shome";
import Spayment from "../../Pages/StudentPortal/StudentPaymentPage/Main/Spayment";
import SProfile from "../../Pages/StudentPortal/StudentProfilePage/Main/SProfile";
import SGeneralInfo from "../../Pages/StudentPortal/StudentProfilePage/Sections/SGeneralInfo/SGeneralInfo";
import SPersonalInfo from "../../Pages/StudentPortal/StudentProfilePage/Sections/SPersonalInfo/SPersonalInfo";
import StudentRoute from "../PrivateRoutes/StudentRoute";

const StudentRoutes = [
  {
    path: "/student",
    element: (
      <StudentRoute>
        <StudentDashbaord></StudentDashbaord>
      </StudentRoute>
    ),
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
            element: <SGeneralInfo></SGeneralInfo>,
          },
          {
            path: "/student/profile/general_information",
            element: <SGeneralInfo></SGeneralInfo>,
          },
          {
            path: "/student/profile/personal_information_&_parent_information",
            element: <SPersonalInfo></SPersonalInfo>,
          },
        ],
      },
      {
        path: "/student/courses",
        element: <SCourse></SCourse>,
      },
      {
        path: "/student/courses/:semester/:courseCode",
        element: <SCourseDetails></SCourseDetails>,
        children: [
          {
            path: "/student/courses/:semester/:courseCode",
            element: <ScourseOutline></ScourseOutline>,
          },
          {
            path: "/student/courses/:semester/:courseCode/outline",
            element: <ScourseOutline></ScourseOutline>,
          },
          {
            path: "/student/courses/:semester/:courseCode/lectures",
            element: <SCourseLectures></SCourseLectures>,
          },
          {
            path: "/student/courses/:semester/:courseCode/classwork",
            element: <SCourseClasswork></SCourseClasswork>,
          },
          {
            path: "/student/courses/:semester/:courseCode/notice",
            element: <SCourseNotice></SCourseNotice>,
          },
        ],
      },
      {
        path: "/student/attendance",
        element: <SAttendance></SAttendance>,
      },
      {
        path: "/student/attendance/singlePage",
        element: <AttendSinglePage></AttendSinglePage>,
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
        element: <SAdmitCard></SAdmitCard>,
      },
    ],
  },
];

export default StudentRoutes;
