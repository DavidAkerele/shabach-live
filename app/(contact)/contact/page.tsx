import React from "react";
import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import client, { urlFor } from "@/lib/sanity"; // Import the helper function

interface ContactProps {
  email: string;
  images: any[];
}

export default async function Contact() {
  const data: ContactProps = await client.fetch(
    `*[_type == "contact"][0] { 
      email, 
      images
    }`
  );

  return (
    <div id="contact" className="flex bg-[#FBF7F0] px-[60px] py-[96px]  lg:px-[30px] flex-col items-center justify-center  relative  lg:py-[60px] lg:mt-[36px]">
      {/* Image Gallery with Overlay */}
      <div className="grid grid-cols-[33%_33%_33%] w-full items-center   gap-[8px]   lg:grid lg:grid-cols-[33%_33%_33%] lg:gap-[2px] md:gap-[4px]">
        {data.images.map((image, index) => (
          <div key={index} className="relative  ">
            <img
              src={urlFor(image).width(600).url()}
              alt={`Contact ${index + 1}`}
              className="w-full h-[750px]  lg:h-[356.84px] md:h-[250px]  object-cover opacity-30 "
            />
          </div>
        ))}
      </div>

      {/* Overlay Text */}
      <div className="absolute inset-0 flex items-center justify-center bg-opacity-50 bg-[#FBF7F0]">
        <span className="text-[#6F511D] text-[96px] font-[400] magilio hover:underline hover:cursor-pointer lg:text-[40px] md:text-[30px]">
          {data.email}
        </span>
      </div>
    </div>
  );
}
