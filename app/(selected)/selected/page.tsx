"use client";

import React, { useState } from "react";
import Image from "next/image";

interface WorkItem {
  title: string;
  year: string;
  description: string;
  images: string[];
}

const data: WorkItem[] = [
  {
    title: "/Moniepoint.svg", // SVG File
    year: "2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    images: [
      "/contact1.png",
      "/contact1.png",
      "/contact1.png",
      "/contact1.png",
      "/contact1.png",
    ],
  },
  {
    title: "/Betway.svg", // Text
    year: "2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    images: [
      "/contact1.png",
      "/contact1.png",
      "/contact1.png",
      "/contact1.png",
      "/contact1.png",
    ],
  },
  {
    title: "/MTN.svg", // Text
    year: "2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    images: [
      "/contact1.png",
      "/contact1.png",
      "/contact1.png",
      "/contact1.png",
      "/contact1.png",
    ],
  },
  {
    title: "/Piggyvest.svg", // Text
    year: "2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    images: [
      "/contact1.png",
      "/contact1.png",
      "/contact1.png",
      "/contact1.png",
      "/contact1.png",
    ],
  },
  {
    title: "/brass.svg", // Text
    year: "2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    images: [
      "/contact1.png",
      "/contact1.png",
      "/contact1.png",
      "/contact1.png",
      "/contact1.png",
    ],
  },
];

export default function Selected() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-[#121212] text-white flex flex-col items-center py-[96px]">
      <div className="w-full px-[60px]">
        <h2 className="font-[400] text-[42px] leading-[46.2px] mb-[48px] magilio">Selected <br/> Works</h2>
      </div>
      <div className="w-full space-y-4">
        {data.map((item, index) => (
          <div key={index} className="border-b border-[#202020] py-4">
            <div
              className="flex justify-between px-[60px] items-center cursor-pointer py-2 gap-4"
              onClick={() => toggleDropdown(index)}
            >
              {/* Render SVG if title is an image, otherwise show text */}
              <span className="text-xl font-semibold flex-1">
                {item.title.endsWith(".svg") ? (
                  <div className="w-full items-start flex justify-start ">
                    <Image
                    src={item.title}
                    alt="Logo"
                    width={100}
                    height={50}
                    className="w-[auto] h-[20px] object-contain flex justify-start items-start flex-col"
                  />
                  </div>
                ) : (
                  item.title
                )}
              </span>

              <span className="text-white flex-1 text-center">
                EOY Party <span className="text-[#202020]">{item.year}</span>
              </span>
              <span className="flex-1 text-right text-[24px] font-[200]">
                {openIndex === index ? "−" : "+"}
              </span>
            </div>

            {openIndex === index && (
              <div className="mt-4 flex gap-6 ml-[360px]">
                <p className="w-1/3 text-gray-300">{item.description}</p>
                <div className="w-2/3 flex gap-4 scrollbar-hide overflow-x-auto snap-x snap-mandatory scroll-smooth custom-scrollbar">
                  {item.images.map((src, imgIndex) => (
                    <Image
                      key={imgIndex}
                      src={src}
                      alt={`Gallery ${imgIndex}`}
                      width={396}
                      height={380}
                      className="rounded-lg"
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
