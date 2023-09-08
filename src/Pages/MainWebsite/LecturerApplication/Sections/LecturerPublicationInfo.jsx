import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";
import moment from "moment";
import { managePublicationCount, setPublicationInfo } from "../../../../features/application/lecturerApplicationSlice";

/* eslint-disable react/prop-types */
const LecturerPublicationInfo = () => {
  const { publication, publicationSectionCount } = useSelector(
    (state) => state.lecturerApplication
  );

  const [noPublications, setNoPublications] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const removeSection = (indexToRemove) => {
    if (
      publicationSectionCount > 1 &&
      indexToRemove >= 0 &&
      indexToRemove < publicationSectionCount
    ) {
      dispatch(managePublicationCount("REMOVE"));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedPublicationData = [];
    for (let i = 0; i < publicationSectionCount; i++) {
      const sectionData = {
        title: e.target[`title_${i}`].value,
        author: e.target[`author_${i}`].value.split(","),
        publication_year: moment(e.target[`publication_year_${i}`].value).format(
          "MMMM Do YYYY"
          ),
        journal: e.target[`journal_${i}`].value,
        volume: e.target[`volume_${i}`].value,
        pages: e.target[`pages_${i}`].value,
        doi: e.target[`doi_${i}`].value,
      };

      console.log(sectionData);
      
      updatedPublicationData.push(sectionData);
    }

    if (!noPublications) {
      dispatch(setPublicationInfo(updatedPublicationData));
    }
    navigate("/applyforlecturer/online/others");
  };

  return (
    <form onSubmit={handleSubmit} className="font-sans text-primary-white">
      <p className="text-4xl font-semibold  pb-5">Publication Info</p>
      <hr className="pb-5" />
      {Array.from({ length: publicationSectionCount }, (_, index) => (
        <div key={index} className="grid grid-cols-5 gap-10 pb-10">
          {index > 0 && <hr className="col-span-5" />}
          <div>
            <label className=" text-2xl leading-loose">Title</label>
            <br />
            <input
              name={`title_${index}`}
              id={`title_${index}`}
              required={!noPublications}
              defaultValue={publication[index]?.title}
              className="w-full bg-tertiary-blue  py-5 px-5 text-xl rounded-md"
              placeholder="Title"
              type="text"
            />
            <br />
            {/* {errors.exam && (
              <p className="text-red-500 mt-2">This field is required</p>
            )} */}
          </div>
          <div>
            <label className=" text-2xl leading-loose">Author</label>
            <br />
            <input
              name={`author_${index}`}
              id={`author_${index}`}
              required={!noPublications}
              defaultValue={publication[index]?.author}
              className="w-full bg-tertiary-blue  py-5 px-5 text-xl rounded-md"
              placeholder="Author"
              type="text"
            />
            <br />
          </div>

          <div>
            <label className=" text-2xl leading-loose">Publication Year</label>
            <br />
            <input
              name={`publication_year_${index}`}
              id={`publication_year_${index}`}
              required={!noPublications}
              defaultValue={publication[index]?.publication_year}
              className="w-full bg-tertiary-blue  py-5 px-5 text-xl rounded-md"
              type="date"
            />
            <br />
          </div>

          <div>
            <label className="  text-2xl leading-loose">Journal</label>
            <br />
            <input
              name={`journal_${index}`}
              id={`journal_${index}`}
              required={!noPublications}
              defaultValue={publication[index]?.journal}
              className="w-full bg-tertiary-blue  py-5 px-5 text-xl rounded-md"
              placeholder="journal"
              type="text"
            />
            <br />
          </div>

          <div>
            <label className="text-2xl leading-loose">Volume</label>
            <br />
            <input
              name={`volume_${index}`}
              id={`volume_${index}`}
              required={!noPublications}
              defaultValue={publication[index]?.volume}
              className="w-full bg-tertiary-blue  py-5 px-5 text-xl rounded-md"
              placeholder="volume"
              type="number"
            />
            <br />
          </div>

          <div>
            <label className="text-2xl leading-loose">Pages</label>
            <br />
            <input
              name={`pages_${index}`}
              id={`pages_${index}`}
              required={!noPublications}
              defaultValue={publication[index]?.pages}
              className="w-full bg-tertiary-blue  py-5 px-5 text-xl rounded-md"
              placeholder="pages"
              type="text"
            />
            <br />
          </div>

          <div className="col-span-4">
            <label className="text-2xl leading-loose">
              Doi (Digital Object Identifier)
            </label>
            <br />
            <input
              name={`doi_${index}`}
              id={`doi_${index}`}
              required={!noPublications}
              defaultValue={publication[index]?.doi}
              className="w-full bg-tertiary-blue  py-5 px-5 text-xl rounded-md"
              placeholder="doi"
              type="text"
            />
            <br />
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
        onClick={() => dispatch(managePublicationCount("ADD"))}
        className="bg-tertiary-blue flex items-center gap-2 py-3 px-8 rounded-md text-lg text-primary-white border-b-6"
        type="button"
      >
        <AiOutlinePlus className="text-xl" />
        Add More
      </button>

      <div className="flex gap-3 mt-5 items-center">
        <input
          name={`noPublications`}
          id={`noPublications`}
          onChange={(e) => setNoPublications(e.target.checked)}
          type="checkbox"
        />
        <label className="text-lg" htmlFor={`noPublications`}>
          I have no publications
        </label>
      </div>

      <div className="py-10 flex gap-8 items-center">
        <button
          className="bg-tertiary-blue py-3 px-10 rounded-md text-lg text-primary-white border-b-6"
          type="button"
          onClick={() => navigate("/applyforlecturer/online/experiences")}
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

export default LecturerPublicationInfo;
