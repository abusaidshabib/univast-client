import ApplicantDashboard from "../../Layouts/ApplicantDashboard";
import ApplicantHome from "../../Pages/ApplicantPortal/ApplicantHome/Main/ApplicantHome";

const ApplicantRoutes = [
  {
    path: "/applicant",
    element: <ApplicantDashboard />,
    children: [
      {
        path: "/applicant",
        element: <ApplicantHome />,
      },
    ],
  },
];

export default ApplicantRoutes;
