import { createBrowserRouter } from "react-router-dom";
import MainWebsite from "../MainWebsite/MainWebsite";
import TeacherRoutes from "../TeacherRoutes/TeacherRoutes";
import StudentRoutes from "../StudentRoutes/StudentRoutes";
import EnrollPortal from "../EnrollPortal/EnrollPortal";
import AdminRoutes from "../AdminRoutes/AdminRoutes";
import CourseRoutes from "../CourseRoutes/CourseRoutes";
import FinantialRoutes from "../FinantialRoutes/FinantialRoutes";
import ExamRoutes from "../ExamRoutes/ExamRoutes";
import ResourceRoutes from "../ResourceRoutes/ResourceRoutes";
import ControlPanel from "../../Pages/ControlPanel/Main/ControlPanel";

const allRoutes = [
  ...MainWebsite,
  ...TeacherRoutes,
  ...StudentRoutes,
  ...EnrollPortal,
  ...AdminRoutes,
  ...CourseRoutes,
  ...FinantialRoutes,
  ...ExamRoutes,
  ...ResourceRoutes,
  {
    path: "/control-panel",
    element: <ControlPanel />,
  },
];

const router = createBrowserRouter(allRoutes);
export default router;
