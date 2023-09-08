import Main from "../../Layouts/Main";
import Login from "../../Pages/Login/Login";
import Admission from "../../Pages/MainWebsite/AdmissionPage/Main/Admission";
import AdmissionForm from "../../Pages/MainWebsite/AdmissionPage/Sections/AdmissionForm/AdmissionForm";
import ApplyInfo from "../../Pages/MainWebsite/AdmissionPage/Sections/AdmissionForm/FormSections/ApplyInfo";
import EducationalInfo from "../../Pages/MainWebsite/AdmissionPage/Sections/AdmissionForm/FormSections/EducationalInfo";
import FamilyInfo from "../../Pages/MainWebsite/AdmissionPage/Sections/AdmissionForm/FormSections/FamilyInfo";
import OtherInfo from "../../Pages/MainWebsite/AdmissionPage/Sections/AdmissionForm/FormSections/OtherInfo";
import PersonalInfo from "../../Pages/MainWebsite/AdmissionPage/Sections/AdmissionForm/FormSections/PersonalInfo";
import Home from "../../Pages/MainWebsite/HomePage/Main/Home";
import LecturerApplicationForm from "../../Pages/MainWebsite/LecturerApplication/Main/LecturerApplicationForm";
import LecturerEducationalInfo from "../../Pages/MainWebsite/LecturerApplication/Sections/LecturerEducationalInfo";
import LecturerExperienceInfo from "../../Pages/MainWebsite/LecturerApplication/Sections/LecturerExperienceInfo";
import LecturerOtherInfo from "../../Pages/MainWebsite/LecturerApplication/Sections/LecturerOtherInfo";
import LecturerPersonalInfo from "../../Pages/MainWebsite/LecturerApplication/Sections/LecturerPersonalInfo";
import LecturerPublicationInfo from "../../Pages/MainWebsite/LecturerApplication/Sections/LecturerPublicationInfo";

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
        path: "/login",
        element: <Login />,
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
      {
        path: "/applyforlecturer/online",
        element: <LecturerApplicationForm></LecturerApplicationForm>,
        children: [
          {
            path: "/applyforlecturer/online",
            element: <LecturerPersonalInfo></LecturerPersonalInfo>,
          },
          {
            path: "/applyforlecturer/online/personal",
            element: <LecturerPersonalInfo></LecturerPersonalInfo>,
          },
          {
            path: "/applyforlecturer/online/educational",
            element: <LecturerEducationalInfo></LecturerEducationalInfo>,
          },
          {
            path: "/applyforlecturer/online/experiences",
            element: <LecturerExperienceInfo></LecturerExperienceInfo>,
          },
          {
            path: "/applyforlecturer/online/publications",
            element: <LecturerPublicationInfo></LecturerPublicationInfo>,
          },
          {
            path: "/applyforlecturer/online/others",
            element: <LecturerOtherInfo></LecturerOtherInfo>,
          },
        ],
      },
    ],
  },
];

export default MainWebsite;
