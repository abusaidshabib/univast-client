import AdminDashboard from "../../Layouts/AdminDashboard";
import AdminApplication from "../../Pages/AdminPortal/AdminApplication/Main/AdminApplication";
import AdminHome from "../../Pages/AdminPortal/AdminHome/Main/AdminHome";

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
      {
        path: "/admin/application",
        element: <AdminApplication />,
      },
    ],
  },
];

export default AdminRoutes;
