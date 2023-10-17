import Image from 'next/image';
import headRobo2 from '@/assets/img/headnormal.svg';
import imgF2 from '@/assets/img/part2-min.png';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Dotpoint from './dotpoint';

export default function Feature2() {
  const sectionRefText = useRef(null);
  const sectionRefImage = useRef(null);
  const sectionRefImageMobile = useRef(null);
  const triggerRefDesktop = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pinText = gsap.fromTo(
      sectionRefText.current,
      {
        y: -150,
        opacity: 0,
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

    const pinImage = gsap.fromTo(
      sectionRefImage.current,
      {
        x: 600,
      },
      {
        x: 0,
        duration: 1,
        delay: 0.3,
        scrollTrigger: {
          trigger: triggerRefDesktop.current,
          start: '5% center',
          end: '265% center',
          scrub: false,
          // markers: {
          //   startColor: 'blue',
          //   endColor: 'red',
          //   fontSize: '18px',
          //   indent: 20,
          // },
          toggleActions: 'play reverse play reverse',
        },
      }
    );

    const pinImageMobile = gsap.fromTo(
      sectionRefImageMobile.current,
      { y: -70, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.5,
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
      pinImage.revert();
      pinImageMobile.revert();
    };
  }, []);

  return (
    <section>
      <div className=" relative orange h-[100vh] lg:h-[110vh]">
        <div
          ref={triggerRefDesktop}
          className="relative py-20 z-10 h-full flex lg:items-center items-start  justify-center lg:justify-start"
        >
          <div className="lg:pl-20 pt-0 md:pt-14 lg:pt-0">
            <div className=" container mx-auto">
              <div
                ref={sectionRefText}
                className="max-w-5xl mx-auto text-center lg:text-left p-6 lg:p-0 "
              >
                <div className=" max-w-5xl lg:max-w-xl mb-2 md:mb-6 lg:mb-2 text-3xl md:text-5xl lg:text-5xl font-extrabold text-black">
                  <span className="leading-tight">
                    Enjoy 100+ AI tools or Make your own!
                  </span>
                </div>

                <p className=" max-w-5xl lg:max-w-lg  mb-2 text-xs md:text-base lg:text-base text-black">
                  Unlock the power of over 100 carefully crafted AI templates
                  designed to streamline your business writing needs.
                </p>

                <p className="max-w-5xl lg:max-w-lg  mb-2 text-xs md:text-base lg:text-base text-black">
                  From <b>persuasive emails</b> to <b>professional reports</b>,
                  our <b>pre-made templates</b> are fine-tuned to help you
                  create polished and impactful content effortlessly. Stay tuned
                  for upcoming features that will blow your mind!
                </p>

                <div className="pt-2 md:pt-4 lg:pt-2 max-w-5xl lg:max-w-xl">
                  <Link href={'/account/signup'}>
                    <button className="py-[12px]  px-4  text-purple-500 font-bold text-sm md:text-base  rounded-full bg-white border border-indigo-500">
                      <span className="mr-3 align-middle">
                        Give it a try now!
                      </span>
                      <Image
                        src={headRobo2}
                        alt={''}
                        width={25}
                        className="inline"
                      />
                    </button>
                  </Link>
                  <button className=" lg:ml-4 md:ml-4 ml-0 py-[14px] mt-2 md:mt-0 lg:mt-0 px-4  text-white text-sm md:text-md  rounded-full bg-transparent border border-white">
                    <span className="leading-tight ">
                      Create your own Custom AI Tool!
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            ref={sectionRefImageMobile}
            className="absolute w-[250px] md:w-[500px] lg:w-0 bottom-0 md:bottom-32 right-0 "
          >
            <Image src={imgF2} alt={'img'} loading="lazy" />
          </div>
          <div className="hidden md:block section-menu fixed  left-0 md:left-2 lg:left-3  md:top-96 transform  -translate-y-1/2 z-[3]">
            <Dotpoint
              active1={''}
              active2={'active'}
              active3={''}
              active4={''}
              active5={''}
            />
          </div>
        </div>

        <div
          ref={sectionRefImage}
          className="absolute w-0 md:w-0 lg:w-fit top-1/2 right-0 transform  -translate-y-1/2"
        >
          <Image src={imgF2} alt={'img'} width={480} loading="lazy" />
        </div>
      </div>
    </section>
  );
}
