/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line react/prop-types
const TpersonalInfo = ({ data, data1 }) => {
  let personal = data;
  // eslint-disable-next-line react/prop-types, no-unsafe-optional-chaining
  const {
    firstName,
    lastName,
    gender,
    birth_date,
    religion,
    marital,
    email,
    mobile,
    nid_Birth_certificate,
    passport,
    nationality,
    country,
    social_media,
    image,
    signature,
    father_name,
    mother_name,
  } = personal;
  console.log(email);

  const {
    present_country,
    present_state_division,
    present_thana,
    present_city,
    present_zip_code,
    present_street1,
    present_street2,
    // eslint-disable-next-line no-unsafe-optional-chaining
  } = personal?.address?.present_address;

  const {
    permanent_country,
    permanent_state_division,
    permanent_thana,
    permanent_city,
    permanent_zip_code,
    permanent_street1,
    permanent_street2,
    // eslint-disable-next-line no-unsafe-optional-chaining
  } = personal?.address?.permanent_address;
  return (
    <div className="bg-white grid grid-cols-12 gap-5 p-5">
      <div className="col-span-3">
        <div className="border-4 border-secondary-blue">
          <div>
            <img className="object-cover h-full w-full" src={image} alt="" />
          </div>
          <div className="h-20">
            <img
              className="object-cover h-full w-4/5 p-5"
              src={signature}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="col-span-5 text-base font-medium">
        <p className="text-2xl tracking-wider uppercase font-semibold text-center">
          Personal Info
        </p>
        <br />
        <p>
          <span className="text-secondary-blue font-bold">Full Name</span>
          <span className="px-3">-</span>
          <span className="">
            {firstName} {lastName}
          </span>
        </p>
        <p>
          <span className="text-secondary-blue font-bold">Father's Name</span>
          <span className="px-3">-</span>
          <span className="">{father_name}</span>
        </p>
        <p>
          <span className="text-secondary-blue font-bold">Mother's Name</span>
          <span className="px-3">-</span>
          <span className="">{mother_name}</span>
        </p>
        <p>
          <span className="text-secondary-blue font-bold">Gender</span>
          <span className="px-3">-</span>
          <span className="">{gender}</span>
        </p>
        <p>
          <span className="text-secondary-blue font-bold">Birth Date</span>
          <span className="px-3">-</span>
          <span className="">{birth_date}</span>
        </p>
        <p>
          <span className="text-secondary-blue font-bold">Religion</span>
          <span className="px-3">-</span>
          <span className="">{religion}</span>
        </p>
        <p>
          <span className="text-secondary-blue font-bold">Marital Status</span>
          <span className="px-3">-</span>
          <span className="">{marital}</span>
        </p>
        <p>
          <span className="text-secondary-blue font-bold">
            Nid/Birth Certification Number
          </span>
          <span className="px-3">-</span>
          <span className="">{nid_Birth_certificate}</span>
        </p>
        <p>
          <span className="text-secondary-blue font-bold">Passport Id</span>
          <span className="px-3">-</span>
          <span className="">{passport}</span>
        </p>
        <p>
          <span className="text-secondary-blue font-bold">Nationality</span>
          <span className="px-3">-</span>
          <span className="">{nationality}</span>
        </p>
        <p>
          <span className="text-secondary-blue font-bold">Country</span>
          <span className="px-3">-</span>
          <span className="">{country}</span>
        </p>
        <p>
          <span className="text-secondary-blue font-bold">
            Total publication
          </span>
          <span className="px-3">-</span>
          <span className="">{data1?.publication.length}</span>
        </p>
      </div>
      <div className="col-span-4 bg-primary-blue text-p-white p-5">
        <p className="text-2xl tracking-wider uppercase font-semibold text-center">
          Contact Info
        </p>
        <br />
        <p>
          <span className="font-medium">Email</span>
          <span className="px-3">-</span>
          <span className="">{email}</span>
        </p>
        <p>
          <span className="font-medium">Mobile</span>
          <span className="px-3">-</span>
          <span className="">{mobile}</span>
        </p>
        <p>
          <span className="font-medium">Social Media</span>
          <span className="px-3">-</span>
          <span className="">{social_media}</span>
        </p>
        <br />
        <p className="text-2xl tracking-wider uppercase font-semibold text-center">
          Address
        </p>
        <br />
        <p className="text-xl font-semibold">Present Address</p>
        <p>
          <span className="font-medium">Country</span>
          <span className="px-3">-</span>
          <span className="">{present_country}</span>
        </p>
        <p>
          <span className="font-medium">Division</span>
          <span className="px-3">-</span>
          <span className="">{present_state_division}</span>
        </p>
        <p>
          <span className="font-medium">Thana</span>
          <span className="px-3">-</span>
          <span className="">{present_thana}</span>
        </p>
        <p>
          <span className="font-medium">City</span>
          <span className="px-3">-</span>
          <span className="">{present_city}</span>
        </p>
        <p>
          <span className="font-medium">Zip Code</span>
          <span className="px-3">-</span>
          <span className="">{present_zip_code}</span>
        </p>
        <p>
          <span className="font-medium">Street</span>
          <span className="px-3">-</span>
          <span className="">{present_street1}</span>
          <span className="">{present_street2}</span>
        </p>
        <br />
        <p className="text-xl font-semibold">Permanent Address</p>
        <p>
          <span className="font-medium">Country</span>
          <span className="px-3">-</span>
          <span className="">{permanent_country}</span>
        </p>
        <p>
          <span className="font-medium">Division</span>
          <span className="px-3">-</span>
          <span className="">{permanent_state_division}</span>
        </p>
        <p>
          <span className="font-medium">Thana</span>
          <span className="px-3">-</span>
          <span className="">{permanent_thana}</span>
        </p>
        <p>
          <span className="font-medium">City</span>
          <span className="px-3">-</span>
          <span className="">{permanent_city}</span>
        </p>
        <p>
          <span className="font-medium">Zip Code</span>
          <span className="px-3">-</span>
          <span className="">{permanent_zip_code}</span>
        </p>
        <p>
          <span className="font-medium">Street</span>
          <span className="px-3">-</span>
          <span className="">{permanent_street1}</span>
          <span className="">{permanent_street2}</span>
        </p>
      </div>
    </div>
  );
};

export default TpersonalInfo;
