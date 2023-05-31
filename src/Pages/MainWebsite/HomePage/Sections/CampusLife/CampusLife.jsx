import { Link } from "react-router-dom";
import graduates from "../../../../../assets/Home/meetGraduates.jpg"

const CampusLife = () => {
  return (
    <div className="p-20 bg-background-500">
      <p className="text-5xl text-p-white font-serif leading-relaxed text-center">
        Campus graduate
      </p>
      <div className="grid grid-cols-12 py-10 gap-20 items-center">
        <div className="col-span-8">
          <p className="text-5xl text-accent-500 font-serif leading-relaxed">
          &quot;My advisor helped build my confidence as a researcher, and that’s something that I’ll carry with me for the rest of my career.&quot;
          </p>
          <p className="text-p-white py-3 text-xl tracking-wider">
            - Yekaterina Shulgina, Harvard Griffin GSAS
          </p>
          <Link className="text-lg font-sans border-b-2 text-primary-500 border-primary-500 hover:text-p-white hover:border-p-white">
            Read about Yekaterina
          </Link>
        </div>
        <div className="campus-image col-span-4">
          <img
            className="w-full h-full object-cover object-top"
            src={graduates}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default CampusLife;