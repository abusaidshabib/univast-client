import SFinantialInfo from "../Sections/SFinancialInfo/SFinantialInfo";
import SPaymentForm from "../Sections/SPaymentForm/SPaymentForm";
import SPaymentSlip from "../Sections/SPaymentSlip/SPaymentSlip";


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