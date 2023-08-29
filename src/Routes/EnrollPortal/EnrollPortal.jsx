import EnrollmentDashboard from "../../Layouts/EnrollmentDashboard";
import AdmissionAcceptance from "../../Pages/EnrollPortal/AdmissionAcceptance/Main/AdmissionAcceptance";
import EnrollHome from "../../Pages/EnrollPortal/EnrollHome/Main/EnrollHome";

const EnrollPortal = [
  {
    path: "/enroll",
    element: <EnrollmentDashboard />,
    children: [
      {
        path: "/enroll",
        element: <EnrollHome />,
      },
      {
        path: "/enroll/acceptAdmission",
        element: <AdmissionAcceptance />,
      },
    ],
  },
];

export default EnrollPortal;
