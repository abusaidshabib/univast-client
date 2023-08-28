import { useState } from "react";
import {
  useGetProgramsByTypeQuery,
  useGetProgramsQuery,
} from "../../../../../../features/programs/programApi";

/* eslint-disable react/prop-types */
const ApplyInfo = ({ register, errors }) => {
    const [selectedProgram, setSelectedProgram] = useState('Bachelor');
  let allprograms = useGetProgramsQuery();
  allprograms = allprograms?.data?.data?.data;
  const programTypes = Array.from(
    new Set(allprograms?.map((item) => item.programType))
  );

  const {data} = useGetProgramsByTypeQuery(selectedProgram)
  console.log(data?.data.data)


  return (
    <div className="font-sans">
      <p className="text-4xl font-semibold text-primary-white pb-5">
        Apply Information
      </p>
      <hr className="pb-5" />

      <div className="grid grid-cols-3 gap-10 pb-10">
        <div>
          <label className="text-primary-white text-2xl leading-loose">
            Applicant Type
            <span className="text-red-500 pl-2">*</span>
          </label>
          <br />
          <select
            className="w-full bg-tertiary-blue text-primary-white py-5 px-5 text-xl rounded-md"
            {...register("applicant_type", { required: false })}
          >
            <option className="text-primary-white">Select Type...</option>
            <option
              className="text-primary-white"
              value="Local student (Bangladeshi)"
            >
              Local student (Bangladeshi)
            </option>
            <option
              className="text-primary-white"
              value="International student"
            >
              International student
            </option>
          </select>{" "}
          <br />
          {errors.applicant_type && (
            <p className="text-red-500 mt-2">This field is required</p>
          )}
        </div>
        <div>
          <label className="text-primary-white text-2xl leading-loose">
            Program Type
            <span className="text-red-500 pl-2">*</span>
          </label>
          <br />
          <select
            value={selectedProgram}
            onChange={(e) => {setSelectedProgram(e.target.value); console.log(selectedProgram)}}
            className="w-full bg-tertiary-blue text-primary-white py-5 px-5
            text-xl rounded-md"
            {...register("program_type", { required: false })}
          >
            <option value="" className="text-primary-white">Select Type...</option>
            {programTypes?.map((p, index) => (
              <option key={index} className="text-primary-white" value={p}>
                {p}
              </option>
            ))}
          </select>{" "}
          <br />
          {errors.program_type && (
            <p className="text-red-500 mt-2">This field is required</p>
          )}
        </div>
        <div>
          <label className="text-primary-white text-2xl leading-loose">
            Last Completed Degree Type
            <span className="text-red-500 pl-2">*</span>
          </label>
          <br />
          <select
            className="w-full bg-tertiary-blue text-primary-white py-5 px-5 text-xl rounded-md"
            {...register("last_completed_degree", { required: false })}
          >
            <option className="text-primary-white">Select Type...</option>
            <option className="text-primary-white" value="HSC/Alim">
              HSC/Alim
            </option>
            <option className="text-primary-white" value="A-Level">
              A-Level
            </option>
            <option className="text-primary-white" value="Diploma holder">
              Diploma holder
            </option>
            <option className="text-primary-white" value="Diploma holder">
              Bachelor
            </option>
          </select>{" "}
          <br />
          {errors.last_completed_degree && (
            <p className="text-red-500 mt-2">This field is required</p>
          )}
        </div>
      </div>

      <p className="text-4xl font-semibold text-primary-white py-5">
        General Information
      </p>
      <hr className="pb-5" />

      {/* General Information---------------------------------------------------------------------------------------------------------------------------------------- */}
      <div className="grid grid-cols-3 gap-10 pb-10">
        <div>
          <label className="text-primary-white text-2xl leading-loose">
            Program
            <span className="text-red-500 pl-2">*</span>
          </label>
          <br />
          <select
            className="w-full bg-tertiary-blue text-primary-white py-5 px-5 text-xl rounded-md"
            {...register("program", { required: false })}
          >
            <option className="text-primary-white">Select Type...</option>

            <option className="text-primary-white" value="B.Sc. in CSE">
              B.Sc. in CSE
            </option>
            <option className="text-primary-white" value="LL.B.">
              LL.B.
            </option>
          </select>{" "}
          <br />
          {errors.program && (
            <p className="text-red-500 mt-2">This field is required</p>
          )}
        </div>
        <div>
          <label className="text-primary-white text-2xl leading-loose">
            Medium
            <span className="text-red-500 pl-2">*</span>
          </label>
          <br />
          <select
            className="w-full bg-tertiary-blue text-primary-white py-5 px-5 text-xl rounded-md"
            {...register("medium", { required: false })}
          >
            <option className="text-primary-white">Select Type...</option>
            <option className="text-primary-white" value="English">
              English
            </option>
            <option className="text-primary-white" value="General">
              General
            </option>
          </select>{" "}
          <br />
          {errors.medium && (
            <p className="text-red-500 mt-2">This field is required</p>
          )}
        </div>
        <div>
          <label className="text-primary-white text-2xl leading-loose">
            Education Shift
            <span className="text-red-500 pl-2">*</span>
          </label>
          <br />
          <select
            className="w-full bg-tertiary-blue text-primary-white py-5 px-5 text-xl rounded-md"
            {...register("education_shift", { required: false })}
          >
            <option className="text-primary-white">Select Type...</option>
            <option className="text-primary-white" value="Day Shift">
              Day Shift
            </option>
            <option className="text-primary-white" value="Night Shift">
              Night Shift
            </option>
          </select>{" "}
          <br />
          {errors.education_shift && (
            <p className="text-red-500 mt-2">This field is required</p>
          )}
        </div>
        <div>
          <label className="text-primary-white text-2xl leading-loose">
            Admission Test Venue
          </label>
          <br />
          <select
            className="w-full bg-tertiary-blue text-primary-white py-5 px-5 text-xl rounded-md"
            {...register("admission_test_venue", { required: false })}
          >
            <option className="text-primary-white">Select Type...</option>
            <option className="text-primary-white" value="Univast Smart City">
              Univast Smart City
            </option>
          </select>{" "}
          <br />
        </div>
      </div>
    </div>
  );
};

export default ApplyInfo;
