import ResourceDashboard from "../../Layouts/ResourceDashboard";
import ResourceHome from "../../Pages/ResourcePortal/ResourceHome/Main/ResourceHome";
import ResourceInfo from "../../Pages/ResourcePortal/ResourceInfo/Main/ResourceInfo";
import ResourceNotice from "../../Pages/ResourcePortal/ResourceNotice/Main/ResourceNotice";
import ResourceSalary from "../../Pages/ResourcePortal/ResourceSalary/Main/ResourceSalary";

const ResourceRoutes = [
  {
    path: "/resource",
    element: <ResourceDashboard />,
    children: [
      {
        path: "/resource",
        element: <ResourceHome />,
      },
      {
        path: "/resource/home",
        element: <ResourceHome />,
      },
      {
        path: "/resource/notice",
        element: <ResourceNotice />,
      },
      {
        path: "/resource/salary",
        element: <ResourceSalary />,
      },
      {
        path: "/resource/info",
        element: <ResourceInfo />,
      },
    ],
  },
];

export default ResourceRoutes;
