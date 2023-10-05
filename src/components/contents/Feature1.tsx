import Image from 'next/image';
import headRobo2 from '@/assets/img/headnormal.svg';
import textline from '@/assets/img/textline.png';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default function Feature1() {
  const sectionRefText = useRef(null);
  const triggerRefDesktop = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pinText = gsap.fromTo(
      sectionRefText.current,
      {
        opacity: 0,
        y: -100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power1.inOut',
        scrollTrigger: {
          trigger: triggerRefDesktop.current,
          start: 'top 80%',
          end: '20% 50%',
          scrub: true,
          // markers: true,
        },
      }
    );
    return () => {
      pinText.kill();
    };
  }, []);

  return (
    <section>
      <div className="relative bg-green-500" style={{ height: '100vh' }}>
        <div
          ref={triggerRefDesktop}
          className="h-full pt-10 flex items-center justify-center bg-gradient-to-r from-purple-600 from-60% to-pink-400 to-100% bg-opacity-50 "
        >
          <div ref={sectionRefText} className="text-center">
            <div className="container px-4 mx-auto">
              <div className="max-w-4xl mx-auto text-center">
                <div className=" max-w-5xl mx-auto text-4xl lg:text-6xl font-bold text-gray-100">
                  <span className="leading-tight">
                    The Tone of Voice establishes
                  </span>
                  <div className="pl-2 md:pl-24 lg:pl-32 ">
                    <Image src={textline} alt={''} width={500} />
                  </div>
                </div>
                <div className=" max-w-5xl mx-auto mb-6 text-4xl lg:text-6xl font-bold text-gray-100">
                  <span className="leading-tight">your brand.</span>
                </div>

                <p className="max-w-3xl mx-auto mb-10 text-xl text-gray-300">
                  Whether you project confidence, playfulness, formality, or
                  exclusively use online language, <b>WritingHero.AI</b>{' '}
                  assimilates into brand voice to help you stay <br />
                  consistent, whatever you write.
                </p>

                <div className="pt-4 ">
                  <button className="py-3  px-6  text-purple-500 font-bold text-md  rounded-full bg-white border border-indigo-500">
                    <span className="mr-4 align-middle">
                      Give it a try now!
                    </span>
                    <Image
                      src={headRobo2}
                      alt={''}
                      width={25}
                      className="inline"
                    />
                  </button>
                  <button className=" lg:ml-4 lg:mt-0 mt-4 py-3  px-6  text-white text-md  rounded-full bg-transparent border border-white">
                    <span className="leading-tight ">
                      Learn More about Brand Voice
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
