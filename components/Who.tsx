/* eslint-disable @next/next/no-img-element */
export const Who: React.FC = () => {
  return (
    <div className="relative flex flex-col items-center min-h-[844px] text-[#FFFFFF]">
      <h2 className="lg:max-w-[777px] tracking-[-1%] leading-[69.6px] text-center text-[58px] font-extrabold p-4 lg:p-0 mb-24">
        <span className="text-[#6BE4FF]">Empowering</span> Creators With The
        Tools To <span className="text-[#6BFFAF]">Connect </span>
        To Their Viewers
      </h2>
      <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-16 lg:gap-0 w-full max-w-[80rem]">
        {/* Card 1 */}
        <div className="relative">
          <div className="relative z-10 flex flex-col justify-center bg-[#6BA6FF] min-h-[286px] max-w-[381px] p-8 border-2 border-[#18191F] rounded-[50px]">
            <div className="absolute top-[-21.39%] right-[-2.72%]">
              <img src="/screen-icon.png" alt="Screen Icon" />
            </div>
            <h3 className="leading-[45.6px] text-[38px] font-extrabold mb-8">
              Community
            </h3>
            <p className="grow tracking-wider leading-[120%] text-[21px] font-medium">
              Empower social engagement and users to connect and build a more
              enhanced viewer experience.
            </p>
          </div>
          <div className="absolute -bottom-2 left-0 h-[286px] w-full max-w-[381px] bg-[#616161] border-2 border-[#18191F] rounded-[50px]"></div>
        </div>
        {/* Card 2 */}
        <div className="relative">
          <div className="relative z-10 flex flex-col justify-center bg-[#FF746B] min-h-[286px] max-w-[381px] p-8 border-2 border-[#18191F] rounded-[50px]">
            <div className="absolute top-[-14.39%] right-[-2.72%]">
              <img src="/heart-icon.png" alt="Heart Icon" />
            </div>
            <h3 className="leading-[45.6px] text-[38px] font-extrabold mb-8">
              Connection
            </h3>
            <p className="grow tracking-wider leading-[120%] text-[21px] font-medium">
              Enabling a new way to connect, empower, and socialize online
              communities.
            </p>
          </div>
          <div className="absolute -bottom-2 left-0 h-[286px] w-full max-w-[381px] bg-[#616161] border-2 border-[#18191F] rounded-[50px]"></div>
        </div>
        {/* Card 3 */}
        <div className="relative">
          <div className="relative z-10 flex flex-col justify-center bg-[#BE6BFF] min-h-[286px] max-w-[381px] p-8 border-2 border-[#18191F] rounded-[50px]">
            <div className="absolute top-[-29.5%] right-[-0.2%]">
              <img
                src="/star-icon.png"
                alt="Star Icon"
              />
            </div>
            <h3 className="leading-[45.6px] text-[38px] font-extrabold mb-8">
              Rewards
            </h3>
            <p className="grow tracking-wider leading-[120%] text-[21px] font-medium">
              Watch, create and connect on The Ledge for web 3 and IRL rewards.
            </p>
          </div>
          <div className="absolute -bottom-2 left-0 h-[286px] w-full max-w-[381px] bg-[#616161] border-2 border-[#18191F] rounded-[50px]"></div>
        </div>
      </div>
      <div className="absolute bottom-[-9%] lg:bottom-[-2%]">
        <img src="/diamond-icon.png" alt="Diamond Icon" />
      </div>
    </div>
  );
};
