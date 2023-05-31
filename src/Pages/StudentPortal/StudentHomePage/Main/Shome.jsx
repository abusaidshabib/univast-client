import SClassRoutine from "../Sections/SClassRoutine/SClassRoutine";
import SExamRutine from "../Sections/SExamRoutine/SExamRutine";
import SProfileCard from "../Sections/SProfileCard/SProfileCard";
import SsemesterResult from "../Sections/SSemesterResult/SsemesterResult";

const Shome = () => {
  return (
    <div className="grid grid-cols-4 gap-5 p-5 bg-gray-200 min-h-[calc(100vh-80px)] text-gray-900">
      <div className="col-span-3 grid gap-5">
        <div>
          <SExamRutine></SExamRutine>
          <SClassRoutine></SClassRoutine>
          <SsemesterResult></SsemesterResult>
        </div>
      </div>
      <SProfileCard></SProfileCard>
    </div>
  );
};

export default Shome;
