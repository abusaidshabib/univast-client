const DetailAttendance = () => {
  return (
    <div className="bg-white p-10 rounded-lg">
      <div className="flex justify-between items-center text-gray-900 col-span-3">
        <div>
          <p className="text-4xl font-semibold">Class Attendance of English</p>
        </div>
        <div>

        </div>
      </div>
      <p className="py-5"></p>
      <table className="border-collapse border border-slate-400 w-full text-lg">
        <tbody>
          <tr>
            <td className="border border-gray-400 p-2 ">Student Name:</td>
            <td className="border border-gray-400 p-2 ">Name of student</td>
            <td className="border border-gray-400 p-2 ">Total Lectures: </td>
            <td className="border border-gray-400 p-2">Total Lecture</td>
          </tr>
          <tr>
            <td className="border border-gray-400 p-2 ">Student Id:</td>
            <td className="border border-gray-400 p-2 ">Student Id</td>
            <td className="border border-gray-400 p-2 ">Lecture Attended: </td>
            <td className="border border-gray-400 p-2 ">Attend Lectures</td>
          </tr>
          <tr>
            <td className="border border-gray-400 p-2 ">Course Code: </td>
            <td className="border border-gray-400 p-2 ">Subject Code</td>
            <td className="border border-gray-400 p-2 ">
              Consecutive Missing:{" "}
            </td>
            <td className="border border-gray-400 p-2 ">Missing consecutive</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DetailAttendance;