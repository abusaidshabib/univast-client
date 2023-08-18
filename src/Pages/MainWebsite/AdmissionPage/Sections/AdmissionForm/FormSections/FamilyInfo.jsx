/* eslint-disable react/prop-types */
const FamilyInfo = ({ register, errors }) => {

    return (
        <div>
            <p className="font-serif text-4xl text-p-white py-5">
                Family Information
            </p>
            <hr className="pb-5" />
            <div className="grid grid-cols-2 gap-10 pb-10">
                <div>
                    <p className="font-serif text-2xl text-p-white py-5">
                        Father&apos;s Information
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                        <div>
                            <label className="text-p-white font-serif text-2xl leading-loose">
                                Father name
                            </label>
                            <br />
                            <input
                                className="w-full bg-primary-800/50 text-p-white py-5 px-5 text-xl rounded-md"
                                placeholder="Father Name"
                                type="text"
                                {...register("father_name", { required: false })}
                            />
                            <br />
                            {errors.father_name && <p className="text-red-500 mt-2">This field is required</p>}
                        </div>
                        <div>
                            <label className="text-p-white font-serif text-2xl leading-loose">
                                Mobile No.
                            </label>
                            <br />
                            <input
                                className="w-full bg-primary-800/50 text-p-white py-5 px-5 text-xl rounded-md"
                                placeholder="Father's Mobile No. Ex. +8801123456789"
                                type="text"
                                {...register("father_mobile", { required: false })}
                            />
                            <br />
                            {errors.father_mobile && <p className="text-red-500 mt-2">This field is required</p>}
                        </div>
                        <div>
                            <label className="text-p-white font-serif text-2xl leading-loose">
                                Email
                            </label>
                            <br />
                            <input
                                className="w-full bg-primary-800/50 text-p-white py-5 px-5 text-xl rounded-md"
                                placeholder="Father's email"
                                type="email"
                                {...register("father_email", { required: false })}
                            />
                            <br />
                        </div>
                        <div>
                            <label className="text-p-white font-serif text-2xl leading-loose">
                                National ID
                            </label>
                            <br />
                            <input
                                className="w-full bg-primary-800/50 text-p-white py-5 px-5 text-xl rounded-md"
                                placeholder="Father's NID"
                                type="text"
                                {...register("father_nid", { required: false })}
                            />
                            <br />
                        </div>
                        <div>
                            <label className="text-p-white font-serif text-2xl leading-loose">
                                Passport No
                            </label>
                            <br />
                            <input
                                className="w-full bg-primary-800/50 text-p-white py-5 px-5 text-xl rounded-md"
                                placeholder="Father's Passport No"
                                type="text"
                                {...register("father_passport", { required: false })}
                            />
                            <br />
                        </div>
                        <div>
                            <label className="text-p-white font-serif text-2xl leading-loose">
                                Date of Birth
                            </label>
                            <br />
                            <input
                                className="w-full bg-primary-800/50 text-p-white py-5 px-5 text-xl rounded-md"
                                placeholder=""
                                type="date"
                                {...register("father_dob", { required: false })}
                            />
                            <br />
                        </div>
                        <div>
                            <label className="text-p-white font-serif text-2xl leading-loose">
                                Age
                            </label>
                            <br />
                            <input
                                className="w-full bg-primary-800/50 text-p-white py-5 px-5 text-xl rounded-md"
                                placeholder="Father's Age in Years"
                                type="text"
                                {...register("father_age", { required: false })}
                            />
                            <br />
                        </div>
                        <div>
                            <label className="text-p-white font-serif text-2xl leading-loose">
                                Occupation
                            </label>
                            <br />
                            <input
                                className="w-full bg-primary-800/50 text-p-white py-5 px-5 text-xl rounded-md"
                                placeholder="Father's Occupation"
                                type="text"
                                {...register("father_occupation", { required: false })}
                            />
                            <br />
                        </div>
                        <div>
                            <label className="text-p-white font-serif text-2xl leading-loose">
                                Name of Company
                            </label>
                            <br />
                            <input
                                className="w-full bg-primary-800/50 text-p-white py-5 px-5 text-xl rounded-md"
                                placeholder="Father's Name of Company"
                                type="text"
                                {...register("father_company", { required: false })}
                            />
                            <br />
                        </div>
                        <div>
                            <label className="text-p-white font-serif text-2xl leading-loose">
                                Designation
                            </label>
                            <br />
                            <input
                                className="w-full bg-primary-800/50 text-p-white py-5 px-5 text-xl rounded-md"
                                placeholder="Father's Designation"
                                type="text"
                                {...register("father_designation", { required: false })}
                            />
                            <br />
                        </div>
                        <div>
                            <label className="text-p-white font-serif text-2xl leading-loose">
                                Annual Income
                            </label>
                            <br />
                            <input
                                className="w-full bg-primary-800/50 text-p-white py-5 px-5 text-xl rounded-md"
                                placeholder="Father's Annual Income"
                                type="text"
                                {...register("father_income", { required: false })}
                            />
                            <br />
                        </div>
                    </div>
                </div>
                <div>
                    <p className="font-serif text-2xl text-p-white py-5">
                        Mother&apos;s Information
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                        <div>
                            <label className="text-p-white font-serif text-2xl leading-loose">
                                Mother name
                            </label>
                            <br />
                            <input
                                className="w-full bg-primary-800/50 text-p-white py-5 px-5 text-xl rounded-md"
                                placeholder="Mother Name"
                                type="text"
                                {...register("mother_name", { required: false })}
                            />
                            <br />
                            {errors.mother_name && <p className="text-red-500 mt-2">This field is required</p>}
                        </div>
                        <div>
                            <label className="text-p-white font-serif text-2xl leading-loose">
                                Mobile No.
                            </label>
                            <br />
                            <input
                                className="w-full bg-primary-800/50 text-p-white py-5 px-5 text-xl rounded-md"
                                placeholder="Mother's Mobile No. Ex. +8801123456789"
                                type="text"
                                {...register("mother_mobile", { required: false })}
                            />
                            <br />
                            {errors.mother_mobile && <p className="text-red-500 mt-2">This field is required</p>}
                        </div>
                        <div>
                            <label className="text-p-white font-serif text-2xl leading-loose">
                                Email
                            </label>
                            <br />
                            <input
                                className="w-full bg-primary-800/50 text-p-white py-5 px-5 text-xl rounded-md"
                                placeholder="Mother's email"
                                type="email"
                                {...register("mother_email", { required: false })}
                            />
                            <br />
                        </div>
                        <div>
                            <label className="text-p-white font-serif text-2xl leading-loose">
                                National ID
                            </label>
                            <br />
                            <input
                                className="w-full bg-primary-800/50 text-p-white py-5 px-5 text-xl rounded-md"
                                placeholder="Mother's NID"
                                type="text"
                                {...register("mother_nid", { required: false })}
                            />
                            <br />
                        </div>
                        <div>
                            <label className="text-p-white font-serif text-2xl leading-loose">
                                Passport No
                            </label>
                            <br />
                            <input
                                className="w-full bg-primary-800/50 text-p-white py-5 px-5 text-xl rounded-md"
                                placeholder="Mother's Passport No"
                                type="text"
                                {...register("mother_passport", { required: false })}
                            />
                            <br />
                        </div>
                        <div>
                            <label className="text-p-white font-serif text-2xl leading-loose">
                                Date of Birth
                            </label>
                            <br />
                            <input
                                className="w-full bg-primary-800/50 text-p-white py-5 px-5 text-xl rounded-md"
                                placeholder=""
                                type="date"
                                {...register("mother_dob", { required: false })}
                            />
                            <br />
                        </div>
                        <div>
                            <label className="text-p-white font-serif text-2xl leading-loose">
                                Age
                            </label>
                            <br />
                            <input
                                className="w-full bg-primary-800/50 text-p-white py-5 px-5 text-xl rounded-md"
                                placeholder="Mother's Age in Years"
                                type="text"
                                {...register("mother_age", { required: false })}
                            />
                            <br />
                        </div>
                        <div>
                            <label className="text-p-white font-serif text-2xl leading-loose">
                                Occupation
                            </label>
                            <br />
                            <input
                                className="w-full bg-primary-800/50 text-p-white py-5 px-5 text-xl rounded-md"
                                placeholder="Mother's Occupation"
                                type="text"
                                {...register("mother_occupation", { required: false })}
                            />
                            <br />
                        </div>
                        <div>
                            <label className="text-p-white font-serif text-2xl leading-loose">
                                Name of Company
                            </label>
                            <br />
                            <input
                                className="w-full bg-primary-800/50 text-p-white py-5 px-5 text-xl rounded-md"
                                placeholder="Mother's Name of Company"
                                type="text"
                                {...register("mother_company", { required: false })}
                            />
                            <br />
                        </div>
                        <div>
                            <label className="text-p-white font-serif text-2xl leading-loose">
                                Designation
                            </label>
                            <br />
                            <input
                                className="w-full bg-primary-800/50 text-p-white py-5 px-5 text-xl rounded-md"
                                placeholder="Mother's Designation"
                                type="text"
                                {...register("mother_designation", { required: false })}
                            />
                            <br />
                        </div>
                        <div>
                            <label className="text-p-white font-serif text-2xl leading-loose">
                                Annual Income
                            </label>
                            <br />
                            <input
                                className="w-full bg-primary-800/50 text-p-white py-5 px-5 text-xl rounded-md"
                                placeholder="Mother's Annual Income"
                                type="text"
                                {...register("mother_income", { required: false })}
                            />
                            <br />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FamilyInfo;