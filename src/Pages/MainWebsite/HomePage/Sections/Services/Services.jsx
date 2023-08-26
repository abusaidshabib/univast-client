import image1 from "../../../../../assets/Home/section1.jpg";
import image2 from "../../../../../assets/Home/section2.jpg";
import image3 from "../../../../../assets/Home/section3.jpg";

const Services = () => {
  return (
    <div className="services grid grid-cols-3 gap-20 text-primary-gray font-serif p-20 text-lg">
      <div className="flex flex-col items-center gap-3 justify-center text-center">
        <div className="border-secondary-blue border-8 h-72">
          <img className="h-full" src={image1} alt="" />
        </div>
        <h3 className="text-xl font-extrabold font-sans uppercase">Programs</h3>
        <p>
          We are offering 38 undergraduate and graduate programs under 26
          departments. Our curriculum is designed to help the students to
          develop the skills required for 21st-century employment.
        </p>
      </div>
      <div className="flex flex-col items-center gap-3 justify-center text-center">
        <div className="border-secondary-blue border-8 h-72">
          <img className="h-full" src={image2} alt="" />
        </div>
        <h3 className="text-xl font-extrabold font-sans uppercase">
          Tution Fees
        </h3>
        <p>
          We offer affordable tuition fees for students with the option to pay
          them in multiple installments to create convenience for students.
        </p>
      </div>
      <div className="flex flex-col items-center gap-3 justify-center text-center">
        <div className="border-secondary-blue border-8 h-72">
          <img className="h-full" src={image3} alt="" />
        </div>
        <h3 className="text-xl font-extrabold font-sans uppercase">
          Scholarship
        </h3>
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
