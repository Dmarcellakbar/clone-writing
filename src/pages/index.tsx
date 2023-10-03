import type { NextPage } from 'next';
import { Element } from 'react-scroll';
import Head from 'next/head';
import React, { lazy, Suspense, useState, useRef } from 'react';
import Script from 'next/script';
import Link from 'next/link';
import Loading from '@/components/Loading';

const Navbar = lazy(() => import('../components/Navbar'));
const Hero = lazy(() => import('@/components/section/Hero'));
const Features = lazy(() => import('@/components/section/Features'));
const Pricing = lazy(() => import('@/components/section/Pricing'));
const Write = lazy(() => import('../components/Writing'));
const Faq = lazy(() => import('@/components/section/Faq'));
const Footer = lazy(() => import('../components/Footer'));

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
            link1To="#section2"
            link2="Pricing"
            link2To="#section3"
            link3="FAQs"
            link3To="#section4"
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
          <Element className="element" name="section2">
            <Features />
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
