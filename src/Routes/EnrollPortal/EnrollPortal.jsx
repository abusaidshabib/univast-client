import EnrollmentDashboard from "../../Layouts/EnrollmentDashboard";
import EnrollHome from "../../Pages/EnrollPortal/EnrollHome/Main/EnrollHome";
import SingleApplication from "../../Pages/EnrollPortal/SingleApplication/Main/SingleApplication";
import StudentEnroll from "../../Pages/EnrollPortal/StudentEnroll/Main/StudentEnroll";
import TeachersEnroll from "../../Pages/EnrollPortal/TeachersEnroll/Main/TeachersEnroll";

const EnrollPortal = [
  {
    path: "/enroll",
    element: <EnrollmentDashboard />,
    children: [
      {
        path: "/enroll",
        element: <EnrollHome />,
      },
      {
        path: "/enroll/home",
        element: <EnrollHome />,
      },
      {
        path: "/enroll/studentEnroll",
        element: <StudentEnroll />,
      },
      {
        path: "/enroll/studentEnroll/query",
        element: <SingleApplication />,
      },
      {
        path: "/enroll/teacherEnroll",
        element: <TeachersEnroll />,
      },
    ],
  },
];

export default EnrollPortal;
