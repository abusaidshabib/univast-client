import EditForm from "../../Components/StudentDashboard/Settings/EditForm";


const Ssetting = () => {

 

  return (
    <div className="bg-gray-200 w-full min-h-[calc(100vh-80px)] font-semibold p-10 grid gap-10">
      <EditForm></EditForm>
        <div className="bg-white rounded-md grid place-content-center">
          <p className="text-red-600 text-xl">
            If you want to edit more details info. Please contact with admin. Because those are very sensitive details for edit every-time.
          </p>
        </div>
    </div>
  );
};

export default Ssetting;