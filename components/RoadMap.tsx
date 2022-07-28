export const RoadMap: React.FC = () => {
  return (
    <div className="flex flex-col items-center lg:min-h-[1041px] text-[#FFFFFF] mt-36 lg:mt-0">
      {/* Our Plans */}
      <h2 className="tracking-[-1%] leading-[69.6px] text-center text-[58px] font-extrabold p-4 lg:p-0 lg:mt-9 mb-4 lg:mb-8">
        Our <span className="text-[#FF746B]">Plans</span>
      </h2>
      <p className="max-w-[562px] tracking-[0.05em] leading-[25.2px] text-center text-[21px] font-medium mb-16">
        We are focused on bringing you the value and utility you need to
        generate abundance
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 justify-items-center h-full w-full max-w-[80rem] mb-16">
        {/* Column 1 */}
        <div>
          <div className="relative w-1/2 lg:w-full mx-auto lg:mx-0">
            <p className="relative z-10 bg-[#BE6BFF] lg:max-w-[175px] tracking-[4%] leading-[19.6px] text-center text-[#18191F] text-[14px] font-bold p-4 border-2 border-[#18191F] rounded-[50px] mb-8">
              COMPLETED
            </p>
            <div className="absolute -bottom-1.5 left-0 h-[55.9px] w-full lg:max-w-[175px] bg-[#616161] border-2 border-[#18191F] rounded-[50px]"></div>
          </div>

          {/* Desktop view */}
          {/* Card 1 */}
          <div className="relative hidden lg:block mb-8">
            <div className="relative flex flex-col justify-center z-10 bg-[#FFFFFF] min-h-[223.4px] max-h-[223.4px] max-w-[290.18px] p-6 border-[3px] border-[#18191F] rounded-[50px]">
              <p className="leading-[37.2px] text-[#18191F] text-[31px] font-bold mb-4">
                Development
              </p>
              <div className="h-[5px] w-full max-w-[80px] bg-[#BE6BFF] rounded-[5px] mb-4"></div>
              <p className="tracking-[0.05em] leading-[25.2px] text-[#18191F] text-[21px] font-medium mb-6">
                The Ledge Website and web app
              </p>
              <div className="flex gap-8 tracking-[0.1em] leading-[16.8px] text-[14px] font-medium">
                <p className="text-[#BE6BFF]">#web3dev</p>
                <p className="text-[#FF07D3]">#devidoo</p>
              </div>
            </div>
            <div className="absolute -bottom-1.5 left-0 h-[223.39px] w-full max-w-[290.18px] bg-[#616161] border-2 border-[#18191F] rounded-[50px]"></div>
          </div>

          {/* Card 2 */}
          <div className="relative hidden lg:block">
            <div className="relative flex flex-col justify-center z-10 bg-[#FFFFFF] min-h-[223.4px] max-h-[223.4px] max-w-[290.18px] p-6 border-[3px] border-[#18191F] rounded-[50px]">
              <p className="leading-[37.2px] text-[#18191F] text-[31px] font-bold mb-4">
                Partnerships
              </p>
              <div className="h-[5px] w-full max-w-[80px] bg-[#BE6BFF] rounded-[5px] mb-4"></div>
              <p className="tracking-[0.05em] leading-[25.2px] text-[#18191F] text-[21px] font-medium mb-6">
                The Ledge Website and web app
              </p>
              <div className="flex gap-8 tracking-[0.1em] leading-[16.8px] text-[14px] font-medium">
                <p className="text-[#BE6BFF]">#web3dev</p>
                <p className="text-[#FF07D3]">#devidoo</p>
              </div>
            </div>
            <div className="absolute -bottom-1.5 left-0 h-[223.39px] w-full max-w-[290.18px] bg-[#616161] border-2 border-[#18191F] rounded-[50px]"></div>
          </div>

          {/* Mobile view */}
          <div className="flex lg:hidden gap-2 mb-16">
            {/* Card 1 */}
            <div className="relative">
              <div className="relative flex flex-col justify-center z-10 bg-[#FFFFFF] min-h-[250.4px] pl-4 border-[3px] border-[#18191F] rounded-[50px]">
                <p className="leading-[25.2px] text-[#18191F] text-[21px] font-bold mb-4">
                  Development
                </p>
                <div className="h-[5px] w-full max-w-[80px] bg-[#BE6BFF] rounded-[5px] mb-4"></div>
                <p className="tracking-[0.05em] leading-[14.4px] text-[#18191F] text-[12px] font-medium max-w-[175px] mb-6">
                  The Ledge Website and web app
                </p>
                <div className="tracking-[0.1em] leading-[16.8px] text-[14px] font-medium">
                  <p className="text-[#BE6BFF]">#web3dev</p>
                </div>
              </div>
              <div className="absolute -bottom-1.5 left-0 h-[223.39px] w-full max-w-[290.18px] bg-[#616161] border-2 border-[#18191F] rounded-[50px]"></div>
            </div>

            {/* Card 2 */}
            <div className="relative">
              <div className="relative flex flex-col justify-center z-10 bg-[#FFFFFF] min-h-[250.4px] pl-4 border-[3px] border-[#18191F] rounded-[50px]">
                <p className="leading-[25.2px] text-[#18191F] text-[21px] font-bold mb-4">
                  Partnerships
                </p>
                <div className="h-[5px] w-full max-w-[80px] bg-[#BE6BFF] rounded-[5px] mb-4"></div>
                <p className="tracking-[0.05em] leading-[14.4px] text-[#18191F] text-[12px] font-medium max-w-[175px] mb-6">
                  The Ledge Website and web app
                </p>
                <div className="tracking-[0.1em] leading-[16.8px] text-[14px] font-medium">
                  <p className="text-[#BE6BFF]">#web3dev</p>
                </div>
              </div>
              <div className="absolute -bottom-1.5 left-0 h-[223.39px] w-full max-w-[290.18px] bg-[#616161] border-2 border-[#18191F] rounded-[50px]"></div>
            </div>
          </div>
        </div>

        {/* Column 2 */}
        <div>
          <div className="relative w-1/2 lg:w-full mx-auto lg:mx-0">
            <p className="relative z-10 bg-[#56D698] lg:max-w-[175px] tracking-[4%] leading-[19.6px] text-center text-[#18191F] text-[14px] font-bold p-4 border-2 border-[#18191F] rounded-[50px] mb-8">
              IN PROGRESS
            </p>
            <div className="absolute -bottom-1.5 left-0 h-[55.9px] w-full lg:max-w-[175px] bg-[#616161] border-2 border-[#18191F] rounded-[50px]"></div>
          </div>
          {/* Desktop view */}
          {/* Card 1 */}
          <div className="relative hidden lg:block mb-8">
            <div className="relative flex flex-col justify-center z-10 bg-[#FFFFFF] min-h-[223.4px] max-h-[223.4px] max-w-[290.18px] p-6 border-[3px] border-[#18191F] rounded-[50px]">
              <p className="leading-[37.2px] text-[#18191F] text-[31px] font-bold mb-4">
                Creator NFT Launch
              </p>
              {/* <div className="h-[5px] w-full max-w-[80px] bg-[#BE6BFF] rounded-[5px] mb-4"></div> */}
              <p className="tracking-[0.05em] leading-[25.2px] text-[#18191F] text-[21px] font-medium mb-6">
                The Ledge Website and web app
              </p>
              <div className="flex gap-8 tracking-[0.1em] leading-[16.8px] text-[14px] font-medium">
                <p className="text-[#BE6BFF]">#web3dev</p>
                <p className="text-[#FF07D3]">#devidoo</p>
              </div>
            </div>
            <div className="absolute -bottom-1.5 left-0 h-[223.39px] w-full max-w-[290.18px] bg-[#616161] border-2 border-[#18191F] rounded-[50px]"></div>
          </div>

          {/* Card 2 */}
          <div className="relative hidden lg:block">
            <div className="relative flex flex-col justify-center z-10 bg-[#FFFFFF] min-h-[223.4px] max-h-[223.4px] max-w-[290.18px] p-6 border-[3px] border-[#18191F] rounded-[50px]">
              <p className="leading-[37.2px] text-[#18191F] text-[31px] font-bold mb-4">
                Website Phase One
              </p>
              {/* <div className="h-[5px] w-full max-w-[80px] bg-[#BE6BFF] rounded-[5px] mb-4"></div> */}
              <p className="tracking-[0.05em] leading-[25.2px] text-[#18191F] text-[21px] font-medium mb-6">
                The Ledge Website and web app
              </p>
              <div className="flex gap-8 tracking-[0.1em] leading-[16.8px] text-[14px] font-medium">
                <p className="text-[#BE6BFF]">#web3dev</p>
                <p className="text-[#FF07D3]">#devidoo</p>
              </div>
            </div>
            <div className="absolute -bottom-1.5 left-0 h-[223.39px] w-full max-w-[290.18px] bg-[#616161] border-2 border-[#18191F] rounded-[50px]"></div>
          </div>

          {/* Mobile view */}
          <div className="flex lg:hidden gap-2 mb-16">
            {/* Card 1 */}
            <div className="relative">
              <div className="relative flex flex-col justify-center z-10 bg-[#FFFFFF] min-h-[250.4px] pl-4 border-[3px] border-[#18191F] rounded-[50px]">
                <p className="leading-[25.2px] text-[#18191F] text-[21px] font-bold mb-4">
                  Development
                </p>
                <div className="h-[5px] w-full max-w-[80px] bg-[#56D698] rounded-[5px] mb-4"></div>
                <p className="tracking-[0.05em] leading-[14.4px] text-[#18191F] text-[12px] font-medium max-w-[175px] mb-6">
                  The Ledge Website and web app
                </p>
                <div className="tracking-[0.1em] leading-[16.8px] text-[14px] font-medium">
                  <p className="text-[#56D698]">#web3dev</p>
                </div>
              </div>
              <div className="absolute -bottom-1.5 left-0 h-[223.39px] w-full max-w-[290.18px] bg-[#616161] border-2 border-[#18191F] rounded-[50px]"></div>
            </div>

            {/* Card 2 */}
            <div className="relative">
              <div className="relative flex flex-col justify-center z-10 bg-[#FFFFFF] min-h-[250.4px] pl-4 border-[3px] border-[#18191F] rounded-[50px]">
                <p className="leading-[25.2px] text-[#18191F] text-[21px] font-bold mb-4">
                  Partnerships
                </p>
                <div className="h-[5px] w-full max-w-[80px] bg-[#56D698] rounded-[5px] mb-4"></div>
                <p className="tracking-[0.05em] leading-[14.4px] text-[#18191F] text-[12px] font-medium max-w-[175px] mb-6">
                  The Ledge Website and web app
                </p>
                <div className="tracking-[0.1em] leading-[16.8px] text-[14px] font-medium">
                  <p className="text-[#56D698]">#web3dev</p>
                </div>
              </div>
              <div className="absolute -bottom-1.5 left-0 h-[223.39px] w-full max-w-[290.18px] bg-[#616161] border-2 border-[#18191F] rounded-[50px]"></div>
            </div>
          </div>
        </div>

        {/* Column 3 */}
        <div>
          <div className="relative w-1/2 lg:w-full mx-auto lg:mx-0">
            <p className="relative z-10 bg-[#FFC46B] lg:max-w-[175px] tracking-[4%] leading-[19.6px] text-center text-[#18191F] text-[14px] font-bold p-4 border-2 border-[#18191F] rounded-[50px] mb-8">
              NEXT STEPS
            </p>
            <div className="absolute -bottom-1.5 left-0 h-[55.9px] w-full lg:max-w-[175px] bg-[#616161] border-2 border-[#18191F] rounded-[50px]"></div>
          </div>

          {/* Desktop view */}
          {/* Card 1 */}
          <div className="relative hidden lg:block mb-8">
            <div className="relative flex flex-col justify-center z-10 bg-[#FFFFFF] min-h-[223.4px] max-h-[223.4px] max-w-[290.18px] p-6 border-[3px] border-[#18191F] rounded-[50px]">
              <p className="leading-[37.2px] text-[#18191F] text-[31px] font-bold mb-4">
                Launch App
              </p>
              <div className="h-[5px] w-full max-w-[80px] bg-[#FFC46B] rounded-[5px] mb-4"></div>
              <p className="tracking-[0.05em] leading-[25.2px] text-[#18191F] text-[21px] font-medium mb-6">
                The Ledge Website and web app
              </p>
              <div className="flex gap-8 tracking-[0.1em] leading-[16.8px] text-[14px] font-medium">
                <p className="text-[#BE6BFF]">#web3dev</p>
                <p className="text-[#FF07D3]">#devidoo</p>
              </div>
            </div>
            <div className="absolute -bottom-1.5 left-0 h-[223.39px] w-full max-w-[290.18px] bg-[#616161] border-2 border-[#18191F] rounded-[50px]"></div>
          </div>

          {/* Card 2 */}
          <div className="relative hidden lg:block">
            <div className="relative flex flex-col justify-center z-10 bg-[#FFFFFF] min-h-[223.4px] max-h-[223.4px] max-w-[290.18px] p-6 border-[3px] border-[#18191F] rounded-[50px]">
              <p className="leading-[37.2px] text-[#18191F] text-[31px] font-bold mb-4">
                Phase Two
              </p>
              <div className="h-[5px] w-full max-w-[80px] bg-[#FFC46B] rounded-[5px] mb-4"></div>
              <p className="tracking-[0.05em] leading-[25.2px] text-[#18191F] text-[21px] font-medium mb-6">
                The Ledge Website and web app
              </p>
              <div className="flex gap-8 tracking-[0.1em] leading-[16.8px] text-[14px] font-medium">
                <p className="text-[#BE6BFF]">#web3dev</p>
                <p className="text-[#FF07D3]">#devidoo</p>
              </div>
            </div>
            <div className="absolute -bottom-1.5 left-0 h-[223.39px] w-full max-w-[290.18px] bg-[#616161] border-2 border-[#18191F] rounded-[50px]"></div>
          </div>

          {/* Mobile view */}
          <div className="flex lg:hidden gap-2 mb-16">
            {/* Card 1 */}
            <div className="relative">
              <div className="relative flex flex-col justify-center z-10 bg-[#FFFFFF] min-h-[250.4px] pl-4 border-[3px] border-[#18191F] rounded-[50px]">
                <p className="leading-[25.2px] text-[#18191F] text-[21px] font-bold mb-4">
                  Development
                </p>
                <div className="h-[5px] w-full max-w-[80px] bg-[#FFC46B] rounded-[5px] mb-4"></div>
                <p className="tracking-[0.05em] leading-[14.4px] text-[#18191F] text-[12px] font-medium max-w-[175px] mb-6">
                  The Ledge Website and web app
                </p>
                <div className="tracking-[0.1em] leading-[16.8px] text-[14px] font-medium">
                  <p className="text-[#FFC46B]">#web3dev</p>
                </div>
              </div>
              <div className="absolute -bottom-1.5 left-0 h-[223.39px] w-full max-w-[290.18px] bg-[#616161] border-2 border-[#18191F] rounded-[50px]"></div>
            </div>

            {/* Card 2 */}
            <div className="relative">
              <div className="relative flex flex-col justify-center z-10 bg-[#FFFFFF] min-h-[250.4px] pl-4 border-[3px] border-[#18191F] rounded-[50px]">
                <p className="leading-[25.2px] text-[#18191F] text-[21px] font-bold mb-4">
                  Partnerships
                </p>
                <div className="h-[5px] w-full max-w-[80px] bg-[#FFC46B] rounded-[5px] mb-4"></div>
                <p className="tracking-[0.05em] leading-[14.4px] text-[#18191F] text-[12px] font-medium max-w-[175px] mb-6">
                  The Ledge Website and web app
                </p>
                <div className="tracking-[0.1em] leading-[16.8px] text-[14px] font-medium">
                  <p className="text-[#FFC46B]">#web3dev</p>
                </div>
              </div>
              <div className="absolute -bottom-1.5 left-0 h-[223.39px] w-full max-w-[290.18px] bg-[#616161] border-2 border-[#18191F] rounded-[50px]"></div>
            </div>
          </div>
        </div>
      </div>

      {/* NFT Plans */}
      <h2 className="tracking-[-1%] leading-[69.6px] text-center text-[58px] font-extrabold p-4 lg:p-0 lg:mt-9 mb-4 lg:mb-8">
        <span className="text-[#56D698]">NFT</span> Plans
      </h2>
      <p className="max-w-[562px] tracking-[0.05em] leading-[25.2px] text-center text-[21px] font-medium mb-16">
        We are focused on bringing you the value and utility you need to
        generate abundance
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 justify-items-center h-full w-full max-w-[80rem] mb-16">
        {/* Desktop view */}
        {/* Column 1 */}
        <div className="hidden lg:block">
          <div className="relative w-1/2 lg:w-full mx-auto lg:mx-0">
            <p className="relative z-10 bg-[#BE6BFF] max-w-[175px] tracking-[4%] leading-[19.6px] text-center text-[#18191F] text-[14px] font-bold p-4 border-2 border-[#18191F] rounded-[50px] mb-8">
              COMPLETED
            </p>
            <div className="absolute -bottom-1.5 left-0 h-[55.9px] w-full max-w-[175px] bg-[#616161] border-2 border-[#18191F] rounded-[50px]"></div>
          </div>

          {/* Card 1 */}
          <div className="relative mb-8">
            <div className="relative flex flex-col justify-center z-10 bg-[#FFFFFF] min-h-[223.4px] max-h-[223.4px] max-w-[290.18px] p-6 border-[3px] border-[#18191F] rounded-[50px]">
              <p className="leading-[37.2px] text-[#18191F] text-[31px] font-bold mb-4">
                Development
              </p>
              <div className="h-[5px] w-full max-w-[80px] bg-[#BE6BFF] rounded-[5px] mb-4"></div>
              <p className="tracking-[0.05em] leading-[25.2px] text-[#18191F] text-[21px] font-medium mb-6">
                The Ledge Website and web app
              </p>
              <div className="flex gap-8 tracking-[0.1em] leading-[16.8px] text-[14px] font-medium">
                <p className="text-[#BE6BFF]">#web3dev</p>
                <p className="text-[#FF07D3]">#devidoo</p>
              </div>
            </div>
            <div className="absolute -bottom-1.5 left-0 h-[223.39px] w-full max-w-[290.18px] bg-[#616161] border-2 border-[#18191F] rounded-[50px]"></div>
          </div>
        </div>

        {/* Column 2 */}
        <div className="hidden lg:block">
          <div className="relative w-1/2 lg:w-full mx-auto lg:mx-0">
            <p className="relative z-10 bg-[#56D698] max-w-[175px] tracking-[4%] leading-[19.6px] text-center text-[#18191F] text-[14px] font-bold p-4 border-2 border-[#18191F] rounded-[50px] mb-8">
              IN PROGRESS
            </p>
            <div className="absolute -bottom-1.5 left-0 h-[55.9px] w-full max-w-[175px] bg-[#616161] border-2 border-[#18191F] rounded-[50px]"></div>
          </div>
          {/* Card 1 */}
          <div className="relative mb-8">
            <div className="relative flex flex-col justify-center z-10 bg-[#FFFFFF] min-h-[223.4px] max-h-[223.4px] max-w-[290.18px] p-6 border-[3px] border-[#18191F] rounded-[50px]">
              <p className="leading-[37.2px] text-[#18191F] text-[31px] font-bold mb-4">
                Creator NFT Launch
              </p>
              {/* <div className="h-[5px] w-full max-w-[80px] bg-[#BE6BFF] rounded-[5px] mb-4"></div> */}
              <p className="tracking-[0.05em] leading-[25.2px] text-[#18191F] text-[21px] font-medium mb-6">
                The Ledge Website and web app
              </p>
              <div className="flex gap-8 tracking-[0.1em] leading-[16.8px] text-[14px] font-medium">
                <p className="text-[#BE6BFF]">#web3dev</p>
                <p className="text-[#FF07D3]">#devidoo</p>
              </div>
            </div>
            <div className="absolute -bottom-1.5 left-0 h-[223.39px] w-full max-w-[290.18px] bg-[#616161] border-2 border-[#18191F] rounded-[50px]"></div>
          </div>
        </div>

        {/* Mobile view */}
        <div className="flex lg:hidden gap-2 mb-8">
          {/* Column 1 */}
          <div className="">
            <div className="relative">
              <p className="relative z-10 bg-[#BE6BFF] tracking-[4%] leading-[19.6px] text-center text-[#18191F] text-[14px] font-bold p-4 border-2 border-[#18191F] rounded-[50px] mb-8">
                COMPLETED
              </p>
              <div className="absolute -bottom-1.5 left-0 h-[55.9px] w-full bg-[#616161] border-2 border-[#18191F] rounded-[50px]"></div>
            </div>

            {/* Card 1 */}
            <div className="relative">
              <div className="relative flex flex-col justify-center z-10 bg-[#FFFFFF] min-h-[250.4px] pl-4 border-[3px] border-[#18191F] rounded-[50px]">
                <p className="leading-[25.2px] text-[#18191F] text-[21px] font-bold mb-4">
                  Development
                </p>
                <div className="h-[5px] w-full max-w-[80px] bg-[#BE6BFF] rounded-[5px] mb-4"></div>
                <p className="tracking-[0.05em] leading-[14.4px] text-[#18191F] text-[12px] font-medium max-w-[175px] mb-6">
                  The Ledge Website and web app
                </p>
                <div className="tracking-[0.1em] leading-[16.8px] text-[14px] font-medium">
                  <p className="text-[#BE6BFF]">#web3dev</p>
                </div>
              </div>
              <div className="absolute -bottom-1.5 left-0 h-[223.39px] w-full max-w-[290.18px] bg-[#616161] border-2 border-[#18191F] rounded-[50px]"></div>
            </div>
          </div>

          {/* Column 2 */}
          <div className="">
            <div className="relative">
              <p className="relative z-10 bg-[#56D698] tracking-[4%] leading-[19.6px] text-center text-[#18191F] text-[14px] font-bold p-4 border-2 border-[#18191F] rounded-[50px] mb-8">
                IN PROGRESS
              </p>
              <div className="absolute -bottom-1.5 left-0 h-[55.9px] w-full bg-[#616161] border-2 border-[#18191F] rounded-[50px]"></div>
            </div>
            {/* Card 1 */}
            <div className="relative">
              <div className="relative flex flex-col justify-center z-10 bg-[#FFFFFF] min-h-[250.4px] pl-4 border-[3px] border-[#18191F] rounded-[50px]">
                <p className="leading-[25.2px] text-[#18191F] text-[21px] font-bold mb-4">
                  Development
                </p>
                <div className="h-[5px] w-full max-w-[80px] bg-[#56D698] rounded-[5px] mb-4"></div>
                <p className="tracking-[0.05em] leading-[14.4px] text-[#18191F] text-[12px] font-medium max-w-[175px] mb-6">
                  The Ledge Website and web app
                </p>
                <div className="tracking-[0.1em] leading-[16.8px] text-[14px] font-medium">
                  <p className="text-[#56D698]">#web3dev</p>
                </div>
              </div>
              <div className="absolute -bottom-1.5 left-0 h-[223.39px] w-full max-w-[290.18px] bg-[#616161] border-2 border-[#18191F] rounded-[50px]"></div>
            </div>
          </div>
        </div>

        {/* Column 3 */}
        <div>
          <div className="relative w-1/2 lg:w-full mx-auto lg:mx-0">
            <p className="relative z-10 bg-[#FFC46B] lg:max-w-[175px] tracking-[4%] leading-[19.6px] text-center text-[#18191F] text-[14px] font-bold p-4 border-2 border-[#18191F] rounded-[50px] mb-8">
              NEXT STEPS
            </p>
            <div className="absolute -bottom-1.5 left-0 h-[55.9px] w-full lg:max-w-[175px] bg-[#616161] border-2 border-[#18191F] rounded-[50px]"></div>
          </div>

          {/* Card 1 */}
          <div className="relative mb-8">
            <div className="relative flex flex-col justify-center z-10 bg-[#FFFFFF] min-h-[223.4px] max-h-[223.4px] lg:max-w-[290.18px] p-6 border-[3px] border-[#18191F] rounded-[50px]">
              <p className="leading-[37.2px] text-[#18191F] text-[31px] font-bold mb-4">
                Launch App
              </p>
              <div className="h-[5px] w-full max-w-[80px] bg-[#FFC46B] rounded-[5px] mb-4"></div>
              <p className="tracking-[0.05em] leading-[25.2px] text-[#18191F] text-[21px] font-medium mb-6">
                The Ledge Website and web app
              </p>
              <div className="flex gap-8 tracking-[0.1em] leading-[16.8px] text-[14px] font-medium">
                <p className="text-[#BE6BFF]">#web3dev</p>
                <p className="text-[#FF07D3]">#devidoo</p>
              </div>
            </div>
            <div className="absolute -bottom-1.5 left-0 h-[223.39px] w-full lg:max-w-[290.18px] bg-[#616161] border-2 border-[#18191F] rounded-[50px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
