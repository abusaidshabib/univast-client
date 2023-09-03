import { MdDownload } from "react-icons/md";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { Link } from "react-router-dom";

const SAdmitCard = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "emp-data",
  });

  return (
    <div className="grid gap-5 min-h-[calc(100vh-80px)] w-full bg-gray-200 p-5">
      <div className="bg-white p-10">
        <div className="flex justify-between items-center text-gray-900 col-span-3">
          <div>
            <p className="text-4xl font-semibold">Download admit card</p>
          </div>
          <div>
            <button onClick={() => handlePrint(componentRef)}>
              <MdDownload className="text-2xl text-accent-blue" />
            </button>
          </div>
        </div>
      </div>
      <div
        ref={componentRef}
        style={{
          width: "100%",
          height: "100%",
        }}
        className="bg-p-white p-10"
      >
        <div
          to="/"
          className="flex items-center font-primary cursor-pointer justify-center"
        >
          <Link to="/" className="flex items-center cursor-pointer">
            <span className="text-primary-blue cursor-pointer text-4xl font-bold pr-1">
              UNI
            </span>
            <span className="border-l-2 border-primary-orange pl-1">
              <span className="text-accent-blue cursor-pointer font-semibold text-lg leading-none">
                VAST
              </span>{" "}
              <br />
              <span className="text-primary-gray cursor-pointer leading-none text-base">
                University
              </span>
            </span>
          </Link>
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
        <table className="min-w-full border-collapse border border-slate-400 w-full text-lg bg-p-white">
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
          <p className="pt-5 text-xl font-bold">Terms and condition</p>
          <div>
            <ul className="list-disc pl-5">
              <li>You cannot sleep on Exam hall</li>
              <li>You cannot eat on exam hall</li>
              <li>You must have to eat milk before exam</li>
              <li>Cook a new food before examination</li>
              <li>
                Please do not go washroom more than 0 before examination. You
                must have to go washroom in examination time more than 10.
              </li>
            </ul>
          </div>
        </div>
        <div className="flex place-content-end pt-10">
          <div className="w-28 border-b-2 border-dashed border-gray-900"></div>
          &nbsp; <p> Vice Principle</p>
        </div>
      </div>
    </div>
  );
};

export default SAdmitCard;
