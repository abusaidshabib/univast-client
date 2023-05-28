import SProfileCard from "../../Components/StudentDashboard/SProfileCard";

const Shome = () => {
  return (
    <div className="grid grid-cols-4 rounded-tl-lg bg-gray-200 min-h-[calc(100vh-80px)] text-gray-900">
      <div className="col-span-3"></div>
      <SProfileCard></SProfileCard>
    </div>
  );
};

export default Shome;
