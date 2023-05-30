const SPaymentForm = () => {
  return (
    <div className="bg-white rounded-lg p-10">
      <p className="text-4xl font-semibold">Student Payment slip</p>

      <div className="py-10 grid grid-cols-2 gap-10">
        <div className="flex items-center justify-between">
          <label className="text-xl font-semibold col-span-1">
            Semester Name:{" "}
          </label>
          <select
            className="p-3 w-1/2 bg-transparent border-b-2 border-primary-700 outline-none"
            name=""
          >
            <option className="" value="" selected>
              Select Semester
            </option>
            <option className="" value="">
              Fall - 2022 [Four Month]
            </option>
          </select>
        </div>
        <div className="flex items-center justify-between">
          <label className="text-xl font-semibold col-span-1">
            Payment Type:{" "}
          </label>
          <select
            className="p-3 w-1/2 bg-transparent border-b-2 border-primary-700 outline-none col-span-2"
            name=""
          >
            <option className="" value="" selected>
              Select Semester
            </option>
            <option className="" value="">
              Tuition Fees
            </option>
          </select>
        </div>
        <div className="flex items-center justify-between">
          <label className="text-xl font-semibold col-span-1">
            Purpose of Payment:{" "}
          </label>
          <select
            className="p-3 w-1/2 bg-transparent border-b-2 border-primary-700 outline-none col-span-2"
            name=""
          >
            <option className="" value="" selected>
              Select Semester
            </option>
            <option className="" value="">
              Mid Term - Fall
            </option>
          </select>
        </div>
        <div className="flex items-center justify-between">
          <label className="text-xl font-semibold col-span-1">
            Full or Half Payment:{" "}
          </label>
          <select
            className="p-3 w-1/2 bg-transparent border-b-2 border-primary-700 outline-none col-span-2"
            name=""
          >
            <option className="" value="" selected>
              Select Semester
            </option>
            <option className="" value="">
              Half Payment
            </option>
          </select>
        </div>
        <div className="flex items-center justify-between">
          <label className="text-xl font-semibold col-span-1">
            Amount:{" "}
          </label>
          <select
            className="p-3 w-1/2 bg-transparent border-b-2 border-primary-700 outline-none col-span-2"
            name=""
          >
            <option className="" value="" selected>
              Select Semester
            </option>
            <option className="" value="">
              7996
            </option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SPaymentForm;
