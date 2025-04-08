/* eslint-disable react/prop-types */
const SingleCourseResult = ({ course, i, results }) => {
  const result = results.find((item) => item.courseCode === course.courseCode);
  return (
    <tr key={course._id}>
      <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
        <div className="inline-flex items-center gap-x-3">
          <div className="">{i + 1}</div>
        </div>
      </td>
      <td className="px-12 py-4 text-sm text-gray-500 whitespace-nowrap">
        {course.courseCode}
      </td>
      <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
        {course.courseName}
      </td>
      <td className="px-4 py-4 text-sm text-center text-gray-500 whitespace-nowrap">
        {course.credit}
      </td>
      <td className="px-4 py-4 text-sm text-center text-gray-500 whitespace-nowrap">
        {result?.mid?.number}
      </td>
      <td className="px-4 py-4 text-sm text-center text-gray-500 whitespace-nowrap">
        {result?.final?.number}
      </td>
      <td className="px-4 py-4 text-sm text-center text-gray-500 whitespace-nowrap">
        {result?.attendance?.number}
      </td>
      <td className="px-4 py-4 text-sm text-center text-gray-500 whitespace-nowrap">
        {result?.assessment?.number}
      </td>
      <td className="px-4 py-4 text-sm text-center text-gray-500 whitespace-nowrap">
        {(result?.mid?.number +
          result?.final?.number +
          result?.attendance?.number +
          result?.assessment?.number) |
          ""}
      </td>
      <td className="px-4 py-4 text-sm text-center text-gray-500 whitespace-nowrap">
        {parseFloat(result?.grade).toFixed(2) | parseFloat(0).toFixed(2)}
      </td>
    </tr>
  );
};

export default SingleCourseResult;
