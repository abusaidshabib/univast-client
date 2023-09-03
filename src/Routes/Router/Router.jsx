import { createBrowserRouter } from "react-router-dom";
import MainWebsite from "../MainWebsite/MainWebsite";
import OnlineRoutes from "../OnlineRoutes/OnlineRoutes";
import Login from "../../Pages/Login/Login";
import Registration from "../../Pages/Registration/Registration";

const allRoutes = [
  ...MainWebsite,
  ...OnlineRoutes,
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/registration",
    element: <Registration />,
  },
];

const router = createBrowserRouter(allRoutes);
export default router;
