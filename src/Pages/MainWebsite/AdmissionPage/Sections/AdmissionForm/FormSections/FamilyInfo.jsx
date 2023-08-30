import { useDispatch } from "react-redux";
import { admissionFormInput } from "../../../../../../features/application/applicationSlice";

/* eslint-disable react/prop-types */
const FamilyInfo = () => {
    const dispatch = useDispatch();

    return (
      <div className="font-sans text-primary-white">
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
                  onBlur={(e) =>
                    dispatch(
                      admissionFormInput({
                        fieldName: "family.father_name",
                        value: e.target.value,
                      })
                    )
                  }
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
                  onBlur={(e) =>
                    dispatch(
                      admissionFormInput({
                        fieldName: "family.father_mobile",
                        value: e.target.value,
                      })
                    )
                  }
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
                  onBlur={(e) =>
                    dispatch(
                      admissionFormInput({
                        fieldName: "family.father_email",
                        value: e.target.value,
                      })
                    )
                  }
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
                  onBlur={(e) =>
                    dispatch(
                      admissionFormInput({
                        fieldName: "family.father_nid",
                        value: e.target.value,
                      })
                    )
                  }
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
                  onBlur={(e) =>
                    dispatch(
                      admissionFormInput({
                        fieldName: "family.father_passport",
                        value: e.target.value,
                      })
                    )
                  }
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
                  onBlur={(e) =>
                    dispatch(
                      admissionFormInput({
                        fieldName: "family.father_dob",
                        value: e.target.value,
                      })
                    )
                  }
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
                  onBlur={(e) =>
                    dispatch(
                      admissionFormInput({
                        fieldName: "family.father_age",
                        value: e.target.value,
                      })
                    )
                  }
                  className="w-full bg-tertiary-blue py-5 px-5 text-xl rounded-md"
                  placeholder="Father's Age in Years"
                  type="text"
                />
                <br />
              </div>
              <div>
                <label className="text-2xl leading-loose">Occupation</label>
                <br />
                <input
                  onBlur={(e) =>
                    dispatch(
                      admissionFormInput({
                        fieldName: "family.father_occupation",
                        value: e.target.value,
                      })
                    )
                  }
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
                  onBlur={(e) =>
                    dispatch(
                      admissionFormInput({
                        fieldName: "family.father_company",
                        value: e.target.value,
                      })
                    )
                  }
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
                  onBlur={(e) =>
                    dispatch(
                      admissionFormInput({
                        fieldName: "family.father_designation",
                        value: e.target.value,
                      })
                    )
                  }
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
                  onBlur={(e) =>
                    dispatch(
                      admissionFormInput({
                        fieldName: "family.father_income",
                        value: e.target.value,
                      })
                    )
                  }
                  className="w-full bg-tertiary-blue py-5 px-5 text-xl rounded-md"
                  placeholder="Father's Annual Income"
                  type="text"
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
                  onBlur={(e) =>
                    dispatch(
                      admissionFormInput({
                        fieldName: "family.mother_name",
                        value: e.target.value,
                      })
                    )
                  }
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
                  onBlur={(e) =>
                    dispatch(
                      admissionFormInput({
                        fieldName: "family.mother_mobile",
                        value: e.target.value,
                      })
                    )
                  }
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
                  onBlur={(e) =>
                    dispatch(
                      admissionFormInput({
                        fieldName: "family.mother_email",
                        value: e.target.value,
                      })
                    )
                  }
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
                  onBlur={(e) =>
                    dispatch(
                      admissionFormInput({
                        fieldName: "family.mother_nid",
                        value: e.target.value,
                      })
                    )
                  }
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
                  onBlur={(e) =>
                    dispatch(
                      admissionFormInput({
                        fieldName: "family.mother_passport",
                        value: e.target.value,
                      })
                    )
                  }
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
                  onBlur={(e) =>
                    dispatch(
                      admissionFormInput({
                        fieldName: "family.mother_dob",
                        value: e.target.value,
                      })
                    )
                  }
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
                  onBlur={(e) =>
                    dispatch(
                      admissionFormInput({
                        fieldName: "family.mother_age",
                        value: e.target.value,
                      })
                    )
                  }
                  className="w-full bg-tertiary-blue py-5 px-5 text-xl rounded-md"
                  placeholder="Mother's Age in Years"
                  type="text"
                />
                <br />
              </div>
              <div>
                <label className="text-2xl leading-loose">Occupation</label>
                <br />
                <input
                  onBlur={(e) =>
                    dispatch(
                      admissionFormInput({
                        fieldName: "family.mother_occupation",
                        value: e.target.value,
                      })
                    )
                  }
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
                  onBlur={(e) =>
                    dispatch(
                      admissionFormInput({
                        fieldName: "family.mother_company",
                        value: e.target.value,
                      })
                    )
                  }
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
                  onBlur={(e) =>
                    dispatch(
                      admissionFormInput({
                        fieldName: "family.mother_designation",
                        value: e.target.value,
                      })
                    )
                  }
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
                  onBlur={(e) =>
                    dispatch(
                      admissionFormInput({
                        fieldName: "family.mother_income",
                        value: e.target.value,
                      })
                    )
                  }
                  className="w-full bg-tertiary-blue py-5 px-5 text-xl rounded-md"
                  placeholder="Mother's Annual Income"
                  type="text"
                />
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default FamilyInfo;