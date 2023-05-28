import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main";
import Home from "../../Pages/Main/Home";
import Admission from "../../Pages/Main/Admission";
import AdmissionForm from "../../Components/Main/Admission/AdmissionForm";
import StudentDashbaord from "../../Layouts/StudentDashbaord";
import Shome from "../../Pages/StudentDashboard/Shome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/home",
        element: <Home></Home>
      },
      {
        path: "/admission",
        element: <Admission></Admission>
      },
      {
        path: "/admission/online",
        element: <AdmissionForm></AdmissionForm>
      }
    ]
  },
  {
    path: "/student",
    element: <StudentDashbaord></StudentDashbaord>,
    children: [
      {
        path: "/student",
        element: <Shome></Shome>
      }
    ]
  }
])

export default router;