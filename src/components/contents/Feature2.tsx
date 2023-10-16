import Image from 'next/image';
import headRobo2 from '@/assets/img/headnormal.svg';
import imgF2 from '@/assets/img/part2-min.png';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useEffect, useRef } from 'react';
import Link from 'next/link';

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
          start: '160% center',
          end: '400% center',
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
          start: '160% center',
          end: '400% center',
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
          start: '165% center',
          end: '400% center',
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
          <div className="lg:pl-40 pt-4 md:pt-14 lg:pt-0">
            <div className=" container mx-auto">
              <div
                ref={sectionRefText}
                className="lg:max-w-5xl lg:mx-auto text-center lg:text-left p-6 lg:p-2"
              >
                <div className=" max-w-5xl lg:max-w-xl mb-6 text-3xl md:text-5xl lg:text-6xl font-bold text-gray-800">
                  <span className="leading-tight">
                    Enjoy 100+ AI tools or Make your own!
                  </span>
                </div>

                <p className=" max-w-5xl lg:max-w-xl  mb-2 text-sm md:text-lg lg:text-lg text-gray-800">
                  Unlock the power of over 100 carefully crafted AI templates
                  designed to streamline your business writing needs.
                </p>

                <p className="max-w-5xl lg:max-w-lg  mb-2 text-sm md:text-lg lg:text-lg text-gray-800">
                  From <b>persuasive emails</b> to <b>professional reports</b>,
                  our <b>pre-made templates</b> are fine-tuned to help you
                  create polished and impactful content effortlessly. Stay tuned
                  for upcoming features that will blow your mind!
                </p>

                <div className="pt-4 max-w-5xl lg:max-w-xl">
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
                  <button className=" lg:ml-4 md:ml-4 ml-0 py-2 mt-4 md:mt-0 lg:mt-0 px-4  text-white text-md  rounded-full bg-transparent border border-white">
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
            className="absolute w-[300px] md:w-[500px] lg:w-0 bottom-16 md:bottom-32 right-0 "
          >
            <Image src={imgF2} alt={'img'} loading="lazy" />
          </div>
        </div>

        <div
          ref={sectionRefImage}
          className="absolute w-0 md:w-0 lg:w-fit top-1/2 right-0 transform  -translate-y-1/2"
        >
          <Image src={imgF2} alt={'img'} width={500} loading="lazy" />
        </div>
      </div>
    </section>
  );
}
