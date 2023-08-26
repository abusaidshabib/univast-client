import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { FaUserGraduate } from "react-icons/fa";
import { RiHandCoinLine } from "react-icons/ri";
import { SiSemanticscholar } from "react-icons/si";

const Services = () => {
  return (
    <div className="services grid grid-cols-4 text-p-white bg-black py-10">
      <div className="flex flex-col items-center gap-10 justify-center text-center p-10">
        <HiOutlineClipboardDocumentList className="text-8xl text-primary-500" />
        <h3 className="text-lg font-extrabold font-sans uppercase">Admission</h3>
        <p>
          We have students coming from different backgrounds, cultures, and
          nationalities as well. More than 500 international students are
          enrolled in various programs.
        </p>
      </div>
      <div className="flex flex-col items-center gap-10 justify-center text-center p-10">
        <FaUserGraduate className="text-8xl text-accent-500" />
        <h3 className="text-lg font-extrabold font-sans uppercase">Programs</h3>
        <p>
          We are offering 38 undergraduate and graduate programs under 26
          departments. Our curriculum is designed to help the students to
          develop the skills required for 21st-century employment.
        </p>
      </div>
      <div className="flex flex-col items-center gap-10 justify-center text-center p-10">
        <RiHandCoinLine className="text-8xl" />
        <h3 className="text-lg font-extrabold font-sans uppercase">Tution Fees</h3>
        <p>
          We offer affordable tuition fees for students with the option to pay
          them in multiple installments to create convenience for students.
        </p>
      </div>
      <div className="flex flex-col items-center gap-10 justify-center text-center p-10">
        <SiSemanticscholar className="text-8xl text-secondary-500" />
        <h3 className="text-lg font-extrabold font-sans uppercase">Scholarship</h3>
        <p>
          We make sure all our students get the help they need to complete the
          degree. Scholarships are available with excellent academic results as
          well as for the students who are struggling financially.
        </p>
      </div>
    </div>
  );
};

export default Services;
