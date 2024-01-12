import { useContext } from "react";
import { AuthContext } from "../../../../../Context/UserContext";
import { useGetTeacherByEmailQuery } from "../../../../../features/teacher/teacherApi";

const TPublication = () => {
  const { user } = useContext(AuthContext);
  const { data } = useGetTeacherByEmailQuery(user?.email);

  const teacherData = data?.data[0];

  return (
    <div className="grid grid-cols-2 gap-10">
      {teacherData?.publication?.map((pub, index) => (
        <div key={pub._id}>
          <p className="text-center text-lg text-secondary-blue font-bold py-5">
            Publication {index + 1}
          </p>
          <div className="border-y-4 border-primary-blue py-10">
            <p className="text-2xl py-5 font-semibold">{pub?.title}</p>
            <div className="flex justify-between pb-2">
              <div>
                <p>Author</p>
                {pub?.author.map((name, index) => (
                  <p
                    className="font-medium text-primary-orange"
                    key={index + 1}
                  >
                    - {name}
                  </p>
                ))}
              </div>
              <p className="text-sm text-right">
                Publication Year: {pub?.publication_year}
              </p>
            </div>
            <p className="">
              <b>Journal</b> : {pub?.journal}
            </p>
            <p className="">
              <b>Volume</b> : {pub?.volume}
            </p>
            <p className="">
              <b>Pages</b> : {pub?.pages}
            </p>
            <p className="">
              <b>DOI</b> : {pub?.doi}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TPublication;
