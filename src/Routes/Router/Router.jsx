import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main";
import Home from "../../Pages/Main/Home";
import Admission from "../../Pages/Main/Admission";
import AdmissionForm from "../../Components/Main/Admission/AdmissionForm";
import StudentDashbaord from "../../Layouts/StudentDashbaord";
import Shome from "../../Pages/StudentDashboard/Shome";
import Ssetting from "../../Pages/StudentDashboard/Ssetting";
import Spayment from "../../Pages/StudentDashboard/Spayment";

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
      },
      {
        path: "/student/home",
        element: <Shome></Shome>
      },
      {
        path: "/student/profile",
        element: <Ssetting></Ssetting>
      },
      {
        path: "/student/courses",
        element: <Spayment></Spayment>
      },
      {
        path: "/student/attendance",
        element: <Spayment></Spayment>
      },
      {
        path: "/student/grades",
        element: <Spayment></Spayment>
      },
      {
        path: "/student/payments",
        element: <Spayment></Spayment>
      },
    ]
  }
])

export default router;