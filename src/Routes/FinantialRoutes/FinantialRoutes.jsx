import FinantialDashboard from "../../Layouts/FinantialDashboard";
import FinantialHome from "../../Pages/FinantialPortal/FinantialHome/Main/FinantialHome";

const FinantialRoutes = [
  {
    path: "/financial",
    element: <FinantialDashboard />,
    children: [
      {
        path: "/financial",
        element: <FinantialHome />,
      },
      {
        path: "/financial/home",
        element: <FinantialHome />,
      },
    ],
  },
];

export default FinantialRoutes;
