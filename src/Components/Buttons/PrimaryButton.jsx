import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const PrimaryButton = ({ link, text, icon }) => {
  return (
    <Link
      to={link}
      className="text-primary-gray font-sans uppercase font-extrabold text-sm bg-primary-white px-14 py-4 rounded-sm inline-flex items-center gap-2"
    >
        {text} {icon}
    </Link>
  );
};

export default PrimaryButton;
