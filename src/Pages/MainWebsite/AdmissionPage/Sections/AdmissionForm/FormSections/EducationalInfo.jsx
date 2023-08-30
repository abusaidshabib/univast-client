import { useDispatch } from "react-redux";
import { admissionFormInput } from "../../../../../../features/application/applicationSlice";

/* eslint-disable react/prop-types */
const EducationalInfo = () => {
    const dispatch = useDispatch()

    return (
      <div className="font-sans text-primary-white">
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
              onChange={(e) =>
                dispatch(
                  admissionFormInput({
                    fieldName: "education.exam",
                    value: e.target.value,
                  })
                )
              }
              className="w-full bg-tertiary-blue  py-5 px-5 text-xl rounded-md"
            >
              <option className="">Select Type...</option>
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
              onBlur={(e) =>
                dispatch(
                  admissionFormInput({
                    fieldName: "education.institution_name",
                    value: e.target.value,
                  })
                )
              }
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
              onChange={(e) =>
                dispatch(
                  admissionFormInput({
                    fieldName: "education.board",
                    value: e.target.value,
                  })
                )
              }
              className="w-full bg-tertiary-blue  py-5 px-5 text-xl rounded-md"
            >
              <option className="">Select Type...</option>
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
              onChange={(e) =>
                dispatch(
                  admissionFormInput({
                    fieldName: "education.group_major",
                    value: e.target.value,
                  })
                )
              }
              className="w-full bg-tertiary-blue  py-5 px-5 text-xl rounded-md"
            >
              <option className="">Select Type...</option>
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
              onBlur={(e) =>
                dispatch(
                  admissionFormInput({
                    fieldName: "education.result",
                    value: e.target.value,
                  })
                )
              }
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
              onBlur={(e) =>
                dispatch(
                  admissionFormInput({
                    fieldName: "education.passing_year",
                    value: e.target.value,
                  })
                )
              }
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
              onChange={(e) =>
                dispatch(
                  admissionFormInput({
                    fieldName: "education.certificates",
                    value: e.target.value,
                  })
                )
              }
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
      </div>
    );
};

export default EducationalInfo;