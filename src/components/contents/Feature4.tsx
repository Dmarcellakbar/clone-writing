import Image from 'next/image';
import headRobo2 from '@/assets/img/robohead2.png';
import imgF4 from '@/assets/img/imgFeature4.png';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useEffect, useRef } from 'react';

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
        y: 500,
        opacity: -2,
      },
      {
        y: 0,
        opacity: 3,
        duration: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: triggerRefDesktop.current,
          start: '25% 80%',
          end: '40% 50%',
          scrub: true,
          // markers: true,
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
        duration: 0.5,
        ease: 'none',
        scrollTrigger: {
          trigger: triggerRefDesktop.current,
          start: '10% 80%',
          end: '30% 40%',
          scrub: true,
          // markers: true,
        },
      }
    );

    const pinImageMobile = gsap.fromTo(
      sectionRefImageMobile.current,
      {
        y: -100,
        opacity: -2,
      },
      {
        y: 0,
        opacity: 3,
        duration: 0.5,
        ease: 'none',
        scrollTrigger: {
          trigger: triggerRefDesktop.current,
          start: 'top 80%',
          end: '20% 40%',
          scrub: true,
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
      <div className="relative  blue" style={{ height: '110vh' }}>
        <div
          ref={triggerRefDesktop}
          className="relative z-10 h-full flex items-center  "
        >
          <div className="lg:pl-72">
            <div className=" container mx-auto">
              <div
                ref={sectionRefText}
                className="max-w-4xl mx-auto text-center md:text-left p-6 lg:p-2"
              >
                <div className=" max-w-2xl mb-6 text-3xl lg:text-6xl font-bold text-gray-100">
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
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          ref={sectionRefImage}
          className="absolute w-0 lg:w-fit right-0 top-40"
        >
          <Image src={imgF4} alt={'img'} width={600} />
        </div>

        <div
          ref={sectionRefImageMobile}
          className="absolute w-0 md:w-fit lg:w-0 right-0 top-60 z-0"
        >
          <Image src={imgF4} alt={'img'} width={400} />
        </div>
      </div>
    </section>
  );
}
