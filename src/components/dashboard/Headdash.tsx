import React from 'react';
import Maindash from './Maindash';

export default function Headdash() {
  return (
    <>
      <nav className="header print:hidden w-full" style={{ zoom: '0.7' }}>
        <div className="header-container relative flex w-full bg-slate-100">
          <div className="flex w-full items-start justify-between py-4 text-left">
            <div className="flex gap-5 pl-4">
              <div className="flex flex-col">
                <h1 className="flex gap-x-3 text-base font-medium text-gray-900">
                  AI Tools
                </h1>
                <p className="text-xs text-gray-700">
                  Harness the power of technology through 100+ AI tools designed
                  to make your writing tasks a breeze.
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <Maindash />
    </>
  );
}
