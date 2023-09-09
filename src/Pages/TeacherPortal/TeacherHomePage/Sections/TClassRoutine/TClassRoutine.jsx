import { MdDownload } from "react-icons/md";

const TClassRoutine = () => {
  const classSchedule = [
    {
      day: 0,
      classes: [
        { startTime: "9:00 AM", className: "Math" },
        { startTime: "11:00 AM", className: "Science" },
      ],
    },
    {
      day: 1,
      classes: [
        { startTime: "10:00 AM", className: "History" },
        { startTime: "1:00 PM", className: "English" },
      ],
    },
    {
      day: 2,
      classes: [
        { startTime: "8:30 AM", className: "Physics" },
        { startTime: "10:30 AM", className: "Chemistry" },
      ],
    },
    {
      day: 3,
      classes: [
        { startTime: "9:15 AM", className: "Biology" },
        { startTime: "11:15 AM", className: "Geography" },
      ],
    },
    {
      day: 4,
      classes: [
        { startTime: "9:30 AM", className: "Art" },
        { startTime: "1:30 PM", className: "Music" },
      ],
    },
    {
      day: 5,
      classes: [
        { startTime: "8:45 AM", className: "Physical Education" },
        { startTime: "10:45 AM", className: "Health" },
      ],
    },
    {
      day: 6,
      classes: [
        { startTime: "10:15 AM", className: "Computer Science" },
        { startTime: "12:15 PM", className: "Programming" },
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
    <div className="bg-white p-10 mb-5 rounded-lg">
      <div className="flex justify-between items-center text-gray-900 col-span-3">
        <div>
          <p className="text-4xl font-semibold">Class Routine</p>
        </div>
        <div>
          <MdDownload className="text-2xl" />
        </div>
      </div>
      <p className="py-5"></p>
      <table className="border-collapse border border-slate-400 w-full text-lg">
        <thead>
          <tr>
            <th className="border border-gray-400 p-2">Day</th>

            {Array.from({ length: maxClasses }, (_, index) => (
              <th key={index} className="border border-gray-400 p-2">
                Class {index}
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
                  <span className="text-base text-primary-orange">{data?.startTime}</span>
                </td>
              ))}
              {/* <td>{classData.startTime}</td>
              {classSchedule.map((dayData, index) => (
                <td key={index}>
                  {dayData.classes[index]
                    ? dayData.classes[index].className
                    : ""}
                </td>
              ))} */}
            </tr>
          ))}
          {/* <tr>
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
          </tr> */}
        </tbody>
      </table>
    </div>
  );
};

export default TClassRoutine;
