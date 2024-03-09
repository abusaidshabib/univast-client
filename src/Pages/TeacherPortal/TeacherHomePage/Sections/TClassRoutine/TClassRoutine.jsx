import { useRef } from "react";
import { MdDownload } from "react-icons/md";
import { useReactToPrint } from "react-to-print";

const TClassRoutine = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "emp-data",
  });

  const classSchedule = [
    {
      day: 1,
      classes: [
        { startTime: "9:00 AM", className: "Programming Language (Java)" },
        { startTime: "10:30 AM", className: "Artificial Intelligence" },
        { startTime: "2:00 PM", className: "Introduction of computer Science" },
        {
          startTime: "3:30 PM",
          className: "	Elective Major II (System Programming)",
        },
      ],
    },
    {
      day: 2,
      classes: [
        { startTime: "9:00 AM", className: "Programming Language (Java)" },
        { startTime: "10:30 AM", className: "Artificial Intelligence" },
        { startTime: "2:00 PM", className: "Introduction of computer Science" },
        {
          startTime: "3:30 PM",
          className: "	Elective Major II (System Programming)",
        },
      ],
    },
    {
      day: 3,
      classes: [
        {
          startTime: "9:00 AM",
          className: "Programming Language (Java) (Lab)",
        },
        { startTime: "10:30 AM", className: "Artificial Intelligence (Lab)" },
        { startTime: "2:00 PM", className: "Introduction of computer Science" },
        {
          startTime: "3:30 PM",
          className: "	Elective Major II (System Programming)",
        },
      ],
    },
    {
      day: 4,
      classes: [
        {
          startTime: "9:00 AM",
          className: "Programming Language (Java) (Lab)",
        },
        { startTime: "10:30 AM", className: "Artificial Intelligence (Lab)" },
        { startTime: "2:00 PM", className: "Introduction of computer Science" },
        {
          startTime: "3:30 PM",
          className: "	Elective Major II (System Programming)",
        },
      ],
    },
    {
      day: 5,
      classes: [
        { startTime: "9:00 AM", className: "Programming Language (Java)" },
        { startTime: "10:30 AM", className: "Artificial Intelligence" },
        { startTime: "2:00 PM", className: "Introduction of computer Science" },
        {
          startTime: "3:30 PM",
          className: "	Elective Major II (System Programming)",
        },
      ],
    },
    {
      day: 6,
      classes: [
        { startTime: "9:00 AM", className: "Programming Language (Java)" },
        { startTime: "10:30 AM", className: "Artificial Intelligence" },
        { startTime: "2:00 PM", className: "Introduction of computer Science" },
        {
          startTime: "3:30 PM",
          className: "	Elective Major II (System Programming)",
        },
      ],
    },
    {
      day: 7,
      classes: [
        { startTime: "9:00 AM", className: "Programming Language (Java)" },
        { startTime: "10:30 AM", className: "Artificial Intelligence" },
        { startTime: "2:00 PM", className: "Introduction of computer Science" },
        {
          startTime: "3:30 PM",
          className: "	Elective Major II (System Programming)",
        },
      ],
    },
  ];

  const days = [
    "Saturday",
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
  ];

  const maxClasses = Math.max(
    ...classSchedule.map((day) => day.classes.length)
  );

  return (
    <div
      ref={componentRef}
      style={{
        width: "100%",
        height: "100%",
      }}
      className="bg-white p-10 mb-5 rounded-lg"
    >
      <div className="flex justify-between items-center text-gray-900 col-span-3">
        <div>
          <p className="text-4xl font-semibold">Class Routine</p>
        </div>
        <div>
          <button onClick={() => handlePrint(componentRef)}>
            <MdDownload className="text-2xl text-accent-blue" />
          </button>
        </div>
      </div>
      <p className="py-5"></p>
      <table className="border-collapse border border-slate-400 w-full text-lg">
        <thead>
          <tr>
            <th className="border border-gray-400 p-2">Day</th>

            {Array.from({ length: maxClasses }, (_, index) => (
              <th key={index} className="border border-gray-400 p-2">
                Class {index + 1}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {classSchedule?.map((classData, index) => (
            <tr key={index}>
              <td className="border border-gray-400 p-2 text-center">
                {days?.[classData?.day]}
              </td>
              {classData?.classes?.map((data, index) => (
                <td
                  key={index}
                  className="border border-gray-400 p-2 text-center"
                >
                  <span>{data?.className}</span>
                  <br />
                  <span className="text-base text-primary-orange">
                    {data?.startTime}
                  </span>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TClassRoutine;
