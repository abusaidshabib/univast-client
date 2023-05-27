import { Link } from "react-router-dom";
import FaqSection from "../FaqSection";

const AdmissionRequirement = () => {
  const FAQ = [
    {
      id: 1,
      question: "What are the admission requirements?",
      answer:
        "International Baccalaureate (IB) certificate Mathematics  'Analysis & Approaches' Standard Level minimum grade of 5 / Higher Level minimum grade of 4 Mathematics 'Applications & Interpretations' Higher Level minimum grade of 5 Mathematics 'Applications & Interpretations' Standard Level: not admissible to the BScBA program. Math Studies: not admissible to the BScBA program. European Baccelaurate (EB) diploma Mathematics (minimal of 5 hours) minimum grade of 7 | or (minimal of 3 hours) minimum grade of 8 General Certificate of Education (GCE) Advanced Level 3 A levels with a required minimum grade of C and a required minimum grade of B for Mathematics 3 GCSE's in 6 different subjects with a grade of C or higher. We advise IB, EB, GCE students who do not meet the above stated requirements to pass the admissions exam (Vwo) at Boswell-Bèta in Utrecht. The Online Mathematics Placement Test (OMPT-A)  is also an option. You need to obtain the OMPT-A with a minimum score of 75%. American High School Diploma A minimum 3.0 GPA PLUS a minimum of 4 Advanced Placement (AP) exams with a minimum score of 4. Only 1 language AP is accepted, and no AP’s accepted in the category Arts, Research, Capstone, Seminar. Mathematics minimum grade of B+ for pre-calculus AND IBA mathematics exam (Exemption  for students who have taken the College Board exam AP Calculus AB or BC, minimum score of 4). SAT and ACT are not applicable. Vwo diploma Sufficient grade for Mathematics A or B. Havo diploma (sufficient grade for Mathematics A or B) + HBO Propaedeutic Applicants who obtained an Hbo Propedaeutic need to pass the Online Mathematics Placement Test (OMPT-A) with a score of 75%.We will evaluate your diploma on an individual basis. Please provide an academic transcript with a diploma supplement explaining your country's grading system in your application package if possible.",
    },
    {
      id: 2,
      question: "How do I apply?",
      answer:
        "Do you match one of the requirements for the program? Than you can start your application for the BScBA! By using the green button you can start your application as follows: Please fill out every section of this application form carefully. The application form does not have to be completed at once but can be saved to continue at a later time. Submitting a motivation letter and a (provisional) list of grades is an important part of the form. Thus, allowing yourself enough time to write your motivational letter and collect all required documents is recommended. Please note that incomplete applications will not be processed. After evaluating your application package, you will hear whether you are invited to the interview process which will also include an admissions exam (LTP test). In order to assess your complete application, we look at your motivation, test scores, personality, and previous international activities.",
    },
    {
      id: 3,
      question: "Whats happens after my application?",
      answer:
        "Each academic year, 4 selection days will take place. After your application, you will receive an inivitation for one of the selection days. During the selection day, for which you will be invited, we look at your motivation, test scores, personality and extracurricular activities.For this program we only have a limited number of places available. Therefore, it is recommended to be on time with submitting your application. There is also a higher change of being selected for your first choice of preference (Amsterdam or Breukelen).",
    },
  ];

  return (
    <div className="grid grid-cols-12 gap-10">
      <div className="col-span-8 pl-20 py-20">
        <p className="font-serif text-4xl leading-normal">
          Ready to start your application process? You can find all the
          information below :-
        </p>
        {FAQ.map((data, index) => 
        (
          <FaqSection key={data.id} index={index+1} data={data}></FaqSection>
        ))}
      </div>
      <div className="col-span-4 bg-primary-200 py-20 pl-10">
        <p className="font-serif text-4xl leading-normal text-primary-800">
          Contact
        </p>
        <p className="text-xl text-primary-700 font-semibold">
          Naomi Flipse & Donna Tancev
        </p>
        <p className="text-xl text-primary-700">Program advisor</p>
        <br />
        <p className="text-xl text-primary-700">+12 345 678 912</p>
        <div className="pt-10">
          <Link className="underline decoration-primary-800 hover:no-underline">
            Check tuition fees
          </Link>
        </div>
        <div className="pt-10">
          <Link to="/admission/online" className="bg-primary-600 px-16 py-4 text-p-white uppercase font-semibold tracking-wider hover:bg-primary-700 rounded-sm">
            Apply Online
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdmissionRequirement;
