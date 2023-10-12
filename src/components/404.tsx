import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import LogoWrite from '../../public/logowide.svg';

export default function error404() {
  return (
    <>
      <section className="bg-white dark:bg-gray-900 ">
        <div className="container flex items-center min-h-screen px-6 py-12 mx-auto">
          <div className="flex flex-col items-center max-w-sm mx-auto text-center">
            <div className="mx-auto max-w-screen-md flex items-center justify-center   ">
              <Image src={LogoWrite} alt={''} width={300} />
            </div>
            <h1 className="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
              Page not found
            </h1>
            <p className="mt-4 text-gray-500 dark:text-gray-400">
              The page you are looking for doesn`t exist. Here are some helpful
              links:
            </p>

            <div className="flex items-center justify-center w-full mt-6 ">
              <Link href={'/'}>
                <button className=" px-5 py-2 text-sm  text-white transition-colors duration-20 rounded-lg shrink-0 sm:w-auto  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                  &#x2190; Back to home
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
