const data = [
  {
    icon: "diamond-icon.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit um dolor si.",
    width: "77",
    height: "77"
  },
  {
    icon: "/svgs/computer.svg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit um dolor si.",
    width: "122",
    height: "113"
  },
  {
    icon: "controller.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit um dolor si.",
    width: "70",
    height: "56"
  },
]

export const WhereWereGoing: React.FC = () => {
  return (
    <div className="min-h-[904px] text-white">
      <div className="grid grid-cols-2 gap-x-36 pt-36 pb-32 px-36">
        <div className="py-10">
          <h2 className="text-[58px] leading-[69px] font-extrabold pb-16">Where We're Going</h2>
          <div className="flex flex-col gap-y-4">
            {data.map((item, index) => (
              <div key={index} className="flex gap-x-8">
                <img src={item.icon} width={item.width} height={item.height}/>
                <span className="text-[21px] leading-[25px] flex items-center">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center">
          <img src="mockup.png" width="339" height="639" />

        </div>
      </div>
    </div>
  );
};