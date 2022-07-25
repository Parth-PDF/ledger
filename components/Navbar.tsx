import { DiscordIcon } from "./Shared/DiscordIcon";
import { Logo } from "./Shared/Logo";
import { OpenSeaIcon } from "./Shared/OpenSeaIcon";
import { TwitterIcon } from "./Shared/TwitterIcon";

const navigation = [
  {
    name: "our mission",
  },
  {
    name: "our plans",
  },
  {
    name: "how?",
  },
  {
    name: "summary",
  },
  {
    name: "faq",
  },
  {
    name: "contact",
  },
];

export const Navbar: React.FC = () => {
  return (
    <div className="navbar justify-between">
      {/* Mobile view */}
      <div>
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li tabIndex={0}>
              <a className="justify-between">
                Parent
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">
          <Logo />
        </a>
      </div>
      {/* Desktop view */}
      <div className="relative navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal z-10 bg-base-100 h-[53px] px-8 border-2 border-[#18191F] rounded-full">
          {navigation.map((item, index) => (
            <li key={index}>
              <a className="uppercase tracking-wider leading-5 text-sm font-bold">{item.name}</a>
            </li>
          ))}
        </ul>
        <div className="absolute -bottom-1.5 h-[55px] w-full bg-[#616161] border-2 border-[#18191F] rounded-full"></div>
      </div>
      <div className="relative hidden lg:flex">
        <ul className="menu menu-horizontal z-10 bg-base-100 px-2 border-2 border-[#18191F] rounded-full uppercase tracking-wider leading-5 text-sm font-bold">
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
        <div className="absolute -bottom-1.5 h-[55px] w-full bg-[#616161] border-2 border-[#18191F] rounded-full"></div>
      </div>
    </div>
  );
};
