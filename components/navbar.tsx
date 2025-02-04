import React from "react";
import Link from "next/link"; // Importing Next.js Link for navigation

// Define a type for the list items, so we can map over them
interface LinkItem {
  name: string;
  url: string;
}

const links: LinkItem[] = [
  { name: "About", url: "#about" },
  { name: "Work", url: "#work" },
  { name: "Contact", url: "#contact" },
];

const Navbar: React.FC = () => {
  return (
    <div className="flex bg-[#121212] text-white px-[60px] lg:px-[30px] justify-between items-center pb-[36px] pt-[48px] lg:pb-[24px] lg:pt-[60px]">
      <img src="/shabachlight.svg" alt="logo" />

      <div className=" sm:hidden ">
        <ul className="flex gap-[18px] items-center justify-center text-[24px]">
          {links.map((link) => (
            <li key={link.name} className="text-center justify-center flex">
              <Link
                href={link.url}
                className=" text-[20px] hover:cursor-pointer leading-[24.2px]  hover:underline"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
