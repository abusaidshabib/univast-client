import { MdDownload } from "react-icons/md";

const SClassRoutine = () => {
  return (
    <div className="bg-white p-10 rounded-lg">
      <div className="flex justify-between items-center text-gray-900 col-span-3">
        <div>
          <p className="text-4xl font-semibold">Class Routine</p>
        </div>
        <div>
          <MdDownload className="text-2xl" />
        </div>
      </div>
      <p className="py-5"></p>
      <table className="border-collapse border border-slate-400 w-full text-lg">
        <thead>
          <tr>
            <th className="border border-gray-400 p-2 ">Day</th>
            <th className="border border-gray-400 p-2 ">Code Code</th>
            <th className="border border-gray-400 p-2 ">Course Title</th>
            <th className="border border-gray-400 p-2 ">Teacher Name</th>
            <th className="border border-gray-400 p-2 ">Start time</th>
            <th className="border border-gray-400 p-2 ">End Time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-400 p-2 ">579162</td>
            <td className="border border-gray-400 p-2 ">Mid Term - Spring</td>
            <td className="border border-gray-400 p-2 ">2020</td>
            <td className="border border-gray-400 p-2 ">Feb 10, 2020</td>
            <td className="border border-gray-400 p-2 ">11521</td>
            <td className="border border-gray-400 p-2 ">UCBL</td>
          </tr>
          <tr>
            <td className="border border-gray-400 p-2 ">579162</td>
            <td className="border border-gray-400 p-2 ">Mid Term - Spring</td>
            <td className="border border-gray-400 p-2 ">2020</td>
            <td className="border border-gray-400 p-2 ">Feb 10, 2020</td>
            <td className="border border-gray-400 p-2 ">11521</td>
            <td className="border border-gray-400 p-2 ">UCBL</td>
          </tr>
          <tr>
            <td className="border border-gray-400 p-2 ">579162</td>
            <td className="border border-gray-400 p-2 ">Mid Term - Spring</td>
            <td className="border border-gray-400 p-2 ">2020</td>
            <td className="border border-gray-400 p-2 ">Feb 10, 2020</td>
            <td className="border border-gray-400 p-2 ">11521</td>
            <td className="border border-gray-400 p-2 ">UCBL</td>
          </tr>
          <tr>
            <td className="border border-gray-400 p-2 ">579162</td>
            <td className="border border-gray-400 p-2 ">Mid Term - Spring</td>
            <td className="border border-gray-400 p-2 ">2020</td>
            <td className="border border-gray-400 p-2 ">Feb 10, 2020</td>
            <td className="border border-gray-400 p-2 ">11521</td>
            <td className="border border-gray-400 p-2 ">UCBL</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SClassRoutine;