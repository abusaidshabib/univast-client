import AdminDashboard from "../../Layouts/AdminDashboard";
import AdminHome from "../../Pages/AdminPortal/AdminHome/Main/AdminHome";
import AllStudents from "../../Pages/AdminPortal/AllStudents/AllStudents";
import AllTeachers from "../../Pages/AdminPortal/AllTeachers/AllTeachers";

const AdminRoutes = [
  {
    path: "/admin",
    element: <AdminDashboard />,
    children: [
      {
        path: "/admin",
        element: <AdminHome />,
      },
      {
        path: "/admin/home",
        element: <AdminHome />,
      },
      // {
      //   path: "/admin/application",
      //   element: <AdminApplication />,
      // },
      {
        path: "/admin/students",
        element: <AllStudents />,
      },
      {
        path: "/admin/teachers",
        element: <AllTeachers />,
      },
    ],
  },
];

export default AdminRoutes;
