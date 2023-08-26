import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const UnderlinedLInk = ({ link, text, icon }) => {
  return (
    <Link to={link} className="text-lg font-sans border-secondary-blue border-b-2 text-secondary-blue hover:border-primary-orange hover:text-primary-orange">
      {text} {icon}
    </Link>
  );
};

export default UnderlinedLInk;