import { useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillEdit } from "react-icons/ai";

const SProfileEditForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  const [status, setStatus] = useState(true);
  return (
    <form
      className="bg-white p-10 grid grid-cols-3 gap-10 rounded-lg"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex justify-between items-center text-gray-900 col-span-3">
        <div>
          <p className="text-4xl font-semibold">Apply Information</p>
        </div>
        <div>
          <AiFillEdit
            onClick={() => setStatus(!status)}
            className={`text-2xl ${!status ? "text-blue-600" : ""} `}
          />
        </div>
      </div>
      <p className="col-span-3 text-lg"> If you forgot your password then click <span className="text-blue-600 underline font-bold">Forgot password</span> and check your gmail
      </p>
      <div className="grid grid-cols-3 items-center border-b">
        <label className="text-lg col-span-1" htmlFor="firstname">
          First Name
        </label>
        <input
          className={`w-full outline-none py-2 text-lg font-normal col-span-2 bg-transparent ${
            status ? "" : "border-b-2 border-blue-600"
          }`}
          type="text"
          disabled={status}
          defaultValue="Golam"
          {...register("firstname", { required: true })}
        />
      </div>

      <div className="grid grid-cols-3 items-center border-b">
        <label className="text-lg col-span-1" htmlFor="lastname">
          Last Name
        </label>
        <input
          className={`w-full outline-none py-2 text-lg font-normal col-span-2 bg-transparent ${
            status ? "" : "border-b-2 border-blue-600"
          }`}
          type="text"
          disabled={status}
          defaultValue="Mehedi"
          {...register("lastname", { required: true })}
        />
      </div>

      <div className="grid grid-cols-3 items-center border-b">
        <label className="text-lg col-span-1" htmlFor="marital">
          Marital Status
        </label>
        <input
          className={`w-full outline-none py-2 text-lg font-normal col-span-2 bg-transparent ${
            status ? "" : "border-b-2 border-blue-600"
          }`}
          type="text"
          disabled={status}
          defaultValue="married"
          {...register("marital", { required: true })}
        />
      </div>
      <div className="grid grid-cols-3 items-center border-b">
        <label className="text-lg col-span-1" htmlFor="email">
          Email
        </label>
        <input
          className={`w-full outline-none py-2 text-lg font-normal col-span-2 bg-transparent ${
            status ? "" : "border-b-2 border-blue-600"
          }`}
          type="text"
          disabled={status}
          defaultValue="moiragesi@gmail.com"
          {...register("email", { required: true })}
        />
      </div>
      <div className="grid grid-cols-3 items-center border-b">
        <label className="text-lg col-span-1" htmlFor="mobile">
          Mobile Number
        </label>
        <input
          className={`w-full outline-none py-2 text-lg font-normal col-span-2 bg-transparent ${
            status ? "" : "border-b-2 border-blue-600"
          }`}
          type="text"
          disabled={status}
          defaultValue="0123456789123"
          {...register("mobile", { required: true })}
        />
      </div>
      <div className="grid grid-cols-3 items-center border-b">
        <label className="text-lg col-span-1" htmlFor="profile-image">
          Profile Image
        </label>
        <input
          className={`w-full outline-none py-2 text-lg font-normal col-span-2 bg-transparent ${
            status ? "" : "border-b-2 border-blue-600"
          }`}
          type="file"
          accept="image/*"
          disabled={status}
          {...register("profile-image", { required: true })}
        />
      </div>
      <p className="col-span-3 text-2xl underline">Present Address</p>
      <div className="grid grid-cols-3 items-center border-b">
        <label className="text-lg col-span-1" htmlFor="state-division">
          Division
        </label>
        <input
          className={`w-full outline-none py-2 text-lg font-normal col-span-2 bg-transparent ${
            status ? "" : "border-b-2 border-blue-600"
          }`}
          type="text"
          disabled={status}
          defaultValue="Panir tanki"
          {...register("state-division", { required: true })}
        />
      </div>
      <div className="grid grid-cols-3 items-center border-b">
        <label className="text-lg col-span-1" htmlFor="thana">
          Thana
        </label>
        <input
          className={`w-full outline-none py-2 text-lg font-normal col-span-2 bg-transparent ${
            status ? "" : "border-b-2 border-blue-600"
          }`}
          type="text"
          disabled={status}
          defaultValue="Panir tanki"
          {...register("thana", { required: true })}
        />
      </div>
      <div className="grid grid-cols-3 items-center border-b">
        <label className="text-lg col-span-1" htmlFor="city">
          city
        </label>
        <input
          className={`w-full outline-none py-2 text-lg font-normal col-span-2 bg-transparent ${
            status ? "" : "border-b-2 border-blue-600"
          }`}
          type="text"
          disabled={status}
          defaultValue="Biriyani house"
          {...register("city", { required: true })}
        />
      </div>
      <div className="grid grid-cols-3 items-center border-b">
        <label className="text-lg col-span-1" htmlFor="zip-code">
          Zip Code
        </label>
        <input
          className={`w-full outline-none py-2 text-lg font-normal col-span-2 bg-transparent ${
            status ? "" : "border-b-2 border-blue-600"
          }`}
          type="text"
          disabled={status}
          defaultValue="Biriyani house"
          {...register("zip-code", { required: true })}
        />
      </div>
      {!status ? (
        <input
          className="py-3 bg-gray-900 rounded-md text-white uppercase tracking-widest text-lg"
          type="submit"
        />
      ) : (
        <></>
      )}
    </form>
  );
};

export default SProfileEditForm;
