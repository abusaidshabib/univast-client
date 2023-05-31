import { Outlet } from "react-router-dom";
import Footer from "../Pages/MainWebsite/Shared/Footer";
import Navbar from "../Pages/MainWebsite/Shared/Navbar";


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
