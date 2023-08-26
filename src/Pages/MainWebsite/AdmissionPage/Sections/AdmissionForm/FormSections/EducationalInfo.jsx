/* eslint-disable react/prop-types */
const EducationalInfo = ({ register, errors }) => {

    return (
        <div className="font-sans text-primary-white">
            <p className="text-4xl font-semibold  pb-5">
                Academic Info
            </p>
            <hr className="pb-5" />

            <div className="grid grid-cols-5 gap-10 pb-10">
                <div>
                    <label className=" text-2xl leading-loose">
                        Exam
                        <span className="text-red-500 pl-2">*</span>
                    </label>
                    <br />
                    <select
                        className="w-full bg-tertiary-blue  py-5 px-5 text-xl rounded-md"
                        {...register("exam", { required: false })}
                    >
                        <option className="">Select Type...</option>
                        <option
                            className=""
                            value="ssc"
                        >
                            SSC
                        </option>
                        <option className="" value="hsc">
                            HSC
                        </option>

                        <option className="" value="hsc">
                            O-LEVEL
                        </option>

                        <option className="" value="hsc">
                            A-LEVEL
                        </option>

                        <option className="" value="hsc">
                            Diploma
                        </option>

                        <option className="" value="hsc">
                            Bachelor
                        </option>

                        <option className="" value="hsc">
                            Masters
                        </option>

                        <option className="" value="hsc">
                            Others
                        </option>
                    </select>{" "}
                    <br />
                    {errors.exam && <p className="text-red-500 mt-2">This field is required</p>}
                </div>
                <div>
                    <label className=" text-2xl leading-loose">
                        Institution Name
                        <span className="text-red-500 pl-2">*</span>
                    </label>
                    <br />
                    <input
                        className="w-full bg-tertiary-blue  py-5 px-5 text-xl rounded-md"
                        placeholder="Institution Name"
                        type="text"
                        {...register("institution_name", { required: false })}
                    />
                    <br />
                    {errors.institution_name && <p className="text-red-500 mt-2">This field is required</p>}
                </div>

                <div>
                    <label className=" text-2xl leading-loose">
                        Board
                        <span className="text-red-500 pl-2">*</span>
                    </label>
                    <br />
                    <select
                        className="w-full bg-tertiary-blue  py-5 px-5 text-xl rounded-md"
                        {...register("board", { required: false })}
                    >
                        <option className="">Select Type...</option>
                        <option
                            className=""
                            value="dhaka"
                        >
                            Dhaka
                        </option>
                        <option className="" value="rajshahi">
                            Rajshahi
                        </option>

                        <option className="" value="chittagong">
                            Chittagong
                        </option>

                        <option className="" value="barishal">
                            Barishal
                        </option>

                        <option className="" value="dinajpur">
                            Dinajpur
                        </option>

                        <option className="" value="jessore">
                            Jessore
                        </option>

                        <option className="" value="mymensingh">
                            Mymensingh
                        </option>

                        <option className="" value="sylhet">
                            Sylhet
                        </option>

                        <option className="" value="comilla">
                            Comilla
                        </option>

                        <option className="" value="madrasah">
                            Madrasah
                        </option>

                        <option className="" value="technical">
                            Technical
                        </option>
                    </select>{" "}
                    <br />
                    {errors.board && <p className="text-red-500 mt-2">This field is required</p>}
                </div>

                <div>
                    <label className=" text-2xl leading-loose">
                        Group / Major
                        <span className="text-red-500 pl-2">*</span>
                    </label>
                    <br />
                    <select
                        className="w-full bg-tertiary-blue  py-5 px-5 text-xl rounded-md"
                        {...register("group_major", { required: false })}
                    >
                        <option className="">Select Type...</option>
                        <option
                            className=""
                            value="science"
                        >
                            Science
                        </option>
                        <option className="" value="business_studies">
                            Business studies
                        </option>

                        <option className="" value="humanities">
                            Humanities
                        </option>
                    </select>{" "}
                    <br />
                    {errors.group_major && <p className="text-red-500 mt-2">This field is required</p>}
                </div>

                <div>
                    <label className=" text-2xl leading-loose">
                        GPA / CGPA
                        <span className="text-red-500 pl-2">*</span>
                    </label>
                    <br />
                    <input
                        className="w-full bg-tertiary-blue  py-5 px-5 text-xl rounded-md"
                        placeholder="GPA / CGPA"
                        type="text"
                        {...register("result", { required: false })}
                    />
                    <br />
                    {errors.result && <p className="text-red-500 mt-2">This field is required</p>}
                </div>

                <div>
                    <label className=" text-2xl leading-loose">
                        Passing Year
                        <span className="text-red-500 pl-2">*</span>
                    </label>
                    <br />
                    <input
                        className="w-full bg-tertiary-blue  py-5 px-5 text-xl rounded-md"
                        placeholder="Year"
                        type="text"
                        {...register("passing_year", { required: false })}
                    />
                    <br />
                    {errors.passing_year && <p className="text-red-500 mt-2">This field is required</p>}
                </div>

                <div className="col-span-4">
                    <label className=" text-2xl leading-loose">
                        Certificate & All Transcripts / Marksheets in a combined PDF Format
                        <span className="text-red-500 pl-2">*</span>
                    </label>
                    <br />
                    <input
                        className="w-full bg-tertiary-blue  py-5 px-5 text-xl rounded-md"
                        type="file"
                        accept="application/pdf"
                        {...register("certificates", { required: false })}
                    />
                    <br />
                    {errors.certificates && <p className="text-red-500 mt-2">This field is required</p>}
                </div>
            </div>
        </div>
    );
};

export default EducationalInfo;