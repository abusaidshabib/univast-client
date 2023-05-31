const AttendedTable = () => {
  return (
    <div className="bg-white p-10 rounded-lg">
      <table className="border-collapse border border-slate-400 w-full text-lg">
        <thead>
          <tr>
            <th className="border border-gray-400 p-2 ">Day</th>
            <th className="border border-gray-400 p-2 ">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-400 p-2 text-center ">Feb 12, 2020</td>
            <td className="border border-gray-400 p-2 text-center bg-red-600 text-p-white">A</td>
          </tr>
          <tr>
            <td className="border border-gray-400 p-2 text-center ">579162</td>
            <td className="border border-gray-400 p-2 text-center ">P</td>
          </tr>
          <tr>
            <td className="border border-gray-400 p-2 text-center ">579162</td>
            <td className="border border-gray-400 p-2 text-center ">P</td>
          </tr>
          <tr>
            <td className="border border-gray-400 p-2 text-center ">579162</td>
            <td className="border border-gray-400 p-2 text-center ">Mid Term - Spring</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AttendedTable;