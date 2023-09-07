import Link from 'next/link';
import Logo from './Logo';

interface NavbarProps {
  link1: string;
  link2: string;
  link3: string;
  link4: string;
  link5: string;
  link6: string;
  link1To: string;
  link2To: string;
  link3To: string;
  link4To: string;
  link5To: string;
  link6To: string;
}

const Navbar: React.FC<NavbarProps> = ({
  link1,
  link2,
  link3,
  link4,
  link5,
  link6,
  link1To,
  link2To,
  link3To,
  link4To,
  link5To,
  link6To,
}) => {
  return (
    <div className="py-5 sticky z-50  top-0 flex-col items-between space-y-9 bg-white px-24 sm:mx-2 md:mx-5 lg:mx-40 text-black sm:rounded-b-3xl lg:rounded-b-full border-x border-b border-gray-200">
      <nav className="flex items-center justify-between ">
        <Logo />

        <div className="hidden lg:flex items-center space-x-9">
          <Link href={link1To}>{link1}</Link>
          <Link href={link2To}>{link2}</Link>
          <Link href={link3To}>{link3}</Link>
          <Link href={link4To}>{link4}</Link>
        </div>
        <div className="hidden lg:flex items-end space-x-2 ">
          <Link href={link5To}>
            <button className="   font-bold py-2 px-4 rounded-full border border-indigo-500">
              <span className="leading-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-500 w-full">
                {link5}
              </span>
            </button>
          </Link>
          <Link href={link6To}>
            <button className="  text-white font-bold py-2 px-4 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              {link6}
            </button>
          </Link>
        </div>

        <button
          onClick={() => {
            document.querySelector('.mobile-menu')!.classList.toggle('hidden');
          }}
          className="lg:hidden flex items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </nav>
      <div className="mobile-menu hidden ">
        <div className="flex  flex-col items-center space-y-2 px-4 pt-3 pb-3 text-sm">
          <Link href={link1To}>{link1}</Link>
          <Link href={link2To}>{link2}</Link>
          <Link href={link3To}>{link3}</Link>
          <Link href={link4To}>{link4}</Link>
          <Link href={link5To}>
            <button className=" hover:bg-blue-700 hover:border-transparent hover:text-white text-indigo-500 font-bold py-2 px-4 rounded-full bg-white border border-indigo-500">
              {link5}
            </button>
          </Link>
          <Link href={link6To}>
            <button className=" hover:bg-gradient-to-tl  hover:text-yellow-300 text-white font-bold py-2 px-4 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              {link6}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
