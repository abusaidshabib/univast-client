import SClassRoutine from "../../Components/StudentDashboard/Home/SClassRoutine";
import SExamRutine from "../../Components/StudentDashboard/Home/SExamRutine";
import SProfileCard from "../../Components/StudentDashboard/Home/SProfileCard";
import SsemesterResult from "../../Components/StudentDashboard/Home/SsemesterResult";


const Shome = () => {
  return (
    <div className="grid grid-cols-4 gap-8 p-5 rounded-tl-lg bg-gray-200 min-h-[calc(100vh-80px)] text-gray-900">
      <div className="col-span-3 grid gap-5">
        <SExamRutine></SExamRutine>
        <SClassRoutine></SClassRoutine>
        <SsemesterResult></SsemesterResult>
      </div>
      <SProfileCard></SProfileCard>
    </div>
  );
};

export default Shome;
