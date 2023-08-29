import { createBrowserRouter } from "react-router-dom";
import MainWebsite from "../MainWebsite/MainWebsite";
import TeacherRoutes from "../TeacherRoutes/TeacherRoutes";
import StudentRoutes from "../StudentRoutes/StudentRoutes";
import EnrollPortal from "../EnrollPortal/EnrollPortal";

const allRoutes = [
  ...MainWebsite,
  ...TeacherRoutes,
  ...StudentRoutes,
  ...EnrollPortal,
];

const router = createBrowserRouter(allRoutes);
export default router;
