import { MdDownload } from "react-icons/md";

const FinatialInfo = () => {
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
            <th className="border border-gray-400 p-3 ">State</th>
            <th className="border border-gray-400 p-3 ">City</th>
            <th className="border border-gray-400 p-3 ">City</th>
            <th className="border border-gray-400 p-3 ">City</th>
            <th className="border border-gray-400 p-3 ">City</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-400 p-3 ">Indiana</td>
            <td className="border border-gray-400 p-3 ">Indianapolis</td>
            <td className="border border-gray-400 p-3 ">Indianapolis</td>
            <td className="border border-gray-400 p-3 ">Indianapolis</td>
            <td className="border border-gray-400 p-3 ">Indianapolis</td>
          </tr>
          <tr>
            <td className="border border-gray-400 p-3 ">Ohio</td>
            <td className="border border-gray-400 p-3 ">Columbus</td>
            <td className="border border-gray-400 p-3 ">Ohio</td>
            <td className="border border-gray-400 p-3 ">Columbus</td>
            <td className="border border-gray-400 p-3 ">Columbus</td>
          </tr>
          <tr>
            <td className="border border-gray-400 p-3 ">Michigan</td>
            <td className="border border-gray-400 p-3 ">Detroit</td>
            <td className="border border-gray-400 p-3 ">Detroit</td>
            <td className="border border-gray-400 p-3 ">Detroit</td>
            <td className="border border-gray-400 p-3 ">Detroit</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default FinatialInfo;