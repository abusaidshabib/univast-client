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
            <th
              colSpan={6}
              className="border border-gray-400 p-2 bg-secondary-blue text-white"
            >
              Mid term - Spring 2023
            </th>
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
            <td className="border border-gray-400 p-2 ">Feb 10, 2020</td>
            <td className="border border-gray-400 p-2 ">3:30pm-5:00pm</td>
            <td className="border border-gray-400 p-2 ">CSE-1101</td>
            <td className="border border-gray-400 p-2 ">
              Introduction of computer Science
            </td>
            <td className="border border-gray-400 p-2 text-center">201</td>
            <td className="border border-gray-400 p-2 ">Pabon Saha</td>
          </tr>
          <tr>
            <td className="border border-gray-400 p-2 ">Feb 11, 2020</td>
            <td className="border border-gray-400 p-2 ">3:30pm-5:00pm</td>
            <td className="border border-gray-400 p-2 ">CSE-1102</td>
            <td className="border border-gray-400 p-2 ">Analog Electronics</td>
            <td className="border border-gray-400 p-2 text-center">201</td>
            <td className="border border-gray-400 p-2 ">Pabon Saha</td>
          </tr>
          <tr>
            <td className="border border-gray-400 p-2 ">Feb 13, 2020</td>
            <td className="border border-gray-400 p-2 ">3:30pm-5:00pm</td>
            <td className="border border-gray-400 p-2 ">CSE-1104</td>
            <td className="border border-gray-400 p-2 ">
              Math I (Differential Calculus & Co-ordinateGeom.){" "}
            </td>
            <td className="border border-gray-400 p-2 text-center">203</td>
            <td className="border border-gray-400 p-2 ">Pabon Saha</td>
          </tr>
          <tr>
            <td className="border border-gray-400 p-2 ">Feb 16, 2020</td>
            <td className="border border-gray-400 p-2 ">3:30pm-5:00pm</td>
            <td className="border border-gray-400 p-2 ">CSE-1106</td>
            <td className="border border-gray-400 p-2 ">English I</td>
            <td className="border border-gray-400 p-2 text-center">103</td>
            <td className="border border-gray-400 p-2 ">Pabon Saha</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SExamRutine;
