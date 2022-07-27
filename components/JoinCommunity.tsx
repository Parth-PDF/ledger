import { DiscordIcon } from "./Shared/DiscordIcon";
import { OpenSeaIcon } from "./Shared/OpenSeaIcon";
import { TwitterIcon } from "./Shared/TwitterIcon";


export const JoinCommunity: React.FC = () => {

  return (
    <div className="min-h-[400px] text-white flex justify-center">
      {/* desktop view */}
      <div className="hidden lg:block">
        <div className="flex gap-x-12">
          <span className="uppercase text-[100px] font-black tracking-[-0.01em] leading[115px]">join our growing</span>
          <img src="/svgs/chat-bubbles.svg" width="139" height="187" />
        </div>
        <div className="flex gap-x-20">
          <span className="uppercase text-[100px] text-[#FFC46B] font-black tracking-[-0.01em] leading[115px]">community</span>
          <div className="relative h-[83px] self-center">
            <ul className="relative h-full menu menu-horizontal z-10 bg-base-100 px-8 border-2 border-[#18191F] rounded-full uppercase tracking-wider leading-5 text-sm font-bold">
              <li>
                <a>
                  <DiscordIcon />
                </a>
              </li>
              <li>
                <a>
                  <TwitterIcon />
                </a>
              </li>
              <li>
                <a>
                  <OpenSeaIcon />
                </a>
              </li>
            </ul>
            <div className="absolute bottom-[-10%] h-[83px] w-full bg-[#616161] border-2 border-[#18191F] rounded-full"></div>
          </div>
        </div>
      </div>

      {/* mobile view */}
      <div className="lg:hidden min-h-[547px] px-24">
        <div className="flex flex-col gap-y-10 items-center">
          <img src="/svgs/chat-bubbles.svg" width="80" height="50" />
          <span className="capitalize text-[58px] leading-[70px] font-extrabold text-center">join our growing <span className="text-[#FFC46B]">community</span></span>
          <div className="relative h-[83px] self-center">
            <ul className="relative h-full menu menu-horizontal z-10 bg-base-100 px-8 border-2 border-[#18191F] rounded-full uppercase tracking-wider leading-5 text-sm font-bold">
              <li>
                <a>
                  <DiscordIcon />
                </a>
              </li>
              <li>
                <a>
                  <TwitterIcon />
                </a>
              </li>
              <li>
                <a>
                  <OpenSeaIcon />
                </a>
              </li>
            </ul>
            <div className="absolute bottom-[-10%] h-[83px] w-full bg-[#616161] border-2 border-[#18191F] rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};