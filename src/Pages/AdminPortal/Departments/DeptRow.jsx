import { useEffect, useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import DeptEditModal from "./DeptEditModal";
import { useDeleteDepartmentMutation } from "../../../features/department/department";
import toast from "react-hot-toast";

/* eslint-disable react/prop-types */
const DeptRow = ({ department }) => {
  const [isModal, setModal] = useState(false);
  const [deleteDepartment, { isSuccess, isError, error }] =
    useDeleteDepartmentMutation();

  const handleDelete = (departmentCode) => {
    if (confirm("Are you sure?")) {
      deleteDepartment(departmentCode);
    }
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Department successfully removed");
    } else if (isError) {
      toast.error(error.data.message);
    }
  }, [isError, isSuccess]);

  return (
    <>
      {isModal && (
        <DeptEditModal
          department={department}
          setModal={setModal}
        ></DeptEditModal>
      )}
      <tr key={department._id}>
        <td className="px-12 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
          {department.departmentCode}
        </td>
        <td className="px-12 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
          {department.departmentName}
        </td>

        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
          <div className="flex items-center gap-x-6">
            <button className="text-gray-500 transition-colors duration-200 dark:hover:text-red-500 dark:text-gray-300 hover:text-red-500 focus:outline-none text-xl">
              <AiOutlineEdit onClick={() => setModal(true)} />
            </button>
            <button className="text-gray-500 transition-colors duration-200 dark:hover:text-red-500 dark:text-gray-300 hover:text-red-500 focus:outline-none text-xl">
              <RiDeleteBin6Line
                onClick={() => handleDelete(department.departmentCode)}
              />
            </button>
          </div>
        </td>
      </tr>
    </>
  );
};

export default DeptRow;
