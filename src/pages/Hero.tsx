import TextArea from '@/components/TextArea';
import Image from 'next/image';
import objLeft from '@/assets/img/MaskLeft.png';
import objRight from '@/assets/img/MaskRight.png';
import headRobo from '@/assets/img/robohead.png';
import Dash from '@/assets/img/dash.png';

export default function Home() {
  return (
    <>
      <section>
        <div className="relative">
          <div className="flex items-center justify-center bg-gray-50 py-12">
            <div className="text-center">
              <div className="container px-4 mx-auto pb-10">
                <div className="max-w-4xl mx-auto text-center">
                  <div className=" mt-8 mb-6 text-3xl px-4 lg:px-20 lg:text-6xl font-extrabold  ">
                    <span className="text-black leading-tight">
                      Powerful AI writing tools to boost your
                    </span>
                    <br />
                    <span className="leading-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-500">
                      writing productivity.
                    </span>
                  </div>
                  <TextArea />

                  <div className="pt-8 ">
                    <button className="text-sm py-3  px-3 lg:px-6   text-white rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                      <span className="mr-4 align-middle">
                        Sign Up for <b>FREE</b>
                      </span>
                      <Image
                        src={headRobo}
                        alt={''}
                        width={25}
                        className="inline"
                      />
                    </button>
                    <button className=" ml-4 py-3  px-6  text-indigo-500 font-bold  rounded-full bg-white border border-indigo-500">
                      <span className="leading-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-500">
                        View Plans
                      </span>
                    </button>
                  </div>

                  <div className="bg-white mt-20 px-2 rounded-t-3xl lg:rounded-t-full  border-t border-gray-200">
                    <h2 className="text-2xl pt-10 lg:px-20 lg:text-4xl font-extrabold ">
                      <span className="text-black leading-tight">
                        Over 100+ AI tools, a full document editor for long-form
                        content, and so much more.
                      </span>
                    </h2>
                  </div>
                  <div className="bg-gradient-to-r from-purple-700 from-30% via-purple-500 via-80% to-pink-500 to-100% p-3 rounded-3xl lg:w-fit ">
                    <Image src={Dash} alt={''} width={900} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute w-0 lg:w-fit left-0 top-0">
            <Image src={objLeft} alt={'robo'} width={400} />
          </div>
          <div className="absolute w-0 lg:w-fit right-0 top-0">
            <Image src={objRight} alt={'robo'} width={400} />
          </div>
        </div>
      </section>
    </>
  );
}
