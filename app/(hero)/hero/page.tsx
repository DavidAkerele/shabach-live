'use client';

import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import client, { urlFor } from '@/lib/sanity'; // Import the helper function

interface ImageItem {
  src: any; // Sanity image object (not just string)
  brand: any; // Sanity image object (not just string)
}

export default function Hero() {
  const [images, setImages] = useState<ImageItem[]>([]);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const fetchHeroImages = async () => {
      try {
        // Fetch hero images from Sanity
        const data = await client.fetch(`*[_type == "heroImages"][0] {images}`);
        if (data && data.images) {
          setImages(data.images);
        }
      } catch (error) {
        console.error('Error fetching hero images:', error);
      }
    };

    fetchHeroImages();
  }, []);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let index = 0;
    const scrollSpeed = 4000; // Change speed here (in milliseconds)

    const scrollImages = () => {
      if (!scrollContainer) return;

      const children = scrollContainer.children as HTMLCollectionOf<HTMLElement>;
      if (index >= children.length / 2) {
        scrollContainer.scrollTo({ left: 0, behavior: 'instant' });
        index = 0;
      }

      const nextPosition = children[index].offsetLeft;
      scrollContainer.scrollTo({ left: nextPosition, behavior: 'smooth' });

      index++;
    };

    const interval = setInterval(scrollImages, scrollSpeed);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="bg-[#121212] pl-[60px] lg:pl-[30px] text-white flex flex-col items-center pt-[20px] pb-[120px] lg:pb-[60px]">
      <div className="relative w-full overflow-hidden">
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide custom-scrollbar scroll-smooth"
        >
          {[...images, ...images].map((image, index) => (
            <div key={index} className="snap-start flex flex-col items-center min-w-[400px] w-full lg:items-left lg:justify-start lg:min-w-[289px]">
              <Image
                src={urlFor(image.src).width(400).height(600).url() || ''}
                alt="Image"
                width={400}
                height={300}
                className="lg:w-[289px] lg:h-[434px]"
              />
              <div className="w-full flex justify-start mt-3">
                <Image
                  src={urlFor(image.brand).width(100).height(50).url() || ''}
                  alt="Brand logo"
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
