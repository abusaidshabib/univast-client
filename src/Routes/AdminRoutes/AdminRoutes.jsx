import AdminDashboard from "../../Layouts/AdminDashboard";
import AdminHome from "../../Pages/AdminPortal/AdminHome/Main/AdminHome";
import AllStudents from "../../Pages/AdminPortal/AllStudents/AllStudents";
import AllTeachers from "../../Pages/AdminPortal/AllTeachers/AllTeachers";
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
        path: "teachers",
        element: <AllTeachers />,
      },
      {
        path: "faculties",
        element: <AllTeachers />,
      },
      {
        path: "departments",
        element: <AllTeachers />,
      },
      {
        path: "/admin/programs",
        element: <AllTeachers />,
      },
    ],
  },
];

export default AdminRoutes;
