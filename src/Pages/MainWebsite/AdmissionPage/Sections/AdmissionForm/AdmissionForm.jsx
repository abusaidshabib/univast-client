/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import ApplyInfo from "./FormSections/ApplyInfo";
import PersonalInfo from "./FormSections/PersonalInfo";
import FamilyInfo from "./FormSections/FamilyInfo";
import EducationalInfo from "./FormSections/EducationalInfo";
import OtherInfo from "./FormSections/OtherInfo";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  useGetProgramsByTypeQuery,
  useGetProgramsQuery,
} from "../../../../../features/programs/programApi";
import { usePostApplicationMutation } from "../../../../../features/application/applicationApi";
import { toast } from "react-hot-toast";
import { setCurrentStep } from "../../../../../features/application/applicationSlice";
import { NavLink, Outlet } from "react-router-dom";

const AdmissionForm = () => {
  // const dispatch = useDispatch()

  // const  steps = [
  //   { component: ApplyInfo, title: "General" },
  //   { component: PersonalInfo, title: "Personal" },
  //   { component: FamilyInfo, title: "Family" },
  //   { component: EducationalInfo, title: "Educational" },
  //   { component: OtherInfo, title: "Others" },
  // ]

  const steps = ["General", "Personal", "Family", "Educational", "Others"];

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  //   trigger
  // } = useForm();

  // const { admissionData, currentStep } = useSelector(
  //   (state) => state.application
  // );

  // let allprograms = useGetProgramsQuery();
  // allprograms = allprograms?.data?.data?.data;
  // const programTypes = Array.from(
  //   new Set(allprograms?.map((item) => item.programType))
  // );

  // let programs = useGetProgramsByTypeQuery(admissionData?.general.program_type);
  // programs = programs?.data?.data?.data;

  // const [postApplication, { isLoading, isError, error, isSuccess }] =
  //   usePostApplicationMutation();

  // useEffect(() => {
  //   if (isSuccess) {
  //     toast.success("Successfully Applied");
  //   }

  //   if (isError) {
  //     toast.error(error.data.message._message);
  //   }
  // }, [error, isError, isSuccess]);

  // const handleSave = async (data) => {
    // const admissionData = {
    //   general: {
    //     applicant_type: data.applicant_type || "",
    //     program_type: selectedProgramType || "",
    //     last_complete_degree_type: data.last_complete_degree_type || "",
    //     program: selectedProgram || "",
    //     education_shift: data.education_shift || "",
    //   },
    //   personal: {
    //     firstName: data.firstName || "",
    //     lastName: data.lastName || "",
    //     gender: data.gender || "",
    //     birth_date: data.birth_date || "",
    //     religion: data.religion || "",
    //     marital: data.marital || "",
    //     email: data.email || "",
    //     mobile: data.mobile || "",
    //     nid_Birth_certificate: data.nid_Birth_certificate || "",
    //     passport: data.passport || "",
    //     nationality: data.nationality || "",
    //     country: data.country || "",
    //     social_media: data.social_media || "",
    //     image: "",
    //     signature: "",
    //     address: {
    //       present_address: {
    //         present_country: data.present_country || "",
    //         present_state_division: data.present_state_division || "",
    //         present_thana: data.present_thana || "",
    //         present_city: data.present_city || "",
    //         present_zip_code: data.present_zip_code || "",
    //         present_street1: data.present_street1 || "",
    //         present_street2: data.present_street2 || "",
    //       },
    //       permanent_address: {
    //         permanent_country: data.permanent_country || "",
    //         permanent_state_division: data.permanent_state_division || "",
    //         permanent_thana: data.permanent_thana || "",
    //         permanent_city: data.permanent_city || "",
    //         permanent_zip_code: data.permanent_zip_code || "",
    //         permanent_street1: data.permanent_street1 || "",
    //         permanent_street2: data.permanent_street2 || "",
    //       },
    //     },
    //   },
    //   family: {
    //     father: {
    //       father_name: data.father_name || "",
    //       father_mobile: data.father_mobile || "",
    //       father_email: data.father_email || "",
    //       father_nid: data.father_nid || "",
    //       father_passport: data.father_passport || "",
    //       father_dob: data.father_dob || "",
    //       father_age: data.father_age || 0,
    //       father_occupation: data.father_occupation || "",
    //       father_company: data.father_company || "",
    //       father_designation: data.father_designation || "",
    //       father_income: data.father_income || 0,
    //     },
    //     mother: {
    //       mother_name: data.mother_name || "",
    //       mother_mobile: data.mother_mobile || "",
    //       mother_email: data.mother_email || "",
    //       mother_nid: data.mother_nid || "",
    //       mother_passport: data.mother_passport || "",
    //       mother_dob: data.mother_dob || "",
    //       mother_age: data.mother_age || 0,
    //       mother_occupation: data.mother_occupation || "",
    //       mother_company: data.mother_company || "",
    //       mother_designation: data.mother_designation || "",
    //       mother_income: data.mother_income || 0,
    //     },
    //   },
    //   education: [
    //     {
    //       exam: data.exam || "",
    //       institution_name: data.institution_name || "",
    //       board: data.board || "",
    //       group_major: data.group_major || "",
    //       result: data.result || "",
    //       passing_year: data.passing_year || "",
    //       certificates: "",
    //     },
    //   ],
    //   others: {
    //     is_parents_freedom_fighter: data.is_parents_freedom_fighter || false,
    //     is_tribal: data.is_tribal || false,
    //     is_physical_disorder: data.is_physical_disorder || false,
    //     is_first_division_player: data.is_first_division_player || false,
    //     accept_declaration: data.accept_declaration || false,
    //     accept_terms: data.accept_terms || false,
    //   },
    // };

    // console.log(admissionData);

    // postApplication(admissionData);
  // };

  // const handlePrev = () => {
  //   dispatch(setCurrentStep({type: "PREVIOUS", payload: steps}));
  // };

  // const handleNext = async () => {
  //   dispatch(setCurrentStep({ type: "NEXT", payload: steps }));
  // };

  // const CurrentStepComponent = steps[currentStep];

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
      {/* <form className="pb-10" onSubmit={handleSubmit(handleSave)}>
        {steps[currentStep].component({
          register,
          errors,
          programTypes,
          programs
        })}

        <div className="py-10 flex gap-8 items-center">
          {currentStep > 0 && (
            <button
              className="bg-tertiary-blue py-3 rounded-md text-lg text-primary-white border-b-6 px-10"
              type="button"
              onClick={handlePrev}
            >
              Prev
            </button>
          )}
          {currentStep < steps.length - 1 ? (
            <button
              className="bg-tertiary-blue py-3 px-10 rounded-md text-lg text-primary-white border-b-6"
              type="button"
              onClick={handleNext}
            >
              Next
            </button>
          ) : (
            <button
              className="bg-tertiary-blue py-3 px-10 rounded-md text-lg flex items-center gap-3 text-primary-white border-b-6 cursor-pointer"
              type="submit"
            >
              {isLoading ? (
                <>
                  <svg
                    aria-hidden="true"
                    role="status"
                    className="w-5 h-5 text-white animate-spin"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="#E5E7EB"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentColor"
                    />
                  </svg>
                  Saving...
                </>
              ) : (
                <>Submit</>
              )}
            </button>
          )}
        </div>
      </form> */}
    </div>
  );
};

export default AdmissionForm;
