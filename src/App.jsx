import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./Routes/Router/Router";
import UserContext from "../Context/userContext";

function App() {
  return (
    <div className="">
      <UserContext>
        <RouterProvider router={router} />
      </UserContext>
    </div>
  );
}

export default App;
