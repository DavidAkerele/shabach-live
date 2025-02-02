import React from "react";
import Link from "next/link"; // Importing Next.js Link for navigation

// Define a type for the list items, so we can map over them
interface LinkItem {
  name: string;
  url: string;
}

const links: LinkItem[] = [
  { name: "Instagram", url: "https://www.instagram.com" },
  { name: "LinkedIn", url: "https://www.linkedin.com" },
  { name: "X (FKA Twitter)", url: "https://x.com" },
  { name: "Work", url: "/work" }, // You can link to internal pages with Next.js
  { name: "Contact", url: "/contact" }, // You can link to internal pages with Next.js
  { name: "Book a call", url: "/book-a-call" }, // You can link to internal pages with Next.js
];

const Footer: React.FC = () => {
  return (
    <div className="flex bg-[#FBF7F0] px-[60px] justify-between items-center pb-[96px]">
      <img src="/shabachdark.svg" alt="logooo"/>
      <div>
        <ul className="flex gap-[18px] text-[24px]">
          {links.map((link) => (
            <li key={link.name}>
              <Link href={link.url} className="hover:underline hover:cursor-pointer  text-[20px] leading-[24.2px]">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
