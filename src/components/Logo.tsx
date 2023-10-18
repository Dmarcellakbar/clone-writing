import Link from 'next/link';
import Image from 'next/image';
import ImgLogo from '../../public/logowide.svg';

const Logo = () => {
  return (
    // eslint-disable-next-line @next/next/no-html-link-for-pages
    <a href="/">
      <div className="font-bold text-xl tracking-wide hover:scale-110 transform-all ease-in-out ">
        <Image src={ImgLogo} alt={'logo'} width={150} />
      </div>
    </a>
  );
};

export default Logo;
