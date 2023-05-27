import { useForm } from "react-hook-form";

const AdmissionForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="p-20 bg-background-500">
      <p className="font-serif text-4xl text-p-white">Apply Information</p>
      <form className="py-10" onSubmit={handleSubmit((data) => console.log(data))}>
        <input {...register("firstName")} />
        <input {...register("lastName", { required: true })} />
        {errors.lastName && <p>Last name is required.</p>}
        <input {...register("age", { pattern: /\d+/ })} />
        {errors.age && <p>Please enter number for age.</p>}
        <input type="submit" />
      </form>
    </div>
  );
};

export default AdmissionForm;
