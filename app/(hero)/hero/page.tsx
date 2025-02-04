'use client';

import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import client, { urlFor } from '@/lib/sanity';

interface ImageItem {
  src: any;
  brand: any;
}

export default function Hero() {
  const [images, setImages] = useState<ImageItem[]>([]);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  let scrollTimeout: NodeJS.Timeout | null = null;

  useEffect(() => {
    const fetchHeroImages = async () => {
      try {
        const data = await client.fetch(`*[_type == "heroImages"][0] {images}`);
        if (data?.images) {
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

    const handleScrollEnd = () => {
      if (!scrollContainer) return;

      const children = scrollContainer.children as HTMLCollectionOf<HTMLElement>;
      let closestIndex = 0;
      let minDistance = Number.MAX_VALUE;

      for (let i = 0; i < children.length; i++) {
        const distance = Math.abs(
          children[i].offsetLeft - scrollContainer.scrollLeft
        );

        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = i;
        }
      }

      scrollContainer.scrollTo({
        left: children[closestIndex].offsetLeft,
        behavior: 'smooth',
      });

      // Infinite Loop Logic: When we reach the last set of images, reset to the start
      if (closestIndex >= children.length / 2) {
        setTimeout(() => {
          scrollContainer.scrollTo({ left: 0, behavior: 'instant' });
        }, 500); // Small delay to make it seamless
      }
    };

    const handleScroll = () => {
      if (scrollTimeout) clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(handleScrollEnd, 250); // Increased debounce for smoother feel
    };

    scrollContainer.addEventListener('scroll', handleScroll);

    return () => {
      scrollContainer.removeEventListener('scroll', handleScroll);
    };
  }, [images]);

  return (
    <div className="bg-[#121212] pl-[60px] lg:pl-[30px] text-white flex flex-col items-center pt-[20px] pb-[120px] lg:pb-[60px]">
      <div className="relative w-full overflow-hidden">
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto whitespace-nowrap scrollbar-hide custom-scrollbar scroll-smooth"
        >
          {/* Duplicate images for the infinite scroll effect */}
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
