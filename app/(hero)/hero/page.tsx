"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";

interface ImageItem {
  src: string;
  brand: string;
}

const images: ImageItem[] = [
  { src: "/contact3.png", brand: "/Moniepoint.svg" },
  { src: "/contact1.png", brand: "/MTN.svg" },
  { src: "/contact2.png", brand: "/Betway.svg" },
  { src: "/contact3.png", brand: "/Moniepoint.svg" },
  { src: "/contact1.png", brand: "/MTN.svg" },
  { src: "/contact2.png", brand: "/Betway.svg" },
];

export default function Hero() {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let index = 0;

    const scrollImages = () => {
      if (!scrollContainer) return;
      
      const children = scrollContainer.children as HTMLCollectionOf<HTMLElement>;
      if (index >= children.length / 2) { 
        scrollContainer.scrollTo({ left: 0, behavior: "instant" });
        index = 0;
      }

      const nextPosition = children[index].offsetLeft;
      scrollContainer.scrollTo({ left: nextPosition, behavior: "smooth" });

      index++;
    };

    const interval = setInterval(scrollImages, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#121212] pl-[60px] text-white flex flex-col items-center pt-[20px] pb-[120px]">
      <div className="relative w-full overflow-hidden">
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide custom-scrollbar scroll-smooth"
        >
          {[...images, ...images].map((image, index) => (
            <div key={index} className="snap-start flex flex-col items-center min-w-[400px] w-full">
              <Image
                src={image.src}
                alt="image"
                width={400}
                height={300}
                className="rounded-lg"
              />
              <div className="w-full flex justify-start mt-3">
                <Image
                  src={image.brand}
                  alt="brand logo"
                  width={100}
                  height={50}
                  className="w-[auto] h-[20px] object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
