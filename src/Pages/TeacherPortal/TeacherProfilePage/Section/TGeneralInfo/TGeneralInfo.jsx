import profile from "../../../../../assets/Student-dashboard/teacher.png";

const TGeneralInfo = () => {
  return (
    <div className="flex gap-10">
      <div>
        <img className="border-2 p-2 w-56 mb-3" src={profile} alt="" />
        <button className="w-full bg-primary-200 py-2 font-medium">Reset Password</button>
      </div>
      <div className="flex-grow">
          <table className="text-lg">
            <tr className="p-5 border-b">
              <td className="py-3 text-right text-primary-blue">Full Name:</td>
              <td className="py-3 pl-5">Md Golam Mehedi</td>
            </tr>
            <tr className="p-5 border-y">
              <td className="py-3 text-right text-primary-blue">Student ID:</td>
              <td className="py-3 pl-5">202011056070</td>
            </tr>
            <tr className="p-5 border-y">
              <td className="py-3 text-right text-primary-blue">Enrolled In:</td>
              <td className="py-3 pl-5">Bachelor of Science in Computer Science and Engineering</td>
            </tr>
            <tr className="p-5 border-y">
              <td className="py-3 text-right text-primary-blue">Batch:</td>
              <td className="py-3 pl-5">56</td>
            </tr>
            <tr className="p-5 border-y">
              <td className="py-3 text-right text-primary-blue">Admission Date:</td>
              <td className="py-3 pl-5">December 15, 2019</td>
            </tr>
            <tr className="p-5 border-y">
              <td className="py-3 text-right text-primary-blue">Student Status:</td>
              <td className="py-3 pl-5">Graduating</td>
            </tr>
            <tr className="p-5 border-y">
              <td className="py-3 text-right text-primary-blue">Total Credit:</td>
              <td className="py-3 pl-5">161</td>
            </tr>
            <tr className="p-5 border-y">
              <td className="py-3 text-right text-primary-blue">Completed Credit:</td>
              <td className="py-3 pl-5">138</td>
            </tr>
            <tr className="p-5 border-y">
              <td className="py-3 text-right text-primary-blue">Current CGPA:</td>
              <td className="py-3 pl-5">3.58</td>
            </tr>
          </table>
      </div>
    </div>
  );
};

export default TGeneralInfo;
