import graduates from "../../../../../assets/Home/meetGraduates.jpg"
import UnderlinedLInk from "../../../../../Components/Buttons/UnderlinedLInk";

const CampusLife = () => {
  return (
    <div className="p-20 bg-background-500 text-primary-gray font-sans">
      <p className="text-6xl uppercase font-extrabold text-center">Campus graduate</p>
      <div className="grid grid-cols-12 py-10 gap-20 items-center">
        <div className="col-span-8">
          <p className="text-5xl text-primary-gray font-serif leading-relaxed">
            &quot;My advisor helped build my confidence as a researcher, and
            that’s something that I’ll carry with me for the rest of my
            career.&quot;
          </p>
          <p className="py-3 text-xl font-semibold text-accent-blue tracking-wider">
            - Yekaterina Shulgina, Harvard Griffin GSAS
          </p>
         <UnderlinedLInk link="" text="Read about Yekaterina" icon=""/>
        </div>
        <div className="campus-image col-span-4 border-8 border-secondary-blue">
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