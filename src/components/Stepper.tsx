import React from 'react';

export const Stepper1 = () => {
  return (
    <>
      <ul
        data-te-stepper-init
        className="relative m-0 flex list-none justify-between overflow-hidden p-0 transition-[height] duration-200 ease-in-out"
      >
        <li className="flex w-full items-center  after:content-[''] after:w-full after:h-1  after:border-gray-300 after:border-2 after:inline-block ">
          <span className="flex items-center justify-center w-6 h-6 bg-white border-2 border-indigo-600 rounded-full lg:h-6 lg:w-6  shrink-0">
            <span
              className="h-2.5 w-2.5 rounded-full bg-indigo-600"
              aria-hidden="true"
            ></span>
          </span>
        </li>

        {/* <!--Second item--> */}
        <li className="flex w-full items-center after:content-[''] after:w-full after:h-1  after:border-gray-300 after:border-2 after:inline-block ">
          <span className="flex items-center justify-center w-6 h-6 bg-white border-2 border-gray-300 rounded-full lg:h-6 lg:w-6  shrink-0"></span>
        </li>

        {/* <!--Third item--> */}
        <li data-te-stepper-step-ref className="w-[4.5rem] flex-auto">
          <span className="flex items-center justify-center w-6 h-6 bg-white border-2 border-gray-300 rounded-full lg:h-6 lg:w-6  shrink-0"></span>
        </li>
      </ul>
    </>
  );
};

export const Stepper2 = () => {
  return (
    <>
      <ul
        data-te-stepper-init
        className="relative m-0 flex list-none justify-between overflow-hidden p-0 transition-[height] duration-200 ease-in-out"
      >
        <li className="flex w-full items-center  after:content-[''] after:w-full after:h-1  after:border-indigo-600 after:border-2 after:inline-block ">
          <span className="flex items-center justify-center w-6 h-6 bg-indigo-600 border-2 border-indigo-600 rounded-full lg:h-6 lg:w-6  shrink-0">
            <svg
              className="h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clipRule="evenodd"
              ></path>
            </svg>
          </span>
        </li>

        {/* <!--Second item--> */}
        <li className="flex w-full items-center  after:content-[''] after:w-full after:h-1  after:border-gray-300 after:border-2 after:inline-block ">
          <span className="flex items-center justify-center w-6 h-6 bg-white border-2 border-indigo-600 rounded-full lg:h-6 lg:w-6  shrink-0">
            <span
              className="h-2.5 w-2.5 rounded-full bg-indigo-600"
              aria-hidden="true"
            ></span>
          </span>
        </li>

        {/* <!--Third item--> */}
        <li data-te-stepper-step-ref className="w-[4.5rem] flex-auto">
          <span className="flex items-center justify-center w-6 h-6 bg-white border-2 border-gray-300 rounded-full lg:h-6 lg:w-6  shrink-0"></span>
        </li>
      </ul>
    </>
  );
};
