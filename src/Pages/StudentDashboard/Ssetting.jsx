import { useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillEdit } from "react-icons/ai";

const Ssetting = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  const [status, setState] = useState(true)

  return (
    <div className="bg-gray-200 w-full min-h-screen p-5 font-semibold">
      <div className="flex justify-between items-center pb-5 text-gray-900">
        <div>
          <p className="text-4xl pb-5 font-semibold">Apply Information</p>
        </div>
        <div>
          <AiFillEdit className="text-2xl" />
        </div>
      </div>
      <form
        className="bg-white p-5 grid grid-cols-3"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <label className="text-2xl leading-loose">
            First Name
          </label>
          <br />
          <input
            className="w-full bg-gray-200 outline-none py-5 px-5 text-xl font-normal rounded-md"
            placeholder="First Name"
            type="text"
            {...register("firstname", { required: true })}
          />
          <br />
        </div>
        <input
          type="text"
          placeholder="Last name"
          {...register("Last name", { required: true, maxLength: 100 })}
        />
        <input
          type="text"
          placeholder="Email"
          {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        <input
          type="tel"
          placeholder="Mobile number"
          {...register("Mobile number", {
            required: true,
            minLength: 6,
            maxLength: 12,
          })}
        />
        <select {...register("Title", { required: true })}>
          <option value="Mr">Mr</option>
          <option value="Mrs">Mrs</option>
          <option value="Miss">Miss</option>
          <option value="Dr">Dr</option>
        </select>

        <input
          {...register("Developer", { required: true })}
          type="radio"
          value="Yes"
        />
        <input
          {...register("Developer", { required: true })}
          type="radio"
          value="No"
        />

        <input type="submit" />
      </form>
    </div>
  );
};

export default Ssetting;