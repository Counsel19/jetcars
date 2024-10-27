import { FC } from "react";
import Navbar from "../shared/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer";

const BaseLayout: FC = () => {
  return (
    <div>
      <Navbar />

      <Outlet />

      <Footer />
    </div>
  );
};

export default BaseLayout;
