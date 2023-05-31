import { useState } from "react";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";

// eslint-disable-next-line react/prop-types
const FaqSection = ({index,data}) => {
  // eslint-disable-next-line react/prop-types
  const {question, answer} = data;
  const [number, setNumber] = useState();

  const handleSet = (index) => {
    if(number){
      setNumber()
    }
    else{
      setNumber(index)
    }

  }

  return (
    <div className="py-2">
      <span
        onClick={() => handleSet(index)}
        className="flex justify-between text-xl cursor-pointer pb-3"
      >
        <p className="underline">
          <b>STEP {index} : </b>
          {question}
        </p>

        {number === index ? <AiFillCaretUp /> : <AiFillCaretDown />}
      </span>
      {number === index ? <p>= {answer}</p> : <></>}
    </div>
  );
};

export default FaqSection;
