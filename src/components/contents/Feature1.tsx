import Image from 'next/image';
import headRobo2 from '@/assets/img/headnormal.svg';
import textline from '@/assets/img/textline.png';
import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Link from 'next/link';

export default function Feature1() {
  const sectionRefText = useRef(null);
  const triggerRefDesktop = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: '.center-container1',
        pin: true,
        pinSpacing: '50%',
        scrub: true,
        start: 'top top',
        end: '100%',
        // markers: true,
      },
    });

    const pinText = gsap.fromTo(
      sectionRefText.current,
      {
        y: -170,
        opacity: -1,
        delay: 0.5,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: triggerRefDesktop.current,
          start: 'top center',
          end: '200% center',
          scrub: false,
          toggleActions: 'play reverse play reverse',
          // markers: true,
        },
      }
    );
    return () => {
      pinText.revert();
      tl1.revert();
    };
  }, []);

  return (
    <section className="main-container">
      <div className="center-container1 relative bg-green-500 h-[100vh] lg:h-[110vh]">
        <div
          ref={triggerRefDesktop}
          className="h-full py-20 flex items-center justify-center bg-gradient-to-r from-purple-600 from-60% to-pink-400 to-100% bg-opacity-50 "
        >
          <div ref={sectionRefText} className="text-center">
            <div className="container px-4 mx-auto">
              <div className="max-w-4xl mx-auto text-center">
                <div className=" max-w-5xl mx-auto text-3xl md:text-5xl lg:text-6xl font-bold text-gray-100">
                  <span className="leading-tight">
                    The Tone of Voice establishes
                  </span>
                  <div className="pl-2 md:pl-24 lg:pl-32 ">
                    <Image src={textline} alt={''} width={500} />
                  </div>
                </div>
                <div className=" max-w-5xl mx-auto mb-6 text-3xl md:text-5xl lg:text-6xl font-bold text-gray-100">
                  <span className="leading-tight">your brand.</span>
                </div>

                <p className="max-w-3xl mx-auto mb-10 text-md md:text-xl lg:text-xl text-gray-300">
                  Whether you project confidence, playfulness, formality, or
                  exclusively use online language, <b>WritingHero.AI</b>{' '}
                  assimilates into brand voice to help you stay <br />
                  consistent, whatever you write.
                </p>

                <div className="pt-4 ">
                  <Link href={'/account/signup'}>
                    <button className="py-3  px-6  text-purple-500 font-bold text-md  rounded-full bg-white border border-indigo-500">
                      <span className="mr-4 align-middle">
                        Give it a try now!
                      </span>
                      <Image
                        src={headRobo2}
                        alt={''}
                        width={25}
                        className="inline"
                        loading="lazy"
                      />
                    </button>
                  </Link>
                  <button className=" lg:ml-4 lg:mt-0 mt-4 py-3  px-6  text-white text-md  rounded-full bg-transparent border border-white">
                    <span className="leading-tight ">
                      Learn More about Brand Voice
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
