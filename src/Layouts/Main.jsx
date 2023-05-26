import { Outlet } from "react-router-dom";
import Navbar from "../Components/Main/Shared/Navbar";
import Footer from "../Components/Main/Shared/Footer";

const Main = () => {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default Main;
