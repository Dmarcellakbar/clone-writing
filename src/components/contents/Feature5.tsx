import Image from 'next/image';
import headRobo from '@/assets/img/headwhite.svg';
import imgF5 from '@/assets/img/feat5.svg';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useEffect, useRef } from 'react';

export default function Feature5() {
  const sectionRefText = useRef(null);
  const sectionRefImage = useRef(null);
  const sectionRefImageMobile = useRef(null);
  const triggerRefDesktop = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pinText = gsap.fromTo(
      sectionRefText.current,
      {
        y: -80,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: triggerRefDesktop.current,
          start: 'top 80%',
          end: '40% 10%',
          scrub: true,
          // markers: true,
        },
      }
    );

    const pinImage = gsap.fromTo(
      sectionRefImage.current,
      {
        x: 200,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: triggerRefDesktop.current,
          start: 'top 80%',
          end: '50% 10%',
          scrub: true,
          // markers: true,
        },
      }
    );

    const pinImageMobile = gsap.fromTo(
      sectionRefImageMobile.current,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power1.inOut',
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
      <div className="relative  cyan  h-auto md:h-[100vh] lg:h-[110vh]">
        <div
          ref={triggerRefDesktop}
          className="relative py-20 z-10 h-full flex items-center  "
        >
          <div className="lg:pl-52">
            <div className=" container mx-auto">
              <div
                ref={sectionRefText}
                className="max-w-4xl mx-auto text-center md:text-left p-6 lg:p-2"
              >
                <div className=" max-w-2xl mb-6 text-3xl lg:text-6xl font-bold text-black">
                  <span className="leading-tight">Supercharge</span>
                  <br />
                  <span className="leading-tight">Team Productivity</span>
                </div>

                <p className=" max-w-xl  mb-2 text-sm lg:text-md text-black">
                  Collaborate seamlessly with your team using Writing Hero!
                  Unlock the power of unlimited projects and documents, enabling
                  smooth sharing and elevated writing productivity.
                </p>

                <div className="pt-4 ">
                  <button className="py-3  px-6  text-white font-bold text-md  rounded-full bg-gradient-to-r from-10% from-indigo-500 via-40% via-purple-500 to-98% to-pink-500">
                    <span className="mr-4 align-middle">
                      Give it a try now!
                    </span>
                    <Image
                      src={headRobo}
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
          className="absolute w-0 lg:w-fit right-20 top-40"
        >
          <Image src={imgF5} alt={'img'} width={400} quality={60} />
        </div>

        <div
          ref={sectionRefImageMobile}
          className="absolute w-0 md:w-fit lg:w-0 right-10 top-40 z-0"
        >
          <Image src={imgF5} alt={'img'} width={300} quality={60} />
        </div>
      </div>
    </section>
  );
}
