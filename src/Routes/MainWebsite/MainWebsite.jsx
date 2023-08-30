import Main from "../../Layouts/Main";
import Admission from "../../Pages/MainWebsite/AdmissionPage/Main/Admission";
import AdmissionForm from "../../Pages/MainWebsite/AdmissionPage/Sections/AdmissionForm/AdmissionForm";
import ApplyInfo from "../../Pages/MainWebsite/AdmissionPage/Sections/AdmissionForm/FormSections/ApplyInfo";
import EducationalInfo from "../../Pages/MainWebsite/AdmissionPage/Sections/AdmissionForm/FormSections/EducationalInfo";
import FamilyInfo from "../../Pages/MainWebsite/AdmissionPage/Sections/AdmissionForm/FormSections/FamilyInfo";
import OtherInfo from "../../Pages/MainWebsite/AdmissionPage/Sections/AdmissionForm/FormSections/OtherInfo";
import PersonalInfo from "../../Pages/MainWebsite/AdmissionPage/Sections/AdmissionForm/FormSections/PersonalInfo";
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
        children: [
          {
            path: "/admission/online",
            element: <ApplyInfo></ApplyInfo>,
          },
          {
            path: "/admission/online/general",
            element: <ApplyInfo></ApplyInfo>,
          },
          {
            path: "/admission/online/personal",
            element: <PersonalInfo></PersonalInfo>,
          },
          {
            path: "/admission/online/family",
            element: <FamilyInfo></FamilyInfo>,
          },
          {
            path: "/admission/online/educational",
            element: <EducationalInfo></EducationalInfo>,
          },
          {
            path: "/admission/online/others",
            element: <OtherInfo></OtherInfo>,
          },
        ],
      },
    ],
  },
];

export default MainWebsite;
