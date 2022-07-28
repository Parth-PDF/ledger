

export const Featured: React.FC = () => {

  return (
    <div className="min-h-[526px]">
      <div className="flex flex-col gap-y-12 items-center pb-24 md:pb-0">
        <img className="pb-10" src="dudes-computers.png" width="242" height="109"/>
        <span className="capitalize text-white text-[58px] leading-[69px] font-extrabold text-center tracking-[-0.01em]"><span className="text-[#6BA6FF]">featured</span> on</span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[75px]">
          <img src="logo-placeholder.png" width="140" height="62" />
          <img src="logo-placeholder.png" width="140" height="62" />
          <img src="logo-placeholder.png" width="140" height="62" />
        </div>
      </div>
    </div>
  );
};