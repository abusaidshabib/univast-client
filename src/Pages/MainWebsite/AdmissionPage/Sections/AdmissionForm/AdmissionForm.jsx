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
    // console.log(data)
    // console.log(errors)

    const admissionData = {
      general: {
        applicant_type: data.applicant_type || "",
        program_type: data.program_type || "",
        last_complete_degree_type: data.last_complete_degree_type || "",
        program: data.program || "",
        education_shift: data.education_shift || "",
        admission_test_venue: data.admission_test_venue || "",
      },
      personal: {
        firstName: data.firstName || "",
        lastName: data.lastName || "",
        gender: data.gender || "",
        birth_date: data.birth_date || "",
        religion: data.religion || "",
        marital: data.marital || "",
        email: data.email || "",
        mobile: data.mobile || "",
        nid_Birth_certificate: data.nid_Birth_certificate || "",
        passport: data.passport || "",
        nationality: data.nationality || "",
        country: data.country || "",
        social_media: data.social_media || "",
        image: "",
        signature: "",
        address: {
          present_address: {
            present_country: data.present_country || "",
            present_state_division: data.present_state_division || "",
            present_thana: data.present_thana || "",
            present_city: data.present_city || "",
            present_zip_code: data.present_zip_code || "",
            present_street1: data.present_street1 || "",
            present_street2: data.present_street2 || "",
          },
          permanent_address: {
            permanent_country: data.permanent_country || "",
            permanent_state_division: data.permanent_state_division || "",
            permanent_thana: data.permanent_thana || "",
            permanent_city: data.permanent_city || "",
            permanent_zip_code: data.permanent_zip_code || "",
            permanent_street1: data.permanent_street1 || "",
            permanent_street2: data.permanent_street2 || "",
          }
        }
      },
      family: {
        father: {
          father_name: data.father_name || "",
          father_mobile: data.father_mobile || "",
          father_email: data.father_email || "",
          father_nid: data.father_nid || "",
          father_passport: data.father_passport || "",
          father_dob: data.father_dob || "",
          father_age: data.father_age || 0,
          father_occupation: data.father_occupation || "",
          father_company: data.father_company || "",
          father_designation: data.father_designation || "",
          father_income: data.father_income || 0,
        },
        mother: {
          mother_name: data.mother_name || "",
          mother_mobile: data.mother_mobile || "",
          mother_email: data.mother_email || "",
          mother_nid: data.mother_nid || "",
          mother_passport: data.mother_passport || "",
          mother_dob: data.mother_dob || "",
          mother_age: data.mother_age || 0,
          mother_occupation: data.mother_occupation || "",
          mother_company: data.mother_company || "",
          mother_designation: data.mother_designation || "",
          mother_income: data.mother_income || 0,
        }
      },
      education: [
        {
          exam: data.exam || "",
          institution_name: data.institution_name || "",
          board: data.board || "",
          group_major: data.group_major || "",
          result: data.result || "",
          passing_year: data.passing_year || "",
          certificates: "",
        },
        {
          exam: data.exam || "",
          institution_name: data.institution_name || "",
          board: data.board || "",
          group_major: data.group_major || "",
          result: data.result || "",
          passing_year: data.passing_year || "",
          certificates: "",
        }
      ],
      others: {
        is_parents_freedom_fighter: data.is_parents_freedom_fighter || false,
        is_tribal: data.is_tribal || false,
        is_physical_disorder: data.is_physical_disorder || false,
        is_first_division_player: data.is_first_division_player || false,
        accept_declaration: data.accept_declaration || false,
        accept_terms: data.accept_terms || false,
      }
    }

    console.log(admissionData);
    console.log(import.meta.env.VITE_SERVER_URL)

    fetch(`${import.meta.env.VITE_SERVER_URL}/admission`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(admissionData),
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch((err) => console.log(err.message))
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
    <div className="px-20 py-5 bg-primary-blue">
      <div className="py-10 grid grid-cols-5 gap-5">
        {steps.map((step, index) => (
          <button
            key={index}
            className={`${currentStep === index ? "bg-primary-white" : "bg-secondary-blue text-primary-white"
              } py-5 rounded-md text-2xl font-semibold text-primary-gray`}
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
              className="bg-tertiary-blue py-3 rounded-md text-lg text-primary-white border-b-6 px-10"
              type="button"
              onClick={handlePrev}
            >
              Prev
            </button>
          )}
          <span className="px-5"></span>
          {currentStep < steps.length - 1 ? (
            <button
              className="bg-tertiary-blue py-3 px-10 rounded-md text-lg text-primary-white border-b-6"
              type="button"
              onClick={handleNext}
            >
              Next
            </button>
          ) : (
            <input
              className="bg-tertiary-blue py-3 px-10 rounded-md text-lg text-primary-white border-b-6 cursor-pointer"
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
