import type { NextPage } from 'next';
import { Element } from 'react-scroll';
import Head from 'next/head';
import React, { lazy, Suspense, useState, useRef } from 'react';
import Script from 'next/script';
import Link from 'next/link';
import Loading from '@/components/Loading';

const Navbar = lazy(() => import('../components/Navbar'));
const Hero = lazy(() => import('./Hero'));
const Features = lazy(() => import('./Features'));
const Pricing = lazy(() => import('./Pricing'));
const Write = lazy(() => import('../components/Writing'));
const Faq = lazy(() => import('./Faq'));
const Footer = lazy(() => import('../components/Footer'));

// import Tawk from '@/components/TawkToChat';
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Writing Hero</title>
        <link rel="icon" href="/robohead2.ico" />
        <meta
          name="description"
          content="Boost your writing prowess with over 100+ AI tools 
          at Writing Hero! Bid farewell to the mundane task of 
          generating content and focus on propelling your business 
          forward at lightning speed. Choose from a wide array of tools, 
          unleash your ideas, and witness the incredible content you can 
          create. Whether it&#039;s crafting flawless emails, 
          compelling ads, persuasive sales letters, or comprehensive 
          outreach responses, our tools will save you time and amplify 
          your bottom line. Experience an efficient and productive 
          writing process with Writing Hero&#039;s comprehensive suite 
          of tools, designed to help your business thrive."
        />
        <meta property="url" content="https://writinghero.ai/" />

        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:title" content="Writing Hero AI" />
        <meta
          property="og:description"
          content="Boost your writing prowess with over 100+ AI tools 
          at Writing Hero! Bid farewell to the mundane task of 
          generating content and focus on propelling your business 
          forward at lightning speed. Choose from a wide array of tools, 
          unleash your ideas, and witness the incredible content you can 
          create. Whether it&#039;s crafting flawless emails, 
          compelling ads, persuasive sales letters, or comprehensive 
          outreach responses, our tools will save you time and amplify 
          your bottom line. Experience an efficient and productive 
          writing process with Writing Hero&#039;s comprehensive suite 
          of tools, designed to help your business thrive."
        />
        <meta property="og:image" content="/robohead2.png" />
        <meta
          property="og:url"
          content="https://www.facebook.com/WritingHeroAI/"
        />
        <meta property="og:type" content="website" />
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
