import React from 'react';

export const AlertSuccess = ({ childern }: any) => {
  return (
    <>
      <div
        className="flex items-start p-4 mb-4  bg-blue-50 rounded-lg"
        role="alert"
      >
        <div className="text-indigo-400 mt-1 mr-4">
          <span className="mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </div>
        <div>
          <span className="text-sm font-bold text-indigo-800">Email Sent!</span>
          <br />
          <span className="mt-2 text-sm font-normal text-indigo-800">
            {childern}
          </span>
        </div>
      </div>
    </>
  );
};

export const AlertWarning = () => {
  return (
    <>
      <div
        className="flex items-center p-4 mb-4 text-yellow-800 bg-yellow-50 rounded-lg"
        role="alert"
      >
        <span className="mr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
              clipRule="evenodd"
            />
          </svg>
        </span>
        Email Sent!
      </div>
    </>
  );
};

export const AlertDanger = ({ childern }: any) => {
  return (
    <>
      <div
        className="flex items-start p-4 mb-4 text-red-400 bg-red-50 rounded-lg"
        role="alert"
      >
        <span className="mr-2 mt-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z"
              clipRule="evenodd"
            ></path>
          </svg>
        </span>
        <div className="text-sm font-bold text-red-800">
          There was 1 error(s) with your submission
          <br />
          <li className="mt-2 text-sm font-normal text-red-800">{childern}</li>
        </div>
      </div>
    </>
  );
};
