import { MdDownload } from "react-icons/md";

const SExamRutine = () => {
  return (
    <div className="bg-white p-10 mb-5 rounded-lg">
      <div className="flex justify-between items-center text-gray-900 col-span-3">
        <div>
          <p className="text-4xl font-semibold">Exam Routine</p>
        </div>
        <div>
          <MdDownload className="text-2xl" />
        </div>
      </div>
      <p className="py-5"></p>
      <table className="border-collapse border border-slate-400 w-full text-lg">
        <thead>
          <tr className="">
            <th colSpan={6} className="border border-gray-400 p-2 bg-secondary-blue text-white">Mid term - Spring 2023</th>
          </tr>
        </thead>
        <thead>
          <tr>
            <th className="border border-gray-400 p-2 ">Date</th>
            <th className="border border-gray-400 p-2 ">Time</th>
            <th className="border border-gray-400 p-2 ">Course Code</th>
            <th className="border border-gray-400 p-2 ">Course Title</th>
            <th className="border border-gray-400 p-2 ">Room Numbers</th>
            <th className="border border-gray-400 p-2 ">Invigilators</th>
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

export default SExamRutine;