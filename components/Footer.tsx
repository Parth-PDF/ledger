const footerData = [
  {
    label: 'Contact',
    icon: '/svgs/chat-bubbles.svg',
    width: '42',
    height: '26',
    onclick: () => {
      window.open('mailto:email@example.com?subject=Subject');
    }
  },
  {
    label: 'Opensea',
    icon: '/svgs/opensea.svg',
    width: '42',
    height: '42',
    onclick: () => {
      window.open('https://opensea.io/');
    }
  },
  {
    label: 'Looksrare',
    icon: '/svgs/looksrare.svg',
    width: '44',
    height: '42',
    onclick: () => {
      window.open('https://looksrare.org/');
    }
  }
];

export const Footer: React.FC = () => {

  return (
    <div className="min-h-[400px] flex flex-col text-white items-center justify-between pb-5">
      <div className="flex flex-col gap-y-[35px] pt-[100px]">
        {footerData.map((item, index) => (
          <div key={index} className="flex gap-x-[20px]">
            <span className='text-[28px] font-extrabold min-w-[135px] text-center'>{item.label}</span>
            <div>
              <img src={item.icon} alt={item.label} width={item.width} height={item.height} />
            </div>
            <div onClick={item.onclick}>
              <img src='/svgs/footer-arrow.svg' />
            </div>
          </div>
        ))}
      </div>
      <div className=''>
        <span className="text-xs">Copyright ©2022 The Ledge LLC</span>
      </div>
    </div>
  );
};