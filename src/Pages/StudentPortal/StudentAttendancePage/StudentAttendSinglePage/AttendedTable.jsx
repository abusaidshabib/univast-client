const AttendedTable = () => {
  return (
    <div className="bg-white p-10 rounded-lg">
      <div className="flex justify-between items-center text-gray-900 col-span-3">
        <div>
          <p className="text-xl font-semibold">
            Year: <b>2020</b>
          </p>
          <p className="text-xl font-semibold">
            Present: <b>P</b>
          </p>
          <p className="text-xl font-semibold">
            Absent: <b className="text-primary-700">A</b>
          </p>
        </div>
        <div></div>
      </div>
      <p className="py-5"></p>
      <table className="border-collapse border border-slate-400 w-full text-lg">
        <thead>
          <tr>
            <th className="border border-gray-400 p-2 ">10/2</th>
            <th className="border border-gray-400 p-2 ">11/2</th>
            <th className="border border-gray-400 p-2 ">12/2</th>
            <th className="border border-gray-400 p-2 ">13/2</th>
            <th className="border border-gray-400 p-2 ">14/2</th>
            <th className="border border-gray-400 p-2 ">15/2</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-400 p-2 text-center ">P</td>
            <td className="border border-gray-400 p-2 text-center bg-red-600 text-p-white">A</td>
            <td className="border border-gray-400 p-2 text-center ">2020</td>
            <td className="border border-gray-400 p-2 text-center ">10/2</td>
            <td className="border border-gray-400 p-2 text-center ">11521</td>
            <td className="border border-gray-400 p-2 text-center ">UCBL</td>
          </tr>
          <tr>
            <td className="border border-gray-400 p-2 text-center ">579162</td>
            <td className="border border-gray-400 p-2 text-center ">Mid Term - Spring</td>
            <td className="border border-gray-400 p-2 text-center ">2020</td>
            <td className="border border-gray-400 p-2 text-center ">10/2</td>
            <td className="border border-gray-400 p-2 text-center ">11521</td>
            <td className="border border-gray-400 p-2 text-center ">UCBL</td>
          </tr>
          <tr>
            <td className="border border-gray-400 p-2 text-center ">579162</td>
            <td className="border border-gray-400 p-2 text-center ">Mid Term - Spring</td>
            <td className="border border-gray-400 p-2 text-center ">2020</td>
            <td className="border border-gray-400 p-2 text-center ">10/2</td>
            <td className="border border-gray-400 p-2 text-center ">11521</td>
            <td className="border border-gray-400 p-2 text-center ">UCBL</td>
          </tr>
          <tr>
            <td className="border border-gray-400 p-2 text-center ">579162</td>
            <td className="border border-gray-400 p-2 text-center ">Mid Term - Spring</td>
            <td className="border border-gray-400 p-2 text-center ">2020</td>
            <td className="border border-gray-400 p-2 text-center ">10/2</td>
            <td className="border border-gray-400 p-2 text-center ">11521</td>
            <td className="border border-gray-400 p-2 text-center ">UCBL</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AttendedTable;