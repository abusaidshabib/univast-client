import SMainAttendance from "../Sections/MainAttendanceTable/SMainAttendance";

const SAttendance = () => {
  return (
    <div className="min-h-[calc(100vh-80px)] w-full bg-gray-200 p-5 grid gap-5">
      <SMainAttendance></SMainAttendance>
    </div>
  );
};

export default SAttendance;