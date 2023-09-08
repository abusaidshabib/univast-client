import { Link } from "react-router-dom";

const EnrollHome = () => {
    return (
      <div className="min-h-screen grid place-items-center">
        <Link to="/" className="flex items-center cursor-pointer">
          <span className="text-primary-blue cursor-pointer text-7xl font-bold pr-2">
            UNI
          </span>
          <span className="border-l-4 border-primary-orange pl-2">
            <span className="text-accent-blue cursor-pointer font-semibold text-4xl leading-none">
              VAST
            </span>{" "}
            <br />
            <span className="text-primary-blue cursor-pointer leading-none text-3xl">
              University
            </span>
          </span>
        </Link>
      </div>
    );
};

export default EnrollHome;