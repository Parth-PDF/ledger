/* eslint-disable @next/next/no-img-element */
export const Partners: React.FC = () => {
  return (
    <div className="lg:min-h-[865px] lg:mt-32">
      <div className="relative flex flex-col lg:flex-row items-center justify-center lg:gap-32 mb-16 lg:mb-32">
        <h2 className="lg:max-w-[362px] tracking-[-0.01em] leading-[69.6px] text-center text-[#FFFFFF] text-[58px] font-extrabold mt-16 mb-16 lg:mb-0">
          New <span className="text-gradient">Web3</span> Possibilities
        </h2>
        <div className="hidden lg:block bg-[#616161] h-[100px] w-[8px] rounded-[30px]"></div>
        <div className="flex flex-col">
          <p className="tracking-[0.05em] leading-[25.2px] text-center text-[#FFFFFF] text-[21px] font-bold mb-16">
            ALL MADE POSSIBLE BY
          </p>
          <div className="flex gap-8 lg:gap-32">
            <div>
              <img src="/L.png" alt="L" />
            </div>
            <div>
              <img src="/W.png" alt="W" />
            </div>
            <div>
              <img src="/Squiggles.png" alt="Squiggles" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-2 text-[#FFFFFF] lg:text-[#18191F] mx-4 lg:mx-32">
        <div className="flex flex-col lg:gap-2 lg:w-[60%]">
          <div className="flex flex-col lg:flex-row gap-2 w-full">
            <div className="w-full bg-[#6BA6FF] p-8 border-[#FFFFFF] border-[4px] lg:border-none rounded-[50px]">
              <h3 className="leading-[45.6px] text-[38px] font-extrabold mb-4">
                Security
              </h3>
              <p className="tracking-[0.05em] leading-[25.2px] text-[21px] font-medium">
                The Ledge Website and web app
              </p>
            </div>
            <div className="w-full bg-[#FFC46B] p-8 border-[#FFFFFF] border-[4px] lg:border-none rounded-[50px]">
              <h3 className="leading-[45.6px] text-[38px] font-extrabold mb-4">
                Connect
              </h3>
              <p className="tracking-[0.05em] leading-[25.2px] text-[21px] font-medium">
                The Ledge Website and web app
              </p>
            </div>
            <div></div>
          </div>
          <div className="bg-[#56D698] p-8 border-[#FFFFFF] border-[4px] lg:border-none rounded-[50px]">
            <h3 className="leading-[45.6px] text-[38px] font-extrabold mb-4">
              Opportunity
            </h3>
            <p className="tracking-[0.05em] leading-[25.2px] text-[21px] font-medium">
              The Ledge Website and web appThe Ledge Website and web appThe
              Ledge Website and web app
            </p>
          </div>
        </div>
        <div className="lg:w-[40%] bg-[#BE6BFF] p-8 border-[#FFFFFF] border-[4px] lg:border-none rounded-[50px]">
          <h3 className="leading-[45.6px] text-[38px] font-extrabold mb-4">
            WonferFi
          </h3>
          <p className="tracking-[0.05em] leading-[25.2px] text-[21px] font-medium">
            The Ledge Website and web appThe Ledge Website and web appThe Ledge
            Website and web appThe Ledge Website and web app
          </p>
        </div>
      </div>
    </div>
  );
};
