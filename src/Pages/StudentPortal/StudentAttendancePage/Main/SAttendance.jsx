import SFinantialInfo from "../../StudentPaymentPage/Sections/SFinancialInfo/SFinantialInfo";
import SPaymentForm from "../../StudentPaymentPage/Sections/SPaymentForm/SPaymentForm";
import SPaymentSlip from "../../StudentPaymentPage/Sections/SPaymentSlip/SPaymentSlip";

const SAttendance = () => {
  return (
    <div className="min-h-[calc(100vh-80px)] w-full bg-gray-200 p-5 grid gap-5">
      <SFinantialInfo></SFinantialInfo>
      <SPaymentForm></SPaymentForm>
      <SPaymentSlip></SPaymentSlip>
    </div>
  );
};

export default SAttendance;