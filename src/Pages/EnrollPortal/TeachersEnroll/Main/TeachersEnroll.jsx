import { Link } from "react-router-dom";

const TeachersEnroll = () => {
  return (
    <div className="min-h-[calc(100vh-80px)] w-full bg-gray-200 p-5">
      <div className="bg-white p-10 rounded-lg">
        <div className="flex justify-between items-center text-gray-900 col-span-3">
          <div>
            <p className="text-4xl font-semibold">Registered Courses</p>
          </div>
          <div>
            <label className="text-lg" htmlFor="semester">
              Please select the semester :
            </label>{" "}
            &nbsp;
            <select
              className="border-b-2 border-primary-700 outline-none bg-transparent"
              name="semester"
              id="semester"
              form="carform"
            >
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
              <th className="border border-gray-400 p-2 ">Applicant</th>
              <th className="border border-gray-400 p-2 ">NID Number</th>
              <th className="border border-gray-400 p-2 ">SSC result</th>
              <th className="border border-gray-400 p-2 ">HSC result</th>
              <th className="border border-gray-400 p-2 ">Action</th>
              <th className="border border-gray-400 p-2 ">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-400 p-2 ">CSE-4201</td>
              <td className="border border-gray-400 p-2 ">English</td>
              <td className="border border-gray-400 p-2 ">50</td>
              <td className="border border-gray-400 p-2">Ketu</td>
              <td className="border border-gray-400 p-2 text-center">
                <Link
                  to="details/outline"
                  className="bg-secondary-blue px-5 py-2 text-p-white font-semibold"
                >
                  View Details
                </Link>
              </td>
            </tr>
            <tr>
              <td className="border border-gray-400 p-2 ">CSE-4201</td>
              <td className="border border-gray-400 p-2 ">English</td>
              <td className="border border-gray-400 p-2 ">50</td>
              <td className="border border-gray-400 p-2">kito</td>
              <td className="border border-gray-400 p-2 text-center">
                <Link
                  to="details/outline"
                  className="bg-secondary-blue px-5 py-2 text-p-white font-semibold"
                >
                  View Details
                </Link>
              </td>
            </tr>
            <tr>
              <td className="border border-gray-400 p-2 ">CSE-4201</td>
              <td className="border border-gray-400 p-2 ">English</td>
              <td className="border border-gray-400 p-2 ">50</td>
              <td className="border border-gray-400 p-2">kandu</td>
              <td className="border border-gray-400 p-2 text-center">
                <Link
                  to="details/outline"
                  className="bg-secondary-blue px-5 py-2 text-p-white font-semibold"
                >
                  View Details
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TeachersEnroll;