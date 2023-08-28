import Main from "../../Layouts/Main";
import Admission from "../../Pages/MainWebsite/AdmissionPage/Main/Admission";
import AdmissionForm from "../../Pages/MainWebsite/AdmissionPage/Sections/AdmissionForm/AdmissionForm";
import Home from "../../Pages/MainWebsite/HomePage/Main/Home";

const MainWebsite = [
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/admission",
        element: <Admission></Admission>,
      },
      {
        path: "/admission/online",
        element: <AdmissionForm></AdmissionForm>,
      },
    ],
  },
];

export default MainWebsite;
