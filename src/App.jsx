import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./Routes/Router/Router";
import UserContext from "./Context/UserContext";

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
