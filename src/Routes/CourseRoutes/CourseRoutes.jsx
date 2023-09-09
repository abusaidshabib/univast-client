import CourseDashboard from "../../Layouts/CourseDashboard";
import AllCourses from "../../Pages/CoursePortal/AllCourses/AllCourses";
import CourseCreate from "../../Pages/CoursePortal/CourseCreate/Main/CourseCreate";
import CourseEnroll from "../../Pages/CoursePortal/CourseEnroll/Main/CourseEnroll";
import CourseHome from "../../Pages/CoursePortal/CourseHome/Main/CourseHome";
import CourseOutlines from "../../Pages/CoursePortal/CourseOutlines/Main/CourseOutlines";
import CourseSheduling from "../../Pages/CoursePortal/CourseSheduling/Main/CourseSheduling";

const CourseRoutes = [
  {
    path: "/course",
    element: <CourseDashboard />,
    children: [
      {
        path: "/course",
        element: <CourseHome />,
      },
      {
        path: "/course/home",
        element: <CourseHome />,
      },
      {
        path: "/course/createCourse",
        element: <CourseCreate />,
      },
      {
        path: "/course/allcourses",
        element: <AllCourses />,
      },
      {
        path: "/course/courseEnroll",
        element: <CourseEnroll />,
      },
      {
        path: "/course/courseSheduling",
        element: <CourseSheduling />,
      },
      {
        path: "/course/courseOutline",
        element: <CourseOutlines />,
      },
    ],
  },
];

export default CourseRoutes;
