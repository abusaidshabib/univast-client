import { useDispatch } from "react-redux";
import { admissionFormInput } from "../../../../../../features/application/applicationSlice";

/* eslint-disable react/prop-types */
const PersonalInfo = () => {
    const dispatch = useDispatch()

    return (
      <div className="font-sans text-primary-white">
        {/* Application */}
        <p className=" text-4xl  py-5">Applicant</p>
        <hr className="pb-5" />
        <div className="grid grid-cols-3 gap-10 pb-10">
          <div>
            <label className="  text-2xl leading-loose">
              First Name
              <span className="text-red-500 pl-2">*</span>
            </label>
            <br />
            <input
              onBlur={(e) =>
                dispatch(
                  admissionFormInput({
                    fieldName: "personal.firstName",
                    value: e.target.value,
                  })
                )
              }
              className="w-full bg-tertiary-blue  py-5 px-5 text-xl rounded-md"
              placeholder="Enter Your first-Name"
              type="text"
            />
            <br />
            {/* {errors.firstName && (
              <p className="text-red-500 mt-2">This field is required</p>
            )} */}
          </div>
          <div>
            <label className="  text-2xl leading-loose">
              Last Name
              <span className="text-red-500 pl-2">*</span>
            </label>
            <br />
            <input
              onBlur={(e) =>
                dispatch(
                  admissionFormInput({
                    fieldName: "personal.lastName",
                    value: e.target.value,
                  })
                )
              }
              className="w-full bg-tertiary-blue  py-5 px-5 text-xl rounded-md"
              placeholder="Enter Your last-Name"
              type="text"
            />
            <br />
            {/* {errors.lastName && (
              <p className="text-red-500 mt-2">This field is required</p>
            )} */}
          </div>
          <div>
            <label className="  text-2xl leading-loose">
              Gender
              <span className="text-red-500 pl-2">*</span>
            </label>
            <br />
            <select
              onChange={(e) =>
                dispatch(
                  admissionFormInput({
                    fieldName: "personal.gender",
                    value: e.target.value,
                  })
                )
              }
              className="w-full bg-tertiary-blue  py-5 px-5 text-xl rounded-md"
            >
              <option className="">Select Type...</option>
              <option className="" value="Islam">
                Male
              </option>
              <option className="" value="Hinduism">
                Female
              </option>
              <option className="" value="Christianity">
                Other
              </option>
            </select>{" "}
            <br />
            {/* {errors.gender && (
              <p className="text-red-500 mt-2">This field is required</p>
            )} */}
          </div>
          <div>
            <label className="  text-2xl leading-loose">
              Date of Birth
              <span className="text-red-500 pl-2">*</span>
            </label>
            <br />
            <input
              onChange={(e) =>
                dispatch(
                  admissionFormInput({
                    fieldName: "personal.birth_date",
                    value: e.target.value,
                  })
                )
              }
              className="w-full bg-tertiary-blue  py-5 px-5 text-xl rounded-md"
              placeholder="Enter Your Birth-Date"
              type="date"
            />
            <br />
            {/* {errors.birth_date && (
              <p className="text-red-500 mt-2">This field is required</p>
            )} */}
          </div>
          <div>
            <label className="  text-2xl leading-loose">
              Religion
              <span className="text-red-500 pl-2">*</span>
            </label>
            <br />
            <select
              onChange={(e) =>
                dispatch(
                  admissionFormInput({
                    fieldName: "personal.religion",
                    value: e.target.value,
                  })
                )
              }
              className="w-full bg-tertiary-blue  py-5 px-5 text-xl rounded-md"
            >
              <option className="">Select Type...</option>
              <option className="" value="Islam">
                Islam
              </option>
              <option className="" value="Hinduism">
                Hinduism
              </option>
              <option className="" value="Christianity">
                Christianity
              </option>
              <option className="" value="Buddhism">
                Buddhism
              </option>
            </select>{" "}
            <br />
            {/* {errors.religion && (
              <p className="text-red-500 mt-2">This field is required</p>
            )} */}
          </div>
          <div>
            <label className="  text-2xl leading-loose">Marital Status</label>
            <br />
            <select
              onChange={(e) =>
                dispatch(
                  admissionFormInput({
                    fieldName: "personal.marital",
                    value: e.target.value,
                  })
                )
              }
              className="w-full bg-tertiary-blue  py-5 px-5 text-xl rounded-md"
            >
              <option className="">Select Type...</option>
              <option className="" value="Single">
                Single
              </option>
              <option className="" value="Married">
                Married
              </option>
              <option className="" value="Divorced">
                Divorced
              </option>
              <option className="" value="Widowed">
                Widowed
              </option>
            </select>{" "}
            <br />
          </div>
          <div>
            <label className="  text-2xl leading-loose">Blood Group</label>
            <br />
            <select
              onChange={(e) =>
                dispatch(
                  admissionFormInput({
                    fieldName: "personal.bloodGroup",
                    value: e.target.value,
                  })
                )
              }
              className="w-full bg-tertiary-blue  py-5 px-5 text-xl rounded-md"
            >
              <option className="">Select Type...</option>
              <option className="" value="A+ve">
                A+ve
              </option>
              <option className="" value="B+ve">
                B+ve
              </option>
            </select>{" "}
            <br />
          </div>
          <div>
            <label className="  text-2xl leading-loose">
              Email
              <span className="text-red-500 pl-2">*</span>
            </label>
            <br />
            <input
              onBlur={(e) =>
                dispatch(
                  admissionFormInput({
                    fieldName: "personal.email",
                    value: e.target.value,
                  })
                )
              }
              className="w-full bg-tertiary-blue  py-5 px-5 text-xl rounded-md"
              placeholder="Enter Your Email"
              type="email"
            />
            <br />
            {/* {errors.email && (
              <p className="text-red-500 mt-2">This field is required</p>
            )} */}
          </div>
          <div>
            <label className="  text-2xl leading-loose">
              Mobile Number
              <span className="text-red-500 pl-2">*</span>
            </label>
            <br />
            <input
              onBlur={(e) =>
                dispatch(
                  admissionFormInput({
                    fieldName: "personal.mobile",
                    value: e.target.value,
                  })
                )
              }
              className="w-full bg-tertiary-blue  py-5 px-5 text-xl rounded-md"
              placeholder="Enter Mobile Number"
              type="tel"
            />
            <br />
            {/* {errors.mobile && (
              <p className="text-red-500 mt-2">This field is required</p>
            )} */}
          </div>
          <div>
            <label className="  text-2xl leading-loose">
              National ID / Birth Certificate No.
              <span className="text-red-500 pl-2">*</span>
            </label>
            <br />
            <input
              onBlur={(e) =>
                dispatch(
                  admissionFormInput({
                    fieldName: "personal.nid_Birth_certificate",
                    value: e.target.value,
                  })
                )
              }
              className="w-full bg-tertiary-blue  py-5 px-5 text-xl rounded-md"
              placeholder="Enter National Id /Birth"
              type="number"
            />
            <br />
            {/* {errors.nid_Birth_certificate && (
              <p className="text-red-500 mt-2">This field is required</p>
            )} */}
          </div>
          <div>
            <label className="  text-2xl leading-loose">Passport No.</label>
            <br />
            <input
              onBlur={(e) =>
                dispatch(
                  admissionFormInput({
                    fieldName: "personal.passport",
                    value: e.target.value,
                  })
                )
              }
              className="w-full bg-tertiary-blue  py-5 px-5 text-xl rounded-md"
              placeholder="Enter Your passport Number"
              type="number"
            />
            <br />
          </div>
          <div>
            <label className="  text-2xl leading-loose">
              Nationality
              <span className="text-red-500 pl-2">*</span>
            </label>
            <br />
            <input
              onBlur={(e) =>
                dispatch(
                  admissionFormInput({
                    fieldName: "personal.nationality",
                    value: e.target.value,
                  })
                )
              }
              className="w-full bg-tertiary-blue  py-5 px-5 text-xl rounded-md"
              placeholder="Enter Your Nationality"
              type="text"
            />
            <br />
            {/* {errors.nationality && (
              <p className="text-red-500 mt-2">This field is required</p>
            )} */}
          </div>
          <div>
            <label className="  text-2xl leading-loose">
              Country
              <span className="text-red-500 pl-2">*</span>
            </label>
            <br />
            <input
              onBlur={(e) =>
                dispatch(
                  admissionFormInput({
                    fieldName: "personal.country",
                    value: e.target.value,
                  })
                )
              }
              className="w-full bg-tertiary-blue  py-5 px-5 text-xl rounded-md"
              placeholder="Enter Your country"
              type="text"
            />
            <br />
            {/* {errors.country && (
              <p className="text-red-500 mt-2">This field is required</p>
            )} */}
          </div>
          <div>
            <label className="  text-2xl leading-loose">Social Media Id</label>
            <br />
            <input
              onBlur={(e) =>
                dispatch(
                  admissionFormInput({
                    fieldName: "personal.social_media",
                    value: e.target.value,
                  })
                )
              }
              className="w-full bg-tertiary-blue  py-5 px-5 text-xl rounded-md"
              placeholder="Enter Your Social media"
              type="url"
            />
            <br />
          </div>
          <div>
            <label className="  text-2xl leading-loose">
              Upload Applicant Photo (Recent and Formal)
              <span className="text-red-500 pl-2">*</span>
            </label>
            <br />
            <input
              onChange={(e) =>
                dispatch(
                  admissionFormInput({
                    fieldName: "personal.image",
                    value: e.target.value,
                  })
                )
              }
              className="w-full bg-tertiary-blue  py-5 px-5 text-xl rounded-md"
              type="file"
              accept="image/*"
            />
            <br />
            {/* {errors.image && (
              <p className="text-red-500 mt-2">This field is required</p>
            )} */}
          </div>
          <div>
            <label className="  text-2xl leading-loose">
              Upload Applicant Signature
              <span className="text-red-500 pl-2">*</span>
            </label>
            <br />
            <input
              onChange={(e) =>
                dispatch(
                  admissionFormInput({
                    fieldName: "personal.signature",
                    value: e.target.value,
                  })
                )
              }
              className="w-full bg-tertiary-blue  py-5 px-5 text-xl rounded-md"
              type="file"
              accept="image/*"
            />
            <br />
            {/* {errors.signature && (
              <p className="text-red-500 mt-2">This field is required</p>
            )} */}
          </div>
        </div>

        {/* Address */}
        <p className=" text-4xl  py-5">Address</p>
        <hr className="pb-5" />
        <div className="grid grid-cols-2 gap-10 pb-10">
          <div>
            <p className=" text-2xl  py-5">Present address</p>
            <div>
              <label className="  text-2xl leading-loose">Country</label>
              <br />
              <select
                onChange={(e) =>
                  dispatch(
                    admissionFormInput({
                      fieldName: "personal.present_country",
                      value: e.target.value,
                    })
                  )
                }
                className="w-full bg-tertiary-blue  py-5 px-5 text-xl rounded-md"
              >
                <option className="">Select Type...</option>
                <option className="" value="Bangladesh">
                  Bangladesh
                </option>
                <option className="" value="Indian">
                  Indian
                </option>
                <option className="" value="Others">
                  Others
                </option>
              </select>{" "}
              <br />
            </div>
            <div>
              <label className="  text-2xl leading-loose">State/Division</label>
              <br />
              <input
                onBlur={(e) =>
                  dispatch(
                    admissionFormInput({
                      fieldName: "personal.present_state_division",
                      value: e.target.value,
                    })
                  )
                }
                className="w-full bg-tertiary-blue  py-5 px-5 text-xl rounded-md"
                placeholder="Enter Your State/Division"
                type="text"
              />
              <br />
            </div>
            <div>
              <label className="  text-2xl leading-loose">
                Police Station/Thana
              </label>
              <br />
              <input
                onBlur={(e) =>
                  dispatch(
                    admissionFormInput({
                      fieldName: "personal.present_thana",
                      value: e.target.value,
                    })
                  )
                }
                className="w-full bg-tertiary-blue  py-5 px-5 text-xl rounded-md"
                placeholder="Enter Your Police Station/Thana"
                type="text"
              />
              <br />
            </div>
            <div>
              <label className="  text-2xl leading-loose">City</label>
              <br />
              <input
                onBlur={(e) =>
                  dispatch(
                    admissionFormInput({
                      fieldName: "personal.present_city",
                      value: e.target.value,
                    })
                  )
                }
                className="w-full bg-tertiary-blue  py-5 px-5 text-xl rounded-md"
                placeholder="Enter Your City"
                type="text"
              />
              <br />
            </div>
            <div>
              <label className="  text-2xl leading-loose">
                Zip Code/Post Code/Post Office Name
              </label>
              <br />
              <input
                onBlur={(e) =>
                  dispatch(
                    admissionFormInput({
                      fieldName: "personal.present_zip_code",
                      value: e.target.value,
                    })
                  )
                }
                className="w-full bg-tertiary-blue  py-5 px-5 text-xl rounded-md"
                placeholder="Enter Your Zip Code"
                type="number"
              />
              <br />
            </div>
            <div>
              <label className="  text-2xl leading-loose">
                Flat/Apt/Street/House No./Area/Village
                <span className="text-red-500 pl-2">*</span>
              </label>
              <br />

              <input
                onBlur={(e) =>
                  dispatch(
                    admissionFormInput({
                      fieldName: "personal.present_street1",
                      value: e.target.value,
                    })
                  )
                }
                className="w-full bg-tertiary-blue  py-5 px-5 text-xl rounded-md"
                placeholder="Street1"
                type="text"
              />
              <br />
              {/* {errors.present_street1 && (
                <p className="text-red-500 mt-2">This field is required</p>
              )} */}
              <br />
              <input
                onBlur={(e) =>
                  dispatch(
                    admissionFormInput({
                      fieldName: "personal.present_street2",
                      value: e.target.value,
                    })
                  )
                }
                className="w-full bg-tertiary-blue  py-5 px-5 text-xl rounded-md"
                placeholder="Street2"
                type="text"
              />
              <br />
            </div>
          </div>
          <div>
            <div>
              <p className=" text-2xl  py-5">Permanent address</p>
              <div>
                <label className="  text-2xl leading-loose">Country</label>
                <br />
                <select
                  onChange={(e) =>
                    dispatch(
                      admissionFormInput({
                        fieldName: "personal.permanent_country",
                        value: e.target.value,
                      })
                    )
                  }
                  className="w-full bg-tertiary-blue  py-5 px-5 text-xl rounded-md"
                >
                  <option className="">Select Type...</option>
                  <option className="" value="Bangladesh">
                    Bangladesh
                  </option>
                  <option className="" value="Indian">
                    Indian
                  </option>
                  <option className="" value="Others">
                    Others
                  </option>
                </select>{" "}
                <br />
              </div>
              <div>
                <label className="  text-2xl leading-loose">
                  State/Division
                </label>
                <br />
                <input
                  onBlur={(e) =>
                    dispatch(
                      admissionFormInput({
                        fieldName: "personal.permanent_state_division",
                        value: e.target.value,
                      })
                    )
                  }
                  className="w-full bg-tertiary-blue  py-5 px-5 text-xl rounded-md"
                  placeholder="Enter Your State/Division"
                  type="text"
                />
                <br />
              </div>
              <div>
                <label className="  text-2xl leading-loose">
                  Police Station/Thana
                </label>
                <br />
                <input
                  onBlur={(e) =>
                    dispatch(
                      admissionFormInput({
                        fieldName: "personal.permanent_thana",
                        value: e.target.value,
                      })
                    )
                  }
                  className="w-full bg-tertiary-blue  py-5 px-5 text-xl rounded-md"
                  placeholder="Enter Your Police Station/Thana"
                  type="text"
                />
                <br />
              </div>
              <div>
                <label className="  text-2xl leading-loose">City</label>
                <br />
                <input
                  onBlur={(e) =>
                    dispatch(
                      admissionFormInput({
                        fieldName: "personal.permanent_city",
                        value: e.target.value,
                      })
                    )
                  }
                  className="w-full bg-tertiary-blue  py-5 px-5 text-xl rounded-md"
                  placeholder="Enter Your City"
                  type="text"
                />
                <br />
              </div>
              <div>
                <label className="  text-2xl leading-loose">
                  Zip Code/Post Code/Post Office Name
                </label>
                <br />
                <input
                  onBlur={(e) =>
                    dispatch(
                      admissionFormInput({
                        fieldName: "personal.permanent_zip_code",
                        value: e.target.value,
                      })
                    )
                  }
                  className="w-full bg-tertiary-blue  py-5 px-5 text-xl rounded-md"
                  placeholder="Enter Your Zip Code"
                  type="number"
                />
                <br />
              </div>
              <div>
                <label className="  text-2xl leading-loose">
                  Flat/Apt/Street/House No./Area/Village
                  <span className="text-red-500 pl-2">*</span>
                </label>
                <br />
                <input
                  onBlur={(e) =>
                    dispatch(
                      admissionFormInput({
                        fieldName: "personal.permanent_street1",
                        value: e.target.value,
                      })
                    )
                  }
                  className="w-full bg-tertiary-blue  py-5 px-5 text-xl rounded-md"
                  placeholder="Street1"
                  type="text"
                />
                <br />
                {/* {errors.permanent_street1 && (
                  <p className="text-red-500 mt-2">This field is required</p>
                )} */}
                <br />
                <input
                  onBlur={(e) =>
                    dispatch(
                      admissionFormInput({
                        fieldName: "personal.permanent_street2",
                        value: e.target.value,
                      })
                    )
                  }
                  className="w-full bg-tertiary-blue  py-5 px-5 text-xl rounded-md"
                  placeholder="Street2"
                  type="text"
                />
                <br />
              </div>
            </div>
          </div>
        </div>

        {/* Address */}
      </div>
    );
};

export default PersonalInfo;