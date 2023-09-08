import { NavLink, Outlet } from "react-router-dom";

const LecturerApplicationForm = () => {

  const steps = ["Personal", "Educational", "Experiences", "Publications", "Others"];

  return (
    <div className="px-20 py-5 bg-primary-blue">
      <div className="py-10 grid grid-cols-5 gap-5 admission-steps">
        {steps.map((step, index) => (
          <NavLink
          to={step.toLowerCase()}
            key={index}
            className="bg-secondary-blue text-primary-white py-5 rounded-md text-2xl font-semibold text-center"
          >
            {step}
          </NavLink>
        ))}
      </div>
      <Outlet/>
    </div>
  );
};

export default LecturerApplicationForm;
