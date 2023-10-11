import dynamic from 'next/dynamic';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
// import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';
// import { useEffect } from 'react';

const Feature1 = dynamic(() => import('../contents/Feature1'));
const Feature2 = dynamic(() => import('../contents/Feature2'));
const Feature3 = dynamic(() => import('../contents/Feature3'));
const Feature4 = dynamic(() => import('../contents/Feature4'));
const Feature5 = dynamic(() => import('../contents/Feature5'));

function Feature() {
  return (
    <>
      <Feature1 />
      <Feature2 />
      <Feature3 />
      <Feature4 />
      <Feature5 />
    </>
  );
}

export default Feature;
