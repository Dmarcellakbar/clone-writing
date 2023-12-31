import Image from 'next/image';
import headRobo2 from '@/assets/img/headnormal.svg';
import imgF4 from '@/assets/img/part4-min.png';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Dotpoint from './dotpoint';

export default function Feature4() {
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
      <div className="relative  blue  h-[100vh] lg:h-[110vh]">
        <div
          ref={triggerRefDesktop}
          className="relative gap-4 lg:gap-16 py-20 z-10 h-full flex flex-col lg:flex-row items-center  justify-center "
        >
          <div className="lg:pr-52 xl:pr-72 px-4 md:px-0">
            <div className=" container mx-auto">
              <div
                ref={sectionRefText}
                className="max-w-5xl mx-auto text-center lg:text-left p-6 lg:p-0"
              >
                <div className=" max-w-5xl lg:max-w-xl xl:max-w-3xl mb-2 md:mb-6 lg:mb-2 text-4xl md:text-6xl lg:text-6xl xl:text-7xl font-extrabold text-white">
                  <span className="leading-tight">Unique,</span>
                  <br />
                  <span className="leading-tight">PLAGIARISM FREE</span>
                  <br />
                  <span className="leading-tight">content</span>
                </div>

                <p className=" max-w-2xl lg:max-w-lg xl:max-w-xl  mb-2 text-xs md:text-lg lg:text-base xl:text-lg text-white">
                  Accuracy and speed? Get the best of both worlds with quick and
                  accurate AI-generated content that’s virtually 100%
                  plagiarism-free! With the option to generate up to 5 different
                  options each time, you’ll be able to speed up your workflows
                  and get the content you need in no time.
                </p>

                <div className="pt-4 lg:pt-2 ">
                  <Link href={'/account/signup'}>
                    <button className="py-2  px-4 hover:transition hover:scale-105 ease-in-out   text-purple-500 font-bold text-sm md:text-base  rounded-full bg-white border border-indigo-500">
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
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-0 flex justify-end ">
            <div
              ref={sectionRefImageMobile}
              className=" w-[300px] md:w-[500px] lg:w-0 "
            >
              <Image src={imgF4} alt={'img'} loading="lazy" />
            </div>
          </div>
          {/* Image */}
          <div
            ref={sectionRefImage}
            className="hidden lg:block absolute right-0 w-5/12 "
          >
            <Image src={imgF4} alt={'img'} loading="lazy" />
          </div>

          <div className="block section-menu fixed left-1 md:left-2 lg:left-3   transform  -translate-y-1/2 z-[3]">
            <Dotpoint
              active1={''}
              active2={''}
              active3={''}
              active4={'active'}
              active5={''}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
