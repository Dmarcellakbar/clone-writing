import dynamic from 'next/dynamic';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';
import { useEffect } from 'react';
import { Link } from 'react-scroll';

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
  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const btns = document.getElementsByClassName('btn');
    for (let i = 0; i < btns.length; i++) {
      btns[i].classList.remove('active');
    }
    event.currentTarget.classList.add('active');
  };
  return (
    <div className="main-container relative bg-green-300">
      <div className="section-menu fixed w-full left-3 top-60 z-[3]">
        <ol className="space-y-3">
          <li>
            <Link to="feature1" smooth={true}>
              <button
                onClick={handleButtonClick}
                className="flex w-3.5 h-3.5 p-1 btn active text-transparent rounded-full border-2 border-white"
              ></button>
            </Link>
          </li>
          <li>
            <Link to="feature2" smooth={true}>
              <button
                onClick={handleButtonClick}
                className="flex w-3.5 h-3.5 p-1 btn text-transparent rounded-full border-2 border-white"
              ></button>
            </Link>
          </li>
          <li>
            <Link to="feature3" smooth={true}>
              <button
                onClick={handleButtonClick}
                className="flex w-3.5 h-3.5 p-1 btn text-transparent rounded-full border-2 border-white"
              ></button>
            </Link>
          </li>
          <li>
            <Link to="feature4" smooth={true}>
              <button
                onClick={handleButtonClick}
                className="flex w-3.5 h-3.5 p-1 btn text-transparent rounded-full border-2 border-white"
              ></button>
            </Link>
          </li>
          <li>
            <Link to="feature5" smooth={true}>
              <button
                onClick={handleButtonClick}
                className="flex w-3.5 h-3.5 p-1 btn text-transparent rounded-full border-2 border-white"
              ></button>
            </Link>
          </li>
        </ol>
      </div>
      <div id="feature1" className=" sticky h-[300vh] z-[2]">
        <div className="panel center-container1 absolute w-[100%]">
          <Feature1 />
        </div>
      </div>
      <div id="feature2" className=" sticky h-[300vh] z-[2]">
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
  );
}

export default Feature;
