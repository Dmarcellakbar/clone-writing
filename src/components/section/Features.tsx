import dynamic from 'next/dynamic';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';
import { useEffect } from 'react';

const Feature1 = dynamic(() => import('../contents/Feature1'));
const Feature2 = dynamic(() => import('../contents/Feature2'));
const Feature3 = dynamic(() => import('../contents/Feature3'));
const Feature4 = dynamic(() => import('../contents/Feature4'));
const Feature5 = dynamic(() => import('../contents/Feature5'));

function Feature() {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
  useEffect(() => {
    let panels = gsap.utils.toArray('.panel');

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
    panels.forEach((panel, i) => {
      ScrollTrigger.create({
        trigger: panel as HTMLElement,
        start: 'top bottom',
        end: 'top top',
        snap: 1,
        // onToggle: (self) => self.isActive && !scrollTween && goToSection(i),
        // markers: {
        //   startColor: 'black',
        //   endColor: 'yellow',
        //   fontSize: '18px',
        //   indent: 20,
        // },
      });
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
    <div className="main-container relative">
      <div className="panel center-container1 ">
        <Feature1 />
      </div>
      <div className="panel center-container2 ">
        <Feature2 />
      </div>
      <div className="panel center-container3">
        <Feature3 />
      </div>
      <div className="panel center-container4">
        <Feature4 />
      </div>
      <div className="panel center-container5">
        <Feature5 />
      </div>
    </div>
  );
}

export default Feature;
