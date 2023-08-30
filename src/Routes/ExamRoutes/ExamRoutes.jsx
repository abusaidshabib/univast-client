import ExamDashboard from "../../Layouts/ExamDashboard";
import AssignTeacher from "../../Pages/ExamPortal/AssignTeacher/Main/AssignTeacher";
import ExamHome from "../../Pages/ExamPortal/ExamHome/Main/ExamHome";
import SheduleExam from "../../Pages/ExamPortal/SheduleExam/Main/SheduleExam";

const ExamRoutes = [
  {
    path: "/exam",
    element: <ExamDashboard />,
    children: [
      {
        path: "/exam",
        element: <ExamHome />,
      },
      {
        path: "/exam/assign",
        element: <AssignTeacher />,
      },
      {
        path: "/exam/sheduleexam",
        element: <SheduleExam />,
      },
    ],
  },
];

export default ExamRoutes;
