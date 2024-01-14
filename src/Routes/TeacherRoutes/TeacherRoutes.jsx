import TeacherDashboard from "../../Layouts/TeacherDashboard";
import TAttendance from "../../Pages/TeacherPortal/TeacherAttendancePage/Main/TAttendance";
import TakeAttendance from "../../Pages/TeacherPortal/TeacherAttendancePage/Section/TakeAttendance/TakeAttendance";
import TCourse from "../../Pages/TeacherPortal/TeacherCoursePage/Main/TCourse";
import TCourseDetails from "../../Pages/TeacherPortal/TeacherCoursePage/TCourseDetailsPage/Main/TCourseDetails";
import TCourseClasswork from "../../Pages/TeacherPortal/TeacherCoursePage/TCourseDetailsPage/Sections/TCourseClasswork";
import TCourseLectures from "../../Pages/TeacherPortal/TeacherCoursePage/TCourseDetailsPage/Sections/TCourseLectures";
import TCourseNotice from "../../Pages/TeacherPortal/TeacherCoursePage/TCourseDetailsPage/Sections/TCourseNotice";
import TCourseResults from "../../Pages/TeacherPortal/TeacherCoursePage/TCourseDetailsPage/Sections/TCourseResults";
import TCourseOutline from "../../Pages/TeacherPortal/TeacherCoursePage/TCourseDetailsPage/Sections/TcourseOutline";
import TFinance from "../../Pages/TeacherPortal/TeacherFinancePage/Main/TFinance";
import Thome from "../../Pages/TeacherPortal/TeacherHomePage/Main/Thome";
import TProfile from "../../Pages/TeacherPortal/TeacherProfilePage/Main/TProfile";
import TAddressInfo from "../../Pages/TeacherPortal/TeacherProfilePage/Section/TAddressInfo/TAddressInfo";
import TPersonalInfo from "../../Pages/TeacherPortal/TeacherProfilePage/Section/TPersonalInfo/TPersonalInfo";
import TPublication from "../../Pages/TeacherPortal/TeacherProfilePage/Section/TPublication/TPublication";
import TeacherRoute from "../PrivateRoutes/TeacherRoute";

const TeacherRoutes = [
  {
    path: "/teacher",
    element: (
      <TeacherRoute>
        <TeacherDashboard></TeacherDashboard>
      </TeacherRoute>
    ),
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
            element: <TPersonalInfo />,
          },
          {
            path: "/teacher/profile/personal",
            element: <TPersonalInfo />,
          },
          {
            path: "/teacher/profile/address",
            element: <TAddressInfo />,
          },
          {
            path: "/teacher/profile/publication",
            element: <TPublication />,
          },
        ],
      },
      {
        path: "/teacher/courses",
        element: <TCourse></TCourse>,
      },
      {
        path: "/teacher/courses/:courseCode",
        element: <TCourseDetails></TCourseDetails>,
        children: [
          {
            path: "/teacher/courses/:courseCode",
            element: <TCourseOutline></TCourseOutline>,
          },
          {
            path: "/teacher/courses/:courseCode/outline",
            element: <TCourseOutline></TCourseOutline>,
          },
          {
            path: "/teacher/courses/:courseCode/lectures",
            element: <TCourseLectures></TCourseLectures>,
          },
          {
            path: "/teacher/courses/:courseCode/classwork",
            element: <TCourseClasswork></TCourseClasswork>,
          },
          {
            path: "/teacher/courses/:courseCode/results",
            element: <TCourseResults></TCourseResults>,
          },
          {
            path: "/teacher/courses/:courseCode/notice",
            element: <TCourseNotice></TCourseNotice>,
          },
        ],
      },
      {
        path: "/teacher/attendance",
        element: <TAttendance></TAttendance>,
      },
      {
        path: "/teacher/attendance/:semester/:courseCode/:courseTitle",
        element: <TakeAttendance></TakeAttendance>,
      },
      {
        path: "/teacher/finance",
        element: <TFinance></TFinance>,
      },
    ],
  },
];

export default TeacherRoutes;
