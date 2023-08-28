import { createBrowserRouter } from "react-router-dom";
import MainWebsite from "../MainWebsite/MainWebsite";
import TeacherRoutes from "../TeacherRoutes/TeacherRoutes";
import StudentRoutes from "../StudentRoutes/StudentRoutes";

const allRoutes = [...MainWebsite, ...TeacherRoutes, ...StudentRoutes];

const router = createBrowserRouter(allRoutes);
export default router;
