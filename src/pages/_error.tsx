import React, { lazy } from 'react';
import Error404 from '@/components/404';
const Navbar = lazy(() => import('../components/Navbar'));
const Footer = lazy(() => import('../components/Footer'));
export default function _error() {
  return (
    <>
      <div className="bg-white">
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
        <Error404 />
        <Footer />
      </div>
    </>
  );
}
