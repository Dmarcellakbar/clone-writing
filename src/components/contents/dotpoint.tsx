import React from 'react';
import { Link } from 'react-scroll';

const Dotpoint = ({ active1, active2, active3, active4, active5 }: any) => {
  return (
    <>
      <ol className="space-y-3">
        <li>
          <Link to="feature1" smooth={true}>
            <div
              className={`flex w-2.5 h-2.5 p-1 btn ${active1} text-transparent rounded-full border-2 border-white`}
            ></div>
          </Link>
        </li>
        <li>
          <Link to="feature2" smooth={true}>
            <div
              className={`flex w-2.5 h-2.5 p-1 btn ${active2} text-transparent rounded-full border-2 border-white`}
            ></div>
          </Link>
        </li>
        <li>
          <Link to="feature3" smooth={true}>
            <div
              className={`flex w-2.5 h-2.5 p-1 btn ${active3} text-transparent rounded-full border-2 border-white`}
            ></div>
          </Link>
        </li>
        <li>
          <Link to="feature4" smooth={true}>
            <div
              className={`flex w-2.5 h-2.5 p-1 btn ${active4} text-transparent rounded-full border-2 border-white`}
            ></div>
          </Link>
        </li>
        <li>
          <Link to="feature5" smooth={true}>
            <div
              className={`flex w-2.5 h-2.5 p-1 btn ${active5} text-transparent rounded-full border-2 border-white`}
            ></div>
          </Link>
        </li>
      </ol>
    </>
  );
};

export default Dotpoint;
