import dynamic from 'next/dynamic';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';
import { useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import Dotpoint from '../contents/dotpoint';

const Feature1 = dynamic(() => import('../contents/Feature1'));
const Feature2 = dynamic(() => import('../contents/Feature2'));
const Feature3 = dynamic(() => import('../contents/Feature3'));
const Feature4 = dynamic(() => import('../contents/Feature4'));
const Feature5 = dynamic(() => import('../contents/Feature5'));

function Feature() {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
  useEffect(() => {
    let panels = gsap.utils.toArray('.panel');
    panels.forEach((panel, i) => {
      ScrollTrigger.create({
        trigger: panel as HTMLElement,
        start: 'top bottom',
        end: 'top top',
        snap: {
          snapTo: 10 / (panels.length - 1),
          duration: 0.1,
        },
        // markers: {
        //   startColor: 'black',
        //   endColor: 'yellow',
        //   fontSize: '18px',
        //   indent: 20,
        // },
      });
    });

    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: '.center-container1',
        pin: true,
        pinSpacing: '50%',
        scrub: true,
        start: 'top top',
        end: '150%',
        // markers: {
        //   startColor: 'cyan',
        //   endColor: 'green',
        //   fontSize: '18px',
        //   indent: 20,
        // },
      },
    });
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: '.center-container2',
        pin: true,
        pinSpacing: '50%',
        scrub: true,
        start: 'top top',
        end: '150%',
        // markers: {
        //   startColor: 'blue',
        //   endColor: 'red',
        //   fontSize: '18px',
        //   indent: 20,
        // },
      },
    });

    const tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: '.center-container3',
        pin: true,
        pinSpacing: '50%',
        scrub: true,
        start: 'top top',
        end: '150%',
        // markers: {
        //   startColor: 'blue',
        //   endColor: 'red',
        //   fontSize: '18px',
        //   indent: 20,
        // },
      },
    });
    const tl4 = gsap.timeline({
      scrollTrigger: {
        trigger: '.center-container4',
        pin: true,
        pinSpacing: '50%',
        scrub: true,
        start: 'top top',
        end: '150%',
        // markers: {
        //   startColor: 'blue',
        //   endColor: 'red',
        //   fontSize: '18px',
        //   indent: 20,
        // },
      },
    });
    const tl5 = gsap.timeline({
      scrollTrigger: {
        trigger: '.center-container5',
        pin: true,
        pinSpacing: '50%',
        scrub: true,
        start: 'top top',
        end: '150%',
        // markers: {
        //   startColor: 'blue',
        //   endColor: 'red',
        //   fontSize: '18px',
        //   indent: 20,
        // },
      },
    });

    return () => {
      tl1.revert();
      tl2.revert();
      tl3.revert();
      tl4.revert();
      tl5.revert();
    };
  });

  return (
    <div className="relative">
      {/* section */}
      <div className="main-container relative bg-green-300">
        <div id="feature1" className="sticky h-[300vh] z-[2]">
          <div className="panel center-container1 absolute w-[100%]">
            <Feature1 />
          </div>
        </div>
        <div id="feature2" className="sticky h-[300vh] z-[2]">
          <div className="panel center-container2 absolute w-[100%]">
            <Feature2 />
          </div>
        </div>
        <div id="feature3" className=" sticky h-[300vh] z-[2]">
          <div className="panel center-container3 absolute w-[100%]">
            <Feature3 />
          </div>
        </div>
        <div id="feature4" className=" sticky h-[300vh] z-[2]">
          <div className="panel center-container4 absolute w-[100%]">
            <Feature4 />
          </div>
        </div>
        <div id="feature5" className=" sticky h-[300vh] z-[2]">
          <div className="panel center-container5  relative">
            <Feature5 />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feature;
