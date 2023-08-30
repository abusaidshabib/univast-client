/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setOthersInfo } from "../../../../../../features/application/applicationSlice";

const OtherInfo = () => {
    const {
      is_parents_freedom_fighter,
      is_tribal,
      is_physical_disorder,
      is_first_division_player,
      accept_declaration,
      accept_terms,
    } = useSelector((state) => state.application.others);

  const dispatch = useDispatch();
  const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target;

        const is_parents_freedom_fighter = form.is_parents_freedom_fighter.value;
        const is_tribal = form.is_tribal.value;
        const is_physical_disorder = form.is_physical_disorder.value;
        const is_first_division_player = form.is_first_division_player.value;
        const accept_declaration = form.accept_declaration.value;
        const accept_terms = form.accept_terms.value;

        const data = {
            is_parents_freedom_fighter,
            is_tribal,
            is_physical_disorder,
            is_first_division_player,
            accept_declaration,
            accept_terms,
        }

        dispatch(setOthersInfo(data))
    }
  return (
    <form onSubmit={handleSubmit} className="font-sans text-primary-white">
      <p className="text-4xl pb-5 font-semibold">Others Info</p>
      <hr className="pb-5" />

      <div>
        <label className="text-2xl leading-loose">
          Please tick (✔) the following box if applicable:
        </label>
        <br />

        <div className="grid grid-cols-4 gap-10 pb-10 mt-5">
          <div className="flex gap-3 items-center">
            <input
              name="is_parents_freedom_fighter"
              id="is_parents_freedom_fighter"
              // defaultValue={is_parents_freedom_fighter}
              type="checkbox"
            />
            <label className="text-xl" htmlFor="is_parents_freedom_fighter">
              If your parents is freedom fighter
            </label>
          </div>

          <div className="flex gap-3 items-center">
            <input
              name="is_tribal"
              id="is_tribal"
              // defaultValue={is_tribal}
              type="checkbox"
            />
            <label className="text-xl" htmlFor="is_tribal">
              If You are a tribal
            </label>
          </div>

          <div className="flex gap-3 items-center">
            <input
              name="is_physical_disorder"
              id="is_physical_disorder"
              // defaultValue={is_physical_disorder}
              type="checkbox"
            />
            <label className="text-xl" htmlFor="is_physical_disorder">
              If You are a physical disorder
            </label>
          </div>

          <div className="flex gap-3 items-center">
            <input
              name="is_first_division_player"
              id="is_first_division_player"
              // defaultValue={is_first_division_player}
              type="checkbox"
            />
            <label className="text-xl" htmlFor="is_first_division_player">
              If you are a first division player
            </label>
          </div>
        </div>

        <div className="mb-8">
          <div className="flex items-center gap-3">
            <input
              name="accept_declaration"
              id="accept_declaration"
              required
              // defaultValue={accept_declaration}
              type="checkbox"
            />
            <label className="text-xl" htmlFor="accept_declaration">
              I declare that the information provided by me in this system is
              true and correct to the best of my knowledge.
              <span className="text-red-500 pl-2">*</span>
            </label>
          </div>

          {/* {errors.accept_declaration && <p className="text-red-500 mt-2">This field is required</p>} */}
        </div>

        <div className="flex gap-3 items-center">
          <div className="flex items-center gap-3">
            <input
              name="accept_terms"
              id="accept_terms"
              required
              // defaultValue={accept_terms}
              type="checkbox"
            />
            <label className="text-xl" htmlFor="accept_terms">
              I have read all the{" "}
              <Link to="#" className="text-primary-300">
                {" "}
                Rules and Regulations
              </Link>{" "}
              of Bangladesh University (DIU),and having understood that if I am
              admitted into DIU, I will abide by the rules and regulations of
              this university.If I do any misconduct that violates the rules of
              DIU, I shall accept any decision taken by DIU authority.
              <span className="text-red-500 pl-2">*</span>
            </label>
          </div>
          {/* 
                    {errors.accept_terms && <p className="text-red-500 mt-2">This field is required</p>} */}
        </div>

        <br />
      </div>

      <div className="py-10 flex gap-8 items-center">
        <button
          className="bg-tertiary-blue py-3 px-10 rounded-md text-lg text-primary-white border-b-6"
          type="button"
          onClick={() => navigate("/admission/online/educational")}
        >
          Prev
        </button>
        <button
          className="bg-tertiary-blue py-3 px-10 rounded-md text-lg text-primary-white border-b-6"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default OtherInfo;
