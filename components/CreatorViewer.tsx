/* eslint-disable @next/next/no-img-element */
import { useState } from "react";

const buttons = ["Creators", "Viewers"];

const textBubbleLeftLarge = {
  backgroundImage: "url('/white-chat-bubble-large.png')",
  backgroundRepeat: "no-repeat",
};

const textBubbleLeft = {
  backgroundImage: "url('/white-chat-bubble.png')",
  backgroundRepeat: "no-repeat",
};

const textBubbleRightLarge = {
  backgroundImage: "url('/blue-chat-bubble-large.png')",
  backgroundRepeat: "no-repeat",
};

const textBubbleRight = {
  backgroundImage: "url('/blue-chat-bubble.png')",
  backgroundRepeat: "no-repeat",
};

export const CreatorViewer: React.FC = () => {
  const [activeButton, setActiveButton] = useState(buttons[0]);
  return (
    <div className="relative flex flex-col items-center lg:min-h-[1041px] text-[#FFFFFF] mt-36 lg:mt-0">
      <h2 className="lg:max-w-[495px] tracking-[-1%] leading-[69.6px] text-center text-[58px] font-extrabold p-4 lg:p-0 lg:mt-16 mb-8 lg:mb-12">
        <span className="text-[#FFC46B]">Bridging</span> The Gap Between
      </h2>
      <div className="relative flex gap-2 lg:gap-8 mb-8 lg:mb-16">
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
      {activeButton === "Creators" && (
        <>
          <div className="relative bg-[#EAEAEA] h-[452px] min-w-[388px] lg:min-w-[658px] border-default">
            {/* Text bubble left : large */}
            <div
              className="absolute left-[-10%] top-[-1%] hidden lg:flex lg:justify-center z-10 h-[280px] w-[420px] pt-8"
              style={textBubbleLeftLarge}
            >
              <div className="text-[#18191F] max-w-[297px]">
                <h3 className="leading-[45.6px] text-[38px] font-extrabold mb-4">
                  Motivation.
                </h3>
                <p className="tracking-[0.05em] leading-[25.2px] text-[21px] font-medium">
                  No benefits for viewers, minimal exclusivity within creator
                  communities and lack of control over fanbase.
                </p>
              </div>
            </div>

            {/* Text bubble left */}
            <div
              className="absolute left-[-5%] top-[-1%] flex justify-center lg:hidden z-10 h-[250px] w-[320px] pt-4"
              style={textBubbleLeft}
            >
              <div className="text-[#18191F] max-w-[248px]">
                <h3 className="leading-[45.6px] text-[38px] font-extrabold mb-4">
                  Motivation.
                </h3>
                <p className="tracking-[0.1em] leading-[16.8px] text-[14px] font-medium">
                  No benefits for viewers, minimal exclusivity within creator
                  communities and lack of control over fanbase.
                </p>
              </div>
            </div>

            {/* Text bubble right : large */}
            <div
              className="absolute right-[-22.5%] bottom-[-15%] hidden lg:flex lg:justify-center z-10 h-[330px] w-[430px] pt-8"
              style={textBubbleRightLarge}
            >
              <div className="relative text-[#18191F] max-w-[297px]">
                <div className="absolute top-[-35.5%] right-[-15%]">
                  <img src="/screen-icon.png" alt="Screen Icon" />
                </div>
                <h3 className="leading-[45.6px] text-[38px] font-extrabold mb-2">
                  Opportunity.
                </h3>
                <p className="tracking-[0.05em] leading-[25.2px] text-[21px] font-medium">
                  Create monetary opportunities for both creators and viewers
                  and engage with your audiences in meaningful that incentivises
                  rewards.
                </p>
              </div>
            </div>

            {/* Text bubble right */}
            <div
              className="absolute right-[-5%] bottom-[-19%] flex lg:hidden z-10 h-[300px] w-[320px] pt-4"
              style={textBubbleRight}
            >
              <div className="text-[#18191F] max-w-[255px] pl-6">
                <h3 className="leading-[45.6px] text-[38px] font-extrabold mb-4">
                  Opportunity.
                </h3>
                <p className="tracking-[0.1em] leading-[16.8px] text-[14px] font-medium">
                  Create monetary opportunities for both creators and viewers
                  and engage with your audiences in meaningful that incentivises
                  rewards.
                </p>
              </div>
            </div>
          </div>
          {/* Pencil large*/}
          <div>
            <img
              src="/pencil-large.png"
              alt="Pencil Large"
              className="absolute left-0 bottom-0 hidden lg:block z-30"
            />
          </div>

          {/* Pencil */}
          <div>
            <img
              src="/pencil.png"
              alt="Pencil"
              className="absolute left-0 bottom-0 block lg:hidden z-30"
            />
          </div>
        </>
      )}
      {activeButton === "Viewers" && (
        <div className="flex flex-col lg:flex-row gap-8 h-full w-full text-[#FFFFFF] p-0">
          <div className="lg:w-1/2">
            <img
              src="/television.png"
              alt="Television"
              className="rounded-lg"
            />
          </div>

          {/* Large viewport */}
          <div className="hidden lg:flex lg:flex-col lg:w-1/2 text-[#18191F] p-4 lg:p-0 mr-8">
            <div className="flex flex-row gap-4">
              <div className="relative w-full">
                <div className="relative flex flex-col justify-center gap-4 z-10 bg-[#6BA6FF] min-h-[251.55px] lg:pl-4 xl:pl-8 border-[#18191F] border-[5px] rounded-[50px]">
                  <p className="leading-[37.2px] text-[31px] font-bold">
                    Development
                  </p>
                  <p className="tracking-[0.05em] leading-[25.2px] text-[21px] font-medium max-w-[219px]">
                    The Ledge Website and web appThe Ledge Website and web app
                  </p>
                </div>
                <div className="absolute -bottom-2.5 h-[251.55px] w-full bg-[#616161] border-[#18191F] border-[4px] rounded-[50px]"></div>
              </div>

              <div className="relative w-full">
                <div className="relative flex flex-col justify-center gap-4 z-10 bg-[#FFC46B] min-h-[251.55px] lg:pl-4 xl:pl-8 border-[#18191F] border-[5px] rounded-[50px]">
                  <p className="leading-[37.2px] text-[31px] font-bold">
                    Development
                  </p>
                  <p className="tracking-[0.05em] leading-[25.2px] text-[21px] font-medium max-w-[219px]">
                    The Ledge Website and web appThe Ledge Website and web app
                  </p>
                </div>
                <div className="absolute -bottom-2.5 h-[251.55px] w-full bg-[#616161] border-[#18191F] border-[4px] rounded-[50px]"></div>
              </div>
            </div>

            <div className="relative mt-8">
              <div className="relative flex flex-col justify-center gap-4 z-10 bg-[#56D698] min-h-[210.55px] lg:pl-4 xl:pl-8 border-[#18191F] border-[5px] rounded-[50px]">
                <p className="leading-[37.2px] text-[31px] font-bold">
                  Development
                </p>
                <p className="tracking-[0.05em] leading-[25.2px] text-[21px] font-medium max-w-[480px]">
                  The Ledge Website and web appThe Ledge Website and web appThe
                  Ledge Website and web appThe Ledge Website and web app
                </p>
              </div>
              <div className="absolute -bottom-2.5 h-[210.55px] w-full bg-[#616161] border-[#18191F] border-[4px] rounded-[50px]"></div>
            </div>
          </div>

          {/* Mobile viewport */}
          <div className="flex flex-col lg:hidden text-[#18191F]">
            <div className="flex gap-4 bg-[#56D698] p-6 border-[#18191F] border-[5px] rounded-[50px] drop-shadow-default mx-4 mb-4">
              <p className="leading-[37.2px] text-[31px] font-bold">1.</p>
              <p className="tracking-[0.1em] leading-[16.8px] text-[14px] font-medium">
                The Ledge Website and web appThe Ledge Website and web
              </p>
            </div>

            <div className="flex gap-4 bg-[#6BA6FF] p-6 border-[#18191F] border-[5px] rounded-[50px] drop-shadow-default mx-4 mb-4">
              <p className="leading-[37.2px] text-[31px] font-bold">2.</p>
              <p className="tracking-[0.1em] leading-[16.8px] text-[14px] font-medium">
                The Ledge Website and web appThe Ledge Website and web
              </p>
            </div>

            <div className="flex gap-4 bg-[#FFC46B] p-6 border-[#18191F] border-[5px] rounded-[50px] drop-shadow-default mx-4">
              <p className="leading-[37.2px] text-[31px] font-bold">3.</p>
              <p className="tracking-[0.1em] leading-[16.8px] text-[14px] font-medium">
                The Ledge Website and web appThe Ledge Website and web
              </p>
            </div>
          </div>
        </div>
      )}
      {/* Controller */}
      <div className="absolute bottom-[-20%] lg:bottom-[-2%]">
        <img src="/controller.png" alt="Controller" />
      </div>
    </div>
  );
};
