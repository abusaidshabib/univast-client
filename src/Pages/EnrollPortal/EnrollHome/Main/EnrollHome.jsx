import { FcBarChart, FcLineChart } from "react-icons/fc";
import { Link } from "react-router-dom";
import StudentByDeptBarChart from "../../../../Components/Buttons/StudentByDeptBarChart";
import students from "../../../../assets/admin-dashboard/student.svg";
import teachers from "../../../../assets/admin-dashboard/teacher.webp";
import departments from "../../../../assets/admin-dashboard/departments.svg";
import awards from "../../../../assets/admin-dashboard/awards.png";
import EnrolledStudentsBySemester from "../../../../Components/Buttons/EnrolledStudentsBySemester";

const EnrollHome = () => {
    return (
      <div className="p-8 bg-[#F5F5F8] min-h-[calc(100vh-80px)] text-gray-900">
        <div className="w-full flex justify-between mb-8">
          <h3 className="text-2xl font-medium">Welcome Admin!</h3>
          <p className="text-xl font-medium">
            <Link to="">Home</Link>
            <span className="text-gray-500"> / Admin</span>
          </p>
        </div>
        <div className="grid grid-cols-4 gap-7">
          <div className="bg-white rounded-xl p-6 flex justify-between items-center">
            <div>
              <p className="text-slate-500 text-lg mb-1">Students</p>
              <p className="text-3xl font-medium">50,000+</p>
            </div>
            <div className="bg-slate-100 rounded-md">
              <img src={students} />
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 flex justify-between items-center">
            <div>
              <p className="text-slate-500 text-lg mb-1">Teachers</p>
              <p className="text-3xl font-medium">150+</p>
            </div>
            <div className="bg-slate-100 rounded-md p-1 w-[58px]">
              <img src={teachers} />
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 flex justify-between items-center">
            <div>
              <p className="text-slate-500 text-lg mb-1">Departments</p>
              <p className="text-3xl font-medium">30+</p>
            </div>
            <div className="bg-slate-100 rounded-md p-1 w-[58px]">
              <img src={departments} />
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 flex justify-between items-center">
            <div>
              <p className="text-slate-500 text-lg mb-1">Awards</p>
              <p className="text-3xl font-medium">50+</p>
            </div>
            <div className="bg-slate-100 rounded-md p-1 w-[58px]">
              <img src={awards} />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 mt-8">
          <div className="p-8 bg-white rounded-xl">
            <div className="flex justify-between">
              <h3 className="text-lg text-primary-blue font-medium">
                No. of Enrolled Students By Semester
              </h3>
              <span className="p-2 rounded-md bg-primary-blue/10 text-3xl text-primary-blue">
                <FcLineChart />
              </span>
            </div>
            <div className="h-[300px] w-full">
              <EnrolledStudentsBySemester />
            </div>
          </div>
          <div className="p-8 bg-white rounded-xl">
            <div className="flex justify-between">
              <h3 className="text-lg text-primary-blue font-medium">
                No. of Enrolled Students By Departments
              </h3>
              <span className="p-2 rounded-md bg-primary-blue/10 text-3xl text-primary-blue">
                <FcBarChart />
              </span>
            </div>
            <div className="h-[300px] w-full">
              <StudentByDeptBarChart />
            </div>
          </div>
        </div>
      </div>
    );
};

export default EnrollHome;