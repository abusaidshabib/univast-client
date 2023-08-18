/* eslint-disable react/prop-types */
const PersonalInfo = ({ register, errors }) => {

    return (
        <div>
            {/* Application */}
            <p className="font-serif text-4xl text-p-white py-5">Applicant</p>
            <hr className="pb-5" />
            <div className="grid grid-cols-3 gap-10 pb-10">
                <div>
                    <label className="text-p-white font-serif text-2xl leading-loose">
                        First Name
                    </label>
                    <br />
                    <input
                        className="w-full bg-primary-800/50 text-p-white py-5 px-5 text-xl rounded-md"
                        placeholder="Enter Your first-Name"
                        type="text"
                        {...register("firstName", { required: false })}
                    />
                    <br />
                    {errors.firstName && <p className="text-red-500 mt-2">This field is required</p>}
                </div>
                <div>
                    <label className="text-p-white font-serif text-2xl leading-loose">
                        Last Name
                    </label>
                    <br />
                    <input
                        className="w-full bg-primary-800/50 text-p-white py-5 px-5 text-xl rounded-md"
                        placeholder="Enter Your last-Name"
                        type="text"
                        {...register("lastName", { required: false })}
                    />
                    <br />
                    {errors.lastName && <p className="text-red-500 mt-2">This field is required</p>}
                </div>
                <div>
                    <label className="text-p-white font-serif text-2xl leading-loose">
                        Gender
                    </label>
                    <br />
                    <input
                        className="w-full bg-primary-800/50 text-p-white py-5 px-5 text-xl rounded-md"
                        placeholder="Enter Your Gender"
                        type="text"
                        {...register("gender", { required: false })}
                    />
                    <br />
                    {errors.gender && <p className="text-red-500 mt-2">This field is required</p>}
                </div>
                <div>
                    <label className="text-p-white font-serif text-2xl leading-loose">
                        Date of Birth
                    </label>
                    <br />
                    <input
                        className="w-full bg-primary-800/50 text-p-white py-5 px-5 text-xl rounded-md"
                        placeholder="Enter Your Birth-Date"
                        type="date"
                        {...register("birth_date", { required: false })}
                    />
                    <br />
                    {errors.birth_date && <p className="text-red-500 mt-2">This field is required</p>}
                </div>
                <div>
                    <label className="text-p-white font-serif text-2xl leading-loose">
                        Religion
                    </label>
                    <br />
                    <select
                        className="w-full bg-primary-800/50 text-p-white py-5 px-5 text-xl rounded-md"
                        {...register("religion", { required: false })}
                    >
                        <option className="text-p-white">Select Type...</option>
                        <option className="text-p-white" value="Islam">
                            Islam
                        </option>
                        <option className="text-p-white" value="Hinduism">
                            Hinduism
                        </option>
                        <option className="text-p-white" value="Christianity">
                            Christianity
                        </option>
                        <option className="text-p-white" value="Buddhism">
                            Buddhism
                        </option>
                    </select>{" "}
                    <br />
                    {errors.religion && <p className="text-red-500 mt-2">This field is required</p>}
                </div>
                <div>
                    <label className="text-p-white font-serif text-2xl leading-loose">
                        Marital Status
                    </label>
                    <br />
                    <select
                        className="w-full bg-primary-800/50 text-p-white py-5 px-5 text-xl rounded-md"
                        {...register("marital", { required: false })}
                    >
                        <option className="text-p-white">Select Type...</option>
                        <option className="text-p-white" value="Single">
                            Single
                        </option>
                        <option className="text-p-white" value="Married">
                            Married
                        </option>
                        <option className="text-p-white" value="Divorced">
                            Divorced
                        </option>
                        <option className="text-p-white" value="Widowed">
                            Widowed
                        </option>
                    </select>{" "}
                    <br />
                </div>
                <div>
                    <label className="text-p-white font-serif text-2xl leading-loose">
                        Blood Group
                    </label>
                    <br />
                    <select
                        className="w-full bg-primary-800/50 text-p-white py-5 px-5 text-xl rounded-md"
                        {...register("religion", { required: false })}
                    >
                        <option className="text-p-white">Select Type...</option>
                        <option className="text-p-white" value="A+ve">
                            A+ve
                        </option>
                        <option className="text-p-white" value="B+ve">
                            B+ve
                        </option>
                    </select>{" "}
                    <br />
                </div>
                <div>
                    <label className="text-p-white font-serif text-2xl leading-loose">
                        Email
                    </label>
                    <br />
                    <input
                        className="w-full bg-primary-800/50 text-p-white py-5 px-5 text-xl rounded-md"
                        placeholder="Enter Your Email"
                        type="email"
                        {...register("email", { required: false })}
                    />
                    <br />
                    {errors.email && <p className="text-red-500 mt-2">This field is required</p>}
                </div>
                <div>
                    <label className="text-p-white font-serif text-2xl leading-loose">
                        Mobile Number
                    </label>
                    <br />
                    <input
                        className="w-full bg-primary-800/50 text-p-white py-5 px-5 text-xl rounded-md"
                        placeholder="Enter Mobile Number"
                        type="tel"
                        {...register("mobile", { required: false })}
                    />
                    <br />
                    {errors.mobile && <p className="text-red-500 mt-2">This field is required</p>}
                </div>
                <div>
                    <label className="text-p-white font-serif text-2xl leading-loose">
                        National ID / Birth Certificate No.
                    </label>
                    <br />
                    <input
                        className="w-full bg-primary-800/50 text-p-white py-5 px-5 text-xl rounded-md"
                        placeholder="Enter National Id /Birth"
                        type="number"
                        {...register("nid_Birth_certificate", { required: false })}
                    />
                    <br />
                    {errors.nid_Birth_certificate && <p className="text-red-500 mt-2">This field is required</p>}
                </div>
                <div>
                    <label className="text-p-white font-serif text-2xl leading-loose">
                        Passport No.
                    </label>
                    <br />
                    <input
                        className="w-full bg-primary-800/50 text-p-white py-5 px-5 text-xl rounded-md"
                        placeholder="Enter Your passport Number"
                        type="number"
                        {...register("passport")}
                    />
                    <br />
                </div>
                <div>
                    <label className="text-p-white font-serif text-2xl leading-loose">
                        Nationality
                    </label>
                    <br />
                    <input
                        className="w-full bg-primary-800/50 text-p-white py-5 px-5 text-xl rounded-md"
                        placeholder="Enter Your Nationality"
                        type="text"
                        {...register("nationality", { required: false })}
                    />
                    <br />
                    {errors.nationality && <p className="text-red-500 mt-2">This field is required</p>}
                </div>
                <div>
                    <label className="text-p-white font-serif text-2xl leading-loose">
                        Country
                    </label>
                    <br />
                    <input
                        className="w-full bg-primary-800/50 text-p-white py-5 px-5 text-xl rounded-md"
                        placeholder="Enter Your country"
                        type="text"
                        {...register("country", { required: false })}
                    />
                    <br />
                    {errors.country && <p className="text-red-500 mt-2">This field is required</p>}
                </div>
                <div>
                    <label className="text-p-white font-serif text-2xl leading-loose">
                        Social Media Id
                    </label>
                    <br />
                    <input
                        className="w-full bg-primary-800/50 text-p-white py-5 px-5 text-xl rounded-md"
                        placeholder="Enter Your Social media"
                        type="url"
                        {...register("social_media", { required: false })}
                    />
                    <br />
                </div>
                <div>
                    <label className="text-p-white font-serif text-2xl leading-loose">
                        Enter Your Image
                    </label>
                    <br />
                    <input
                        className="w-full bg-primary-800/50 text-p-white py-5 px-5 text-xl rounded-md"
                        type="file"
                        accept="image/*"
                        {...register("image", { required: false })}
                    />
                    <br />
                    {errors.image && <p className="text-red-500 mt-2">This field is required</p>}
                </div>
                <div>
                    <label className="text-p-white font-serif text-2xl leading-loose">
                        Enter Your Signature
                    </label>
                    <br />
                    <input
                        className="w-full bg-primary-800/50 text-p-white py-5 px-5 text-xl rounded-md"
                        type="file"
                        accept="image/*"
                        {...register("signature", { required: false })}
                    />
                    <br />
                    {errors.signature && <p className="text-red-500 mt-2">This field is required</p>}
                </div>
            </div>

            {/* Address */}
            <p className="font-serif text-4xl text-p-white py-5">Address</p>
            <hr className="pb-5" />
            <div className="grid grid-cols-2 gap-10 pb-10">
                <div>
                    <p className="font-serif text-2xl text-p-white py-5">
                        Present address
                    </p>
                    <div>
                        <label className="text-p-white font-serif text-2xl leading-loose">
                            Country
                        </label>
                        <br />
                        <select
                            className="w-full bg-primary-800/50 text-p-white py-5 px-5 text-xl rounded-md"
                            {...register("present_country", { required: false })}
                        >
                            <option className="text-p-white">Select Type...</option>
                            <option className="text-p-white" value="Bangladesh">
                                Bangladesh
                            </option>
                            <option className="text-p-white" value="Indian">
                                Indian
                            </option>
                            <option className="text-p-white" value="Others">
                                Others
                            </option>
                        </select>{" "}
                        <br />
                    </div>
                    <div>
                        <label className="text-p-white font-serif text-2xl leading-loose">
                            State/Division
                        </label>
                        <br />
                        <input
                            className="w-full bg-primary-800/50 text-p-white py-5 px-5 text-xl rounded-md"
                            placeholder="Enter Your State/Division"
                            type="text"
                            {...register("present_state_division", { required: false })}
                        />
                        <br />
                    </div>
                    <div>
                        <label className="text-p-white font-serif text-2xl leading-loose">
                            Police Station/Thana
                        </label>
                        <br />
                        <input
                            className="w-full bg-primary-800/50 text-p-white py-5 px-5 text-xl rounded-md"
                            placeholder="Enter Your Police Station/Thana"
                            type="text"
                            {...register("present_thana", { required: false })}
                        />
                        <br />
                    </div>
                    <div>
                        <label className="text-p-white font-serif text-2xl leading-loose">
                            City
                        </label>
                        <br />
                        <input
                            className="w-full bg-primary-800/50 text-p-white py-5 px-5 text-xl rounded-md"
                            placeholder="Enter Your City"
                            type="text"
                            {...register("present_city", { required: false })}
                        />
                        <br />
                    </div>
                    <div>
                        <label className="text-p-white font-serif text-2xl leading-loose">
                            Zip Code/Post Code/Post Office Name
                        </label>
                        <br />
                        <input
                            className="w-full bg-primary-800/50 text-p-white py-5 px-5 text-xl rounded-md"
                            placeholder="Enter Your Zip Code"
                            type="number"
                            {...register("present_zip_code", { required: false })}
                        />
                        <br />
                    </div>
                    <div>
                        <label className="text-p-white font-serif text-2xl leading-loose">
                            Flat/Apt/Street/House No./Area/Village
                        </label>
                        <br />
                        
                        <input
                            className="w-full bg-primary-800/50 text-p-white py-5 px-5 text-xl rounded-md"
                            placeholder="Street1"
                            type="text"
                            {...register("present_street1", { required: false })}
                        />
                        <br />
                        {errors.present_street1 && <p className="text-red-500 mt-2">This field is required</p>}
                        <br />
                        <input
                            className="w-full bg-primary-800/50 text-p-white py-5 px-5 text-xl rounded-md"
                            placeholder="Street2"
                            type="text"
                            {...register("present_street2", { required: false })}
                        />
                        <br />
                    </div>
                </div>
                <div>
                    <div>
                        <p className="font-serif text-2xl text-p-white py-5">
                            Permanent address
                        </p>
                        <div>
                            <label className="text-p-white font-serif text-2xl leading-loose">
                                Country
                            </label>
                            <br />
                            <select
                                className="w-full bg-primary-800/50 text-p-white py-5 px-5 text-xl rounded-md"
                                {...register("permanent_country", { required: false })}
                            >
                                <option className="text-p-white">Select Type...</option>
                                <option className="text-p-white" value="Bangladesh">
                                    Bangladesh
                                </option>
                                <option className="text-p-white" value="Indian">
                                    Indian
                                </option>
                                <option className="text-p-white" value="Others">
                                    Others
                                </option>
                            </select>{" "}
                            <br />
                        </div>
                        <div>
                            <label className="text-p-white font-serif text-2xl leading-loose">
                                State/Division
                            </label>
                            <br />
                            <input
                                className="w-full bg-primary-800/50 text-p-white py-5 px-5 text-xl rounded-md"
                                placeholder="Enter Your State/Division"
                                type="text"
                                {...register("permanent_state_division", { required: false })}
                            />
                            <br />
                        </div>
                        <div>
                            <label className="text-p-white font-serif text-2xl leading-loose">
                                Police Station/Thana
                            </label>
                            <br />
                            <input
                                className="w-full bg-primary-800/50 text-p-white py-5 px-5 text-xl rounded-md"
                                placeholder="Enter Your Police Station/Thana"
                                type="text"
                                {...register("permanent_thana", { required: false })}
                            />
                            <br />
                        </div>
                        <div>
                            <label className="text-p-white font-serif text-2xl leading-loose">
                                City
                            </label>
                            <br />
                            <input
                                className="w-full bg-primary-800/50 text-p-white py-5 px-5 text-xl rounded-md"
                                placeholder="Enter Your City"
                                type="text"
                                {...register("permanent_city", { required: false })}
                            />
                            <br />
                        </div>
                        <div>
                            <label className="text-p-white font-serif text-2xl leading-loose">
                                Zip Code/Post Code/Post Office Name
                            </label>
                            <br />
                            <input
                                className="w-full bg-primary-800/50 text-p-white py-5 px-5 text-xl rounded-md"
                                placeholder="Enter Your Zip Code"
                                type="number"
                                {...register("permanent_zip_code", { required: false })}
                            />
                            <br />
                        </div>
                        <div>
                            <label className="text-p-white font-serif text-2xl leading-loose">
                                Flat/Apt/Street/House No./Area/Village
                            </label>
                            <br />
                            <input
                                className="w-full bg-primary-800/50 text-p-white py-5 px-5 text-xl rounded-md"
                                placeholder="Street1"
                                type="text"
                                {...register("permanent_street1", { required: false })}
                            />
                            <br />
                            {errors.permanent_street1 && <p className="text-red-500 mt-2">This field is required</p>}
                            <br />
                            <input
                                className="w-full bg-primary-800/50 text-p-white py-5 px-5 text-xl rounded-md"
                                placeholder="Street2"
                                type="text"
                                {...register("permanent_street2", { required: false })}
                            />
                            <br />
                        </div>
                    </div>
                </div>
            </div>

            {/* Address */}
        </div>
    );
};

export default PersonalInfo;