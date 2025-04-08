const TuitionFees = () => {
  return (
    <div className="p-20">
      <p className="text-6xl font-extrabold leading-relaxed pb-10">
        {" "}
        Tuition Fees
      </p>
      <p className="font-semibold text-2xl mb-3">CSE (138 Credit in 12 semester)</p>
      <table className="border-collapse border border-slate-400 w-full text-lg">
        <thead>
          <tr>
            <th className="border border-gray-400 p-2 ">Waiver %</th>
            <th className="border border-gray-400 p-2 ">Course Fee</th>
            <th className="border border-gray-400 p-2 ">Additional 10%</th>
            <th className="border border-gray-400 p-2 ">Per Semester</th>
            <th className="border border-gray-400 p-2 ">
              Admission fee + 1st installment
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-400 p-2 text-center ">20%</td>
            <td className="border border-gray-400 p-2 text-center ">469600</td>
            <td className="border border-gray-400 p-2 text-center ">422640</td>
            <td className="border border-gray-400 p-2 text-center">35220</td>
            <td className="border border-gray-400 p-2 text-center">25740</td>
          </tr>
          <tr>
            <td className="border border-gray-400 p-2 text-center ">30%</td>
            <td className="border border-gray-400 p-2 text-center ">420900</td>
            <td className="border border-gray-400 p-2 text-center ">378810</td>
            <td className="border border-gray-400 p-2 text-center">31568</td>
            <td className="border border-gray-400 p-2 text-center">24523</td>
          </tr>
          <tr>
            <td className="border border-gray-400 p-2 text-center ">50%</td>
            <td className="border border-gray-400 p-2 text-center ">323500</td>
            <td className="border border-gray-400 p-2 text-center ">291150</td>
            <td className="border border-gray-400 p-2 text-center">24263</td>
            <td className="border border-gray-400 p-2 text-center">22088</td>
          </tr>
        </tbody>
      </table>
      <p className="font-semibold text-2xl mb-3 pt-10">
        BBA (135 Credit in 12 semester)
      </p>
      <table className="border-collapse border border-slate-400 w-full text-lg">
        <thead>
          <tr>
            <th className="border border-gray-400 p-2 ">Waiver %</th>
            <th className="border border-gray-400 p-2 ">Course Fee</th>
            <th className="border border-gray-400 p-2 ">Additional 10%</th>
            <th className="border border-gray-400 p-2 ">Per Semester</th>
            <th className="border border-gray-400 p-2 ">
              Admission fee + 1st installment
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-400 p-2 text-center ">20%</td>
            <td className="border border-gray-400 p-2 text-center ">469600</td>
            <td className="border border-gray-400 p-2 text-center ">422640</td>
            <td className="border border-gray-400 p-2 text-center">35220</td>
            <td className="border border-gray-400 p-2 text-center">25740</td>
          </tr>
          <tr>
            <td className="border border-gray-400 p-2 text-center ">30%</td>
            <td className="border border-gray-400 p-2 text-center ">420900</td>
            <td className="border border-gray-400 p-2 text-center ">378810</td>
            <td className="border border-gray-400 p-2 text-center">31568</td>
            <td className="border border-gray-400 p-2 text-center">24523</td>
          </tr>
          <tr>
            <td className="border border-gray-400 p-2 text-center ">50%</td>
            <td className="border border-gray-400 p-2 text-center ">323500</td>
            <td className="border border-gray-400 p-2 text-center ">291150</td>
            <td className="border border-gray-400 p-2 text-center">24263</td>
            <td className="border border-gray-400 p-2 text-center">22088</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TuitionFees;
