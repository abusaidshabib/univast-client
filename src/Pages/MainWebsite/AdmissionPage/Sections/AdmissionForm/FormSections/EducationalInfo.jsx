/* eslint-disable react/prop-types */
const EducationalInfo = ({ register, errors }) => {

    return (
        <div>
            <p className="font-serif text-4xl text-p-white pb-5">
                Academic Info
            </p>
            <hr className="pb-5" />

            <div className="grid grid-cols-5 gap-10 pb-10">
                <div>
                    <label className="text-p-white font-serif text-2xl leading-loose">
                        Exam
                    </label>
                    <br />
                    <select
                        className="w-full bg-primary-800/50 text-p-white py-5 px-5 text-xl rounded-md"
                        {...register("exam", { required: false })}
                    >
                        <option className="text-p-white">Select Type...</option>
                        <option
                            className="text-p-white"
                            value="ssc"
                        >
                            SSC
                        </option>
                        <option className="text-p-white" value="hsc">
                            HSC
                        </option>

                        <option className="text-p-white" value="hsc">
                            O-LEVEL
                        </option>

                        <option className="text-p-white" value="hsc">
                            A-LEVEL
                        </option>

                        <option className="text-p-white" value="hsc">
                            Diploma
                        </option>

                        <option className="text-p-white" value="hsc">
                            Bachelor
                        </option>

                        <option className="text-p-white" value="hsc">
                            Masters
                        </option>

                        <option className="text-p-white" value="hsc">
                            Others
                        </option>
                    </select>{" "}
                    <br />
                </div>
                <div>
                    <label className="text-p-white font-serif text-2xl leading-loose">
                        Institution Name
                    </label>
                    <br />
                    <input
                        className="w-full bg-primary-800/50 text-p-white py-5 px-5 text-xl rounded-md"
                        placeholder="Institution Name"
                        type="text"
                        {...register("institution_name", { required: false })}
                    />
                    <br />
                </div>

                <div>
                    <label className="text-p-white font-serif text-2xl leading-loose">
                        Board
                    </label>
                    <br />
                    <select
                        className="w-full bg-primary-800/50 text-p-white py-5 px-5 text-xl rounded-md"
                        {...register("board", { required: false })}
                    >
                        <option className="text-p-white">Select Type...</option>
                        <option
                            className="text-p-white"
                            value="dhaka"
                        >
                            Dhaka
                        </option>
                        <option className="text-p-white" value="rajshahi">
                            Rajshahi
                        </option>

                        <option className="text-p-white" value="chittagong">
                            Chittagong
                        </option>

                        <option className="text-p-white" value="barishal">
                            Barishal
                        </option>

                        <option className="text-p-white" value="dinajpur">
                            Dinajpur
                        </option>

                        <option className="text-p-white" value="jessore">
                            Jessore
                        </option>

                        <option className="text-p-white" value="mymensingh">
                            Mymensingh
                        </option>

                        <option className="text-p-white" value="sylhet">
                            Sylhet
                        </option>

                        <option className="text-p-white" value="comilla">
                            Comilla
                        </option>

                        <option className="text-p-white" value="madrasah">
                            Madrasah
                        </option>

                        <option className="text-p-white" value="technical">
                            Technical
                        </option>
                    </select>{" "}
                    <br />
                </div>

                <div>
                    <label className="text-p-white font-serif text-2xl leading-loose">
                        Group / Major
                    </label>
                    <br />
                    <select
                        className="w-full bg-primary-800/50 text-p-white py-5 px-5 text-xl rounded-md"
                        {...register("group_major", { required: false })}
                    >
                        <option className="text-p-white">Select Type...</option>
                        <option
                            className="text-p-white"
                            value="science"
                        >
                            Science
                        </option>
                        <option className="text-p-white" value="business_studies">
                            Business studies
                        </option>

                        <option className="text-p-white" value="humanities">
                            Humanities
                        </option>
                    </select>{" "}
                    <br />
                </div>

                <div>
                    <label className="text-p-white font-serif text-2xl leading-loose">
                        GPA / CGPA
                    </label>
                    <br />
                    <input
                        className="w-full bg-primary-800/50 text-p-white py-5 px-5 text-xl rounded-md"
                        placeholder="GPA / CGPA"
                        type="text"
                        {...register("result", { required: false })}
                    />
                    <br />
                </div>

                <div>
                    <label className="text-p-white font-serif text-2xl leading-loose">
                        Passing Year
                    </label>
                    <br />
                    <input
                        className="w-full bg-primary-800/50 text-p-white py-5 px-5 text-xl rounded-md"
                        placeholder="Year"
                        type="text"
                        {...register("passing_year", { required: false })}
                    />
                    <br />
                </div>

                <div className="col-span-4">
                    <label className="text-p-white font-serif text-2xl leading-loose">
                        Certificate & All Transcripts / Marksheets in a combined PDF Format
                    </label>
                    <br />
                    <input
                        className="w-full bg-primary-800/50 text-p-white py-5 px-5 text-xl rounded-md"
                        type="file"
                        accept="application/pdf"
                        {...register("certificates", { required: false })}
                    />
                    <br />
                </div>
            </div>
        </div>
    );
};

export default EducationalInfo;