import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const FilledButton = ({ link, text, icon }) => {
  return (
    <Link
      to={link}
      className="text-primary-white font-sans uppercase font-extrabold text-sm bg-secondary-blue px-14 py-4 rounded-sm inline-flex items-center gap-2 tracking-wider hover:bg-transparent border-2 border-secondary-blue hover:border-2 hover:border-primary-gray hover:text-primary-gray"
    >
      {text} {icon}
    </Link>
  );
};

export default FilledButton;
