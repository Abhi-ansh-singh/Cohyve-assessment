import React from "react";

const Home = () => {
  return (
    <div className="w-full text-[#fff5d9]">

      <div className="flex justify-center gap-x-4 text-xs items-center">
        <span className="py-2 px-4 border rounded-full">For You</span>
        <span className="opacity-50">Following</span>
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6 bg-slate-300">
        <img src="../../assets/image.jpg" alt="secondary-img"></img>
      </div>
    </div>
  );
};

export default Home;
