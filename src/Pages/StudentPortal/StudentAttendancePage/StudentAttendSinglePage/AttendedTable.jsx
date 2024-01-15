import moment from "moment";

/* eslint-disable react/prop-types */
const AttendedTable = ({ attendanceData }) => {
  return (
    <div className="bg-white p-10 rounded-lg">
      <table className="border-collapse border border-slate-400 w-full text-lg">
        <thead>
          <tr>
            <th className="border border-gray-400 p-2 ">Date</th>
            <th className="border border-gray-400 p-2 ">Status</th>
          </tr>
        </thead>
        <tbody>
          {attendanceData?.map((item) => (
            <tr key={item._id}>
              <td className="border border-gray-400 p-2 text-center">
                {moment(item.date).format("MMM DD YYYY")}
              </td>
              <td
                className={`border border-gray-400 p-2 text-center ${
                  item.status ? "bg-green-600 text-white" : "bg-red-600 text-white"
                }`}
              >
                {item.status ? "Present" : "Absent"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AttendedTable;
