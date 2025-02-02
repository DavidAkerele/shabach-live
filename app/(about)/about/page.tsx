'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import client, { urlFor } from '@/lib/sanity'; // Import the helper function

interface AboutContent {
  heroImage: any; // Sanity image object
  headline: string;
  description1: string;
  description2: string;
}

export default function About() {
  const [aboutContent, setAboutContent] = useState<AboutContent | null>(null);

  useEffect(() => {
    const fetchAboutContent = async () => {
      try {
        const data = await client.fetch('*[_type == "about"][0]'); // Fetch the first (or only) about document
        setAboutContent(data);
      } catch (error) {
        console.error('Error fetching about content:', error);
      }
    };

    fetchAboutContent();
  }, []);

  if (!aboutContent) {
    return <div>Loading...</div>; // Show a loading message until the data is fetched
  }

  return (
    <div className="bg-[#FBF7F0] flex flex-col items-center py-[120px]">
      <div className="w-[500px]">
        {/* Render dynamic hero image from Sanity */}
        {aboutContent.heroImage && (
          <Image
            src={urlFor(aboutContent.heroImage).width(500).height(336).url() || ''}
            alt="Hero Image"
            width={500}
            height={336}
            className="w-[100%] h-[100%] object-cover mb-[36px]"
          />
        )}

        <div>
          <h1 className="magilio text-[42px] leading-[46.2px] font-[400] mb-[24px]">
            {aboutContent.headline || 'Capturing life One shot at a time'}
          </h1>
          {/* Render both descriptions */}
          <p className="text-[24px] leading-[28.8px] font-[400] mb-[24px]">
            {aboutContent.description1 ||
              'Through my lens, I capture moments that tell stories—raw, authentic, and timeless. Whether it\'s portraits, events, or editorial work, I focus on the details that make each shot unforgettable. Let’s create something beautiful together.'}
          </p>
          <p className="text-[24px] leading-[28.8px] font-[400]">
            {aboutContent.description2 ||
              'Whether it’s portraits that reveal personality, event photography that preserves memories, or editorial work that speaks volumes, my goal is to create images that feel authentic and timeless. Let’s turn moments into art—one frame at a time.'}
          </p>
        </div>
      </div>
    </div>
  );
}
