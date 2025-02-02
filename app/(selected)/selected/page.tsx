'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import client, { urlFor } from '@/lib/sanity'; // Import the helper function

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
        console.error('Error fetching works:', error);
      }
    };

    fetchWorks();
  }, []);

  return (
    <div className="bg-[#121212] text-white flex flex-col items-center py-[96px]">
      <div className="w-full px-[60px]">
        <h2 className="font-[400] text-[42px] leading-[46.2px] mb-[48px] magilio">
          Selected <br /> Works
        </h2>
      </div>
      <div className="w-full space-y-4">
        {works.map((item, index) => (
          <div key={index} className="border-b border-[#202020] py-4">
            <div
              className="flex justify-between px-[60px] items-center cursor-pointer py-2 gap-4"
              onClick={() => toggleDropdown(index)}
            >
              {/* Render logo image if available, otherwise render text title */}
              <span className="text-xl font-semibold flex-1">
                {item.logo ? (
                  <div className="w-full items-start flex justify-start">
                    <Image
                      src={urlFor(item.logo).width(100).height(50).url() || ''}
                      alt="Logo"
                      width={100}
                      height={50}
                      className="w-[auto] h-[20px] object-contain flex justify-start items-start flex-col"
                    />
                  </div>
                ) : (
                  item.title // If no logo, show title text
                )}
              </span>

              <span className="text-white flex-1 text-center">
                EOY Party <span className="text-[#202020]">{item.year}</span>
              </span>
              <span className="flex-1 text-right text-[24px] font-[200]">
                {openIndex === index ? '−' : '+'}
              </span>
            </div>

            {openIndex === index && (
              <div className="mt-4 flex gap-6 ml-[60px]">
                <p className="w-1/3 text-gray-300">{item.description}</p>
                <div className="w-2/3 flex gap-4 scrollbar-hide overflow-x-auto snap-x snap-mandatory scroll-smooth custom-scrollbar">
                  {item.images.map((image, imgIndex) => (
                    <Image
                      key={imgIndex}
                      src={urlFor(image).width(396).height(380).url() || ''}
                      alt={`Gallery ${imgIndex}`}
                      width={396}
                      height={380}
                      className=""
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
