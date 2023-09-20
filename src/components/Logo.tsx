import Link from 'next/link';
import Image from 'next/image';
import ImgLogo from '@/assets/img/logo-writing.png';

const Logo = () => {
  return (
    // eslint-disable-next-line @next/next/no-html-link-for-pages
    <a href="/">
      <div className="font-bold text-xl tracking-wide hover:tracking-widest transform-all ease-in-out duration-700">
        <Image src={ImgLogo} alt={'logo'} width={150} />
      </div>
    </a>
  );
};

export default Logo;
