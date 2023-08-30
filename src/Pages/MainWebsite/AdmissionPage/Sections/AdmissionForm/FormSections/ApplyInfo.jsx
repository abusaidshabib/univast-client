import { useDispatch, useSelector } from "react-redux";
import { useGetProgramsByTypeQuery, useGetProgramsQuery } from "../../../../../../features/programs/programApi";
import { useState } from "react";
import { setGeneralInfo } from "../../../../../../features/application/applicationSlice";
import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
const ApplyInfo = () => {
  const {
    applicant_type,
    program_type,
    last_complete_degree_type,
    program,
    education_shift,
  } = useSelector((state) => state.application.general);
  
  const [selectedProgramType, setSelectedProgramType] = useState(program_type);
  const [selectedProgram, setSelectedProgram] = useState(program);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  let allprograms = useGetProgramsQuery();
  allprograms = allprograms?.data?.data?.data;
  const programTypes = Array.from(
    new Set(allprograms?.map((item) => item.programType))
  );

  let programs = useGetProgramsByTypeQuery(selectedProgramType);
  programs = programs?.data?.data?.data;


  const handleSubmit =(e) =>{
    e.preventDefault()
    const form = e.target;
    console.log(form)

    const applicant_type = form.applicant_type.value;
    const program_type = form.program_type.value;
    const last_complete_degree_type = form.last_complete_degree_type.value;
    const program = form.program.value;
    const education_shift = form.education_shift.value;

    const data = {
      applicant_type,
      program_type,
      last_complete_degree_type,
      program,
      education_shift
    };

    dispatch(setGeneralInfo(data));
    navigate("/admission/online/personal");
  }

  return (
    <form onSubmit={handleSubmit} className="font-sans">
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
            name="applicant_type"
            id="applicant_type"
            required
            defaultValue={applicant_type}
            className="w-full bg-tertiary-blue text-primary-white py-5 px-5 text-xl rounded-md"
          >
            <option value="" className="text-primary-white">Select Type...</option>
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
          </select>
          <br />
          {/* {errors.applicant_type && (
            <p className="text-red-500 mt-2">This field is required</p>
          )} */}
        </div>
        <div>
          <label className="text-primary-white text-2xl leading-loose">
            Program Type
            <span className="text-red-500 pl-2">*</span>
          </label>
          <br />
          <select
            name="program_type"
            id="program_type"
            required
            defaultValue={program_type}
            onChange={(e) => setSelectedProgramType(e.target.value)}
            className="w-full bg-tertiary-blue text-primary-white py-5 px-5
            text-xl rounded-md"
          >
            <option value="" className="text-primary-white">Select Type...</option>
            {programTypes?.map((p, index) => (
              <option key={index} className="text-primary-white" value={p}>
                {p}
              </option>
            ))}
          </select>
          <br />
          {/* {errors.program_type && (
            <p className="text-red-500 mt-2">This field is required</p>
          )} */}
        </div>
        <div>
          <label className="text-primary-white text-2xl leading-loose">
            Last Completed Degree Type
            <span className="text-red-500 pl-2">*</span>
          </label>
          <br />
          <select
            name="last_complete_degree_type"
            id="last_complete_degree_type"
            required
            defaultValue={last_complete_degree_type}
            className="w-full bg-tertiary-blue text-primary-white py-5 px-5 text-xl rounded-md"
          >
            <option value="" className="text-primary-white">Select Type...</option>
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
          {/* {errors.last_completed_degree && (
            <p className="text-red-500 mt-2">This field is required</p>
          )} */}
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
            name="program"
            id="program"
            required
            defaultValue={program}
            onChange={(e) => setSelectedProgram(e.target.value)}
            className="w-full bg-tertiary-blue text-primary-white py-5 px-5 text-xl rounded-md"
          >
            <option value="" className="text-primary-white">Select Type...</option>
            {programs?.map((program) => (
              <option
                key={program._id}
                className="text-primary-white"
                value={program.programName}
              >
                {program.programName}
              </option>
            ))}
          </select>{" "}
          <br />
          {/* {errors.program && (
            <p className="text-red-500 mt-2">This field is required</p>
          )} */}
        </div>
        <div>
          <label className="text-primary-white text-2xl leading-loose">
            Education Shift
            <span className="text-red-500 pl-2">*</span>
          </label>
          <br />
          <select
            name="education_shift"
            id="education_shift"
            required
            defaultValue={education_shift}
            className="w-full bg-tertiary-blue text-primary-white py-5 px-5 text-xl rounded-md"
          >
            <option value="" className="text-primary-white">Select Type...</option>
            {programs
              ?.find((program) => program.programName === selectedProgram)
              ?.shifts?.map((shift, index) => (
                <option
                  key={index}
                  className="text-primary-white"
                  value={shift}
                >
                  {shift}
                </option>
              ))}
          </select>{" "}
          <br />
          {/* {errors.education_shift && (
            <p className="text-red-500 mt-2">This field is required</p>
          )} */}
        </div>
      </div>
      <div className="py-10 flex gap-8 items-center">
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

export default ApplyInfo;
