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
    <div id="contact" className="flex bg-[#FBF7F0] px-[60px] py-[60px] mt-[36px] lg:px-[30px] flex-col items-center justify-center  relative  lg:py-[60px] lg:mt-[36px]">
      {/* Image Gallery with Overlay */}
      <div className="flex w-full justify-between gap-[10px]  lg:justify-between lg:items-center lg:flex ">
        {data.images.map((image, index) => (
          <div key={index} className="relative  ">
            <img
              src={urlFor(image).width(600).url()}
              alt={`Contact ${index + 1}`}
              className="w-full h-[596px] lg:w-[100px] lg:h-[156.84px] object-cover opacity-30 "
            />
          </div>
        ))}
      </div>

      {/* Overlay Text */}
      <div className="absolute inset-0 flex items-center justify-center bg-opacity-50 bg-[#FBF7F0]">
        <span className="text-[#6F511D] text-[96px] font-[400] magilio hover:underline hover:cursor-pointer lg:text-[40px]">
          {data.email}
        </span>
      </div>
    </div>
  );
}
