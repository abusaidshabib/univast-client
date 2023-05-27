import admission from '../../../assets/service-icons/png/001-admission.png'
import programs from '../../../assets/service-icons/png/002-educational-programs.png'
import tuition from '../../../assets/service-icons/png/003-tuition.png'
import scholarship from '../../../assets/service-icons/png/004-degree.png'

const Services = () => {
    return (
        <div className="services grid grid-cols-4 text-p-white bg-background-700">
            <div className='flex flex-col items-center gap-10 justify-center text-center p-10'>
                <img className='w-20' src={admission} alt=""/>
                <h3 className='text-2xl font-semibold'>Admission</h3>
                <p>We have students coming from different backgrounds, cultures, and nationalities as well. More than 500 international students are enrolled in various programs.</p>
            </div>
            <div className='flex flex-col items-center gap-10 justify-center text-center p-10'>
                <img className='w-20' src={programs} alt=""/>
                <h3 className='text-2xl font-semibold'>Programs</h3>
                <p>We are offering 38 undergraduate and graduate programs under 26 departments. Our curriculum is designed to help the students to develop the skills required for 21st-century employment.</p>
            </div>
            <div className='flex flex-col items-center gap-10 justify-center text-center p-10'>
                <img className='w-20' src={tuition} alt=""/>
                <h3 className='text-2xl font-semibold'>Tution Fees</h3>
                <p>We offer affordable tuition fees for students with the option to pay them in multiple installments to create convenience for students.</p>
            </div>
            <div className='flex flex-col items-center gap-10 justify-center text-center p-10'>
                <img className='w-24' src={scholarship} alt=""/>
                <h3 className='text-2xl font-semibold'>Scholarship</h3>
                <p>We make sure all our students get the help they need to complete the degree. Scholarships are available with excellent academic results as well as for the students who are struggling financially.</p>
            </div>
        </div>
    );
};

export default Services;