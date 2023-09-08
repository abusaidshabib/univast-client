/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Context/UserContext";

const TeacherRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  console.log(user);
  const location = useLocation();

  if (loading) {
    return (
      <div className="w-full min-h-screen text-xl font-semibold grid place-items-center">
        Loading...
      </div>
    );
  }

  if (user && user?.role === "teacher") {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default TeacherRoute;
