import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";
import { uploadFileToFirebase } from "../../../../firebase/firebase.config";
import { manageEducationCount, setEducationInfo } from "../../../../features/application/lecturerApplicationSlice";

/* eslint-disable react/prop-types */
const LecturerEducationalInfo = () => {
  const { education, educationSectionCount } = useSelector(
    (state) => state.lecturerApplication
  );

  const [isLoading, setLoading] = useState(false);

  const [certificateURLs, setCertificateURLs] = useState()

  const dispatch = useDispatch();
  const navigate = useNavigate();


    const handleUpload = (selectedFile, propertyName) => {
      setLoading(true)
      uploadFileToFirebase(selectedFile)
        .then(async (downloadUrls) => {
          console.log(downloadUrls);
          const urls = {...certificateURLs, [propertyName] : downloadUrls}
            await setCertificateURLs(urls);
            console.log(urls)
            console.log(certificateURLs);
            setLoading(false)
        })
        .catch((err) => {
          console.log(err.message);
        });
    };


  const removeSection = (indexToRemove) => {
    if (
      educationSectionCount > 1 &&
      indexToRemove >= 0 &&
      indexToRemove < educationSectionCount
    ) {
      dispatch(manageEducationCount("REMOVE"));
    }
  };


  const handleSubmit = (e) => {
    e.preventDefault();


    const updatedEducationData = [];
    for (let i = 0; i < educationSectionCount; i++) {
      const sectionData = {
        exam: e.target[`exam_${i}`].value,
        institution_name: e.target[`institution_name_${i}`].value,
        board: e.target[`board_${i}`].value,
        group_major: e.target[`group_major_${i}`].value,
        result: e.target[`result_${i}`].value,
        passing_year: e.target[`passing_year_${i}`].value,
        certificates: certificateURLs[`certificates_${i}`],
      };
      updatedEducationData.push(sectionData);
    }


    dispatch(setEducationInfo(updatedEducationData));
    navigate("/applyforlecturer/online/experiences");
  };

  return (
    <form onSubmit={handleSubmit} className="font-sans text-primary-white">
      <p className="text-4xl font-semibold  pb-5">Academic Info</p>
      <hr className="pb-5" />
      {Array.from({ length: educationSectionCount }, (_, index) => (
        <div key={index} className="grid grid-cols-5 gap-10 pb-10">
          {index > 0 && <hr className="col-span-5" />}
          <div>
            <label className=" text-2xl leading-loose">
              Exam
              <span className="text-red-500 pl-2">*</span>
            </label>
            <br />
            <select
              name={`exam_${index}`}
              id={`exam_${index}`}
              required
              defaultValue={education[index]?.exam}
              className="w-full bg-tertiary-blue  py-5 px-5 text-xl rounded-md"
            >
              <option value="" className="">
                Select Type...
              </option>
              <option className="" value="SSC">
                SSC
              </option>
              <option className="" value="HSC">
                HSC
              </option>

              <option className="" value="O-LEVEL">
                O-LEVEL
              </option>

              <option className="" value="A-LEVEL">
                A-LEVEL
              </option>

              <option className="" value="DIPLOMA">
                Diploma
              </option>

              <option className="" value="BACHELOR">
                Bachelor
              </option>

              <option className="" value="MASTERS">
                Masters
              </option>

              <option className="" value="OTHERS">
                Others
              </option>
            </select>{" "}
            <br />
            {/* {errors.exam && (
              <p className="text-red-500 mt-2">This field is required</p>
            )} */}
          </div>
          <div>
            <label className=" text-2xl leading-loose">
              Institution Name
              <span className="text-red-500 pl-2">*</span>
            </label>
            <br />
            <input
              name={`institution_name_${index}`}
              id={`institution_name_${index}`}
              required
              defaultValue={education[index]?.institution_name}
              className="w-full bg-tertiary-blue  py-5 px-5 text-xl rounded-md"
              placeholder="Institution Name"
              type="text"
            />
            <br />
            {/* {errors.institution_name && (
              <p className="text-red-500 mt-2">This field is required</p>
            )} */}
          </div>

          <div>
            <label className=" text-2xl leading-loose">
              Board
              <span className="text-red-500 pl-2">*</span>
            </label>
            <br />
            <select
              name={`board_${index}`}
              id={`board_${index}`}
              required
              defaultValue={education[index]?.board}
              className="w-full bg-tertiary-blue  py-5 px-5 text-xl rounded-md"
            >
              <option value="" className="">
                Select Type...
              </option>
              <option className="" value="dhaka">
                Dhaka
              </option>
              <option className="" value="rajshahi">
                Rajshahi
              </option>

              <option className="" value="chittagong">
                Chittagong
              </option>

              <option className="" value="barishal">
                Barishal
              </option>

              <option className="" value="dinajpur">
                Dinajpur
              </option>

              <option className="" value="jessore">
                Jessore
              </option>

              <option className="" value="mymensingh">
                Mymensingh
              </option>

              <option className="" value="sylhet">
                Sylhet
              </option>

              <option className="" value="comilla">
                Comilla
              </option>

              <option className="" value="madrasah">
                Madrasah
              </option>

              <option className="" value="technical">
                Technical
              </option>
            </select>{" "}
            <br />
            {/* {errors.board && (
              <p className="text-red-500 mt-2">This field is required</p>
            )} */}
          </div>

          <div>
            <label className=" text-2xl leading-loose">
              Group / Major
              <span className="text-red-500 pl-2">*</span>
            </label>
            <br />
            <select
              name={`group_major_${index}`}
              id={`group_major_${index}`}
              required
              defaultValue={education[index]?.group_major}
              className="w-full bg-tertiary-blue  py-5 px-5 text-xl rounded-md"
            >
              <option value="" className="">
                Select Type...
              </option>
              <option className="" value="science">
                Science
              </option>
              <option className="" value="business_studies">
                Business studies
              </option>

              <option className="" value="humanities">
                Humanities
              </option>
            </select>{" "}
            <br />
            {/* {errors.group_major && (
              <p className="text-red-500 mt-2">This field is required</p>
            )} */}
          </div>

          <div>
            <label className=" text-2xl leading-loose">
              GPA / CGPA
              <span className="text-red-500 pl-2">*</span>
            </label>
            <br />
            <input
              name={`result_${index}`}
              id={`result_${index}`}
              required
              defaultValue={education[index]?.result}
              className="w-full bg-tertiary-blue  py-5 px-5 text-xl rounded-md"
              placeholder="GPA / CGPA"
              type="text"
            />
            <br />
            {/* {errors.result && (
              <p className="text-red-500 mt-2">This field is required</p>
            )} */}
          </div>

          <div>
            <label className=" text-2xl leading-loose">
              Passing Year
              <span className="text-red-500 pl-2">*</span>
            </label>
            <br />
            <input
              name={`passing_year_${index}`}
              id={`passing_year_${index}`}
              required
              defaultValue={education[index]?.passing_year}
              className="w-full bg-tertiary-blue  py-5 px-5 text-xl rounded-md"
              placeholder="Year"
              type="text"
            />
            <br />
            {/* {errors.passing_year && (
              <p className="text-red-500 mt-2">This field is required</p>
            )} */}
          </div>

          <div className="col-span-4">
            <label className=" text-2xl leading-loose">
              Certificate & All Transcripts / Marksheets in a combined PDF
              Format
              <span className="text-red-500 pl-2">*</span>
            </label>
            <br />
            <input
              name={`certificates_${index}`}
              id={`certificates_${index}`}
              required
              onChange={(e) => {
                handleUpload(e.target.files[0], e.target.name);
              }}
              // defaultValue={education[index]?.certificates}
              className="w-full bg-tertiary-blue  py-5 px-5 text-xl rounded-md"
              type="file"
              accept="application/pdf"
            />
            <br />
            {/* {errors.certificates && (
              <p className="text-red-500 mt-2">This field is required</p>
            )} */}
          </div>

          {index > 0 && (
            <div>
              <button
                className="bg-red-600 flex items-center gap-2 py-1 px-5 rounded-md text-md text-primary-white border-b-6"
                type="button"
                onClick={() => removeSection(index)}
              >
                Remove
              </button>
            </div>
          )}
        </div>
      ))}
      <button
        onClick={() => dispatch(manageEducationCount("ADD"))}
        className="bg-tertiary-blue flex items-center gap-2 py-3 px-8 rounded-md text-lg text-primary-white border-b-6"
        type="button"
      >
        <AiOutlinePlus className="text-xl" />
        Add more
      </button>

      <div className="py-10 flex gap-8 items-center">
        <button
          className="bg-tertiary-blue py-3 px-10 rounded-md text-lg text-primary-white border-b-6"
          type="button"
          onClick={() => navigate("/applyforlecturer/online/personal")}
        >
          Prev
        </button>
        <button
          className="bg-tertiary-blue flex items-center gap-2 py-3 px-10 rounded-md text-lg text-primary-white border-b-6"
          type="submit"
        >
          {isLoading ? (
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
            <>Next</>
          )}
        </button>
      </div>
    </form>
  );
};

export default LecturerEducationalInfo;
