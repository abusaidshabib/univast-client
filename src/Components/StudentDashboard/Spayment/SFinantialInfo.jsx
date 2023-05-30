import { MdDownload } from "react-icons/md";

const SFinantialInfo = () => {
  return (
    <div className="bg-white p-10 rounded-lg">
      <div className="flex justify-between items-center text-gray-900 col-span-3">
        <div>
          <p className="text-4xl font-semibold">Financial Info</p>
        </div>
        <div>
          <MdDownload className="text-2xl" />
        </div>
      </div>
      <p className="py-5"></p>
      <table className="border-collapse border border-slate-400 w-full text-lg">
        <thead>
          <tr>
            <th className="border border-gray-400 p-2 ">Ref no</th>
            <th className="border border-gray-400 p-2 ">Semester</th>
            <th className="border border-gray-400 p-2 ">Session Year</th>
            <th className="border border-gray-400 p-2 ">Payment Date</th>
            <th className="border border-gray-400 p-2 ">Amount</th>
            <th className="border border-gray-400 p-2 ">Medium</th>
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

export default SFinantialInfo;