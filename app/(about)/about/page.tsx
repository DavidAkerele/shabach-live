import React from "react";

export default function About() {
  return (
    <div className="bg-[#FBF7F0] flex flex-col  items-center py-[120px]">
      <div className="w-[500px]">
        <div className="bg-white h-[336px] rounded-[18px] mb-[36px]"></div>
        <div>
          <h1 className="magilio text-[42px]  leading-[46.2px] font-[400] mb-[24px]">
            Capturing life <br />
            One shot at a time
          </h1>
          <p className="text-[24px] leading-[28.8px] font-[400] mb-[24px]">
            Through my lens, I capture moments that tell stories—raw, authentic,
            and timeless. Whether it's portraits, events, or editorial work, I
            focus on the details that make each shot unforgettable. Let’s create
            something beautiful together.
          </p>
          <p className="text-[24px] leading-[28.8px] font-[400]">
            Whether it’s portraits that reveal personality, event photography
            that preserves memories, or editorial work that speaks volumes, my
            goal is to create images that feel authentic and timeless. Let’s
            turn moments into art—one frame at a time.
          </p>
        </div>
      </div>
    </div>
  );
}
