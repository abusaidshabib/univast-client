import { useDispatch, useSelector } from "react-redux";
import { setEducationInfo } from "../../../../../../features/application/applicationSlice";
import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
const EducationalInfo = () => {
  const { education } = useSelector((state) => state.application);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
      e.preventDefault();
      const form = e.target;
      const data = {}
      dispatch(setEducationInfo(data))
      navigate("/admission/online/others");
    }

    return (
      <form onSubmit={handleSubmit} className="font-sans text-primary-white">
        <p className="text-4xl font-semibold  pb-5">Academic Info</p>
        <hr className="pb-5" />

        <div className="grid grid-cols-5 gap-10 pb-10">
          <div>
            <label className=" text-2xl leading-loose">
              Exam
              <span className="text-red-500 pl-2">*</span>
            </label>
            <br />
            <select
              name="exam"
              id="exam"
              required
              // defaultValue={exam}
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
              name="institution_name"
              id="institution_name"
              required
              // defaultValue={institution_name}
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
              name="board"
              id="board"
              required
              // defaultValue={board}
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
              name="group_major"
              id="group_major"
              required
              // defaultValue={group_major}
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
              name="result"
              id="result"
              required
              // defaultValue={result}
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
              name="passing_year"
              id="passing_year"
              required
              // defaultValue={passing_year}
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
              name="certificates"
              id="certificates"
              required
              // defaultValue={certificates}
              className="w-full bg-tertiary-blue  py-5 px-5 text-xl rounded-md"
              type="file"
              accept="application/pdf"
            />
            <br />
            {/* {errors.certificates && (
              <p className="text-red-500 mt-2">This field is required</p>
            )} */}
          </div>
        </div>

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