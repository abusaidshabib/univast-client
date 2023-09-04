/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const EducationInfo = ({ data }) => {
  return (
    <div className="bg-white p-5">
      <p className="text-2xl tracking-wider uppercase font-semibold text-center">
        Education
      </p>
      <div className="grid grid-cols-2">
        {data?.map((edu, index) => (
          <div key={index}>
            <br />
            <p className="text-xl font-semibold pb-2">{edu?.exam}</p>
            <p>
              <span className="text-secondary-blue font-bold">Exam Name</span>
              <span className="px-3">-</span>
              <span className="">{edu?.exam}</span>
            </p>
            <p>
              <span className="text-secondary-blue font-bold">
                Institution Name
              </span>
              <span className="px-3">-</span>
              <span className="">{edu?.institution_name}</span>
            </p>
            <p>
              <span className="text-secondary-blue font-bold">Board</span>
              <span className="px-3">-</span>
              <span className="">{edu?.board}</span>
            </p>
            <p>
              <span className="text-secondary-blue font-bold">Group Major</span>
              <span className="px-3">-</span>
              <span className="">{edu?.group_major}</span>
            </p>
            <p>
              <span className="text-secondary-blue font-bold">Result</span>
              <span className="px-3">-</span>
              <span className="">{edu?.result}</span>
            </p>
            <p>
              <span className="text-secondary-blue font-bold">
                Passing Year
              </span>
              <span className="px-3">-</span>
              <span className="">{edu?.passing_year}</span>
            </p>
            <p>
              <span className="text-secondary-blue font-bold">Certificate</span>
              <span className="px-3">-</span>
              {/* <span className="">{edu?.certificates}</span> */}
              <Link
                className="text-blue-600 font-semibold text-base underline hover:no-underline"
                to={edu?.certificates}
              >
                View
              </Link>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationInfo;
