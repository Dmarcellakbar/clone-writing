import React from 'react';
import Image from 'next/image';

export default function Loading() {
  return (
    <div
      className="bg-gray-50 absolute top-0 w-full"
      style={{ height: '100vh' }}
    >
      <div className="my-20">
        <div className=" flex justify-center align-middle ">
          <Image src={'/head.png'} alt={'load'} width={200} height={200} />
        </div>
        <div className="flex justify-center ">
          <div className="loader-line"></div>
        </div>
      </div>
    </div>
  );
}
