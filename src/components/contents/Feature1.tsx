import Image from 'next/image';
import headRobo2 from '@/assets/img/headnormal.svg';
import textline from '@/assets/img/textline.png';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Link from 'next/link';
import Dotpoint from './dotpoint';

export default function Feature1() {
  const sectionRefText = useRef(null);
  const triggerRefDesktop = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pinText = gsap.fromTo(
      sectionRefText.current,
      {
        y: -170,
        opacity: -1,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.3,
        scrollTrigger: {
          trigger: triggerRefDesktop.current,
          start: '5% center',
          end: '265% center',
          scrub: false,
          toggleActions: 'play reverse play reverse',
          // markers: {
          //   startColor: 'blue',
          //   endColor: 'red',
          //   fontSize: '18px',
          //   indent: 20,
          // },
        },
      }
    );
    return () => {
      pinText.revert();
      // tl1.revert();
    };
  }, []);

  return (
    <section id="section2">
      <div className="relative bg-green-500 h-[100vh] lg:h-[110vh]">
        <div
          ref={triggerRefDesktop}
          className="h-full py-20 flex items-center justify-center bg-gradient-to-r from-purple-600 from-60% to-pink-400 to-100% bg-opacity-50 "
        >
          <div ref={sectionRefText} className="text-center">
            <div className="container px-4 mx-auto">
              <div className="max-w-4xl mx-auto text-center">
                <div className=" max-w-5xl mx-auto text-3xl md:text-5xl lg:text-5xl font-extrabold text-white">
                  <span className="leading-tight">
                    The Tone of Voice establishes
                  </span>
                  <div className="pl-2 md:pl-24 lg:pl-32 ">
                    <Image src={textline} alt={''} width={500} />
                  </div>
                </div>
                <div className=" max-w-5xl mx-auto mb-4 text-3xl md:text-5xl lg:text-5xl font-extrabold text-white">
                  <span className="leading-tight">your brand.</span>
                </div>

                <p className="max-w-3xl mx-auto mb-4 text-sm md:text-base lg:text-lg text-white font-normal">
                  Whether you project confidence, playfulness, formality, or
                  exclusively use online language, <b>WritingHero.AI</b>{' '}
                  assimilates into brand voice to help you stay consistent,
                  whatever you write.
                </p>

                <div className="pt-2 ">
                  <Link href={'/account/signup'}>
                    <button className="py-[12px]  px-6  text-purple-500 font-bold text-sm md:text-base  rounded-full bg-white border border-indigo-500">
                      <span className="mr-4 align-middle">
                        Give it a try now!
                      </span>
                      <Image
                        src={headRobo2}
                        alt={''}
                        width={25}
                        className="inline"
                        loading="lazy"
                      />
                    </button>
                  </Link>
                  <button className=" lg:ml-4 md:ml-4 ml-0 lg:mt-0 mt-4 py-[14px]  px-6  text-white text-sm md:text-base  rounded-full bg-transparent border border-white">
                    <span className="leading-tight ">
                      Learn More about Brand Voice
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="section-menu fixed  left-3 top-60 z-[3] ">
            <Dotpoint
              active1={'active'}
              active2={''}
              active3={''}
              active4={''}
              active5={''}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
