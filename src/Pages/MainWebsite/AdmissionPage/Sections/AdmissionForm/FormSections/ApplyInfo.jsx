/* eslint-disable react/prop-types */
const ApplyInfo = ({ register, errors }) => {

    return (
        <div>
        <p className="font-serif text-4xl text-p-white pb-5">
          Apply Information
        </p>
        <hr className="pb-5" />

        <div className="grid grid-cols-3 gap-10 pb-10">
          <div>
            <label className="text-p-white font-serif text-2xl leading-loose">
              Applicant Type
            </label>
            <br />
            <select
              className="w-full bg-primary-800/50 text-p-white py-5 px-5 text-xl rounded-md"
              {...register("applicant_type", { required: false })}
            >
              <option className="text-p-white">Select Type...</option>
              <option
                className="text-p-white"
                value="Local student (Bangladeshi)"
              >
                Local student (Bangladeshi)
              </option>
              <option className="text-p-white" value="International student">
                International student
              </option>
            </select>{" "}
            <br />
          </div>
          <div>
            <label className="text-p-white font-serif text-2xl leading-loose">
              Program Type
            </label>
            <br />
            <select
              className="w-full bg-primary-800/50 text-p-white py-5 px-5 text-xl rounded-md"
              {...register("program_type", { required: false })}
            >
              <option className="text-p-white">Select Type...</option>
              <option className="text-p-white" value="Bachelor Program">
                Bachelor Program
              </option>
              <option className="text-p-white" value="Masters">
                Masters
              </option>
            </select>{" "}
            <br />
          </div>
          <div>
            <label className="text-p-white font-serif text-2xl leading-loose">
              Last Completed Degree Type
            </label>
            <br />
            <select
              className="w-full bg-primary-800/50 text-p-white py-5 px-5 text-xl rounded-md"
              {...register("last_completed_degree", { required: false })}
            >
              <option className="text-p-white">Select Type...</option>
              <option className="text-p-white" value="HSC/Alim">
                HSC/Alim
              </option>
              <option className="text-p-white" value="A-Level">
                A-Level
              </option>
              <option className="text-p-white" value="Diploma holder">
                Diploma holder
              </option>
            </select>{" "}
            <br />
          </div>
        </div>

        <p className="font-serif text-4xl text-p-white py-5">
          General Information
        </p>
        <hr className="pb-5" />

        {/* General Information---------------------------------------------------------------------------------------------------------------------------------------- */}
        <div className="grid grid-cols-3 gap-10 pb-10">
          <div>
            <label className="text-p-white font-serif text-2xl leading-loose">
              Program
            </label>
            <br />
            <select
              className="w-full bg-primary-800/50 text-p-white py-5 px-5 text-xl rounded-md"
              {...register("program", { required: false })}
            >
              <option className="text-p-white">Select Type...</option>
              <option className="text-p-white" value="B.Sc. in CSE">
                B.Sc. in CSE
              </option>
              <option className="text-p-white" value="LL.B.">
                LL.B.
              </option>
            </select>{" "}
            <br />
          </div>
          <div>
            <label className="text-p-white font-serif text-2xl leading-loose">
              Medium
            </label>
            <br />
            <select
              className="w-full bg-primary-800/50 text-p-white py-5 px-5 text-xl rounded-md"
              {...register("medium", { required: false })}
            >
              <option className="text-p-white">Select Type...</option>
              <option className="text-p-white" value="English">
                English
              </option>
              <option className="text-p-white" value="General">
                General
              </option>
            </select>{" "}
            <br />
          </div>
          <div>
            <label className="text-p-white font-serif text-2xl leading-loose">
              Education Shift
            </label>
            <br />
            <select
              className="w-full bg-primary-800/50 text-p-white py-5 px-5 text-xl rounded-md"
              {...register("education_shift", { required: false })}
            >
              <option className="text-p-white">Select Type...</option>
              <option className="text-p-white" value="Day Shift">
                Day Shift
              </option>
              <option className="text-p-white" value="Night Shift">
                Night Shift
              </option>
            </select>{" "}
            <br />
          </div>
          <div>
            <label className="text-p-white font-serif text-2xl leading-loose">
              Admission Test Venue
            </label>
            <br />
            <select
              className="w-full bg-primary-800/50 text-p-white py-5 px-5 text-xl rounded-md"
              {...register("admission_test_venue", { required: false })}
            >
              <option className="text-p-white">Select Type...</option>
              <option className="text-p-white" value="Univast Smart City">
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