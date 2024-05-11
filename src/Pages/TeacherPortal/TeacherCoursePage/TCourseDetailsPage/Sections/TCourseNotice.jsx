import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import {
  useGetCourseContentQuery,
  useUploadCourseContentMutation,
} from "../../../../../features/teacher/teacherApi";
import { uploadCourseAsstesToFirebase } from "../../../../../firebase/firebase.config";
import toast from "react-hot-toast";
import { FiUpload } from "react-icons/fi";

const TCourseNotice = () => {
  const [selectedSemester, setSelectedSemester] = useState("");
  const { courseCode } = useParams();
  const [loading, setLoading] = useState(false);
  const [uploadCourseContent, { isLoading, isSuccess, isError, error }] =
    useUploadCourseContentMutation();
  const { data: courseContent } = useGetCourseContentQuery({
    semester: selectedSemester,
    courseCode: courseCode,
  });
  
  const location = useLocation();
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const semester = queryParams.get("semester");
    setSelectedSemester(semester);
  }, [location]);

  const handleUpload = (selectedFile, fileName) => {
    setLoading(true);
    uploadCourseAsstesToFirebase(selectedFile, fileName)
      .then(async (url) => {
        console.log(url);
        const data = {
          semester: selectedSemester,
          courseCode: courseCode,
          notice: { url, title: selectedFile.name },
        };
        await uploadCourseContent(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  //   const handleDownload = async (url, title) => {
  //     try {
  //       const response = await fetch(url);
  //       const blob = await response.blob();

  //       // Create a Blob URL
  //       const blobUrl = URL.createObjectURL(blob);

  //       // Create an anchor element
  //       const a = document.createElement("a");
  //       a.href = blobUrl;
  //       a.download = title; // Set the desired filename
  //       document.body.appendChild(a); // Append the anchor to the document
  //       a.click();
  //       document.body.removeChild(a);
  //     } catch (error) {
  //       console.error("Error downloading the file", error);
  //     }
  //   };

  useEffect(() => {
    if (loading) {
      toast.loading("Generating Link", { id: "upload" });
    } else if (isLoading) {
      toast.loading("Uploading File", { id: "upload" });
    } else if (isSuccess) {
      toast.success("Uploaded Successfully", { id: "upload" });
    } else if (isError) {
      toast.error(error?.data?.message, { id: "upload" });
    }
  }, [error, isError, isLoading, isSuccess, loading]);

  return (
    <div>
      <form className="flex justify-end my-5">
        <label
          htmlFor={`${isLoading || loading ? "" : "uploadFiles"}`}
          className="flex items-center gap-1 bg-primary-blue text-primary-white px-4 py-2 rounded-md cursor-pointer"
        >
          {isLoading || loading ? (
            <>
              <svg
                aria-hidden="true"
                role="status"
                className="w-5 h-5 text-white animate-spin"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="#E5E7EB"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentColor"
                />
              </svg>
              Uploading file...
            </>
          ) : (
            <>
              <FiUpload className="text-lg" />
              Upload Notice
            </>
          )}
        </label>
        <input
          name={`Course_Notice_${courseCode}`}
          id="uploadFiles"
          className="hidden"
          type="file"
          onChange={(e) => {
            handleUpload(e.target.files[0], e.target.name);
          }}
        />
      </form>
      <div className="flex flex-col gap-3 mt-5">
        {courseContent?.data[0]?.notice?.map((item, i) => (
          <div
            className="flex justify-between items-center bg-primary-white p-5 rounded-md border border-primary-blue/20"
            key={i}
          >
            <Link target="_blank" to={item.url}>
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

export default TCourseNotice;
