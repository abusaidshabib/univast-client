import image1 from "../../../../../assets/Home/Graduation with girl.jpg";

// eslint-disable-next-line react/prop-types
const PersonalInfo = (data) => {
  let personal;
  if (data?.data) {
    personal = data?.data;

    // eslint-disable-next-line react/prop-types, no-unsafe-optional-chaining
    const { firstName, lastName } = personal;

    return (
      <div className="bg-white grid grid-cols-8 gap-24">
        <div className="col-span-3 rounded-full p-8 border-8 border-secondary-blue w-72">
          <img className="rounded-full" src={image1} alt="" />
        </div>
        <div className="col-span-5">
          <p className="text-6xl uppercase font-bold">
            {firstName} {lastName}
          </p>
          <p className="text-xl">{}</p>
        </div>
      </div>
    );
  }
};

export default PersonalInfo;
