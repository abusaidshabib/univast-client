import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const SecondaryButton = ({ link, text, icon }) => {
  return (
    <Link
      to={link}
      className="text-primary-gray font-sans uppercase font-extrabold text-sm border-2 border-primary-gray px-14 py-4 rounded-sm inline-flex items-center gap-2 tracking-wider hover:bg-secondary-blue hover:text-primary-white"
    >
      {text} {icon}
    </Link>
  );
};

export default SecondaryButton;
