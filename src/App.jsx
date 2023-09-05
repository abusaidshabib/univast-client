import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./Routes/Router/Router";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { setUser } from "./features/firebase/authenticationSlice";
import auth from "./firebase/firebase.config";

function App() {
  const dispatch = useDispatch();

  // console.log(import.meta.env.VITE_REACT_APP_apiKey);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(JSON.parse(JSON.stringify(user)))); //non serializable value to serializable value
      }
    });
  }, [dispatch]);

  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
