import { useDispatch, useSelector } from "react-redux";
import { setPersonalInfo } from "../../../../../../features/application/applicationSlice";
import { useNavigate } from "react-router-dom";
import { uploadImageToFirebase } from "../../../../../../firebase/firebase.config";
import { useState } from "react";

/* eslint-disable react/prop-types */
const PersonalInfo = () => {
  const [profileImage, setProfileImage] = useState();
  const [applicantSignature, setApplicantSignature] = useState();
  
  console.log(profileImage, applicantSignature)
  const {
    firstName,
    lastName,
    gender,
    birth_date,
    religion,
    marital,
    blood_group,
    email,
    mobile,
    nid_Birth_certificate,
    passport,
    nationality,
    country,
    social_media,
    image,
    signature,
    address,
  } = useSelector((state) => state.application.personal);

  const {
    present_country,
    present_state_division,
    present_thana,
    present_city,
    present_zip_code,
    present_street1,
    present_street2,
  } = address.present_address;

  const {
    permanent_country,
    permanent_state_division,
    permanent_thana,
    permanent_city,
    permanent_zip_code,
    permanent_street1,
    permanent_street2,
  } = address.permanent_address;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUpload = (selectedFile, propertyName) => {
    uploadImageToFirebase(selectedFile)
      .then((downloadUrls) => {
        console.log(downloadUrls);
        if (propertyName === "profile") {
          setProfileImage(downloadUrls);
        } else if (propertyName === "signature") {
          setApplicantSignature(downloadUrls);
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    try {
      const firstName = form.firstName.value;
      const lastName = form.lastName.value;
      const gender = form.gender.value;
      const birth_date = form.birth_date.value;
      const religion = form.religion.value;
      const marital = form.marital.value;
      const blood_group = form.blood_group.value;
      const email = form.email.value;
      const mobile = form.mobile.value;
      const nid_Birth_certificate = form.nid_Birth_certificate.value;
      const passport = form.passport.value;
      const nationality = form.nationality.value;
      const country = form.country.value;
      const social_media = form.social_media.value;
      const present_country = form.present_country.value;
      const present_state_division = form.present_state_division.value;
      const present_thana = form.present_thana.value;
      const present_city = form.present_city.value;
      const present_zip_code = form.present_zip_code.value;
      const present_street1 = form.present_street1.value;
      const present_street2 = form.present_street2.value;
      const permanent_country = form.permanent_country.value;
      const permanent_state_division = form.permanent_state_division.value;
      const permanent_thana = form.permanent_thana.value;
      const permanent_city = form.permanent_city.value;
      const permanent_zip_code = form.permanent_zip_code.value;
      const permanent_street1 = form.permanent_street1.value;
      const permanent_street2 = form.permanent_street2.value;

      const data = {
        firstName,
        lastName,
        gender,
        birth_date,
        religion,
        marital,
        blood_group,
        email,
        mobile,
        nid_Birth_certificate,
        passport,
        nationality,
        country,
        social_media,
        image: profileImage,
        signature: applicantSignature,
        address: {
          present_address: {
            present_country,
            present_state_division,
            present_thana,
            present_city,
            present_zip_code,
            present_street1,
            present_street2,
          },
          permanent_address: {
            permanent_country,
            permanent_state_division,
            permanent_thana,
            permanent_city,
            permanent_zip_code,
            permanent_street1,
            permanent_street2,
          },
        },
      };

      console.log(data);

      dispatch(setPersonalInfo(data));
      navigate("/admission/online/family");
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="font-sans text-primary-white">
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
            name="firstName"
            id="firstName"
            required
            defaultValue={firstName}
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
            name="lastName"
            id="lastName"
            required
            defaultValue={lastName}
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
            name="gender"
            id="gender"
            required
            defaultValue={gender}
            className="w-full bg-tertiary-blue  py-5 px-5 text-xl rounded-md"
          >
            <option value="" className="">
              Select Type...
            </option>
            <option className="" value="Islam">
              Male
            </option>
            <option className="" value="Hinduism">
              Female
            </option>
            <option className="" value="Christianity">
              Other
            </option>
          </select>
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
            name="birth_date"
            id="birth_date"
            required
            defaultValue={birth_date}
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
            name="religion"
            id="religion"
            required
            defaultValue={religion}
            className="w-full bg-tertiary-blue  py-5 px-5 text-xl rounded-md"
          >
            <option value="" className="">
              Select Type...
            </option>
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
          </select>
          <br />
          {/* {errors.religion && (
              <p className="text-red-500 mt-2">This field is required</p>
            )} */}
        </div>
        <div>
          <label className="  text-2xl leading-loose">Marital Status</label>
          <br />
          <select
            name="marital"
            id="marital"
            defaultValue={marital}
            className="w-full bg-tertiary-blue  py-5 px-5 text-xl rounded-md"
          >
            <option value="" className="">
              Select Type...
            </option>
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
          </select>
          <br />
        </div>
        <div>
          <label className="  text-2xl leading-loose">Blood Group</label>
          <br />
          <select
            name="blood_group"
            id="blood_group"
            defaultValue={blood_group}
            className="w-full bg-tertiary-blue  py-5 px-5 text-xl rounded-md"
          >
            <option value="" className="">
              Select Type...
            </option>
            <option className="" value="A+">
              A+
            </option>
            <option className="" value="A-">
              A-
            </option>
            <option className="" value="B+">
              B+
            </option>
            <option className="" value="B-">
              B-
            </option>
            <option className="" value="AB+">
              AB+
            </option>
            <option className="" value="AB-">
              AB-
            </option>
            <option className="" value="O+">
              O+
            </option>
            <option className="" value="O-">
              O-
            </option>
          </select>
          <br />
        </div>
        <div>
          <label className="  text-2xl leading-loose">
            Email
            <span className="text-red-500 pl-2">*</span>
          </label>
          <br />
          <input
            name="email"
            id="email"
            required
            defaultValue={email}
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
            name="mobile"
            id="mobile"
            required
            defaultValue={mobile}
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
            name="nid_Birth_certificate"
            id="nid_Birth_certificate"
            required
            defaultValue={nid_Birth_certificate}
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
            name="passport"
            id="passport"
            defaultValue={passport}
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
            name="nationality"
            id="nationality"
            required
            defaultValue={nationality}
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
            name="country"
            id="country"
            required
            defaultValue={country}
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
            name="social_media"
            id="social_media"
            defaultValue={social_media}
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
            name="image"
            id="image"
            required
            defaultValue={image?.name}
            onChange={(e) => {
              handleUpload(e.target.files[0], "profile")
            }}
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
            name="signature"
            id="signature"
            required
            defaultValue={signature?.name}
            onChange={ (e) => {
              handleUpload(e.target.files[0], "signature")
              }}
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
              name="present_country"
              id="present_country"
              defaultValue={present_country}
              className="w-full bg-tertiary-blue  py-5 px-5 text-xl rounded-md"
            >
              <option value="" className="">
                Select Type...
              </option>
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
              name="present_state_division"
              id="present_state_division"
              defaultValue={present_state_division}
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
              name="present_thana"
              id="present_thana"
              defaultValue={present_thana}
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
              name="present_city"
              id="present_city"
              defaultValue={present_city}
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
              name="present_zip_code"
              id="present_zip_code"
              defaultValue={present_zip_code}
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
              name="present_street1"
              id="present_street1"
              required
              defaultValue={present_street1}
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
              name="present_street2"
              id="present_street2"
              defaultValue={present_street2}
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
                name="permanent_country"
                id="permanent_country"
                defaultValue={permanent_country}
                className="w-full bg-tertiary-blue  py-5 px-5 text-xl rounded-md"
              >
                <option value="" className="">
                  Select Type...
                </option>
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
                name="permanent_state_division"
                id="permanent_state_division"
                defaultValue={permanent_state_division}
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
                name="permanent_thana"
                id="permanent_thana"
                defaultValue={permanent_thana}
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
                name="permanent_city"
                id="permanent_city"
                defaultValue={permanent_city}
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
                name="permanent_zip_code"
                id="permanent_zip_code"
                defaultValue={permanent_zip_code}
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
                name="permanent_street1"
                id="permanent_street1"
                required
                defaultValue={permanent_street1}
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
                name="permanent_street2"
                id="permanent_street2"
                defaultValue={permanent_street2}
                className="w-full bg-tertiary-blue  py-5 px-5 text-xl rounded-md"
                placeholder="Street2"
                type="text"
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
          onClick={() => navigate("/admission/online/general")}
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

export default PersonalInfo;
