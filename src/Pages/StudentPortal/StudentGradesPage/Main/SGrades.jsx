const SGrades = () => {
  return (
    <div className="min-h-[calc(100vh-80px)] w-full bg-gray-200 p-5">
      <div className="bg-p-white p-10 rounded-lg">
        <div className="flex justify-between items-center text-gray-900 col-span-3">
          <div>
            <p className="text-4xl font-semibold">Check Grades</p>
          </div>
          <div>
            <label className="text-lg" htmlFor="semester">
              Please select the semester :
            </label>{" "}
            &nbsp;
            <select
              className="border-b-2 border-secondary-blue outline-none bg-transparent"
              name="semester"
              id="semester"
              form="carform"
            >
              <option value="volvo">Spring-2020</option>
              <option value="volvo">Summer-2020</option>
              <option value="volvo">Fall-2020</option>
              <option value="volvo">Spring-2021</option>
              <option value="volvo">Summer-2021</option>
              <option value="volvo">Fall-2021</option>
              <option value="volvo">Spring-2022</option>
              <option value="volvo">Summer-2022</option>
              <option value="volvo">Fall-2022</option>
              <option value="volvo">Spring-2023</option>
              <option value="volvo">Summer-2023</option>
              <option value="volvo">Fall-2023</option>
            </select>
          </div>
        </div>
        <p className="py-5"></p>
        <table className="border-collapse border border-slate-400 w-full text-lg bg-p-white">
          <thead>
            <tr>
              <th className="border border-gray-400 p-2 ">Code</th>
              <th className="border border-gray-400 p-2 ">Title</th>
              <th className="border border-gray-400 p-2 ">Credit</th>
              <th className="border border-gray-400 p-2 ">Faculty</th>
              <th className="border border-gray-400 p-2 ">Grade</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-400 p-2 ">CSE-1101</td>
              <td className="border border-gray-400 p-2 ">
                {" "}
                Introduction of Computer Science
              </td>
              <td className="border border-gray-400 p-2 text-center">3</td>
              <td className="border border-gray-400 p-2">Khan Md. Hasib</td>
              <td className="border border-gray-400 p-2 text-center">A+</td>
            </tr>
            <tr>
              <td className="border border-gray-400 p-2 ">CSE-1102</td>
              <td className="border border-gray-400 p-2 ">
                Analog Electronics
              </td>
              <td className="border border-gray-400 p-2 text-center">3</td>
              <td className="border border-gray-400 p-2">
                Mohammad Arifin Rahman Khan
              </td>
              <td className="border border-gray-400 p-2 text-center">A+</td>
            </tr>
            <tr>
              <td className="border border-gray-400 p-2 ">CSE-1103</td>
              <td className="border border-gray-400 p-2 ">
                Analog Electronics Lab
              </td>
              <td className="border border-gray-400 p-2 text-center">1</td>
              <td className="border border-gray-400 p-2">
                Mohammad Arifin Rahman Khan
              </td>
              <td className="border border-gray-400 p-2 text-center">C+</td>
            </tr>
            <tr>
              <td className="border border-gray-400 p-2 ">CSE-1104</td>
              <td className="border border-gray-400 p-2 ">
                Math I (Differential Calculus & Co-ordinate Geom.)
              </td>
              <td className="border border-gray-400 p-2 text-center">3</td>
              <td className="border border-gray-400 p-2">
                Dr. Md. Zakaria Hossain
              </td>
              <td className="border border-gray-400 p-2 text-center">C+</td>
            </tr>
            <tr>
              <td className="border border-gray-400 p-2 ">CSE-1105</td>
              <td className="border border-gray-400 p-2 ">English I</td>
              <td className="border border-gray-400 p-2 text-center">3</td>
              <td className="border border-gray-400 p-2">
                RIFATH AFRIN ANAHOLY EASHA
              </td>
              <td className="border border-gray-400 p-2 text-center">A</td>
            </tr>
            <tr>
              <td className="border border-gray-400 p-2 ">CSE-1106</td>
              <td className="border border-gray-400 p-2 ">
                Business Organization
              </td>
              <td className="border border-gray-400 p-2 text-center">3</td>
              <td className="border border-gray-400 p-2">Afsana Tajnin</td>
              <td className="border border-gray-400 p-2 text-center">A-</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SGrades;
