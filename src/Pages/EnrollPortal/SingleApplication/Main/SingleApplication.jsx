import PersonalInfo from "../Sections/PersonalInfo/PersonalInfo";

const SingleApplication = () => {
  return (
    <div className="grid grid-cols-4 gap-5 p-5 bg-gray-200 min-h-[calc(100vh-80px)] text-gray-900">
      <div className="col-span-3">
        <PersonalInfo />
      </div>
    </div>
  );
};

export default SingleApplication;
