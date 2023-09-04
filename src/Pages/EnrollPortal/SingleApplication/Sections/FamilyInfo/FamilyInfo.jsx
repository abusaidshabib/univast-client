// eslint-disable-next-line react/prop-types
const FamilyInfo = ({ data }) => {
  const {
    father_name,
    father_mobile,
    father_email,
    father_nid,
    father_passport,
    father_dob,
    father_age,
    father_occupation,
    father_designation,
    father_company,
    father_income,
    // eslint-disable-next-line no-unsafe-optional-chaining, react/prop-types
  } = data?.father;
  const {
    mother_name,
    mother_mobile,
    mother_email,
    mother_nid,
    mother_passport,
    mother_dob,
    mother_age,
    mother_occupation,
    mother_designation,
    mother_company,
    mother_income,
    // eslint-disable-next-line no-unsafe-optional-chaining, react/prop-types
  } = data?.mother;

  return (
    <div className="font-medium p-5">
      <p className="text-2xl tracking-wider uppercase font-semibold text-center">
        Family Info
      </p>
      <div className="bg-white grid grid-cols-2 gap-5">
        <div>
          <br />
          <p className="text-xl font-semibold">Father</p>
          <br />
          <p>
            <span className="text-secondary-blue font-bold">Father Name</span>
            <span className="px-3">-</span>
            <span className="">{father_name}</span>
          </p>
          <p>
            <span className="text-secondary-blue font-bold">Father Mobile</span>
            <span className="px-3">-</span>
            <span className="">{father_mobile}</span>
          </p>
          <p>
            <span className="text-secondary-blue font-bold">Father Email</span>
            <span className="px-3">-</span>
            <span className="">{father_email}</span>
          </p>
          <p>
            <span className="text-secondary-blue font-bold">Father NID</span>
            <span className="px-3">-</span>
            <span className="">{father_nid}</span>
          </p>
          <p>
            <span className="text-secondary-blue font-bold">
              Father Passport
            </span>
            <span className="px-3">-</span>
            <span className="">{father_passport}</span>
          </p>
          <p>
            <span className="text-secondary-blue font-bold">Father DOB</span>
            <span className="px-3">-</span>
            <span className="">{father_dob}</span>
          </p>
          <p>
            <span className="text-secondary-blue font-bold">Father Age</span>
            <span className="px-3">-</span>
            <span className="">{father_age}</span>
          </p>
          <p>
            <span className="text-secondary-blue font-bold">
              Father Occupation
            </span>
            <span className="px-3">-</span>
            <span className="">{father_occupation}</span>
          </p>
          <p>
            <span className="text-secondary-blue font-bold">
              Father Designation
            </span>
            <span className="px-3">-</span>
            <span className="">{father_designation}</span>
          </p>
          <p>
            <span className="text-secondary-blue font-bold">
              Father Company
            </span>
            <span className="px-3">-</span>
            <span className="">{father_company}</span>
          </p>
          <p>
            <span className="text-secondary-blue font-bold">Father Income</span>
            <span className="px-3">-</span>
            <span className="">{father_income}</span>
          </p>
        </div>
        <div>
          <br />
          <p className="text-xl font-semibold">Mother</p>
          <br />
          <p>
            <span className="text-secondary-blue font-bold">Mother Name</span>
            <span className="px-3">-</span>
            <span className="">{mother_name}</span>
          </p>
          <p>
            <span className="text-secondary-blue font-bold">Mother Mobile</span>
            <span className="px-3">-</span>
            <span className="">{mother_mobile}</span>
          </p>
          <p>
            <span className="text-secondary-blue font-bold">Mother Email</span>
            <span className="px-3">-</span>
            <span className="">{mother_email}</span>
          </p>
          <p>
            <span className="text-secondary-blue font-bold">Mother NID</span>
            <span className="px-3">-</span>
            <span className="">{mother_nid}</span>
          </p>
          <p>
            <span className="text-secondary-blue font-bold">
              mother Passport
            </span>
            <span className="px-3">-</span>
            <span className="">{mother_passport}</span>
          </p>
          <p>
            <span className="text-secondary-blue font-bold">Mother DOB</span>
            <span className="px-3">-</span>
            <span className="">{mother_dob}</span>
          </p>
          <p>
            <span className="text-secondary-blue font-bold">Mother Age</span>
            <span className="px-3">-</span>
            <span className="">{mother_age}</span>
          </p>
          <p>
            <span className="text-secondary-blue font-bold">
              mother Occupation
            </span>
            <span className="px-3">-</span>
            <span className="">{mother_occupation}</span>
          </p>
          <p>
            <span className="text-secondary-blue font-bold">
              mother Designation
            </span>
            <span className="px-3">-</span>
            <span className="">{mother_designation}</span>
          </p>
          <p>
            <span className="text-secondary-blue font-bold">
              mother Company
            </span>
            <span className="px-3">-</span>
            <span className="">{mother_company}</span>
          </p>
          <p>
            <span className="text-secondary-blue font-bold">Mother Income</span>
            <span className="px-3">-</span>
            <span className="">{mother_income}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FamilyInfo;
