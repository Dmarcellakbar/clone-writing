import React from 'react';
import Sidedash from './Sidedash';
import Headdash from './Headdash';

export default function DashScroll() {
  return (
    <>
      <div
        id="headerdemo"
        className="relative overflow-hidden flex grow h-full w-full  p-1 rounded-lg bg-slate-100 shadow-lg is-sidebar-open"
      >
        <Sidedash />

        <div className="w-full">
          <Headdash />
        </div>
      </div>
    </>
  );
}
