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

  const [status, setStatus] = useState(true);
 

  return (
    <div className="bg-gray-200 w-full min-h-screen p-5 font-semibold">
      <div className="flex justify-between items-center text-gray-900">
        <div>
          <p className="text-4xl pb-5 font-semibold">Apply Information</p>
        </div>
        <div>
          <AiFillEdit
            onClick={() => setStatus(!status)}
            className={`text-2xl ${!status ? "text-blue-600" : ""} `}
          />
        </div>
      </div>
      <form
        className="bg-white p-10 grid gap-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="grid grid-cols-3 items-center border-b">
          <label className="text-2xl col-span-1" htmlFor="firstname">
            Name
          </label>
          <input
            className={`w-full outline-none py-5 text-xl font-normal rounded-md col-span-2 ${
              status ? "bg-transparent" : "bg-gray-200 px-5"
            }`}
            type="text"
            disabled={status}
            defaultValue="Golam"
            {...register("firstname", { required: true })}
          />
        </div>
        <div>
          <label className="text-2xl" htmlFor="firstname">
            Last Name
          </label>
          <input
            className={`w-full outline-none py-5 text-xl font-normal rounded-md ${
              status ? "bg-transparent" : "bg-gray-200 px-5"
            }`}
            type="text"
            disabled={status}
            defaultValue="Mehedi"
            {...register("firstname", { required: true })}
          />
          <br />
        </div>
        <input type="submit" />
      </form>
    </div>
  );
};

export default Ssetting;