import dynamic from 'next/dynamic';

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
