import { useDispatch, useSelector } from "react-redux";
import { manageEducationCount, setEducationInfo } from "../../../../../../features/application/applicationSlice";
import { useNavigate } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";

/* eslint-disable react/prop-types */
const EducationalInfo = () => {
  const { education, educationSectionCount } = useSelector(
    (state) => state.application
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();


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
        certificates: e.target[`certificates_${i}`].value,
      };
      updatedEducationData.push(sectionData);
    }


    dispatch(setEducationInfo(updatedEducationData));
    navigate("/admission/online/others");
  };

  return (
    <form onSubmit={handleSubmit} className="font-sans text-primary-white">
      <p className="text-4xl font-semibold  pb-5">Academic Info</p>
      <hr className="pb-5" />
      {Array.from({ length: educationSectionCount }, (_, index) => (
        <div key={index} className="grid grid-cols-5 gap-10 pb-10">
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
              <option className="" value="ssc">
                SSC
              </option>
              <option className="" value="hsc">
                HSC
              </option>

              <option className="" value="hsc">
                O-LEVEL
              </option>

              <option className="" value="hsc">
                A-LEVEL
              </option>

              <option className="" value="hsc">
                Diploma
              </option>

              <option className="" value="hsc">
                Bachelor
              </option>

              <option className="" value="hsc">
                Masters
              </option>

              <option className="" value="hsc">
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
            <button
              className="text-red-500"
              type="button"
              onClick={() => removeSection(index)}
            >
              Remove
            </button>
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
          onClick={() => navigate("/admission/online/family")}
        >
          Prev
        </button>
        <button
          className="bg-tertiary-blue py-3 px-10 rounded-md text-lg text-primary-white border-b-6"
          type="submit"
        >
          Next
        </button>
      </div>
    </form>
  );
};

export default EducationalInfo;
