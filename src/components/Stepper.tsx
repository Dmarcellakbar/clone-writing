import React from 'react';

export default function Stepper({ child1, child2, child3 }: any) {
  return (
    <>
      <ul
        data-te-stepper-init
        className="relative m-0 flex list-none justify-between overflow-hidden p-0 transition-[height] duration-200 ease-in-out"
      >
        {child1}

        {/* <!--Second item--> */}
        {child2}

        {/* <!--Third item--> */}
        {child3}
      </ul>
    </>
  );
}
