import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useGetDepartmentsQuery } from "../../../features/department/department";
import DeptRow from "./DeptRow";

const Departments = () => {
  const { data: departments } = useGetDepartmentsQuery();
  return (
    <div className="min-h-[calc(100vh-80px)] w-full bg-gray-200 p-5 font-sans">
      <div className="p-10 bg-white">
        <div className="flex items-center justify-between gap-x-3">
          <div className="flex items-center gap-x-3">
            <h2 className="text-4xl font-semibold">Departments</h2>
            <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full">
              {departments?.data?.length} Departments
            </span>
          </div>
          <div>
            <Link
              className="bg-primary-blue rounded-md hover:bg-gray-600 text-primary-white px-5 py-3 flex items-center gap-2"
              to="/admin/createDepartment"
            >
              <span>
                <FiPlus size={18} />
              </span>
              Create Department
            </Link>
          </div>
        </div>

        <div className="flex flex-col mt-6">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                <table className="min-w-full border-collapse w-full text-lg bg-p-white">
                  <thead className="bg-gray-50 text-sm uppercase font-normal tracking-wider">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 px-4 text-left rtl:text-right text-gray-500"
                      >
                        <span>Department Code</span>
                      </th>

                      <th
                        scope="col"
                        className="px-12 py-3.5 text-left rtl:text-right text-gray-500"
                      >
                        Department Name
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left rtl:text-right text-gray-500"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {departments?.data?.map((department, i) => (
                      <DeptRow key={i} department={department}></DeptRow>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Departments;
