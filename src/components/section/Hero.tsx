import TextArea from '@/components/TextArea';
import Image from 'next/image';
import objLeft from '@/assets/img/leftdot.svg';
import objRight from '@/assets/img/rightdot.svg';
import headRobo from '@/assets/img/headwhite.svg';
import Dash from '@/assets/img/screenwriting.svg';
import DashScroll from '../dashboard/DashScroll';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <section>
        <div className="relative z-[5]">
          <div className="flex items-center justify-center bg-gray-50 py-12 lg:py-6">
            <div className="text-center">
              <div className="container px-4 mx-auto pb-10">
                <div className="max-w-5xl xl:max-w-6xl mx-auto text-center">
                  <div className=" mt-8 lg:mt-4 max-w-3xl xl:max-w-5xl  mx-auto mb-6  text-3xl px-4 lg:px-20 md:text-4xl lg:text-5xl xl:text-6xl  font-extrabold  ">
                    <span className="text-black leading-tight">
                      Powerful AI writing tools to boost your
                    </span>
                    <br />
                    <span className="leading-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-500">
                      writing productivity.
                    </span>
                  </div>
                  <TextArea />

                  <div className="pt-8 max-w-4xl  mx-auto flex justify-center">
                    <Link href={'/account/signup'}>
                      <button className="text-sm py-3 mr-4 px-3 lg:px-6  hover:transition hover:scale-105 ease-in-out delay-50 text-white rounded-full bg-gradient-to-r from-10% from-indigo-500 via-40% via-purple-500 to-98% to-pink-500">
                        <span className="mr-3 align-middle">
                          Sign Up for <b>FREE</b>
                        </span>
                        <Image
                          src={headRobo}
                          alt={''}
                          width={25}
                          className="inline"
                        />
                      </button>
                    </Link>

                    <div
                      style={{
                        paddingTop: '1px',
                        paddingBottom: '1px',
                        paddingLeft: '1px',
                        paddingRight: '1px',
                      }}
                      className="w-fit h-fit cursor-pointer text-sm text-white hover:transition hover:scale-105 ease-in-out delay-50 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                    >
                      <div className="bg-white rounded-full px-6 py-[13px]">
                        <span className="leading-tight font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-500">
                          View Plans
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white  mt-10 lg:mt-16 xl:mt-20 pb-6 px-2 rounded-t-3xl lg:rounded-t-full  border-t border-gray-200 z-10 relative">
                    <h2 className="text-2xl pt-6 xl:pt-16 lg:px-20 lg:text-4xl xl:text-5xl font-extrabold ">
                      <span className="text-black leading-tight">
                        Over 100+ AI tools, a full document editor for long-form
                        content, and so much more.
                      </span>
                    </h2>
                  </div>
                  <div className="bg-white rounded-b-3xl flex justify-center px-4 relative z-10">
                    <div className="bg-gradient-to-r from-purple-700 from-30% via-purple-500 via-80% to-pink-500 to-100% p-3 rounded-3xl lg:w-fit ">
                      <DashScroll />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute w-0 lg:w-fit left-0 top-0 z-0">
            <Image src={objLeft} alt={'dot'} width={400} />
          </div>
          <div className="absolute w-0 lg:w-fit right-0 top-0 z-0">
            <Image src={objRight} alt={'dot'} width={400} />
          </div>
        </div>
      </section>
    </>
  );
}
