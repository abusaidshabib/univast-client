import { useContext } from "react";
import { AuthContext } from "../../../../../Context/UserContext";
import { useGetTeacherByEmailQuery } from "../../../../../features/teacher/teacherApi";

const TPublication = () => {
  const { user } = useContext(AuthContext);
  const { data, isSuccess } = useGetTeacherByEmailQuery(user?.email);

  if (isSuccess) {
    const teacherData = data?.data;
    console.log(teacherData);

    return (
      <div className="grid grid-cols-2 gap-20">
        {teacherData?.publication.map((pub, index) => (
          <div key={pub._id}>
            <p className="text-center text-lg text-secondary-blue font-bold py-5">Publication {index+1}</p>
            <div className="border-y-4 border-primary-blue py-10">
              <div></div>
              <p className="text-2xl py-5 font-semibold">{pub?.title}</p>

              <div>
                <p cla>Author</p>
                {
                    pub?.author.map((name, index) => (
                        <p className="font-medium text-primary-orange" key={index+1}>- {name}</p>
                    ))
                }
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
};

export default TPublication;
