"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import client, { urlFor } from "@/lib/sanity";

// Define a more structured media item type
interface MediaItem {
  type: "image" | "video";
  src?: { _type: "image"; asset: { _ref: string } };
  videoUrl?: string;
  brand?: { _type: "image"; asset: { _ref: string } };
}

export default function Hero() {
  const [media, setMedia] = useState<MediaItem[]>([]);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  let scrollTimeout: NodeJS.Timeout | null = null;

  // Fetch media items from Sanity
  useEffect(() => {
    const fetchHeroMedia = async () => {
      try {
        const data = await client.fetch(`*[_type == "heroMedia"][0] { media }`);
        console.log("Fetched media:", data);

        if (data?.media) {
          const validMedia = data.media.filter(
            (item: MediaItem) => item.src || item.videoUrl
          );
          setMedia(validMedia);
        }
      } catch (error) {
        console.error("Error fetching hero media:", error);
      }
    };

    fetchHeroMedia();
  }, []);

  // Scroll behavior for infinite scrolling
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
        behavior: "smooth",
      });

      if (closestIndex >= children.length / 2) {
        setTimeout(() => {
          scrollContainer.scrollTo({ left: 0, behavior: "instant" });
        }, 500);
      }
    };

    const handleScroll = () => {
      if (scrollTimeout) clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(handleScrollEnd, 250);
    };

    scrollContainer.addEventListener("scroll", handleScroll);

    return () => {
      scrollContainer.removeEventListener("scroll", handleScroll);
    };
  }, [media.length]); // Depend only on the length to avoid unnecessary re-renders

  return (
    <div className="bg-[#121212] pl-[60px] lg:pl-[30px] text-white flex flex-col items-center pt-[20px] pb-[120px] lg:pb-[60px]">
      <div className="relative w-full overflow-hidden">
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto whitespace-nowrap scrollbar-hide custom-scrollbar scroll-smooth"
        >
          {[...media, ...media].map((item, index) => (
            <div
              key={index}
              className="snap-start flex flex-col items-center min-w-[400px] w-full lg:items-left lg:justify-start lg:min-w-[289px]"
            >
              {/* ✅ Render Image or Video */}
              {item.type === "image" && item.src ? (
                <Image
                  src={urlFor(item.src)?.width(400)?.height(600)?.url() || ""}
                  alt="Image"
                  width={400}
                  height={300}
                  className="lg:w-[289px] lg:h-[434px]"
                />
              ) : item.videoUrl?.includes("youtube.com") ? (
                <iframe
                  src={item.videoUrl.replace("shorts/", "embed/")}
                  className="w-full h-[600px]"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : item.videoUrl ? (
                <video
                  src={item.videoUrl}
                  className="w-full h-[600px] lg:w-[289px] lg:h-[434px] object-cover"
                  autoPlay
                  loop
                  muted
                />
              ) : null}

              {/* ✅ Brand Logo (if available) */}
              {item.brand && (
                <div className="w-full flex justify-start mt-3">
                  <Image
                    src={urlFor(item.brand)?.width(100)?.height(50)?.url() || ""}
                    alt="Brand logo"
                    width={100}
                    height={50}
                    className="w-[auto] h-[20px] object-contain"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
