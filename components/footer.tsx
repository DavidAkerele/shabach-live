"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import client, {  urlFor } from "@/lib/sanity"; // Ensure correct import

interface LinkItem {
  name: string;
  url: string;
}

const Footer: React.FC = () => {
  const [logo, setLogo] = useState<string>("");
  const [links, setLinks] = useState<LinkItem[]>([]);

  useEffect(() => {
    const fetchFooterData = async () => {
      try {
        const data = await client.fetch(`*[_type == "footer"][0] {logo, links}`);
        if (data) {
          setLogo(urlFor(data.logo).url()); // Use Sanity's URL builder
          setLinks(data.links || []);
        }
      } catch (error) {
        console.error("Error fetching footer data:", error);
      }
    };

    fetchFooterData();
  }, []);

  return (
    <div className="flex bg-[#FBF7F0] px-[60px] justify-between items-center pb-[96px]">
      {logo && (
        <Image
          src={logo}
          alt="logo"
          width={150}
          height={50}
          priority
        />
      )}
      <ul className="flex gap-[18px] text-[24px]">
        {links.map((link) => (
          <li key={link.name}>
            <Link href={link.url} className="hover:underline hover:cursor-pointer text-[20px] leading-[24.2px]">
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
