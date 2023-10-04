import React from 'react';
import Maintopdash from './Maintopdash';
import Maincarddash from './Maincarddash';

export default function Maindash() {
  return (
    <>
      <main className="main-content " style={{ zoom: '0.7' }}>
        <div className="overflow-y-scroll h-[38rem] bg-slate-50">
          <Maintopdash />
          <Maincarddash />
        </div>
      </main>
    </>
  );
}
