import { useParams } from "react-router-dom";

const TeacherInfo = () => {
      const router = useParams();
      const { teacherId } = router;
      console.log(teacherId);
    return (
      <div className="min-h-[calc(100vh-80px)] w-full bg-gray-200 p-5 font-sans"></div>
    );
};

export default TeacherInfo;