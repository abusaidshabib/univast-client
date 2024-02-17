import EnrollmentDashboard from "../../Layouts/EnrollmentDashboard";
import EnrollHome from "../../Pages/EnrollPortal/EnrollHome/Main/EnrollHome";
import SingleApplication from "../../Pages/EnrollPortal/SingleApplication/Main/SingleApplication";
import StudentEnroll from "../../Pages/EnrollPortal/StudentEnroll/Main/StudentEnroll";
import TSingleApplication from "../../Pages/EnrollPortal/TSingleApplication/Main/TSingleApplication";
import TeachersEnroll from "../../Pages/EnrollPortal/TeachersEnroll/Main/TeachersEnroll";
import AdminRoute from "../PrivateRoutes/AdminRoute";

const EnrollPortal = [
  {
    path: "/enroll",
    element: (
      <AdminRoute>
        <EnrollmentDashboard />
      </AdminRoute>
    ),
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
      {
        path: "/enroll/teacherEnroll/query",
        element: <TSingleApplication />,
      },
    ],
  },
];

export default EnrollPortal;
