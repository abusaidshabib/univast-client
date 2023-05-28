import { useForm } from "react-hook-form";

const AdmissionForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="px-20 py-5 bg-background-500">
      <div className="py-10 grid grid-cols-5 gap-5">
        <button className="bg-primary-500 py-5 rounded-md text-2xl text-p-white">
          General
        </button>
        <button className="bg-primary-500 py-5 rounded-md text-2xl text-p-white">
          Personal
        </button>
        <button className="bg-primary-500 py-5 rounded-md text-2xl text-p-white">
          Family
        </button>
        <button className="bg-primary-500 py-5 rounded-md text-2xl text-p-white">
          Educational
        </button>
        <button className="bg-primary-500 py-5 rounded-md text-2xl text-p-white">
          Others
        </button>
      </div>
      <form
        className="pb-10"
        onSubmit={handleSubmit((data) => console.log(data))}
      >
        <p className="font-serif text-4xl text-p-white pb-5">
          Apply Information
        </p>
        <hr className="pb-5" />

        {/* Apply information ---------------------------------------------------------------------------------------------------------------------------------------- */}
        <div className="grid grid-cols-3 gap-10 pb-10">
          <div>
            <label className="text-p-white font-serif text-2xl leading-loose">
              Applicant Type
            </label>
            <br />
            <select
              className="w-full bg-primary-800/50 text-p-white py-5 px-5 text-xl rounded-md"
              {...register("applicant-type", { required: true })}
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
              {...register("program-type", { required: true })}
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
              Last Complete Degree Type
            </label>
            <br />
            <select
              className="w-full bg-primary-800/50 text-p-white py-5 px-5 text-xl rounded-md"
              {...register("Last-complete-degree-type", { required: true })}
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
              {...register("program", { required: true })}
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
              {...register("medium", { required: true })}
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
              {...register("education-shift", { required: true })}
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
              {...register("admission-test-venue", { required: true })}
            >
              <option className="text-p-white">Select Type...</option>
              <option className="text-p-white" value="Univast Smart City">
                Univast Smart City
              </option>
            </select>{" "}
            <br />
          </div>
        </div>

        {/* Application */}
        <p className="font-serif text-4xl text-p-white py-5">Applicant</p>
        <hr className="pb-5" />
        <div className="grid grid-cols-3 gap-10 pb-10">
          <div>
            <label className="text-p-white font-serif text-2xl leading-loose">
              First Name
            </label>
            <br />
            <input
              className="w-full bg-primary-800/50 text-p-white py-5 px-5 text-xl rounded-md"
              placeholder="Enter Your first-Name"
              type="text"
              {...register("firstname", { required: true })}
            />
            <br />
          </div>
          <div>
            <label className="text-p-white font-serif text-2xl leading-loose">
              Last Name
            </label>
            <br />
            <input
              className="w-full bg-primary-800/50 text-p-white py-5 px-5 text-xl rounded-md"
              placeholder="Enter Your last-Name"
              type="text"
              {...register("lastName", { required: true })}
            />
            <br />
          </div>
          <div>
            <label className="text-p-white font-serif text-2xl leading-loose">
              Gender
            </label>
            <br />
            <input
              className="w-full bg-primary-800/50 text-p-white py-5 px-5 text-xl rounded-md"
              placeholder="Enter Your Gender"
              type="text"
              {...register("gender", { required: true })}
            />
            <br />
          </div>
          <div>
            <label className="text-p-white font-serif text-2xl leading-loose">
              Date of Birth
            </label>
            <br />
            <input
              className="w-full bg-primary-800/50 text-p-white py-5 px-5 text-xl rounded-md"
              placeholder="Enter Your Birth-Date"
              type="date"
              {...register("birth-date", { required: true })}
            />
            <br />
          </div>
          <div>
            <label className="text-p-white font-serif text-2xl leading-loose">
              Religion
            </label>
            <br />
            <select
              className="w-full bg-primary-800/50 text-p-white py-5 px-5 text-xl rounded-md"
              {...register("religion", { required: true })}
            >
              <option className="text-p-white">Select Type...</option>
              <option className="text-p-white" value="Islam">
                Islam
              </option>
              <option className="text-p-white" value="Hinduism">
                Hinduism
              </option>
              <option className="text-p-white" value="Christianity">
                Christianity
              </option>
              <option className="text-p-white" value="Buddhism">
                Buddhism
              </option>
            </select>{" "}
            <br />
          </div>
          <div>
            <label className="text-p-white font-serif text-2xl leading-loose">
              Marital Status
            </label>
            <br />
            <select
              className="w-full bg-primary-800/50 text-p-white py-5 px-5 text-xl rounded-md"
              {...register("religion", { required: true })}
            >
              <option className="text-p-white">Select Type...</option>
              <option className="text-p-white" value="Single">
                Single
              </option>
              <option className="text-p-white" value="Married">
                Married
              </option>
              <option className="text-p-white" value="Divorced">
                Divorced
              </option>
              <option className="text-p-white" value="Widowed">
                Widowed
              </option>
            </select>{" "}
            <br />
          </div>
          <div>
            <label className="text-p-white font-serif text-2xl leading-loose">
              Blood Group
            </label>
            <br />
            <select
              className="w-full bg-primary-800/50 text-p-white py-5 px-5 text-xl rounded-md"
              {...register("religion", { required: true })}
            >
              <option className="text-p-white">Select Type...</option>
              <option className="text-p-white" value="A+ve">
                A+ve
              </option>
              <option className="text-p-white" value="B+ve">
                B+ve
              </option>
            </select>{" "}
            <br />
          </div>
          <div>
            <label className="text-p-white font-serif text-2xl leading-loose">
              Email
            </label>
            <br />
            <input
              className="w-full bg-primary-800/50 text-p-white py-5 px-5 text-xl rounded-md"
              placeholder="Enter Your Email"
              type="email"
              {...register("email", { required: true })}
            />
            <br />
          </div>
          <div>
            <label className="text-p-white font-serif text-2xl leading-loose">
              Mobile Number
            </label>
            <br />
            <input
              className="w-full bg-primary-800/50 text-p-white py-5 px-5 text-xl rounded-md"
              placeholder="Enter Mobile Number"
              type="tel"
              {...register("mobile", { required: true })}
            />
            <br />
          </div>
          <div>
            <label className="text-p-white font-serif text-2xl leading-loose">
              National ID / Birth Certificate No.
            </label>
            <br />
            <input
              className="w-full bg-primary-800/50 text-p-white py-5 px-5 text-xl rounded-md"
              placeholder="Enter National Id /Birth"
              type="number"
              {...register("nid-Birth-certi", { required: true })}
            />
            <br />
          </div>
          <div>
            <label className="text-p-white font-serif text-2xl leading-loose">
              Passport No.
            </label>
            <br />
            <input
              className="w-full bg-primary-800/50 text-p-white py-5 px-5 text-xl rounded-md"
              placeholder="Enter Your passport Number"
              type="number"
              {...register("passport")}
            />
            <br />
          </div>
          <div>
            <label className="text-p-white font-serif text-2xl leading-loose">
              Nationality
            </label>
            <br />
            <input
              className="w-full bg-primary-800/50 text-p-white py-5 px-5 text-xl rounded-md"
              placeholder="Enter Your Nationality"
              type="text"
              {...register("nationality", { required: true })}
            />
            <br />
          </div>
          <div>
            <label className="text-p-white font-serif text-2xl leading-loose">
              Country
            </label>
            <br />
            <input
              className="w-full bg-primary-800/50 text-p-white py-5 px-5 text-xl rounded-md"
              placeholder="Enter Your country"
              type="text"
              {...register("country", { required: true })}
            />
            <br />
          </div>
          <div>
            <label className="text-p-white font-serif text-2xl leading-loose">
              Social Media Id
            </label>
            <br />
            <input
              className="w-full bg-primary-800/50 text-p-white py-5 px-5 text-xl rounded-md"
              placeholder="Enter Your Social media"
              type="url"
              {...register("social-media", { required: true })}
            />
            <br />
          </div>
          <div>
            <label className="text-p-white font-serif text-2xl leading-loose">
              Enter Your Image
            </label>
            <br />
            <input
              className="w-full bg-primary-800/50 text-p-white py-5 px-5 text-xl rounded-md"
              type="file"
              accept="image/*"
              {...register("image", { required: true })}
            />
            <br />
          </div>
          <div>
            <label className="text-p-white font-serif text-2xl leading-loose">
              Enter Your Signature
            </label>
            <br />
            <input
              className="w-full bg-primary-800/50 text-p-white py-5 px-5 text-xl rounded-md"
              type="file"
              accept="image/*"
              {...register("signature", { required: true })}
            />
            <br />
          </div>
        </div>

        {/* Address */}
        <p className="font-serif text-4xl text-p-white py-5">Address</p>
        <hr className="pb-5" />
        <div className="grid grid-cols-2 gap-10 pb-10">
          <div>
            <p className="font-serif text-2xl text-p-white py-5">
              Present address
            </p>
            <div>
              <label className="text-p-white font-serif text-2xl leading-loose">
                Country
              </label>
              <br />
              <select
                className="w-full bg-primary-800/50 text-p-white py-5 px-5 text-xl rounded-md"
                {...register("p-Country", { required: true })}
              >
                <option className="text-p-white">Select Type...</option>
                <option className="text-p-white" value="Bangladesh">
                  Bangladesh
                </option>
                <option className="text-p-white" value="Indian">
                  Indian
                </option>
                <option className="text-p-white" value="Others">
                  Others
                </option>
              </select>{" "}
              <br />
            </div>
            <div>
              <label className="text-p-white font-serif text-2xl leading-loose">
                State/Division
              </label>
              <br />
              <input
                className="w-full bg-primary-800/50 text-p-white py-5 px-5 text-xl rounded-md"
                placeholder="Enter Your State/Division"
                type="text"
                {...register("p-state-division", { required: true })}
              />
              <br />
            </div>
            <div>
              <label className="text-p-white font-serif text-2xl leading-loose">
                Police Station/Thana
              </label>
              <br />
              <input
                className="w-full bg-primary-800/50 text-p-white py-5 px-5 text-xl rounded-md"
                placeholder="Enter Your Police Station/Thana"
                type="text"
                {...register("p-thana", { required: true })}
              />
              <br />
            </div>
            <div>
              <label className="text-p-white font-serif text-2xl leading-loose">
                City
              </label>
              <br />
              <input
                className="w-full bg-primary-800/50 text-p-white py-5 px-5 text-xl rounded-md"
                placeholder="Enter Your City"
                type="text"
                {...register("p-city", { required: true })}
              />
              <br />
            </div>
            <div>
              <label className="text-p-white font-serif text-2xl leading-loose">
                Zip Code/Post Code/Post Office Name
              </label>
              <br />
              <input
                className="w-full bg-primary-800/50 text-p-white py-5 px-5 text-xl rounded-md"
                placeholder="Enter Your Zip Code"
                type="number"
                {...register("p-zip-code", { required: true })}
              />
              <br />
            </div>
            <div>
              <label className="text-p-white font-serif text-2xl leading-loose">
                Flat/Apt/Street/House No./Area/Village
              </label>
              <br />
              <input
                className="w-full bg-primary-800/50 text-p-white py-5 px-5 text-xl rounded-md"
                placeholder="Street1"
                type="text"
                {...register("p-street1", { required: true })}
              />
              <br />
              <br />
              <input
                className="w-full bg-primary-800/50 text-p-white py-5 px-5 text-xl rounded-md"
                placeholder="Street2"
                type="text"
                {...register("p-street2", { required: true })}
              />
              <br />
            </div>
          </div>
          <div>
            <div>
              <p className="font-serif text-2xl text-p-white py-5">
                Permanent address
              </p>
              <div>
                <label className="text-p-white font-serif text-2xl leading-loose">
                  Country
                </label>
                <br />
                <select
                  className="w-full bg-primary-800/50 text-p-white py-5 px-5 text-xl rounded-md"
                  {...register("country", { required: true })}
                >
                  <option className="text-p-white">Select Type...</option>
                  <option className="text-p-white" value="Bangladesh">
                    Bangladesh
                  </option>
                  <option className="text-p-white" value="Indian">
                    Indian
                  </option>
                  <option className="text-p-white" value="Others">
                    Others
                  </option>
                </select>{" "}
                <br />
              </div>
              <div>
                <label className="text-p-white font-serif text-2xl leading-loose">
                  State/Division
                </label>
                <br />
                <input
                  className="w-full bg-primary-800/50 text-p-white py-5 px-5 text-xl rounded-md"
                  placeholder="Enter Your State/Division"
                  type="text"
                  {...register("state-division", { required: true })}
                />
                <br />
              </div>
              <div>
                <label className="text-p-white font-serif text-2xl leading-loose">
                  Police Station/Thana
                </label>
                <br />
                <input
                  className="w-full bg-primary-800/50 text-p-white py-5 px-5 text-xl rounded-md"
                  placeholder="Enter Your Police Station/Thana"
                  type="text"
                  {...register("thana", { required: true })}
                />
                <br />
              </div>
              <div>
                <label className="text-p-white font-serif text-2xl leading-loose">
                  City
                </label>
                <br />
                <input
                  className="w-full bg-primary-800/50 text-p-white py-5 px-5 text-xl rounded-md"
                  placeholder="Enter Your City"
                  type="text"
                  {...register("city", { required: true })}
                />
                <br />
              </div>
              <div>
                <label className="text-p-white font-serif text-2xl leading-loose">
                  Zip Code/Post Code/Post Office Name
                </label>
                <br />
                <input
                  className="w-full bg-primary-800/50 text-p-white py-5 px-5 text-xl rounded-md"
                  placeholder="Enter Your Zip Code"
                  type="number"
                  {...register("zip-code", { required: true })}
                />
                <br />
              </div>
              <div>
                <label className="text-p-white font-serif text-2xl leading-loose">
                  Flat/Apt/Street/House No./Area/Village
                </label>
                <br />
                <input
                  className="w-full bg-primary-800/50 text-p-white py-5 px-5 text-xl rounded-md"
                  placeholder="Street1"
                  type="text"
                  {...register("street1", { required: true })}
                />
                <br />
                <br />
                <input
                  className="w-full bg-primary-800/50 text-p-white py-5 px-5 text-xl rounded-md"
                  placeholder="Street2"
                  type="text"
                  {...register("street2", { required: true })}
                />
                <br />
              </div>
            </div>
          </div>
        </div>

        {/* Address */}
        <p className="font-serif text-4xl text-p-white py-5">
          Family Information
        </p>
        <hr className="pb-5" />
        <div className="grid grid-cols-2 gap-10 pb-10">
          <div>
            <p className="font-serif text-2xl text-p-white py-5">
              Father&apos;s Information
            </p>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-p-white font-serif text-2xl leading-loose">
                  Father name
                </label>
                <br />
                <input
                  className="w-full bg-primary-800/50 text-p-white py-5 px-5 text-xl rounded-md"
                  placeholder="Father Name"
                  type="text"
                  {...register("father-name", { required: true })}
                />
                <br />
              </div>
              <div>
                <label className="text-p-white font-serif text-2xl leading-loose">
                  Mobile No.
                </label>
                <br />
                <input
                  className="w-full bg-primary-800/50 text-p-white py-5 px-5 text-xl rounded-md"
                  placeholder="Father's Mobile No. Ex. +8801123456789"
                  type="text"
                  {...register("father-mobile", { required: true })}
                />
                <br />
              </div>
              <div>
                <label className="text-p-white font-serif text-2xl leading-loose">
                  Email
                </label>
                <br />
                <input
                  className="w-full bg-primary-800/50 text-p-white py-5 px-5 text-xl rounded-md"
                  placeholder="Father's email"
                  type="email"
                  {...register("father-email", { required: true })}
                />
                <br />
              </div>
              <div>
                <label className="text-p-white font-serif text-2xl leading-loose">
                  National ID
                </label>
                <br />
                <input
                  className="w-full bg-primary-800/50 text-p-white py-5 px-5 text-xl rounded-md"
                  placeholder="Father's NID"
                  type="text"
                  {...register("father-nid", { required: true })}
                />
                <br />
              </div>
              <div>
                <label className="text-p-white font-serif text-2xl leading-loose">
                  Passport No
                </label>
                <br />
                <input
                  className="w-full bg-primary-800/50 text-p-white py-5 px-5 text-xl rounded-md"
                  placeholder="Father's Passport No"
                  type="text"
                  {...register("father-passport", { required: true })}
                />
                <br />
              </div>
              <div>
                <label className="text-p-white font-serif text-2xl leading-loose">
                  Date of Birth
                </label>
                <br />
                <input
                  className="w-full bg-primary-800/50 text-p-white py-5 px-5 text-xl rounded-md"
                  placeholder=""
                  type="date"
                  {...register("father-dob", { required: true })}
                />
                <br />
              </div>
              <div>
                <label className="text-p-white font-serif text-2xl leading-loose">
                  Age
                </label>
                <br />
                <input
                  className="w-full bg-primary-800/50 text-p-white py-5 px-5 text-xl rounded-md"
                  placeholder="Father's Age in Years"
                  type="text"
                  {...register("father-age", { required: true })}
                />
                <br />
              </div>
              <div>
                <label className="text-p-white font-serif text-2xl leading-loose">
                  Occupation
                </label>
                <br />
                <input
                  className="w-full bg-primary-800/50 text-p-white py-5 px-5 text-xl rounded-md"
                  placeholder="Father's Occupation"
                  type="text"
                  {...register("father-occupation", { required: true })}
                />
                <br />
              </div>
              <div>
                <label className="text-p-white font-serif text-2xl leading-loose">
                  Name of Company
                </label>
                <br />
                <input
                  className="w-full bg-primary-800/50 text-p-white py-5 px-5 text-xl rounded-md"
                  placeholder="Father's Name of Company"
                  type="text"
                  {...register("father-company", { required: true })}
                />
                <br />
              </div>
              <div>
                <label className="text-p-white font-serif text-2xl leading-loose">
                  Designation
                </label>
                <br />
                <input
                  className="w-full bg-primary-800/50 text-p-white py-5 px-5 text-xl rounded-md"
                  placeholder="Father's Designation"
                  type="text"
                  {...register("father-designation", { required: true })}
                />
                <br />
              </div>
              <div>
                <label className="text-p-white font-serif text-2xl leading-loose">
                  Annual Income
                </label>
                <br />
                <input
                  className="w-full bg-primary-800/50 text-p-white py-5 px-5 text-xl rounded-md"
                  placeholder="Father's Annual Income"
                  type="text"
                  {...register("father-income", { required: true })}
                />
                <br />
              </div>
            </div>
          </div>
          <div>
            <p className="font-serif text-2xl text-p-white py-5">
              Mother&apos;s Information
            </p>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-p-white font-serif text-2xl leading-loose">
                  Mother name
                </label>
                <br />
                <input
                  className="w-full bg-primary-800/50 text-p-white py-5 px-5 text-xl rounded-md"
                  placeholder="Mother Name"
                  type="text"
                  {...register("mother-name", { required: true })}
                />
                <br />
              </div>
              <div>
                <label className="text-p-white font-serif text-2xl leading-loose">
                  Mobile No.
                </label>
                <br />
                <input
                  className="w-full bg-primary-800/50 text-p-white py-5 px-5 text-xl rounded-md"
                  placeholder="Mother's Mobile No. Ex. +8801123456789"
                  type="text"
                  {...register("mother-mobile", { required: true })}
                />
                <br />
              </div>
              <div>
                <label className="text-p-white font-serif text-2xl leading-loose">
                  Email
                </label>
                <br />
                <input
                  className="w-full bg-primary-800/50 text-p-white py-5 px-5 text-xl rounded-md"
                  placeholder="Mother's email"
                  type="email"
                  {...register("mother-email", { required: true })}
                />
                <br />
              </div>
              <div>
                <label className="text-p-white font-serif text-2xl leading-loose">
                  National ID
                </label>
                <br />
                <input
                  className="w-full bg-primary-800/50 text-p-white py-5 px-5 text-xl rounded-md"
                  placeholder="Mother's NID"
                  type="text"
                  {...register("mother-nid", { required: true })}
                />
                <br />
              </div>
              <div>
                <label className="text-p-white font-serif text-2xl leading-loose">
                  Passport No
                </label>
                <br />
                <input
                  className="w-full bg-primary-800/50 text-p-white py-5 px-5 text-xl rounded-md"
                  placeholder="Mother's Passport No"
                  type="text"
                  {...register("mother-passport", { required: true })}
                />
                <br />
              </div>
              <div>
                <label className="text-p-white font-serif text-2xl leading-loose">
                  Date of Birth
                </label>
                <br />
                <input
                  className="w-full bg-primary-800/50 text-p-white py-5 px-5 text-xl rounded-md"
                  placeholder=""
                  type="date"
                  {...register("mother-dob", { required: true })}
                />
                <br />
              </div>
              <div>
                <label className="text-p-white font-serif text-2xl leading-loose">
                  Age
                </label>
                <br />
                <input
                  className="w-full bg-primary-800/50 text-p-white py-5 px-5 text-xl rounded-md"
                  placeholder="Mother's Age in Years"
                  type="text"
                  {...register("mother-age", { required: true })}
                />
                <br />
              </div>
              <div>
                <label className="text-p-white font-serif text-2xl leading-loose">
                  Occupation
                </label>
                <br />
                <input
                  className="w-full bg-primary-800/50 text-p-white py-5 px-5 text-xl rounded-md"
                  placeholder="Mother's Occupation"
                  type="text"
                  {...register("mother-occupation", { required: true })}
                />
                <br />
              </div>
              <div>
                <label className="text-p-white font-serif text-2xl leading-loose">
                  Name of Company
                </label>
                <br />
                <input
                  className="w-full bg-primary-800/50 text-p-white py-5 px-5 text-xl rounded-md"
                  placeholder="Mother's Name of Company"
                  type="text"
                  {...register("mother-company", { required: true })}
                />
                <br />
              </div>
              <div>
                <label className="text-p-white font-serif text-2xl leading-loose">
                  Designation
                </label>
                <br />
                <input
                  className="w-full bg-primary-800/50 text-p-white py-5 px-5 text-xl rounded-md"
                  placeholder="Mother's Designation"
                  type="text"
                  {...register("mother-designation", { required: true })}
                />
                <br />
              </div>
              <div>
                <label className="text-p-white font-serif text-2xl leading-loose">
                  Annual Income
                </label>
                <br />
                <input
                  className="w-full bg-primary-800/50 text-p-white py-5 px-5 text-xl rounded-md"
                  placeholder="Mother's Annual Income"
                  type="text"
                  {...register("mother-income", { required: true })}
                />
                <br />
              </div>
            </div>
          </div>
        </div>
        <div className="py-10">
          <input
            className="bg-primary-800 py-3 rounded-md text-lg text-p-white border-b-6 border-primary-900 px-10"
            type="submit"
            value="Prev"
          />
          <span className="px-5"></span>
          <input
            className="bg-primary-800 py-3 px-10 rounded-md text-lg text-p-white border-b-6 border-primary-900"
            type="submit"
            value="Next"
          />
        </div>
      </form>
    </div>
  );
};

export default AdmissionForm;
