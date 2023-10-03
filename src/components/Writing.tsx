import React from 'react';
import Image from 'next/image';
import Card1 from '@/assets/img/writing-1.svg';
import Card2 from '@/assets/img/writing-2.svg';
import Card3 from '@/assets/img/writing-3.svg';
import headRobo from '@/assets/img/headwhite.svg';
import ImgLogo from '../../public/logowide.svg';

export default function Pricing() {
  return (
    <div>
      <section className="bg-white relative">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 z-10">
          <div className="mx-auto max-w-screen-md flex items-center justify-center mb-8 lg:mb-12  ">
            <Image src={ImgLogo} alt={''} width={350} />
          </div>
          <div className="relative space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0 ">
            {/* <!-- Pricing Card --> */}
            <div className="flex flex-col mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-300 shadow z-10">
              <div className="pt-6 flex  items-center justify-center">
                <Image src={Card1} alt={'card1'} width={220} />
              </div>

              <div className="p-6 text-left  mb-8 ">
                <span className=" text-purple-600 text-md text-left font-semibold ">
                  <span className=" text-black">
                    Say goodbye to the mundane task of thinking about what to
                    write and focus on what you do best -{' '}
                  </span>{' '}
                  moving your business forward at {''}
                  <span className=" text-black">at lightning speed!</span>
                </span>
              </div>
            </div>

            <div className="flex flex-col mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-300 shadow z-10">
              <div className="pt-6 flex  items-center justify-center">
                <Image src={Card2} alt={'card2'} width={220} />
              </div>

              <div className="px-6 text-left  mb-4">
                <span className=" text-black text-md text-left font-semibold ">
                  Choose a tool, write a few ideas, and be amazed by the content
                  you can create.
                </span>
              </div>
              <div className="px-6 text-left  mb-8 ">
                <span className=" text-purple-600 text-md text-left font-semibold ">
                  <span className="text-black">From</span> perfectly crafted
                  emails, ads, <span className="text-black">to</span> sales
                  letters <span className="text-black">or</span> full outreach
                  responses,{' '}
                  <span className="text-black">
                    our tools will help you save time and boost your bottom
                    line.
                  </span>
                </span>
                <span className=" text-black text-md text-left font-semibold ">
                  at lightning speed!
                </span>
              </div>
            </div>

            <div className="flex flex-col mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-300 shadow z-10">
              <div className="pt-6 flex  items-center justify-center">
                <Image src={Card3} alt={'card3'} width={220} />
              </div>

              <div className="px-6 text-left  mb-8 ">
                <span className=" text-purple-600 text-md text-left font-semibold ">
                  <span className="text-black">
                    Writing Hero has the tools you need to make your writing
                    process{' '}
                  </span>
                  more efficient <span className="text-black">and </span>
                  productive{' '}
                  <span className="text-black">
                    to help your business get ahead.
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div className=" text-center pt-6">
            <button className="text-sm py-3  px-3 lg:px-6   text-white rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              <span className="mr-4 align-middle">
                Give it a try <b>NOW!</b>
              </span>
              <Image src={headRobo} alt={''} width={25} className="inline" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
