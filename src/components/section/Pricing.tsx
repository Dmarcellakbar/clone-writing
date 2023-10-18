import React from 'react';
import Image from 'next/image';
import objLeft from '@/assets/img/leftdot.svg';
import objRight from '@/assets/img/rightdot.svg';
import Link from 'next/link';

export default function Pricing() {
  return (
    <div id="section3">
      <section className="bg-gray-50 relative z-[5]">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 z-10">
          <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12 pt-10">
            <div className="mb-4 text-4xl px-4 lg:px-16 lg:text-6xl tracking-tight font-extrabold text-gray-900 ">
              <span className="text-black leading-tight">
                Pricing plans for teams of all sizes
              </span>
            </div>
            <p className="mb-5 font-light text-gray-500 text-base ">
              Choose an affordable plan {"that's"} packed with the best features
              for engaging your audience, creating customer loyalty, and driving
              sales.
            </p>
          </div>
          <div className="relative space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0 ">
            {/* <!-- Pricing Card --> */}
            <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow z-10">
              <h3 className="pt-6 text-2xl font-semibold text-left">Premium</h3>
              <div className="flex text-left items-baseline my-8 ">
                <span className="mr-2 text-5xl font-extrabold text-left">
                  $19
                </span>
                <span className="text-black ">/month</span>
              </div>
              <span className=" text-black text-sm text-left mb-6">
                <b>25K</b> words {'.'} <b>1</b> seats
              </span>

              <p className="font-light text-gray-700 text-sm text-left mb-6">
                Unlock the power of words to fuel your content creation and
                boost your productivity.
              </p>

              <Link href={'/account/signup'}>
                <button className="w-full hover:transition hover:scale-105 ease-in-out   text-sm py-2  px-3 lg:px-6 mb-6 text-white rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                  <span className="align-middle">Select Package</span>
                </button>
              </Link>

              {/* <!-- List --> */}
              <ul role="list" className="mb-8 space-y-4 text-left">
                <li className="flex items-center space-x-3">
                  {/* <!-- Icon --> */}
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    <b>25K</b> words included
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  {/* <!-- Icon --> */}
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    <b>1</b> seat included
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  {/* <!-- Icon --> */}
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    <b>110+</b> templates
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  {/* <!-- Icon --> */}
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    <b>Word style editor</b>
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  {/* <!-- Icon --> */}
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    Up to <b>1000K</b> words*
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  {/* <!-- Icon --> */}
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    Up to <b>10</b> Seats*
                  </span>
                </li>
              </ul>
              <button
                style={{ top: '-15px' }}
                className="absolute cursor-default font-semibold text-xs py-1.5  px-3 lg:px-6 mb-6 text-white rounded-full bg-indigo-500"
              >
                <span className=" align-middle">Limited time discount</span>
              </button>
            </div>

            <div className="relative flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow z-10">
              <h3 className="pt-6 text-2xl font-semibold text-left">
                Unlimited
              </h3>
              <div className="flex text-left items-baseline my-8 ">
                <span className="mr-2 text-5xl font-extrabold text-left">
                  $29
                </span>
                <span className="text-black ">/month</span>
              </div>
              <span className=" text-black text-sm text-left mb-6">
                <b>Unlimited</b> words {'.'} <b>1</b> seats
              </span>

              <p className="font-light text-gray-700 text-sm text-left mb-6">
                Supercharge your productivity with unlimited word generation to
                fuel your wildest writing ambitions.
              </p>

              <Link href={'/account/signup'}>
                <button className="w-full hover:transition hover:scale-105 ease-in-out   text-sm py-2  px-3 lg:px-6 mb-6 text-white rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                  <span className="align-middle">Select Package</span>
                </button>
              </Link>

              {/* <!-- List --> */}
              <ul role="list" className="mb-8 space-y-4 text-left">
                <li className="flex items-center space-x-3">
                  {/* <!-- Icon --> */}
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    <b>Unlimited</b> words included
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  {/* <!-- Icon --> */}
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    <b>1</b> seat included
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  {/* <!-- Icon --> */}
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    <b>110+</b> templates
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  {/* <!-- Icon --> */}
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    <b>Word style editor</b>
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  {/* <!-- Icon --> */}
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    Up to <b>1000K</b> words*
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  {/* <!-- Icon --> */}
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    Up to <b>25</b> Seats*
                  </span>
                </li>
              </ul>
              <button
                style={{ top: '-15px' }}
                className="absolute cursor-default text-xs py-1.5  px-3 lg:px-6 mb-6 text-white rounded-full font-semibold bg-pink-500"
              >
                <span className=" align-middle">Best value</span>
              </button>
            </div>

            <div className="relative flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow z-10">
              <h3 className="pt-6 text-2xl font-semibold text-left">Free</h3>
              <div className="flex text-left items-baseline my-8 ">
                <span className="mr-2 text-5xl font-extrabold text-left">
                  $0
                </span>
                <span className="text-black ">/month</span>
              </div>
              <span className=" text-black text-sm text-left mb-6">
                <b>2K</b> words {'.'} <b>1</b> seats
              </span>

              <p className="font-light text-gray-700 text-sm text-left mb-6">
                Get a taste of our AI writing magic to kickstart your writing
                journey.
              </p>

              <Link href={'/account/signup'}>
                <button className="w-full hover:transition hover:scale-105 ease-in-out   text-sm py-2  px-3 lg:px-6 mb-6 text-white rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                  <span className="align-middle">Select Package</span>
                </button>
              </Link>

              {/* <!-- List --> */}
              <ul role="list" className="mb-8 space-y-4 text-left">
                <li className="flex items-center space-x-3">
                  {/* <!-- Icon --> */}
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    <b>2K</b> words included
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  {/* <!-- Icon --> */}
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    <b>1</b> seat included
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  {/* <!-- Icon --> */}
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    <b>110+</b> templates
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  {/* <!-- Icon --> */}
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    <b>Word style editor</b>
                  </span>
                </li>
              </ul>
              <button
                style={{ top: '-15px' }}
                className="absolute cursor-default font-semibold text-xs py-1.5  px-3 lg:px-6 mb-6 text-white rounded-full bg-indigo-500"
              >
                <span className=" align-middle">Limited time 1+1k words</span>
              </button>
            </div>
          </div>
        </div>

        <div className="absolute w-0 lg:w-fit left-0 top-0 z-0">
          <Image src={objLeft} alt={''} width={300} />
        </div>
        <div className="absolute w-0 lg:w-fit right-0 top-0 z-0">
          <Image src={objRight} alt={''} width={300} />
        </div>
      </section>
    </div>
  );
}
