import Image from 'next/image';
import headRobo2 from '@/assets/img/robohead2.png';
import imgF2 from '@/assets/img/imgFeature2.png';
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
        y: -200,
        opacity: -2,
      },
      {
        y: 0,
        opacity: 3,
        duration: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: triggerRefDesktop.current,
          start: '5% 80%',
          end: '40% top',
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
          start: 'top 80%',
          end: '20% 40%',
          scrub: true,
          // markers: true,
        },
      }
    );

    const pinImageMobile = gsap.fromTo(
      sectionRefImageMobile.current,
      { y: -100, opacity: -2 },
      {
        y: 0,
        opacity: 3,
        duration: 0.8,
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
      <div className="relative orange" style={{ height: '110vh' }}>
        <div
          ref={triggerRefDesktop}
          className="relative z-10 h-full flex items-center  "
        >
          <div className="lg:pl-52">
            <div className=" container mx-auto">
              <div
                ref={sectionRefText}
                className="max-w-4xl mx-auto text-center md:text-left p-6 lg:p-2"
              >
                <div className=" max-w-xl mb-6 text-3xl lg:text-6xl font-bold text-black">
                  <span className="leading-tight">
                    Enjoy 100+ AI tools or Make your own!
                  </span>
                </div>

                <p className=" max-w-xl  mb-2 text-sm lg:text-lg text-black">
                  Unlock the power of over 100 carefully crafted AI templates
                  designed to streamline your business writing needs.
                </p>

                <p className="max-w-lg  mb-2 text-sm lg:text-lg text-black">
                  From <b>persuasive emails</b> to <b>professional reports</b>,
                  our <b>pre-made templates</b> are fine-tuned to help you
                  create polished and impactful content effortlessly. Stay tuned
                  for upcoming features that will blow your mind!
                </p>

                <div className="pt-4 ">
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
                  <button className=" lg:ml-2 md:ml-4 lg:mt-0 md:mt-0 mt-4 py-2  px-4  text-white text-md  rounded-full bg-transparent border border-white">
                    <span className="leading-tight ">
                      Create your own Custom AI Tool!
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          ref={sectionRefImage}
          className="absolute w-0 lg:w-fit right-0 top-0"
        >
          <Image src={imgF2} alt={'img'} width={600} />
        </div>

        <div
          ref={sectionRefImageMobile}
          className="absolute w-0 md:w-fit lg:w-0 right-0 top-0 z-0"
        >
          <Image src={imgF2} alt={'img'} width={400} />
        </div>
      </div>
    </section>
  );
}
