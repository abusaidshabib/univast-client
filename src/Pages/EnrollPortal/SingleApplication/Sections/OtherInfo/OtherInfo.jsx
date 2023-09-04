// eslint-disable-next-line react/prop-types
const OtherInfo = ({ data }) => {
  const {
    is_parents_freedom_fighter,
    is_tribal,
    is_physical_disorder,
    is_first_division_player,
  } = data;

  // eslint-disable-next-line react/prop-types
  console.log(data?.is_parents_freedom_fighter);

  return (
    <div className="bg-white p-5">
      <p className="text-2xl tracking-wider uppercase font-semibold text-center">
        Others Information
      </p>
      <br />
      <div className="grid grid-cols-3">
        <p>
          <span className="text-secondary-blue font-bold">Freedom Fighter</span>
          <span className="px-3">-</span>
          <span className="">{is_parents_freedom_fighter ? "Yes" : "No"}</span>
        </p>
        <p>
          <span className="text-secondary-blue font-bold">Tribal</span>
          <span className="px-3">-</span>
          <span className="">{is_tribal ? "Yes" : "No"}</span>
        </p>
        <p>
          <span className="text-secondary-blue font-bold">
            Physical disorder
          </span>
          <span className="px-3">-</span>
          <span className="">{is_physical_disorder ? "Yes" : "No"}</span>
        </p>
        <p>
          <span className="text-secondary-blue font-bold">
            First Division Player
          </span>
          <span className="px-3">-</span>
          <span className="">{is_first_division_player ? "Yes" : "No"}</span>
        </p>
      </div>
    </div>
  );
};

export default OtherInfo;
