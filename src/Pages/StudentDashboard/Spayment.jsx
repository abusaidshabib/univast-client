import SFinantialInfo from "../../Components/StudentDashboard/Spayment/SFinantialInfo";
import SPaymentForm from "../../Components/StudentDashboard/Spayment/SPaymentForm";
import SPaymentSlip from "../../Components/StudentDashboard/Spayment/SPaymentSlip";



const Spayment = () => {
  return (
    <div className="min-h-[calc(100vh-80px)] w-full bg-gray-200 p-5 grid gap-5">
      <SFinantialInfo></SFinantialInfo>
      <SPaymentForm></SPaymentForm>
      <SPaymentSlip></SPaymentSlip>
    </div>
  );
};

export default Spayment;