import React from "react";
import Navbar from "../components/Navbar";
import { Home } from "../pages";
import SecondNav from "../components/SecondNav";

const SecondPage = (props) => {
  return (
    <div className="w-screen min-h-screen  px-10 bg-[#0c0c0c]">
      <SecondNav />
      <div className="overflow-y-auto">
        {props.children}
        {/* <Home /> */}
        </div>
    </div>
  );
};

export default SecondPage;
