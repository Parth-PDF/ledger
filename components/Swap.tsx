/* eslint-disable @next/next/no-img-element */
import { useState } from "react";

const buttons = ["Creators", "Viewers"];

export const Swap: React.FC = () => {
  const [activeButton, setActiveButton] = useState(buttons[0]);
  return (
    <div className="relative flex flex-col items-center min-h-[1041px] text-[#FFFFFF] mt-36 lg:mt-0">
      <h2 className="lg:max-w-[495px] tracking-[-1%] leading-[69.6px] text-center text-[58px] font-extrabold p-4 lg:p-0 lg:mt-16 mb-12">
        <span className="text-[#FFC46B]">Bridging</span> The Gap Between
      </h2>
      <div className="relative flex gap-8">
        {buttons.map((button, index) => (
          <div key={index} className="relative">
            <button
              className={`relative z-10 tracking-[4%] leading-[19.6px] text-[14px] font-bold px-16 py-4 border-2 border-[#18191F] rounded-full ${
                activeButton === button
                  ? "text-[#FFFFFF] bg-[#BE6BFF]"
                  : "text-[#18191F] bg-[#FFFFFF]"
              }`}
              onClick={() => setActiveButton(button)}
            >
              {button}
            </button>
            <div className="absolute -bottom-1.5 left-0 h-[55.9px] w-full bg-[#616161] border-2 border-[#18191F] rounded-full"></div>
          </div>
        ))}
        <div className="hidden md:block absolute bottom-[3%] left-[-33%]">
          <img src="/arrow.png" alt="Arrow" />
        </div>
      </div>
    </div>
  );
};
