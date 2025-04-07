import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/UserContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const Login = () => {
  const { logIn, user, userRole } = useContext(AuthContext);
  const navigate = useNavigate();
  console.log(user, userRole);

  useEffect(() => {
    if (user && (userRole === "student" || userRole === "teacher")) {
      navigate(`/${userRole}/home`);
    } else if (user && userRole === "admin") {
      navigate("/control-panel");
    }
  }, [user, userRole]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log({ email, password });
    logIn(email, password)
      .then((data) => {
        console.log(data);
        form.reset();
      })
      .catch((error) => toast.error(error.message));
  };

  const tabs = [
    {
      key: "admin",
      value: "Admin",
      email: "univastadmin@gmail.com",
      password: "admin123",
    },
    {
      key: "student",
      value: "Student",
      email: "mdpulokhasan@gmail.com",
      password: "student123",
    },
    {
      key: "teacher",
      value: "Teacher",
      email: "pobonsaha001@gmail.com",
      password: "teacher123",
    },
  ];

  const [activeTab, setTab] = useState(tabs[0]);

  console.log("activeTab", tabs[activeTab]);

  return (
    <div className="min-h-[calc(100vh-80px)] grid place-items-center">
      <div className="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md">
        <div className="p-6">
          <div className="flex justify-center items-center cursor-pointer">
            <span className="text-primary-blue cursor-pointer text-4xl font-bold pr-1">
              UNI
            </span>
            <span className="border-l-2 border-primary-orange pl-1">
              <span className="text-accent-blue cursor-pointer font-semibold text-lg leading-none">
                VAST
              </span>{" "}
              <br />
              <span className="text-primary-blue cursor-pointer leading-none text-base">
                University
              </span>
            </span>
          </div>

          <h3 className="mt-3 text-xl font-medium text-center text-gray-600">
            Welcome Back
          </h3>

          <p className="mt-1 text-center text-gray-500">Login to your portal</p>

          <div className="my-3">
            <ul className="grid grid-cols-3 place-items-center text-gray-600">
              {tabs?.map((tab) => (
                <li
                  key={tab.key}
                  onClick={() => setTab(tab)}
                  className={`py-1 cursor-pointer w-full border-transparent text-center ${
                    activeTab.key === tab.key
                      ? "border-b-2 border-accent-blue font-semibold"
                      : ""
                  }`}
                >
                  {tab.value}
                </li>
              ))}
            </ul>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="w-full mt-4">
              <input
                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                type="email"
                name="email"
                placeholder="Email Address"
                aria-label="Email Address"
                value={activeTab.email}
              />
            </div>

            <div className="w-full mt-4">
              <input
                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                type="password"
                name="password"
                placeholder="Password"
                aria-label="Password"
                value={activeTab.password}
              />
            </div>

            <div className="flex items-center justify-between mt-4">
              <a href="#" className="text-sm text-gray-600 hover:text-gray-500">
                Forget Password?
              </a>

              <button
                type="submit"
                className="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
