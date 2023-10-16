import Image from 'next/image';
import headRobo2 from '@/assets/img/headnormal.svg';
import imgF4 from '@/assets/img/part4-min.png';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useEffect, useRef } from 'react';
import Link from 'next/link';

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
          end: '270% center',
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
          end: '270% center',
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
          end: '270% center',
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
          className="relative py-20 z-10 h-full flex lg:items-center md:items-start items-start  md:justify-center justify-center lg:justify-start "
        >
          <div className="lg:pl-40 pt-4 md:pt-14 lg:pt-0">
            <div className=" container mx-auto">
              <div
                ref={sectionRefText}
                className="max-w-5xl mx-auto text-center lg:text-left p-6 lg:p-2"
              >
                <div className=" max-w-5xl mb-6 text-3xl md:text-5xl lg:text-6xl font-bold text-gray-100">
                  <span className="leading-tight">Unique,</span>
                  <br />
                  <span className="leading-tight">PLAGIARISM FREE</span>
                  <br />
                  <span className="leading-tight">content</span>
                </div>

                <p className=" max-w-5xl lg:max-w-xl  mb-2 text-sm md:text-lg lg:text-lg text-white">
                  Accuracy and speed? Get the best of both worlds with quick and
                  accurate AI-generated content that’s virtually 100%
                  plagiarism-free! With the option to generate up to 5 different
                  options each time, you’ll be able to speed up your workflows
                  and get the content you need in no time.
                </p>

                <div className="pt-4 ">
                  <Link href={'/account/signup'}>
                    <button className="py-2  px-4  text-purple-500 font-bold text-md  rounded-full bg-white border border-indigo-500">
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
            <div
              ref={sectionRefImageMobile}
              className="container mx-auto w-[300px] md:w-[500px] lg:w-0 "
            >
              <Image src={imgF4} alt={'img'} loading="lazy" />
            </div>
          </div>
        </div>

        <div
          ref={sectionRefImage}
          className="absolute w-0 md:w-0 lg:w-fit top-1/2 right-0 transform  -translate-y-1/2"
        >
          <Image src={imgF4} alt={'img'} width={470} loading="lazy" />
        </div>
      </div>
    </section>
  );
}
