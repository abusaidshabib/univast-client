import OnlinePortal from "../../Pages/OnlinePortal/Main/OnlinePortal";
import AdminRoutes from "../AdminRoutes/AdminRoutes";
import CourseRoutes from "../CourseRoutes/CourseRoutes";
import EnrollPortal from "../EnrollPortal/EnrollPortal";
import ExamRoutes from "../ExamRoutes/ExamRoutes";
import FinantialRoutes from "../FinantialRoutes/FinantialRoutes";
import ResourceRoutes from "../ResourceRoutes/ResourceRoutes";
import StudentRoutes from "../StudentRoutes/StudentRoutes";
import TeacherRoutes from "../TeacherRoutes/TeacherRoutes";

const OnlineRoutes = [
  {
    path: "/online-portal",
    element: <OnlinePortal />,
    children: [
      ...TeacherRoutes,
      ...StudentRoutes,
      ...EnrollPortal,
      ...AdminRoutes,
      ...CourseRoutes,
      ...FinantialRoutes,
      ...ExamRoutes,
      ...ResourceRoutes,
    ],
  },
];

export default OnlineRoutes;
