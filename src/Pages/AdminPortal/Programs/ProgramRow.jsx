import { useEffect, useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import ProgramEditModal from "./ProgramEditModal";
import { useDeleteProgramMutation } from "../../../features/programs/programApi";
import toast from "react-hot-toast";

/* eslint-disable react/prop-types */
const ProgramRow = ({ program }) => {
  const [isModal, setModal] = useState(false);
  const [deleteProgram, { isSuccess, isError, error }] =
    useDeleteProgramMutation();

  const handleDelete = (programCode) => {
    if (confirm("Are you sure?")) {
      deleteProgram(programCode);
    }
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Program successfully removed");
    } else if (isError) {
      toast.error(error.data?.message);
    }
  }, [isError, isSuccess]);

  return (
    <>
      {isModal && (
        <ProgramEditModal
          program={program}
          setModal={setModal}
        ></ProgramEditModal>
      )}
      <tr key={program._id}>
        <td className="px-12 py-4 text-sm text-gray-500 whitespace-nowrap">
          {program.programCode}
        </td>
        <td className="px-12 py-4 text-sm text-gray-500 whitespace-nowrap">
          {program.programName}
        </td>
        <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
          {program.programType}
        </td>
        <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
          {program.programLevel}
        </td>
        <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
          {program.programDuration}
        </td>
        <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
          <div className="flex items-center gap-x-6">
            <button className="text-gray-500 transition-colors duration-200 hover:text-red-500 focus:outline-none text-xl">
              <AiOutlineEdit onClick={() => setModal(true)} />
            </button>
            <button className="text-gray-500 transition-colors duration-200 hover:text-red-500 focus:outline-none text-xl">
              <RiDeleteBin6Line
                onClick={() => handleDelete(program.programCode)}
              />
            </button>
          </div>
        </td>
      </tr>
    </>
  );
};

export default ProgramRow;
