import { Fragment } from "react";

const FAQData = [
  {
    question: "What sets us apart?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim"
  },
  {
    question: "What is an NFT?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim"
  },
  {
    question: "How do creators connect with viewers?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim"
  }
];

export const FAQ: React.FC = () => {

  return (
    <div className="min-h-[853px] text-white">
      <div className="flex flex-col items-center gap-y-12">
        <img className="mt-[-50px]" src="faq.png" width="127" height="117" />
        <h2 className="capitalize text-[58px] font-extrabold text-center">you may want to <span className="text-[#56D698]">know</span></h2>

        {/* desktop view */}
        <div className="hidden md:grid grid-cols-2 gap-x-24 gap-y-12 px-32">
          {FAQData.map((item, index) => (
            <Fragment key={index}>
              <div className="text-[38px] font-extrabold leading-[46px]">
                {item.question}
              </div>
              <div className="text-[21px] leading-[25px] tracking-wider">
                {item.answer}
              </div>
            </Fragment>
          ))}
        </div>

        {/* mobile view */}
        <div className="md:hidden text-white">
          {FAQData.map((item, index) => (
            <div key={index} className="collapse collapse-arrow bg-transparent text-[31px] rounded-box px-5">
              <input type="checkbox" />
              <div className="collapse-title font-bold">
                {item.question}
              </div>
              <div className="collapse-content">
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};