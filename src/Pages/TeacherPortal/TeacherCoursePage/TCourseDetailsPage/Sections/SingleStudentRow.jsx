import { useEffect, useState } from "react";
import {
  usePostResultMutation,
  usePutResultMutation,
} from "../../../../../features/student/studentApi";
import { useParams } from "react-router-dom";

/* eslint-disable react/prop-types */
const SingleStudentRow = ({ item, i, selectedSemester }) => {
  const { courseCode } = useParams();
  const [isEditMode, setEditMode] = useState(false);

  const result = item?.results?.find(
    (item) =>
      item?.semester === selectedSemester && item.courseCode === courseCode
  );

  console.log(item.results)

  const [postResult, { isSuccess: postSuccess }] = usePostResultMutation();
  const [putResult, { isSuccess: putSuccess }] = usePutResultMutation();

  const handleResultUpdate = () => {
    const midResult = parseInt(document.getElementById("mid").value);
    const finalResult = parseInt(document.getElementById("final").value);
    const attendanceResult = parseInt(
      document.getElementById("attendance").value
    );
    const assessmentResult = parseInt(
      document.getElementById("assessment").value
    );

const totalMarks =
  midResult + finalResult + attendanceResult + assessmentResult;
let gpa;

switch (true) {
  case totalMarks >= 80:
    gpa = 4.0;
    break;
  case totalMarks >= 75 && totalMarks < 80:
    gpa = 3.75;
    break;
  case totalMarks >= 70 && totalMarks < 75:
    gpa = 3.5;
    break;
  case totalMarks >= 65 && totalMarks < 70:
    gpa = 3.25;
    break;
  case totalMarks >= 60 && totalMarks < 65:
    gpa = 3.0;
    break;
  case totalMarks >= 55 && totalMarks < 60:
    gpa = 2.75;
    break;
  case totalMarks >= 50 && totalMarks < 55:
    gpa = 2.5;
    break;
  case totalMarks >= 45 && totalMarks < 50:
    gpa = 2.25;
    break;
  case totalMarks >= 40 && totalMarks < 45:
    gpa = 2.0;
    break;
  default:
    gpa = 0.0;
    break;
}



    const data = {
      semester: selectedSemester,
      courseCode: courseCode,
      grade: gpa,
      mid: {
        number: midResult,
      },
      final: {
        number: finalResult,
      },
      attendance: {
        number: attendanceResult,
      },
      assessment: {
        number: assessmentResult,
      },
    };

    const studentId = item.studentId;

    console.log(data);

    if (result) {
      putResult({ data, studentId });
    } else {
      postResult({ data, studentId });
    }

    setEditMode(!isEditMode);
  };

  useEffect(() => {
    if (postSuccess || putSuccess) {
      window.location.reload();
    }
  });
  return (
    <tr key={item._id}>
      <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
        <div className="inline-flex items-center gap-x-3">
          <div className="">{i + 1}</div>
        </div>
      </td>
      <td className="px-12 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
        {item.studentId}
      </td>
      <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
        {item?.personal.firstName + " " + item?.personal.lastName}
      </td>
      <td className="px-4 py-4 text-center text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
        {isEditMode ? (
          <input
            type="number"
            name="mid"
            id="mid"
            defaultValue={result?.mid?.number | 0}
            className="w-16 p-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
          />
        ) : (
          <span>{result?.mid?.number}</span>
        )}
      </td>
      <td className="px-4 py-4 text-center text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
        {isEditMode ? (
          <input
            type="number"
            name="final"
            id="final"
            defaultValue={result?.final?.number | 0}
            className="w-16 p-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
          />
        ) : (
          <span>{result?.final?.number}</span>
        )}
      </td>
      <td className="px-4 py-4 text-center text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
        {isEditMode ? (
          <input
            type="number"
            name="attendance"
            id="attendance"
            defaultValue={result?.attendance?.number | 0}
            className="w-16 p-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
          />
        ) : (
          <span>{result?.attendance?.number}</span>
        )}
      </td>
      <td className="px-4 py-4 text-center text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
        {isEditMode ? (
          <input
            type="number"
            name="assessment"
            id="assessment"
            defaultValue={result?.assessment?.number | 0}
            className="w-16 p-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
          />
        ) : (
          <span>{result?.assessment?.number}</span>
        )}
      </td>
      <td className="px-4 py-4 text-center text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
        {result?.mid?.number +
          result?.final?.number +
          result?.attendance?.number +
          result?.assessment?.number}
      </td>
      <td className="px-4 py-4 text-center text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
        {result?.grade}
      </td>
      {/* <td className="px-4 py-4 text-center text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap"></td> */}
      <td className="flex items-center justify-center px-4 py-4 text-center text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
        {isEditMode ? (
          <div className="flex gap-2">
            <button
              onClick={() => setEditMode(!isEditMode)}
              className="flex items-center gap-1 bg-red-600 text-primary-white py-2 px-4 rounded-md cursor-pointer"
            >
              Cancel
            </button>
            <button
              onClick={handleResultUpdate}
              className="flex items-center gap-1 bg-green-500 text-primary-white py-2 px-4 rounded-md cursor-pointer"
            >
              Save
            </button>
          </div>
        ) : (
          <button
            onClick={() => setEditMode(!isEditMode)}
            className="flex items-center gap-1 bg-primary-blue text-primary-white py-2 px-4 rounded-md cursor-pointer"
          >
            Update
          </button>
        )}
      </td>
    </tr>
  );
};

export default SingleStudentRow;
