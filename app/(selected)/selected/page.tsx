"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import client, { urlFor } from "@/lib/sanity"; // Import the helper function

import { cn } from "@/lib/utils";

interface WorkItem {
  title: string;
  logo: any; // Sanity image object
  year: string;
  description: string;
  images: any[]; // Sanity image object
}

export default function Selected() {
  const [works, setWorks] = useState<WorkItem[]>([]);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    const fetchWorks = async () => {
      try {
        const data = await client.fetch('*[_type == "selectedWorks"]');
        setWorks(data);
      } catch (error) {
        console.error("Error fetching works:", error);
      }
    };

    fetchWorks();
  }, []);

  return (
    <div id="work" className="bg-[#121212] text-white flex flex-col items-center py-[96px]">
      <div className="w-full px-[60px] lg:px-[30px]">
        <h2 className="font-[400] text-[42px] leading-[46.2px] mb-[48px] magilio lg:text-[30px] lg:leading-[33px]">
          Selected <br /> Works
        </h2>
      </div>
      <div className="w-full  space-y-4">
        {works.map((item, index) => (
          <div key={index} className="border-b border-[#202020] py-4">
            <div
              className=" justify-between px-[60px] lg:px-[30px] items-center cursor-pointer py-2 lg:grid grid grid-cols-[33%_33%_33%] lg:gap-0 sm:grid-cols-[33%_53%_13%] lg:h-[50px]"
              onClick={() => toggleDropdown(index)}
            >
              {/* Render logo image if available, otherwise render text title */}
              <span className="text-xl  font-semibold flex-1">
                {item.logo ? (
                  <div className="w-full items-start flex justify-start">
                    <Image
                      src={urlFor(item.logo).width(100).height(50).url() || ""}
                      alt="Logo"
                      width={100}
                      height={50}
                      className="w-[auto] h-[18px] lg:h-[24px] object-contain flex justify-start items-start flex-col"
                    />
                  </div>
                ) : (
                  item.title // If no logo, show title text
                )}
              </span>

              <span className="text-white flex-1 sm:flex-2 text-center lg:text-[16px] flex items-center justify-center whitespace-nowrap">
                EOY Party{" "}
                <span className="text-[#202020] pl-[12px] lg:pl-[6px]">
                  {item.year}
                </span>
              </span>
              <span className="  text-right text-[24px] font-[200] ">
                {openIndex === index ? "−" : "+"}
              </span>
            </div>

            {/* {openIndex === index && ( */}
            <div
              className={cn(
                "mt-4 overflow-hidden flex gap-6 ml-[60px] lg:ml-[30px]",
                openIndex === index
                  ? "lg:h-[321px] h-[380px]"
                  : "lg:h-[0px] h-[0px]"
              )}
              style={{ transition: "0.3s ease-in-out" }}
            >
              <div className="w-[full] flex gap-4 scrollbar-hide overflow-x-auto snap-x snap-mandatory scroll-smooth custom-scrollbar">
                <div className=" lg:w-[289px] w-[373px]">
                  <p className=" text-gray-300 lg:w-[289px] w-[373px] ">
                    {item.description}
                  </p>
                </div>
                {item.images.map((image, imgIndex) => (
                  <img
                    key={imgIndex}
                    src={urlFor(image).url() || ""}
                    alt={`Gallery ${imgIndex}`}
                    className=" lg:w-[90vw] h-[380px] snap lg:h-[321.46px]"
                  />
                ))}
              </div>
            </div>
            {/* )} */}
          </div>
        ))}
      </div>
    </div>
  );
}
