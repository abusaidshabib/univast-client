import { Link } from "react-router-dom";

const TMainAttendance = () => {
  return (
    <div className="bg-white p-10 rounded-lg">
      <div className="flex justify-between items-center text-gray-900 col-span-3">
        <div>
          <p className="text-4xl font-semibold">Class Attendance</p>
        </div>
        <div>
          <label className="text-lg" htmlFor="semester">Please select the semester :</label> &nbsp;
          <select className="border-b-2 border-primary-700 outline-none bg-transparent" name="semester" id="semester" form="carform">
            <option value="volvo">Spring 2020</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </select>
        </div>
      </div>
      <p className="py-5"></p>
      <table className="border-collapse border border-slate-400 w-full text-lg">
        <thead>
          <tr>
            <th className="border border-gray-400 p-2 ">Course Code</th>
            <th className="border border-gray-400 p-2 ">Course Title</th>
            <th className="border border-gray-400 p-2 ">Room Number</th>
            <th className="border border-gray-400 p-2 ">Check Attendance</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-400 p-2 ">579162</td>
            <td className="border border-gray-400 p-2 ">Mid Term - Spring</td>
            <td className="border border-gray-400 p-2 ">2020</td>
            <td className="grid border border-gray-400">
              <Link
                className="p-2 w-full h-full bg-primary-700 hover:bg-primary-800 border border-primary-600 text-center text-p-white"
                to=""
              >
                Check Attendance of English
              </Link>
            </td>
          </tr>
          <tr>
            <td className="border border-gray-400 p-2 ">579162</td>
            <td className="border border-gray-400 p-2 ">Mid Term - Spring</td>
            <td className="border border-gray-400 p-2 ">2020</td>
            <td className="border border-gray-400 p-2 ">Feb 10, 2020</td>
          </tr>
          <tr>
            <td className="border border-gray-400 p-2 ">579162</td>
            <td className="border border-gray-400 p-2 ">Mid Term - Spring</td>
            <td className="border border-gray-400 p-2 ">2020</td>
            <td className="border border-gray-400 p-2 ">Feb 10, 2020</td>
          </tr>
          <tr>
            <td className="border border-gray-400 p-2 ">579162</td>
            <td className="border border-gray-400 p-2 ">Mid Term - Spring</td>
            <td className="border border-gray-400 p-2 ">2020</td>
            <td className="border border-gray-400 p-2 ">Feb 10, 2020</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TMainAttendance;