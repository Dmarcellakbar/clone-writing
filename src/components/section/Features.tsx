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
    let panels = gsap.utils.toArray('.panel'),
      observer = ScrollTrigger.normalizeScroll(true),
      scrollTween: any;

    document.addEventListener(
      'touchstart',
      (e) => {
        if (scrollTween) {
          e.preventDefault();
          e.stopImmediatePropagation();
        }
      },
      { capture: true, passive: false }
    );
    function goToSection(i: any) {
      scrollTween = gsap.to(window, {
        scrollTo: { y: i * innerHeight, autoKill: false },
        onStart: () => {
          observer?.disable();
          observer?.enable();
        },
        duration: 2,
        onComplete: () => (scrollTween = null),
        overwrite: true,
      });
    }
    panels.forEach((panel, i) => {
      ScrollTrigger.create({
        trigger: panel as HTMLElement,
        start: 'top bottom',
        end: 'top top',
        snap: 1,
        // onToggle: (self) => self.isActive && !scrollTween && goToSection(i),
        // markers: true,
      });
    });
    // ScrollTrigger.create({
    //   start: '=+19%',
    //   end: 'bottom',
    //   snap: 1,
    //   markers: true,
    // });
  });
  return (
    <div className="relative w-full h-110vh">
      <div className="panel ">
        <Feature1 />
      </div>
      <div className="panel">
        <Feature2 />
      </div>
      <div className="panel">
        <Feature3 />
      </div>
      <div className="panel">
        <Feature4 />
      </div>
      <div className="panel">
        <Feature5 />
      </div>
    </div>
  );
}

export default Feature;
