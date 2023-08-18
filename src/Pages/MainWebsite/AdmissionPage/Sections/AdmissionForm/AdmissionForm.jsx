/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import ApplyInfo from "./FormSections/ApplyInfo";
import PersonalInfo from "./FormSections/PersonalInfo";
import FamilyInfo from "./FormSections/FamilyInfo";
import EducationalInfo from "./FormSections/EducationalInfo";
import OtherInfo from "./FormSections/OtherInfo";
import { useState } from "react";

const steps = [
  { component: ApplyInfo, title: "General" },
  { component: PersonalInfo, title: "Personal" },
  { component: FamilyInfo, title: "Family" },
  { component: EducationalInfo, title: "Educational" },
  { component: OtherInfo, title: "Others" },
];

const AdmissionForm = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSave = (data) =>{
    console.log(data)

    // fetch(`${import.meta.env.SERVER_URL}/admission/createAdmission`)
    // .then(res => res.json())
    // .then(data => console.log(data.data))
  }

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const CurrentStepComponent = steps[currentStep];

  return (
    <div className="px-20 py-5 bg-background-500">
      <div className="py-10 grid grid-cols-5 gap-5">
        {steps.map((step, index) => (
          <button
            key={index}
            className={`${currentStep === index ? "bg-primary-500" : "bg-primary-700"
              } py-5 rounded-md text-2xl text-p-white`}
            onClick={() => setCurrentStep(index)}
          >
            {step.title}
          </button>
        ))}
      </div>
      <form className="pb-10" onSubmit={handleSubmit(handleSave)}>
        {steps[currentStep].component({
          register,
          errors,
        })}

        <div className="py-10">
          {currentStep > 0 && (
            <button
              className="bg-primary-800 py-3 rounded-md text-lg text-p-white border-b-6 border-primary-900 px-10"
              type="button"
              onClick={handlePrev}
            >
              Prev
            </button>
          )}
          <span className="px-5"></span>
          {currentStep < steps.length - 1 ? (
            <button
              className="bg-primary-800 py-3 px-10 rounded-md text-lg text-p-white border-b-6 border-primary-900"
              type="button"
              onClick={handleNext}
            >
              Next
            </button>
          ) : (
            <input
              className="bg-primary-800 py-3 px-10 rounded-md text-lg text-p-white border-b-6 border-primary-900"
              type="submit"
              value="Submit"
            />
          )}
        </div>
      </form>
    </div>
  );
};

export default AdmissionForm;
