import type { NextPage } from 'next';
import { Element } from 'react-scroll';
import Head from 'next/head';
import React, { lazy, Suspense } from 'react';
import Loading from '@/components/Loading';
import dynamic from 'next/dynamic';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';
import { useEffect } from 'react';

const Navbar = dynamic(() => import('@/components/Navbar'));
const Hero = dynamic(() => import('@/components/section/Hero'));
const Pricing = dynamic(() => import('@/components/section/Pricing'));
const Write = dynamic(() => import('@/components/section/Writing'));
const Faq = dynamic(() => import('@/components/section/Faq'));
const Footer = dynamic(() => import('@/components/Footer'));
const Features = dynamic(() => import('@/components/section/Features'));

const Feature1 = dynamic(() => import('@/components/contents/Feature1'));
const Feature2 = dynamic(() => import('@/components/contents/Feature2'));
const Feature3 = dynamic(() => import('@/components/contents/Feature3'));
const Feature4 = dynamic(() => import('@/components/contents/Feature4'));
const Feature5 = dynamic(() => import('@/components/contents/Feature5'));

import Foo from '../components/section/Try';

// import Tawk from '@/components/TawkToChat';
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Writing Hero</title>
      </Head>

      <div className="bg-gray-50">
        <Suspense fallback={<Loading />}>
          {/* <Tawk /> */}
          <Navbar
            link1="Features"
            link1To="section2"
            link2="Pricing"
            link2To="section3"
            link3="FAQs"
            link3To="section4"
            link4={'Contact'}
            link4To={'/contact'}
            link5={'Log in'}
            link5To={'/account/login'}
            link6={'Sign up'}
            link6To={'/account/signup'}
          />
          <Element className="element" name="section1">
            <Hero />
          </Element>
          {/* <Foo /> */}
          <Element className="element" name="section2">
            <Features />
            {/* <div className="panel"> */}
            {/* <Feature1 /> */}
            {/* </div> */}
            {/* <div className="panel"> */}
            {/* <Feature2 /> */}
            {/* </div> */}
            {/* <div className="panel"> */}
            {/* <Feature3 /> */}
            {/* </div> */}
            {/* <div className="panel"> */}
            {/* <Feature4 /> */}
            {/* </div> */}
            {/* <div className="panel"> */}
            {/* <Feature5 /> */}
            {/* </div> */}
          </Element>
          <Element className="element" name="section3">
            <Pricing />
          </Element>
          <Write />
          <Element className="element" name="section4">
            <Faq />
          </Element>
          <Footer />
        </Suspense>
      </div>
    </>
  );
};

export default Home;
