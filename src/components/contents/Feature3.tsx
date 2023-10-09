import Image from 'next/image';
import headRobo2 from '@/assets/img/headnormal.svg';
import imgF3 from '@/assets/img/part3-min.png';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useEffect, useLayoutEffect, useRef } from 'react';
import Link from 'next/link';

export default function Feature3() {
  const sectionRefText = useRef(null);
  const sectionRefImage = useRef(null);
  const sectionRefImageMobile = useRef(null);
  const triggerRefDesktop = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    const pinText = gsap.fromTo(
      sectionRefText.current,
      {
        y: -150,
        opacity: -2,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: triggerRefDesktop.current,
          start: 'top center',
          end: '80% center',
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
        duration: 1,
        scrollTrigger: {
          trigger: triggerRefDesktop.current,
          start: 'top center',
          end: '80% center',
          scrub: false,
          // markers: true,
          toggleActions: 'play reverse play reverse',
        },
      }
    );

    const pinImageMobile = gsap.fromTo(
      sectionRefImageMobile.current,
      { y: -70, opacity: -2, immediateRender: false },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: triggerRefDesktop.current,
          start: 'top center',
          end: '80% center',
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
      <div className="relative  red h-auto md:h-[100vh] lg:h-[110vh]">
        <div
          ref={triggerRefDesktop}
          className="relative py-20  z-10 h-full flex items-center  "
        >
          <div className="lg:pl-52">
            <div className=" container mx-auto">
              <div
                ref={sectionRefText}
                className="max-w-4xl mx-auto text-center md:text-left p-6 lg:p-2"
              >
                <div className=" max-w-2xl mb-6 text-3xl lg:text-6xl font-bold text-gray-100">
                  <span className="leading-tight">A FULL-FEATURED</span>
                  <br />
                  <span className="leading-tight">document editor</span>
                </div>

                <p className=" max-w-lg  mb-2 text-sm lg:text-md text-white">
                  A full editor, so you can create and share projects and
                  documents with your team - quickly and easily. Plus, an
                  easy-to-use adjustment panel makes working with existing or
                  newly generated content a breeze - and it’s all included at no
                  extra charge! All the tools you or your business needs to
                  streamline your content creation process!.
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
          className="absolute w-0 lg:w-fit right-20 top-48"
        >
          <Image src={imgF3} alt={'img'} width={500} quality={60} />
        </div>

        <div
          ref={sectionRefImageMobile}
          className="absolute w-0 md:w-fit lg:w-0 right-10 top-52 z-0"
        >
          <Image src={imgF3} alt={'img'} width={400} quality={60} />
        </div>
      </div>
    </section>
  );
}
