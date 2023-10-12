import Logo from './Logo';
import { Link } from 'react-scroll';
import NextLink from 'next/link';

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
    <div className="py-2 lg:py-5 px-5 lg:px-24 sticky z-50  top-0 flex-col items-between space-y-9 bg-white  mx-2 md:mx-5 lg:mx-40 text-black rounded-b-3xl lg:rounded-b-full border-x border-b border-gray-200 shadow-lg">
      <nav className="flex items-center justify-between ">
        <Logo />

        <div className="hidden lg:flex items-center space-x-9">
          <Link to={link1To} smooth={true}>
            <div className="cursor-pointer hover:text-indigo-800 hover:transition hover:scale-105 ease-in-out delay-150 hover:border hover:border-indigo-500 hover:shadow-lg rounded-xl px-1  focus:ring focus:ring-violet-300">
              {link1}
            </div>
          </Link>

          <Link to={link2To} smooth={true}>
            <div className="cursor-pointer hover:text-indigo-800 hover:transition hover:scale-105 ease-in-out delay-150 hover:border hover:border-indigo-500 hover:shadow-lg rounded-xl px-1  focus:ring focus:ring-violet-300">
              {link2}
            </div>
          </Link>
          <Link to={link3To} smooth={true}>
            <div className="cursor-pointer hover:text-indigo-800 hover:transition hover:scale-105 ease-in-out delay-150 hover:border hover:border-indigo-500 hover:shadow-lg rounded-xl px-1  focus:ring focus:ring-violet-300">
              {link3}
            </div>
          </Link>
          <NextLink href={link4To}>
            <div className="cursor-pointer hover:text-indigo-800 hover:transition hover:scale-105 ease-in-out delay-150 hover:border hover:border-indigo-500 hover:shadow-lg rounded-xl px-1  ">
              {link4}
            </div>
          </NextLink>
        </div>
        <div className="hidden lg:flex items-end space-x-2 ">
          <NextLink href={link5To}>
            <div
              style={{
                paddingTop: '1px',
                paddingBottom: '1px',
                paddingLeft: '1px',
                paddingRight: '1px',
              }}
              className="w-fit h-fit cursor-pointer hover:shadow-lg hover:transition hover:scale-105 ease-in-out text-white rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
            >
              <div className="bg-white rounded-full px-5 py-[7px]">
                <span className=" font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-500">
                  {link5}
                </span>
              </div>
            </div>
          </NextLink>
          <NextLink href={link6To}>
            <button className="  text-white font-bold py-2 px-4 hover:shadow-lg hover:transition hover:scale-105 ease-in-out rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              {link6}
            </button>
          </NextLink>
        </div>

        <button
          onClick={() => {
            document.querySelector('.mobile-menu')!.classList.toggle('hidden');
          }}
          className="lg:hidden flex items-center "
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
          <Link to={link1To} smooth={true}>
            <div className="cursor-pointer hover:text-indigo-800 hover:transition hover:scale-105 ease-in-out delay-150 hover:border hover:border-indigo-500 hover:shadow-lg rounded-xl px-1  focus:ring focus:ring-violet-300">
              {link1}
            </div>
          </Link>
          <Link to={link2To} smooth={true}>
            <div className="cursor-pointer hover:text-indigo-800 hover:transition hover:scale-105 ease-in-out delay-150 hover:border hover:border-indigo-500 hover:shadow-lg rounded-xl px-1  focus:ring focus:ring-violet-300">
              {link2}
            </div>
          </Link>
          <Link to={link3To} smooth={true}>
            <div className="cursor-pointer hover:text-indigo-800 hover:transition hover:scale-105 ease-in-out delay-150 hover:border hover:border-indigo-500 hover:shadow-lg rounded-xl px-1  focus:ring focus:ring-violet-300">
              {link3}
            </div>
          </Link>
          <NextLink href={link4To}>
            <div className="cursor-pointer hover:text-indigo-800 hover:transition hover:scale-105 ease-in-out delay-150 hover:border hover:border-indigo-500 hover:shadow-lg rounded-xl px-1  focus:ring focus:ring-violet-300">
              {link4}
            </div>
          </NextLink>
          <NextLink href={link5To}>
            <div
              style={{
                paddingTop: '1px',
                paddingBottom: '1px',
                paddingLeft: '1px',
                paddingRight: '1px',
              }}
              className="w-fit h-fit cursor-pointer text-white rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
            >
              <div className="bg-white rounded-full px-5 py-[7px]">
                <span className=" font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-500">
                  {link5}
                </span>
              </div>
            </div>
          </NextLink>
          <NextLink href={link6To}>
            <button className=" hover:bg-gradient-to-tl  hover:text-yellow-300 text-white font-bold py-2 px-4 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              {link6}
            </button>
          </NextLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
