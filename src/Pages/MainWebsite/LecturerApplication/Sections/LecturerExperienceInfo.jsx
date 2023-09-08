import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";
import { manageExperienceCount, setExperienceInfo } from "../../../../features/application/lecturerApplicationSlice";
import { useState } from "react";
import moment from "moment";

/* eslint-disable react/prop-types */
const LecturerExperienceInfo = () => {
  const { experience, experienceSectionCount } = useSelector(
    (state) => state.lecturerApplication
  );

  const [working, setWorking] = useState(false)
  const [noExperience, setNoExperience] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const removeSection = (indexToRemove) => {
    if (
      experienceSectionCount > 1 &&
      indexToRemove >= 0 &&
      indexToRemove < experienceSectionCount
    ) {
      dispatch(manageExperienceCount("REMOVE"));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedExperienceData = [];
    for (let i = 0; i < experienceSectionCount; i++) {
      const sectionData = {
        designation: e.target[`designation_${i}`].value,
        institution_name: e.target[`institution_name_${i}`].value,
        location: e.target[`location_${i}`].value,
        startDate: moment(e.target[`startDate_${i}`].value).format(
          "MMMM Do YYYY"
        ),
        endDate: moment(e.target[`endDate_${i}`]?.value).format("MMMM Do YYYY"),
        currentlyWorking: e.target[`currentlyWorking_${i}`].checked,
      };

      console.log(sectionData);
      updatedExperienceData.push(sectionData);
    }
    
    if (!noExperience) {
      dispatch(setExperienceInfo(updatedExperienceData));
    }
    navigate("/applyforlecturer/online/publications");
  };

  return (
    <form onSubmit={handleSubmit} className="font-sans text-primary-white">
      <p className="text-4xl font-semibold  pb-5">Experiences</p>
      <hr className="pb-5" />
      {Array.from({ length: experienceSectionCount }, (_, index) => (
        <div key={index} className="grid grid-cols-5 gap-10 pb-10">
          {index > 0 && <hr className="col-span-5" />}
          <div>
            <label className=" text-2xl leading-loose">Designation</label>
            <br />
            <input
              name={`designation_${index}`}
              id={`designation_${index}`}
              required={!noExperience}
              defaultValue={experience[index]?.designation}
              className="w-full bg-tertiary-blue  py-5 px-5 text-xl rounded-md"
              placeholder="Designation"
              type="text"
            />
            <br />
            {/* {errors.exam && (
              <p className="text-red-500 mt-2">This field is required</p>
            )} */}
          </div>
          <div>
            <label className=" text-2xl leading-loose">Institution Name</label>
            <br />
            <input
              name={`institution_name_${index}`}
              id={`institution_name_${index}`}
              required={!noExperience}
              defaultValue={experience[index]?.institution_name}
              className="w-full bg-tertiary-blue  py-5 px-5 text-xl rounded-md"
              placeholder="Institution Name"
              type="text"
            />
            <br />
            {/* {errors.institution_name && (
              <p className="text-red-500 mt-2">This field is required</p>
            )} */}
          </div>

          <div>
            <label className=" text-2xl leading-loose">Location</label>
            <br />
            <input
              name={`location_${index}`}
              id={`location_${index}`}
              required={!noExperience}
              defaultValue={experience[index]?.location}
              className="w-full bg-tertiary-blue  py-5 px-5 text-xl rounded-md"
              placeholder="Location"
              type="text"
            />
            <br />
            {/* {errors.board && (
              <p className="text-red-500 mt-2">This field is required</p>
            )} */}
          </div>

          <div>
            <label className="  text-2xl leading-loose">Start Date</label>
            <br />
            <input
              name={`startDate_${index}`}
              id={`startDate_${index}`}
              required={!noExperience}
              defaultValue={experience[index]?.startDate}
              className="w-full bg-tertiary-blue  py-5 px-5 text-xl rounded-md"
              type="date"
            />
            <br />
            {/* {errors.birth_date && (
              <p className="text-red-500 mt-2">This field is required</p>
            )} */}
          </div>

          <div>
            {!working && (
              <>
                <label className="text-2xl leading-loose">End Date</label>
                <br />
                <input
                  name={`endDate_${index}`}
                  id={`endDate_${index}`}
                  required={!noExperience}
                  defaultValue={experience[index]?.endDate}
                  className="w-full bg-tertiary-blue mb-1 py-5 px-5 text-xl rounded-md"
                  type="date"
                />
              </>
            )}
            <br />
            <div className="flex gap-3 items-center">
              <input
                name={`currentlyWorking_${index}`}
                id={`currentlyWorking_${index}`}
                onChange={(e) => setWorking(e.target.checked)}
                defaultValue={experience[index]?.currentlyWorking}
                type="checkbox"
              />
              <label className="text" htmlFor={`currentlyWorking_${index}`}>
                I am currently working on this role
              </label>
            </div>
          </div>

          <div className="col-span-5">
            <label className="  text-2xl leading-loose">Description</label>
            <br />
            <textarea
              name={`description_${index}`}
              id={`description_${index}`}
              required={!noExperience}
              defaultValue={experience[index]?.description}
              className="w-full bg-tertiary-blue py-5 px-5 text-xl rounded-md"
              type="date"
              placeholder="Description"
            ></textarea>
            <br />
            {/* {errors.birth_date && (
              <p className="text-red-500 mt-2">This field is required</p>
            )} */}
          </div>

          {index > 0 && (
            <div>
              <button
                className="bg-red-600 flex items-center gap-2 py-1 px-5 rounded-md text-md text-primary-white border-b-6"
                type="button"
                onClick={() => removeSection(index)}
              >
                Remove
              </button>
            </div>
          )}
        </div>
      ))}
      <button
        onClick={() => dispatch(manageExperienceCount("ADD"))}
        className="bg-tertiary-blue flex items-center gap-2 py-3 px-8 rounded-md text-lg text-primary-white border-b-6"
        type="button"
      >
        <AiOutlinePlus className="text-xl" />
        Add More
      </button>

      <div className="flex gap-3 mt-5 items-center">
        <input
          name={`noExperience`}
          id={`noExperience`}
          onChange={(e) => setNoExperience(e.target.checked)}
          defaultValue={experience?.noExperience}
          type="checkbox"
        />
        <label className="text-lg" htmlFor={`noExperience`}>
          I have no experience
        </label>
      </div>

      <div className="py-10 flex gap-8 items-center">
        <button
          className="bg-tertiary-blue py-3 px-10 rounded-md text-lg text-primary-white border-b-6"
          type="button"
          onClick={() => navigate("/applyforlecturer/online/educational")}
        >
          Prev
        </button>
        <button
          className="bg-tertiary-blue flex items-center gap-2 py-3 px-10 rounded-md text-lg text-primary-white border-b-6"
          type="submit"
        >
          Next
        </button>
      </div>
    </form>
  );
};

export default LecturerExperienceInfo;
