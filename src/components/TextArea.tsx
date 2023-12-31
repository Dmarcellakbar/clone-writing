import React, { useState } from 'react';
import Image from 'next/image';
import ImgRobo from '@/assets/img/fullrobo.svg';

export default function TextArea() {
  const [text, setText] = useState('');
  const maxWords = 501;
  const wordsLeft = maxWords - text.trim().split(/\s+/).length;

  const handleTextAreaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const inputText = event.target.value;
    if (inputText.trim().split(/\s+/).length <= maxWords) {
      setText(inputText);
    }
  };

  return (
    <div className="relative max-w-4xl mx-auto z-10">
      <div className="px-2 lg:px-32 ">
        <div className="w-full mb-4 border border-gray-300 rounded-lg bg-gray-200 ">
          <div className="px-4 py-2 bg-white rounded-t-lg ">
            <textarea
              id="comment"
              rows={4}
              maxLength={499}
              className="w-full resize-none px-0 text-sm xl:text-base text-gray-900 bg-white  focus:outline-none"
              placeholder="Try me out! Write something..."
              onChange={handleTextAreaChange}
              required
            ></textarea>
            <p className="text-gray-400 text-xs xl:text-base mt-2 text-right">
              {wordsLeft} words left
            </p>
          </div>
          <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 items-center justify-between px-2 py-2 border-t border-gray-300">
            <label className="text-black text-xs xl:text-sm">
              What tone of voice do you want it rewritten in?
            </label>

            <div className="flex space-x-2  ">
              <button
                type="submit"
                className=" inline-flex items-center py-1 px-2 text-xs xl:text-sm font-medium text-center text-black bg-white border border-gray-300 focus:ring-4 focus:ring-blue-200  hover:bg-purple-500 hover:text-white rounded-full"
              >
                Excited &#128513;
              </button>
              <button
                type="submit"
                className="inline-flex items-center py-1 px-2 text-xs xl:text-sm font-medium text-center text-black bg-white border border-gray-300 focus:ring-4 focus:ring-blue-200  hover:bg-purple-500 hover:text-white rounded-full"
              >
                Clever &#128161;
              </button>
              <button
                type="submit"
                className="inline-flex items-center py-1 px-2 text-xs xl:text-sm font-medium text-center text-black bg-white border border-gray-300 focus:ring-4 focus:ring-blue-200  hover:bg-purple-500 hover:text-white rounded-full"
              >
                Funny &#128514;
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute w-0  lg:w-fit md:w-0 sm:w-0"
        style={{ top: '-60px', right: '0px', zIndex: 3 }}
      >
        <Image src={ImgRobo} alt={'robo'} width={160} />
      </div>
    </div>
  );
}
