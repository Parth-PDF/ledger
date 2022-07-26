/* eslint-disable @next/next/no-img-element */
export const Hero: React.FC = () => {
  return (
    <div className="hero min-h-[814px] text-[#FFFFFF]">
      <div className="hero-content flex-col lg:flex-row gap-8 p-0">
        <div className="lg:w-1/2">
          <img
            src="/hero-image.png"
            alt="Hero image"
            className="rounded-lg"
          />
        </div>
        <div className="lg:w-1/2 p-4 lg:p-0">
          <h1 className="tracking-[-0.01em] lg:tracking-[-1%] leading-[70px] lg:leading-[114px] text-[58px] lg:text-[95px] font-extrabold lg:font-black mb-8">
            Gamifying the way we <span className="text-[#FFC46B]">CONNECT</span>
          </h1>
          <h4 className="tracking-wider lg:tracking-normal leading-[25px] lg:leading-[37px] text-[21px] lg:text-[31px] font-medium lg:font-normal">
            On a mission to connect millions of people with the power to create,
            connect and trade their value through web3 initiatives.
          </h4>
        </div>
      </div>
    </div>
  );
};
