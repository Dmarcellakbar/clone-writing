import Image from 'next/image';
import headRobo2 from '@/assets/img/headnormal.svg';
import imgF3 from '@/assets/img/part3-min.png';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function Feature3() {
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
      <div className="relative  red h-[100vh] lg:h-[110vh]">
        <div
          ref={triggerRefDesktop}
          className="relative py-20  z-10 h-full flex lg:items-center items-start  justify-center lg:justify-start"
        >
          <div className="lg:pl-20 pt-0 md:pt-14 lg:pt-0">
            <div className=" container mx-auto">
              <div
                ref={sectionRefText}
                className="max-w-5xl mx-auto text-center lg:text-left p-6 lg:p-0"
              >
                <div className=" max-w-5xl lg:max-w-xl mb-2 md:mb-6 lg:mb-2 text-3xl md:text-4xl lg:text-5xl font-extrabold text-white">
                  <span className="leading-tight">A FULL-FEATURED</span>
                  <br />
                  <span className="leading-tight">document editor</span>
                </div>

                <p className=" max-w-5xl lg:max-w-md  mb-2 text-xs md:text-lg lg:text-base text-white">
                  A full editor, so you can create and share projects and
                  documents with your team - quickly and easily. Plus, an
                  easy-to-use adjustment panel makes working with existing or
                  newly generated content a breeze - and it’s all included at no
                  extra charge! All the tools you or your business needs to
                  streamline your content creation process!.
                </p>

                <div className="pt-4 lg:pt-2 ">
                  <Link href={'/account/signup'}>
                    <button className="py-2  px-4  text-purple-500 font-bold text-sm md:text-base  rounded-full bg-white border border-indigo-500">
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
              <Image src={imgF3} alt={'img'} loading="lazy" />
            </div>
          </div>
        </div>

        <div
          ref={sectionRefImage}
          className="absolute w-0 md:w-0 lg:w-fit top-1/2 right-10 transform  -translate-y-1/2"
        >
          <Image src={imgF3} alt={'img'} width={470} loading="lazy" />
        </div>
      </div>
    </section>
  );
}
