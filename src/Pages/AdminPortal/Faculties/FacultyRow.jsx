/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import FaqEditModal from "./FaqEditModal";
import { useDeleteFacultyMutation } from "../../../features/faculty/facultyApi";
import toast from "react-hot-toast";

const FacultyRow = ({ faculty }) => {
  const [isModal, setModal] = useState(false);
  const [deleteFaculty, { isSuccess, isError, error }] =
    useDeleteFacultyMutation();

  const handleDelete = (facultyCode) => {
    if (confirm("Are you sure?")) {
      deleteFaculty(facultyCode);
    }
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Faculty successfully removed");
    } else if (isError) {
      toast.error(error.data.message);
    }
  }, [isError, isSuccess]);
  return (
    <>
      {isModal && (
        <FaqEditModal faculty={faculty} setModal={setModal}></FaqEditModal>
      )}
      <tr key={faculty._id}>
        <td className="px-12 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
          {faculty.facultyCode}
        </td>
        <td className="px-12 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
          {faculty.facultyName}
        </td>
        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
          {faculty.contactNumber}
        </td>
        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
          {faculty.email}
        </td>
        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
          <div className="flex items-center gap-x-6">
            <button className="text-gray-500 transition-colors duration-200 dark:hover:text-red-500 dark:text-gray-300 hover:text-red-500 focus:outline-none text-xl">
              <AiOutlineEdit onClick={() => setModal(true)} />
            </button>
            <button className="text-gray-500 transition-colors duration-200 dark:hover:text-red-500 dark:text-gray-300 hover:text-red-500 focus:outline-none text-xl">
              <RiDeleteBin6Line
                onClick={() => handleDelete(faculty.facultyCode)}
              />
            </button>
          </div>
        </td>
      </tr>
    </>
  );
};

export default FacultyRow;
