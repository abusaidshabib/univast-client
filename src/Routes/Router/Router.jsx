import { createBrowserRouter } from "react-router-dom";
import MainWebsite from "../MainWebsite/MainWebsite";
import TeacherRoutes from "../TeacherRoutes/TeacherRoutes";
import StudentRoutes from "../StudentRoutes/StudentRoutes";
import EnrollPortal from "../EnrollPortal/EnrollPortal";
import AdminRoutes from "../AdminRoutes/AdminRoutes";
import CourseRoutes from "../CourseRoutes/CourseRoutes";

const allRoutes = [
  ...MainWebsite,
  ...TeacherRoutes,
  ...StudentRoutes,
  ...EnrollPortal,
  ...AdminRoutes,
  ...CourseRoutes,
];

const router = createBrowserRouter(allRoutes);
export default router;
