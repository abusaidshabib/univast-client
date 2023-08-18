/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const OtherInfo = ({ register, errors }) => {

    return (
        <div>
            <p className="font-serif text-4xl text-p-white pb-5">
                Others Info
            </p>
            <hr className="pb-5" />

            <div>
                <label className="text-p-white font-serif text-2xl leading-loose">
                    Please tick (✔) the following box if applicable:
                </label>
                <br />

                <div className="grid grid-cols-4 gap-10 pb-10 mt-5">
                    <div className="flex gap-3 items-center">
                        <input
                            type="checkbox"
                            id="is_parents_freedom_fighter"
                            {...register("is_parents_freedom_fighter", { required: false })}
                        />
                        <label className="text-p-white font-serif text-xl" htmlFor="is_parents_freedom_fighter">If your parents is freedom fighter</label>
                    </div>

                    <div className="flex gap-3 items-center">
                        <input
                            type="checkbox"
                            id="is_tribal"
                            {...register("is_tribal", { required: false })}
                        />
                        <label className="text-p-white font-serif text-xl" htmlFor="is_tribal">If You are a tribal</label>
                    </div>

                    <div className="flex gap-3 items-center">
                        <input
                            type="checkbox"
                            id="is_physical_disorder"
                            {...register("is_physical_disorder", { required: false })}
                        />
                        <label className="text-p-white font-serif text-xl" htmlFor="is_physical_disorder">If You are a physical disorder</label>
                    </div>

                    <div className="flex gap-3 items-center">
                        <input
                            type="checkbox"
                            id="is_first_division_player"
                            {...register("is_first_division_player", { required: false })}
                        />
                        <label className="text-p-white font-serif text-xl" htmlFor="is_first_division_player">If you are a first division player</label>
                    </div>
                </div>

                <div className="mb-8">
                    <div className="flex items-center gap-3">
                        <input
                            type="checkbox"
                            id="accept_declaration"
                            {...register("accept_declaration", { required: false })}
                        />
                        <label className="text-p-white font-serif text-xl" htmlFor="accept_declaration">I declare that the information provided by me in
                            this system is true and correct to the best of my knowledge.</label>
                    </div>

                    {errors.accept_declaration && <p className="text-red-500 mt-2">This field is required</p>}
                </div>

                <div className="flex gap-3 items-center">

                    <div className="flex items-center gap-3">
                        <input
                            type="checkbox"
                            id="accept_terms"
                            {...register("accept_terms", { required: false })}
                        />
                        <label className="text-p-white font-serif text-xl" htmlFor="accept_terms">
                            I have read all the <Link to="#" className="text-primary-300"> Rules and Regulations</Link> of Bangladesh University (DIU),and having understood that if I am admitted into DIU, I will abide by the rules and regulations of this university.If I do any misconduct that violates the rules of DIU, I shall accept any decision taken by DIU authority.
                        </label>
                    </div>

                    {errors.accept_terms && <p className="text-red-500 mt-2">This field is required</p>}
                </div>

                <br />
            </div>
        </div>
    );
};

export default OtherInfo;