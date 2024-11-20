import React from "react";
import { Link } from "react-router-dom";

const Discover = () => {
  return (
    <div className="text-center justify-center items-center  text-[#fff5d9] mt-56">
      <h1 className="text-[100px] font-serif">Made for Creatives</h1>
      <p className="my-4 font-medium">A discovery engine for <button>creatives</button></p>
      <Link to="/home">
      <button className="rounded-xl normal-case p-3 bg-[#fff5d9] text-black font-serif mt-5 transition-colors duration-300 hover:bg-yellow-300">
        Get Inspired
      </button>
      </Link>
    </div>
  );
 
};

export default Discover;
