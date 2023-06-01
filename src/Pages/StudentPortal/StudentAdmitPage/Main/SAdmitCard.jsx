import logo from "../../../../assets/Navbar/graduated-removebg-preview.png"

const SAdmitCard = () => {

  
  return (
    <div className="min-h-[calc(100vh-80px)] w-full bg-gray-200 p-5">
      <div className="bg-p-white p-10">
        <div
          to="/"
          className="flex items-center font-primary cursor-pointer justify-center"
        >
          <div className="cursor-pointer">
            <img className="w-16 f-16" src={logo} alt="" />
          </div>
          <p className="text-center text-white cursor-pointer">
            <span className="text-3xl tracking-wider font-medium leading-none cursor-pointer">
              <span className="text-primary-500 cursor-pointer">UNI</span>
              <span className="text-secondary-500 cursor-pointer">VAST</span>
            </span>
            <br />
            <span className="text-xs tracking-widest leading-none text-gray-800">
              UNIVERSITY
            </span>
          </p>
        </div>
        <div className="flex justify-between pt-5">
          <div className="text-base">
            <p>123,Panir tanki, Murgi para</p>
            <p>Mobile: 87897641313213216</p>
            <p>email: univastuniversity@gmail.com</p>
            <p>Website: www.univastuniversity.com</p>
          </div>
          <div className="grid place-content-center">
            <p>Date: 21 February 2020</p>
            <p>Name: Chokhidar Khanna</p>
            <p>Id: 202011056106</p>
            <p>Batch: 56(b)</p>
            <p>Phone: 7896464646</p>
          </div>
        </div>
        <p className="py-5"></p>
        <table className="border-collapse border border-slate-400 w-full text-lg bg-p-white">
          <thead>
            <tr>
              <th className="border border-gray-400 p-2 ">Subject</th>
              <th className="border border-gray-400 p-2 ">Course Code</th>
              <th className="border border-gray-400 p-2 ">Time</th>
              <th className="border border-gray-400 p-2 ">Examination Date</th>
              <th className="border border-gray-400 p-2 ">Checked By</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-400 p-2 ">CSE-4201</td>
              <td className="border border-gray-400 p-2 ">English</td>
              <td className="border border-gray-400 p-2 ">50</td>
              <td className="border border-gray-400 p-2">Ketu</td>
              <td className="border border-gray-400 p-2">Boroloker A+</td>
            </tr>
            <tr>
              <td className="border border-gray-400 p-2 ">CSE-4201</td>
              <td className="border border-gray-400 p-2 ">English</td>
              <td className="border border-gray-400 p-2 ">50</td>
              <td className="border border-gray-400 p-2">kito</td>
              <td className="border border-gray-400 p-2">Goriber A+</td>
            </tr>
            <tr>
              <td className="border border-gray-400 p-2 ">CSE-4201</td>
              <td className="border border-gray-400 p-2 ">English</td>
              <td className="border border-gray-400 p-2 ">50</td>
              <td className="border border-gray-400 p-2">kandu</td>
              <td className="border border-gray-400 p-2">Moddhobitter A+</td>
            </tr>
          </tbody>
        </table>
        <div className="">
          <p className="py-5 text-xl font-bold">Terms and condition</p>
          <div>
            <ul className="list-disc pl-5">
              <li>You cannot sleep on Exam hall</li>
              <li>You cannot eat on exam hall</li>
              <li>You must have to eat milk before exam</li>
              <li>Cook a new food before examination</li>
              <li>Please do not go washroom more than 0 before examination. You must have to go washroom in examination time more than 10.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SAdmitCard;