import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./Routes/Router/Router";
import UserContext from "./Context/UserContext";
import moment from "moment";

function App() {
  const startDate = new Date(2007, 7, 1);
  const endDate = new Date(2020, 11, 31);

  // console.log(
  //   moment("2023-09-05").format("MMM Do YY"),
  // );

  return (
    <div className="">
      <UserContext>
        <RouterProvider router={router} />
      </UserContext>
    </div>
  );
}

export default App;
