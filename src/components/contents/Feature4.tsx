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
        duration: 3,
        scrollTrigger: {
          trigger: triggerRefDesktop.current,
          start: 'top center',
          end: 'bottom center',
          scrub: false,
          toggleActions: 'play reverse play reverse',
          // markers: true,
        },
      }
    );

    const pinImage = gsap.fromTo(
      sectionRefImage.current,
      {
        x: 600,
        immediateRender: false,
      },
      {
        x: 0,
        duration: 3,
        scrollTrigger: {
          trigger: triggerRefDesktop.current,
          start: 'top center',
          end: 'bottom center',
          scrub: false,
          // markers: true,
          toggleActions: 'play reverse play reverse',
        },
      }
    );

    const pinImageMobile = gsap.fromTo(
      sectionRefImageMobile.current,
      { y: -70, opacity: 0, immediateRender: false },
      {
        y: 0,
        opacity: 1,
        duration: 3,
        scrollTrigger: {
          trigger: triggerRefDesktop.current,
          start: 'top center',
          end: 'bottom center',
          scrub: false,
          toggleActions: 'play reverse play reverse',
          // markers: true,
        },
      }
    );
    return () => {
      pinText.kill();
      pinImage.kill();
      pinImageMobile.kill();
    };
  }, []);

  return (
    <section>
      <div className="relative  blue  h-[100vh] lg:h-[110vh]">
        <div
          ref={triggerRefDesktop}
          className="relative py-20 z-10 h-full flex items-center  "
        >
          <div className="lg:pl-40">
            <div className=" container mx-auto">
              <div
                ref={sectionRefText}
                className="max-w-4xl mx-auto text-center md:text-left p-6 lg:p-2"
              >
                <div className=" max-w-xl mb-6 text-3xl lg:text-6xl font-bold text-gray-100">
                  <span className="leading-tight">Unique,</span>
                  <br />
                  <span className="leading-tight">PLAGIARISM FREE</span>
                  <br />
                  <span className="leading-tight">content</span>
                </div>

                <p className=" max-w-xl  mb-2 text-sm lg:text-md text-white">
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
          </div>
        </div>
        <div
          ref={sectionRefImage}
          className="absolute w-0 lg:w-fit right-0 top-40"
        >
          {/* <div className={`bg-[url('../assets/img/feat4.svg')]`}></div> */}
          <Image src={imgF4} alt={'img'} width={470} loading="lazy" />
        </div>

        <div
          ref={sectionRefImageMobile}
          className="absolute w-0 md:w-fit lg:w-0 right-0 top-48 z-0"
        >
          <Image src={imgF4} alt={'img'} width={400} loading="lazy" />
        </div>
      </div>
    </section>
  );
}
