import { useDispatch, useSelector } from "react-redux";
import { setFamilyInfo } from "../../../../../../features/application/applicationSlice";
import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
const FamilyInfo = () => {
  const { father, mother } = useSelector((state) => state.application.family);

  const {
    father_name,
    father_mobile,
    father_email,
    father_nid,
    father_passport,
    father_dob,
    father_age,
    father_occupation,
    father_company,
    father_designation,
    father_income
      } = father;

  const {
    mother_name,
    mother_mobile,
    mother_email,
    mother_nid,
    mother_passport,
    mother_dob,
    mother_age,
    mother_occupation,
    mother_company,
    mother_designation,
    mother_income,
  } = mother;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const father_name = form.father_name.value;
    const father_mobile = form.father_mobile.value;
    const father_email = form.father_email.value;
    const father_nid = form.father_nid.value;
    const father_passport = form.father_passport.value;
    const father_dob = form.father_dob.value;
    const father_age = form.father_age.value;
    const father_occupation = form.father_occupation.value;
    const father_company = form.father_company.value;
    const father_designation = form.father_designation.value;
    const father_income = form.father_income.value;
    const mother_name = form.mother_name.value;
    const mother_mobile = form.mother_mobile.value;
    const mother_email = form.mother_email.value;
    const mother_nid = form.mother_nid.value;
    const mother_passport = form.mother_passport.value;
    const mother_dob = form.mother_dob.value;
    const mother_age = form.mother_age.value;
    const mother_occupation = form.mother_occupation.value;
    const mother_company = form.mother_company.value;
    const mother_designation = form.mother_designation.value;
    const mother_income = form.mother_income.value;

    const data ={
      father: {
        father_name,
        father_mobile,
        father_email,
        father_nid,
        father_passport,
        father_dob,
        father_age,
        father_occupation,
        father_company,
        father_designation,
        father_income,
      },
      mother: {
        mother_name,
        mother_mobile,
        mother_email,
        mother_nid,
        mother_passport,
        mother_dob,
        mother_age,
        mother_occupation,
        mother_company,
        mother_designation,
        mother_income,
      }
    }

    dispatch(setFamilyInfo(data));
    navigate("/admission/online/educational");
  }

    return (
      <form onSubmit={handleSubmit} className="font-sans text-primary-white">
        <p className="text-4xl py-5 font-semibold">Family Information</p>
        <hr className="pb-5" />
        <div className="grid grid-cols-2 gap-10 pb-10">
          <div>
            <p className="text-2xl py-5">Father&apos;s Information</p>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-2xl leading-loose">
                  Father name
                  <span className="text-red-500 pl-2">*</span>
                </label>
                <br />
                <input
                  name="father_name"
                  id="father_name"
                  required
                  defaultValue={father_name}
                  className="w-full bg-tertiary-blue py-5 px-5 text-xl rounded-md"
                  placeholder="Father Name"
                  type="text"
                />
                <br />
                {/* {errors.father_name && (
                  <p className="text-red-500 mt-2">This field is required</p>
                )} */}
              </div>
              <div>
                <label className="text-2xl leading-loose">
                  Mobile No.
                  <span className="text-red-500 pl-2">*</span>
                </label>
                <br />
                <input
                  name="father_mobile"
                  id="father_mobile"
                  required
                  defaultValue={father_mobile}
                  className="w-full bg-tertiary-blue py-5 px-5 text-xl rounded-md"
                  placeholder="Father's Mobile No. Ex. +8801123456789"
                  type="text"
                />
                <br />
                {/* {errors.father_mobile && (
                  <p className="text-red-500 mt-2">This field is required</p>
                )} */}
              </div>
              <div>
                <label className="text-2xl leading-loose">Email</label>
                <br />
                <input
                  name="father_email"
                  id="father_email"
                  defaultValue={father_email}
                  className="w-full bg-tertiary-blue py-5 px-5 text-xl rounded-md"
                  placeholder="Father's email"
                  type="email"
                />
                <br />
              </div>
              <div>
                <label className="text-2xl leading-loose">
                  National ID
                  <span className="text-red-500 pl-2">*</span>
                </label>
                <br />
                <input
                  name="father_nid"
                  id="father_nid"
                  required
                  defaultValue={father_nid}
                  className="w-full bg-tertiary-blue py-5 px-5 text-xl rounded-md"
                  placeholder="Father's NID"
                  type="text"
                />
                <br />
              </div>
              <div>
                <label className="text-2xl leading-loose">Passport No</label>
                <br />
                <input
                  name="father_passport"
                  id="father_passport"
                  defaultValue={father_passport}
                  className="w-full bg-tertiary-blue py-5 px-5 text-xl rounded-md"
                  placeholder="Father's Passport No"
                  type="text"
                />
                <br />
              </div>
              <div>
                <label className="text-2xl leading-loose">Date of Birth</label>
                <br />
                <input
                  name="father_dob"
                  id="father_dob"
                  defaultValue={father_dob}
                  className="w-full bg-tertiary-blue py-5 px-5 text-xl rounded-md"
                  placeholder=""
                  type="date"
                />
                <br />
                {/* {errors.father_dob && (
                  <p className="text-red-500 mt-2">This field is required</p>
                )} */}
              </div>
              <div>
                <label className="text-2xl leading-loose">Age</label>
                <br />
                <input
                  name="father_age"
                  id="father_age"
                  defaultValue={father_age}
                  className="w-full bg-tertiary-blue py-5 px-5 text-xl rounded-md"
                  placeholder="Father's Age in Years"
                  type="number"
                />
                <br />
              </div>
              <div>
                <label className="text-2xl leading-loose">Occupation</label>
                <br />
                <input
                  name="father_occupation"
                  id="father_occupation"
                  defaultValue={father_occupation}
                  className="w-full bg-tertiary-blue py-5 px-5 text-xl rounded-md"
                  placeholder="Father's Occupation"
                  type="text"
                />
                <br />
              </div>
              <div>
                <label className="text-2xl leading-loose">
                  Name of Company
                </label>
                <br />
                <input
                  name="father_company"
                  id="father_company"
                  defaultValue={father_company}
                  className="w-full bg-tertiary-blue py-5 px-5 text-xl rounded-md"
                  placeholder="Father's Name of Company"
                  type="text"
                />
                <br />
              </div>
              <div>
                <label className="text-2xl leading-loose">Designation</label>
                <br />
                <input
                  name="father_designation"
                  id="father_designation"
                  defaultValue={father_designation}
                  className="w-full bg-tertiary-blue py-5 px-5 text-xl rounded-md"
                  placeholder="Father's Designation"
                  type="text"
                />
                <br />
              </div>
              <div>
                <label className="text-2xl leading-loose">Annual Income</label>
                <br />
                <input
                  name="father_income"
                  id="father_income"
                  defaultValue={father_income}
                  className="w-full bg-tertiary-blue py-5 px-5 text-xl rounded-md"
                  placeholder="Father's Annual Income"
                  type="number"
                />
                <br />
              </div>
            </div>
          </div>
          <div>
            <p className="text-2xl py-5">Mother&apos;s Information</p>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-2xl leading-loose">
                  Mother name
                  <span className="text-red-500 pl-2">*</span>
                </label>
                <br />
                <input
                  name="mother_name"
                  id="mother_name"
                  required
                  defaultValue={mother_name}
                  className="w-full bg-tertiary-blue py-5 px-5 text-xl rounded-md"
                  placeholder="Mother Name"
                  type="text"
                />
                <br />
                {/* {errors.mother_name && (
                  <p className="text-red-500 mt-2">This field is required</p>
                )} */}
              </div>
              <div>
                <label className="text-2xl leading-loose">
                  Mobile No.
                  <span className="text-red-500 pl-2">*</span>
                </label>
                <br />
                <input
                  name="mother_mobile"
                  id="mother_mobile"
                  required
                  defaultValue={mother_mobile}
                  className="w-full bg-tertiary-blue py-5 px-5 text-xl rounded-md"
                  placeholder="Mother's Mobile No. Ex. +8801123456789"
                  type="text"
                />
                <br />
                {/* {errors.mother_mobile && (
                  <p className="text-red-500 mt-2">This field is required</p>
                )} */}
              </div>
              <div>
                <label className="text-2xl leading-loose">Email</label>
                <br />
                <input
                  name="mother_email"
                  id="mother_email"
                  defaultValue={mother_email}
                  className="w-full bg-tertiary-blue py-5 px-5 text-xl rounded-md"
                  placeholder="Mother's email"
                  type="email"
                />
                <br />
              </div>
              <div>
                <label className="text-2xl leading-loose">
                  National ID
                  <span className="text-red-500 pl-2">*</span>
                </label>
                <br />
                <input
                  name="mother_nid"
                  id="mother_nid"
                  required
                  defaultValue={mother_nid}
                  className="w-full bg-tertiary-blue py-5 px-5 text-xl rounded-md"
                  placeholder="Mother's NID"
                  type="text"
                />
                <br />
              </div>
              <div>
                <label className="text-2xl leading-loose">Passport No</label>
                <br />
                <input
                  name="mother_passport"
                  id="mother_passport"
                  defaultValue={mother_passport}
                  className="w-full bg-tertiary-blue py-5 px-5 text-xl rounded-md"
                  placeholder="Mother's Passport No"
                  type="text"
                />
                <br />
              </div>
              <div>
                <label className="text-2xl leading-loose">Date of Birth</label>
                <br />
                <input
                  name="mother_dob"
                  id="mother_dob"
                  defaultValue={mother_dob}
                  className="w-full bg-tertiary-blue py-5 px-5 text-xl rounded-md"
                  placeholder=""
                  type="date"
                />
                <br />
                {/* {errors.mother_dob && (
                  <p className="text-red-500 mt-2">This field is required</p>
                )} */}
              </div>
              <div>
                <label className="text-2xl leading-loose">Age</label>
                <br />
                <input
                  name="mother_age"
                  id="mother_age"
                  defaultValue={mother_age}
                  className="w-full bg-tertiary-blue py-5 px-5 text-xl rounded-md"
                  placeholder="Mother's Age in Years"
                  type="number"
                />
                <br />
              </div>
              <div>
                <label className="text-2xl leading-loose">Occupation</label>
                <br />
                <input
                  name="mother_occupation"
                  id="mother_occupation"
                  defaultValue={mother_occupation}
                  className="w-full bg-tertiary-blue py-5 px-5 text-xl rounded-md"
                  placeholder="Mother's Occupation"
                  type="text"
                />
                <br />
              </div>
              <div>
                <label className="text-2xl leading-loose">
                  Name of Company
                </label>
                <br />
                <input
                  name="mother_company"
                  id="mother_company"
                  defaultValue={mother_company}
                  className="w-full bg-tertiary-blue py-5 px-5 text-xl rounded-md"
                  placeholder="Mother's Name of Company"
                  type="text"
                />
                <br />
              </div>
              <div>
                <label className="text-2xl leading-loose">Designation</label>
                <br />
                <input
                  name="mother_designation"
                  id="mother_designation"
                  defaultValue={mother_designation}
                  className="w-full bg-tertiary-blue py-5 px-5 text-xl rounded-md"
                  placeholder="Mother's Designation"
                  type="text"
                />
                <br />
              </div>
              <div>
                <label className="text-2xl leading-loose">Annual Income</label>
                <br />
                <input
                  name="mother_income"
                  id="mother_income"
                  defaultValue={mother_income}
                  className="w-full bg-tertiary-blue py-5 px-5 text-xl rounded-md"
                  placeholder="Mother's Annual Income"
                  type="number"
                />
                <br />
              </div>
            </div>
          </div>
        </div>

        <div className="py-10 flex gap-8 items-center">
          <button
            className="bg-tertiary-blue py-3 px-10 rounded-md text-lg text-primary-white border-b-6"
            type="button"
            onClick={() => navigate("/admission/online/personal")}
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

export default FamilyInfo;