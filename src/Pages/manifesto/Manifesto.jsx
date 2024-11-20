import React from "react";
import { GALLERY_IMAGES } from "../../config"

const Manifesto = () => {

  return (
    <div className=" w-full text-[#fff5d9]">
      <div className="flex justify-center gap-x-4 text-xs items-center p-10">
        <span className="py-2 px-4 border rounded-full">For You</span>
        <span className="opacity-50">Following</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
      {GALLERY_IMAGES.map((image, index) => (
        <div
          className="p-4 rounded-lg shadow-lg transition-transform hover:scale-100"
          key={index}
        >
          <img src={image.image} alt="image" className="w-full h-auto object-cover rounded-md" />
        </div>
      ))}
      </div>
      
    </div>
  );
};

export default Manifesto;
