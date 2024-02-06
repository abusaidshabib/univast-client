import { Link, useParams } from "react-router-dom";
import { useGetCourseContentQuery } from "../../../../../features/teacher/teacherApi";

const SCourseNotice = () => {
  const { courseCode, semester } = useParams();
  const { data: courseContent } = useGetCourseContentQuery({
    semester: semester,
    courseCode: courseCode,
  });
  return (
    <div>
      <div className="flex flex-col gap-3 mt-5">
        {courseContent?.data[0]?.notice?.map((item, i) => (
          <div
            className="flex justify-between items-center bg-primary-white rounded-md border border-primary-blue/20 hover:shadow-md"
            key={i}
          >
            <Link className="p-5 w-full" target="_blank" to={item.url}>
              {item.title}
            </Link>
            {/* <div
              onClick={() => {
                handleDownload(item.url, item.title);
              }}
              className="flex justify-center items-center bg-white cursor-pointer rounded border border-primary-blue p-1 hover:bg-primary-blue hover:text-primary-white transition-all"
            >
              <MdOutlineFileDownload className="text-lg" />
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SCourseNotice;
