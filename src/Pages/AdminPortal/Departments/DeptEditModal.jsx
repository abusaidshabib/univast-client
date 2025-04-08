/* eslint-disable react/prop-types */
import { RxCross1 } from "react-icons/rx";
import { useUpdateDepartmentMutation } from "../../../features/department/department";
import { useEffect } from "react";
import toast from "react-hot-toast";

const DeptEditModal = ({ department, setModal }) => {
  const [updateDepartment, { isLoading, isSuccess, isError, error }] =
    useUpdateDepartmentMutation();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const facultyCode = form.facultyCode;
    const departmentCode = form.departmentCode;
    const departmentName = form.departmentName;

    const data = {
      facultyCode,
      departmentCode,
      departmentName,
    };

    console.log(data);
    updateDepartment(data);
    form.reset();
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Department successfully edited");
      setModal(false);
    } else if (isError) {
      toast.error(error.data?.message);
    }
  }, [isError, isSuccess]);

  return (
    <>
      <div
        onClick={() => setModal(false)}
        className="bg-black/30 fixed top-0 z-50 left-0 w-full h-screen gap-5 text-gray-900 p-5 grid place-items-center"
      ></div>
      <section className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 p-6 bg-white rounded-md shadow-md">
        <div className="relative">
          <span
            onClick={() => {
              setModal(false);
            }}
            className="absolute -top-2 -right-2 hover:bg-black/10 cursor-pointer transition-colors duration-300 p-2 rounded-full"
          >
            <RxCross1 />
          </span>
          <h2 className="text-lg font-semibold text-gray-700 capitalize">
            Edit Department
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 lg:grid-cols-3">
              <div>
                <label
                  className="text-gray-700"
                  htmlFor="departmentCode"
                >
                  Department Code
                </label>
                <input
                  name="departmentCode"
                  id="departmentCode"
                  required
                  placeholder="Type here"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                  defaultValue={department?.departmentCode}
                />
              </div>

              <div>
                <label
                  className="text-gray-700"
                  htmlFor="departmentName"
                >
                  Department Name
                </label>
                <input
                  name="departmentName"
                  id="departmentName"
                  required
                  placeholder="Type here"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                  defaultValue={department?.departmentName}
                />
              </div>
            </div>

            <div className="flex justify-end mt-6">
              <button
                disabled={isLoading}
                type="submit"
                className="px-8 py-2.5 leading-5 text-primary-white transition-colors duration-300 transform bg-primary-blue rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default DeptEditModal;
