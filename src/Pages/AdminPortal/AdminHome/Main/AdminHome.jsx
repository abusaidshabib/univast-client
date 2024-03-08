import { Link } from "react-router-dom";
import teachers from "../../../../assets/admin-dashboard/teacher.webp";
import departments from "../../../../assets/admin-dashboard/departments.svg";
import awards from "../../../../assets/admin-dashboard/awards.png";
import StudentByDeptBarChart from "../../../../Components/Buttons/StudentByDeptBarChart";
import { FcBarChart } from "react-icons/fc";
import GraduationRateLineChart from "../../../../Components/Buttons/GraduationRateLineChart";
import { FcLineChart } from "react-icons/fc";
import { useGetStudentsQuery } from "../../../../features/student/studentApi";
import { useEffect } from "react";

const AdminHome = () => {
  const { data: students } = useGetStudentsQuery();

  const createPredictionData = (students) => {
    const predictionData = [];
    students?.data.forEach((student) => {
      const data = {
        marital: student.personal.marital,
        application_mode: 0,
        application_order: 0,
        courses_taught: student.courses_taught.length,
        education_shift: student.general.education_shift,
        nationality: student.personal.nationality,
        gender: student.personal.gender,
        scholarship_holder: 0,
        age_at_enrollment: student.admission_date, // student.personal.birth_date
        international: 0,
        curricular_units_1st_sem_credited: 0,
        curricular_units_1st_sem_enrolled: 0,
        curricular_units_1st_sem_evaluations: 0,
        curricular_units_1st_sem_approved: 0,
        curricular_units_1st_sem_grade: 0,
        curricular_units_1st_sem_without_evaluations: 0,
        curricular_units_2nd_sem_credited: 0,
        curricular_units_2nd_sem_enrolled: 0,
        curricular_units_2nd_sem_evaluations: 0,
        curricular_units_2nd_sem_approved: 0,
        curricular_units_2nd_sem_grade: 0,
        curricular_units_2nd_sem_without_evaluations: 0,
      };
      predictionData.push(data);
    });

    return predictionData;
  };

  useEffect(() => {
    const predictionData = createPredictionData(students);
    console.log(predictionData);
  }, [students]);

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
            <h3 className="text-xl text-primary-blue font-medium">
              Number of Students
            </h3>
            <span className="p-2 rounded-md bg-primary-blue/10 text-3xl text-primary-blue">
              <FcBarChart />
            </span>
          </div>
          <div className="h-[300px] w-full">
            <StudentByDeptBarChart />
          </div>
        </div>
        <div className="p-8 bg-white rounded-xl">
          <div className="flex justify-between">
            <h3 className="text-xl text-primary-blue font-medium">
              Graduation Rate
            </h3>
            <span className="p-2 rounded-md bg-primary-blue/10 text-3xl text-primary-blue">
              <FcLineChart />
            </span>
          </div>
          <div className="h-[300px] w-full">
            <GraduationRateLineChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
