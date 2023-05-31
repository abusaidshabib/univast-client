import AttendedTable from "./AttendedTable";
import DetailAttendance from "./DetailAttendance";

const AttendSinglePage = () => {
  return (
    <div className="min-h-[calc(100vh-80px)] w-full bg-gray-200 p-5 grid gap-5">
      <DetailAttendance></DetailAttendance>
      <AttendedTable></AttendedTable>
    </div>
  );
};

export default AttendSinglePage;