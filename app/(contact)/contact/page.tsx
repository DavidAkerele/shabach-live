import React from "react";

export default function Contact() {
  return (
    <div className="flex bg-[#FBF7F0] px-[60px] flex-col items-center justify-center py-12 relative">
      {/* Image Gallery with Overlay */}
      <div className="flex w-full justify-between">
        <div className="relative w-[380px]">
          <img
            src="/contact3.png"
            alt="Contact 3"
            className="w-full h-[596px] object-cover  opacity-60 shadow-lg"
          />
        </div>

        <div className="relative w-[380px]">
          <img
            src="/contact1.png"
            alt="Contact 1"
            className="w-full h-[596px] object-cover  opacity-60 shadow-lg"
          />
        </div>

        <div className="relative w-[380px]">
          <img
            src="/contact2.png"
            alt="Contact 2"
            className="w-full h-[596px] object-cover opacity-60 shadow-lg"
          />
        </div>
      </div>

      {/* Overlay Text */}
      <div className="absolute inset-0 flex items-center justify-center  bg-opacity-50 bg-[#FBF7F0]">
        <span className=" text-[#6F511D] text-[96px] font-[400] magilio hover:underline hover:cursor-pointer">
          foto@shabach.me
        </span>
      </div>
    </div>
  );
}
