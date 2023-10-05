import React, { lazy } from 'react';

const Feature1 = lazy(() => import('@/components/contents/Feature1'));
const Feature2 = lazy(() => import('@/components/contents/Feature2'));
const Feature3 = lazy(() => import('@/components/contents/Feature3'));
const Feature4 = lazy(() => import('@/components/contents/Feature4'));
const Feature5 = lazy(() => import('@/components/contents/Feature5'));

function Feature() {
  return (
    <div id="#section2">
      <Feature1 />
      <Feature2 />
      <Feature3 />
      <Feature4 />
      <Feature5 />
    </div>
  );
}

export default Feature;
