/* eslint-disable react/prop-types */
import { RxCross1 } from "react-icons/rx";
import { useUpdateProgramMutation } from "../../../features/programs/programApi";
import { useEffect } from "react";
import toast from "react-hot-toast";

const ProgramEditModal = ({ program, setModal }) => {
  const [updateProgram, { isLoading, isSuccess, isError, error }] =
    useUpdateProgramMutation();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const programCode = form.programCode.value;
    const programName = form.programName.value;
    const programType = form.programType.value;
    const programLevel = form.programLevel.value;
    const programDuration = form.programDuration.value;
    const shiftsInputArr = document.getElementsByName("shifts");
    const shifts = [];

    for (let index = 0; index < shiftsInputArr.length; index++) {
      if (shiftsInputArr[index].checked === true) {
        shifts.push(shiftsInputArr[index].value);
      }
    }

    const data = {
      programCode,
      programName,
      programType,
      programLevel,
      programDuration,
      shifts,
    };

    console.log(data);
    updateProgram(data);
    form.reset();
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Faculty successfully updated");
    } else if (isError) {
      console.log(error);
      toast.error(error.data?.message);
    }
  }, [isError, isSuccess]);

  return (
    <>
      <div
        onClick={() => setModal(false)}
        className="bg-black/30 fixed top-0 z-50 left-0 w-full h-screen gap-5 text-gray-900 p-5 grid place-items-center"
      ></div>
      <section className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 p-6 bg-white rounded-md shadow-md dark:bg-gray-800">
        <div className="relative">
          <span
            onClick={() => {
              setModal(false);
            }}
            className="absolute -top-2 -right-2 hover:bg-black/10 cursor-pointer transition-colors duration-300 p-2 rounded-full"
          >
            <RxCross1 />
          </span>
          <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
            Edit Program
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 lg:grid-cols-3">
              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  htmlFor="programLevel"
                >
                  Program Level
                </label>
                <select
                  name="programLevel"
                  id="programLevel"
                  required
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                >
                  <option value="">Select Program Level</option>
                  <option
                    value="Undergaduate"
                    selected={program.programLevel === "Undergraduate"}
                  >
                    Undergaduate
                  </option>
                  <option
                    selected={program.programLevel === "Graduate"}
                    value="Graduate"
                  >
                    Graduate
                  </option>
                </select>
              </div>
              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  htmlFor="programType"
                >
                  Program Type
                </label>
                <select
                  name="programType"
                  id="programType"
                  required
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                >
                  <option value="">Select Program Type</option>
                  <option
                    value="Bachelor"
                    selected={program.programType === "Bachelor"}
                  >
                    Bachelor
                  </option>
                  <option
                    value="Masters"
                    selected={program.programType === "Masters"}
                  >
                    Masters
                  </option>
                </select>
              </div>
              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  htmlFor="programCode"
                >
                  Program Code
                </label>
                <input
                  name="programCode"
                  id="programCode"
                  required
                  placeholder="Type here"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  defaultValue={program?.programCode}
                />
              </div>

              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  htmlFor="programName"
                >
                  Program Name
                </label>
                <input
                  name="programName"
                  id="programName"
                  required
                  placeholder="Type here"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  defaultValue={program?.programName}
                />
              </div>
              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  htmlFor="programDuration"
                >
                  Program Duration
                </label>
                <input
                  name="programDuration"
                  id="programDuration"
                  required
                  placeholder="Type here"
                  type="number"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  defaultValue={program?.programDuration.split(" ")[0]}
                />
              </div>
              <div>
                <label className="text-gray-700 dark:text-gray-200">
                  Program Shifts
                </label>
                <div className="flex items-center px-4 py-2 mt-2 gap-10">
                  <div className="flex items-center gap-2">
                    <input
                      name="shifts"
                      id="day"
                      required
                      placeholder="Type here"
                      type="checkbox"
                      value="Day"
                      className="text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                      checked={program.shifts.find((s) => s === "Day")}
                    />
                    <label
                      htmlFor="day"
                      className="text-gray-700 dark:text-gray-200"
                    >
                      Day
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      name="shifts"
                      id="evening"
                      required
                      placeholder="Type here"
                      type="checkbox"
                      value="Evening"
                      className="text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                      checked={program.shifts.find((s) => s === "Evening")}
                    />
                    <label
                      htmlFor="evening"
                      className="text-gray-700 dark:text-gray-200"
                    >
                      Evening
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-end mt-6">
              <button
                disabled={isLoading}
                type="submit"
                className="px-8 py-2.5 leading-5 text-primary-white transition-colors duration-300 transform bg-primary-blue rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default ProgramEditModal;
