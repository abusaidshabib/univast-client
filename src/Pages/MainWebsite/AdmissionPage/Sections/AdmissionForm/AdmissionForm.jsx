/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import ApplyInfo from "./FormSections/ApplyInfo";
import PersonalInfo from "./FormSections/PersonalInfo";
import FamilyInfo from "./FormSections/FamilyInfo";
import EducationalInfo from "./FormSections/EducationalInfo";
import OtherInfo from "./FormSections/OtherInfo";

const AdmissionForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSave = (data) =>{
    console.log(data)

    fetch(`${import.meta.env.SERVER_URL}/admission/post`)
    .then(res => res.json())
    .then(data => console.log(data.data))
  }

  return (
    <div className="px-20 py-5 bg-background-500">
      <div className="py-10 grid grid-cols-5 gap-5">
        <button className="bg-primary-500 py-5 rounded-md text-2xl text-p-white">
          General
        </button>
        <button className="bg-primary-500 py-5 rounded-md text-2xl text-p-white">
          Personal
        </button>
        <button className="bg-primary-500 py-5 rounded-md text-2xl text-p-white">
          Family
        </button>
        <button className="bg-primary-500 py-5 rounded-md text-2xl text-p-white">
          Educational
        </button>
        <button className="bg-primary-500 py-5 rounded-md text-2xl text-p-white">
          Others
        </button>
      </div>
      <form
        className="pb-10"
        onSubmit={handleSubmit(handleSave)}
      >
        <ApplyInfo register={register} errors={errors}/>
        <PersonalInfo register={register} errors={errors}/>
        <FamilyInfo register={register} errors={errors}/>
        <EducationalInfo register={register} errors={errors}/>
        <OtherInfo register={register} errors={errors}/>

        <div className="py-10">
          <input
            className="bg-primary-800 py-3 rounded-md text-lg text-p-white border-b-6 border-primary-900 px-10"
            type="submit"
            value="Prev"
          />
          <span className="px-5"></span>
          <input
            className="bg-primary-800 py-3 px-10 rounded-md text-lg text-p-white border-b-6 border-primary-900"
            type="submit"
            value="Next"
          />
        </div>
      </form>
    </div>
  );
};

export default AdmissionForm;
