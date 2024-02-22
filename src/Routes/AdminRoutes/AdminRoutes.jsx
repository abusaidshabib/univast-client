import AdminDashboard from "../../Layouts/AdminDashboard";
import AdminHome from "../../Pages/AdminPortal/AdminHome/Main/AdminHome";
import AllStudents from "../../Pages/AdminPortal/AllStudents/AllStudents";
import StudentDetails from "../../Pages/AdminPortal/AllStudents/StudentDetails";
import AllTeachers from "../../Pages/AdminPortal/AllTeachers/AllTeachers";
import TeacherDetails from "../../Pages/AdminPortal/AllTeachers/TeacherDetails";
import CreateDepartment from "../../Pages/AdminPortal/Departments/CreateDepartment";
import Departments from "../../Pages/AdminPortal/Departments/Departments";
import Faculties from "../../Pages/AdminPortal/Faculties/Faculties";
import CreateFaculty from "../../Pages/AdminPortal/Faculties/createFaculty";
import CreateProgram from "../../Pages/AdminPortal/Programs/CreateProgram";
import Programs from "../../Pages/AdminPortal/Programs/Programs";

import AdminRoute from "../PrivateRoutes/AdminRoute";

const AdminRoutes = [
  {
    path: "/admin",
    element: (
      <AdminRoute>
        <AdminDashboard />
      </AdminRoute>
    ),
    children: [
      {
        path: "/admin",
        element: <AdminHome />,
      },
      {
        path: "home",
        element: <AdminHome />,
      },
      {
        path: "students",
        element: <AllStudents />,
      },
      {
        path: "students/details",
        element: <StudentDetails />,
      },
      {
        path: "teachers",
        element: <AllTeachers />,
      },
      {
        path: "teachers/details",
        element: <TeacherDetails />,
      },
      {
        path: "faculties",
        element: <Faculties />,
      },
      {
        path: "createFaculty",
        element: <CreateFaculty />,
      },
      {
        path: "departments",
        element: <Departments />,
      },
      {
        path: "createDepartment",
        element: <CreateDepartment />,
      },
      {
        path: "programs",
        element: <Programs />,
      },
      {
        path: "createProgram",
        element: <CreateProgram />,
      },
    ],
  },
];

export default AdminRoutes;
