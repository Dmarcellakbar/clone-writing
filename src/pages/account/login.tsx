/* eslint-disable @next/next/no-html-link-for-pages */
import Image from 'next/image';
import { ErrorMessage } from '@/components/error-message';
import { InfoMessage } from '@/components/info-message';
import { ErrorPop } from '@/components/Error';

import React, { useEffect, useState } from 'react';

interface LoginForm {
  Email: string;
  Token: string;
  Session: string;
  Verification: string;
}

interface LoginResponse {
  session: string;
  verification: string;
  failedReason: LoginFailedReason;
}

interface TokenLoginResponse {
  // Status: boolean;
  // Message: string;
  status: boolean;
  message: string;
}

enum LoginFailedReason {
  None,
  NotExist,
}

async function jsonPost<T>(data: any, url: string): Promise<T> {
  try {
    const rawResponse = await fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!rawResponse.ok) {
      throw new Error(`HTTP error! Status: ${rawResponse.status}`);
    }

    const content = await rawResponse.json();
    return content as T;
  } catch (error) {
    console.error('Error in API request:', error);
    throw error;
  }
}

// TODOS: fix TS
async function magicPost(data: any, url: string): Promise<boolean> {
  const rawResponse = await fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  const content = await rawResponse.json();
  return content as boolean;
}

const LoginFormPage = (): JSX.Element => {
  const [loginForm, setLoginForm] = useState<LoginForm>({
    Email: '',
    Token: '',
    Session: '',
    Verification: '',
  });
  // exposed to all expressions
  const [hasInfoMessage, setHasInfoMessage] = useState(false);
  const [_infoMessage, _setInfoMessage] = useState('');
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [currentStep, setCurrentStep] = useState<number>(1);

  // resend pin
  const [resendingPin, setResendingPin] = useState(false);
  const [resendPinCountdown, setResendPinCountdown] = useState<number>(60);
  const [resendPinCountdownActive, setResendPinCountdownActive] =
    useState(false);

  // magic timer
  const [_magicTimer, setMagicTimer] = useState<NodeJS.Timeout | null>(null);
  const [magicTimerBlocked, setMagicTimerBlocked] = useState(false);

  // validation errors
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (resendPinCountdown >= 0 && resendPinCountdownActive) {
      const timer = setTimeout(
        () => setResendPinCountdown((prevCountdown) => prevCountdown - 1),
        1000
      );
      // clearTimeout function
      return () => clearTimeout(timer);
    } else if (resendPinCountdown <= 0 && resendPinCountdownActive) {
      setResendPinCountdownActive(false);
      setResendPinCountdown(60);
    }
  }, [resendPinCountdown, resendPinCountdownActive]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (magicTimerBlocked || currentStep === 1) {
        return;
      }

      magicPost(
        loginForm,
        `${process.env.NEXT_PUBLIC_BASE_URL}/account/validatemagiclogin`
      ).then((data) => {
        if (data === true) {
          window.location.href = `${process.env.NEXT_PUBLIC_BASE_URL}/customer`;
        }
      });

      setMagicTimerBlocked(true);

      setTimeout(() => {
        setMagicTimerBlocked(false);
      }, 1000);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [loginForm, currentStep, magicTimerBlocked]);

  const validateEmailForm = () => {
    // const newErrors: { [key: string]: string } = {}; // Specify the type of newErrors explicitly
    setErrors({});

    if (
      !loginForm.Email ||
      !loginForm.Email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
    ) {
      setErrors((prevErrors: { [key: string]: string }) => ({
        ...prevErrors,
        email: 'Please enter a valid E-Mail',
      }));
    }
    return Object.keys(errors).length === 0;
  };

  // e: React.FormEvent<HTMLFormElement>
  const emailLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateEmailForm()) {
      jsonPost<LoginResponse>(
        loginForm,
        `${process.env.NEXT_PUBLIC_BASE_URL}/account/emaillogin`
      ).then((data) => {
        if (data.failedReason === LoginFailedReason.None) {
          setCurrentStep(2);
          setLoginForm((prevLoginForm) => ({
            ...prevLoginForm,
            Session: data.session,
            Verification: data.verification,
          }));

          // setResendPinCountdownActive(true);
        }
        if (data.failedReason === LoginFailedReason.NotExist) {
          // window.location.href = `${process.env.NEXT_PUBLIC_BASE_URL}/account/login`;
        }
      });
    }
    // startMagicTimer();
  };

  const tokenLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    jsonPost<TokenLoginResponse>(
      loginForm,
      `${process.env.NEXT_PUBLIC_BASE_URL}/account/tokenlogin`
    ).then((data) => {
      if (data.status === true) {
        window.location.href = `${process.env.NEXT_PUBLIC_BASE_URL}/customer`;
      } else {
        setHasError(true);
        setErrorMessage(data.message);
      }
    });
  };

  const resetLogin = () => {
    setCurrentStep(1);
    setLoginForm({
      Email: '',
      Token: '',
      Session: '',
      Verification: '',
    });
    setHasError(false);
    setHasInfoMessage(false);
    setResendPinCountdownActive(false);
    setResendPinCountdown(60);
  };

  const resendPin = () => {
    setResendingPin(true);

    jsonPost<LoginResponse>(
      loginForm,
      `${process.env.NEXT_PUBLIC_BASE_URL}/account/resendpin`
    ).then((data) => {
      setResendingPin(false);
      setResendPinCountdownActive(true);
      setLoginForm((prevLoginForm) => ({
        ...prevLoginForm,
        Session: data.session,
        Verification: data.verification,
      }));
    });
  };

  // const startMagicTimer = () => {
  //   const timer = setInterval(() => {
  //     if (magicTimerBlocked || currentStep === 1) {
  //       return;
  //     }

  //     magicPost(
  //       loginForm,
  //       `${process.env.NEXT_PUBLIC_BASE_URL}/account/validatemagiclogin`
  //     ).then((data) => {
  //       if (data === true) {
  //         window.location.href = `${process.env.NEXT_PUBLIC_BASE_URL}/customer`;
  //       }
  //     });

  //     // Block the timer to prevent concurrent execution
  //     setMagicTimerBlocked(true);

  //     // Unblock the timer after your logic or actions are completed
  //     setMagicTimerBlocked(false);
  //   }, 1000);

  //   setMagicTimer(timer);
  // };

  return (
    <div className="h-full min-h-screen flex bg-white">
      <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24 max-w-screen-md">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          {/* <!--Logo--> */}
          <Writingherologo />

          <div>
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
              Sign in to your account
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Or
              <a
                href="/account/signup"
                className="font-medium pl-1 text-indigo-600 hover:text-indigo-500"
              >
                create an account
              </a>
            </p>
          </div>
          {/* STARTS hasInfoMessage */}
          {hasInfoMessage && <InfoMessage />}
          {/* ENDS hasInfoMessage */}

          {/* STARTS hasError */}
          {hasError && <ErrorMessage errorMessage={errorMessage} />}
          {/* ENDS hasError */}

          {/* STARTS STEP 1 */}
          {currentStep === 1 && (
            <div className="mt-8">
              <div className="mt-6">
                <form onSubmit={emailLogin} className="space-y-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email address
                    </label>
                    <div className="mt-1 relative">
                      <input
                        type="text"
                        name="email"
                        autoComplete="email"
                        value={loginForm.Email}
                        onChange={(evt) =>
                          setLoginForm((prevLoginForm) => ({
                            ...prevLoginForm,
                            Email: evt.target.value,
                          }))
                        }
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                      {errors.email && <ErrorPop message={errors.email} />}
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="flex justify-center items-center px-3 mt-2 h-9 relative rounded group text-sm font-medium text-white w-full"
                    >
                      <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow bg-gradient-to-r from-violet-500 to-fuchsia-500 filter group-hover:from-violet-600 group-hover:to-fuchsia-600"></span>
                      <span className="z-0">Sign in</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
          {/* ENDS STEP 1 */}

          {/* STARTS STEP 2 */}
          {currentStep === 2 && (
            <div className="items-center justify-center">
              <div className="flex items-center justify-between mb-6">
                <button
                  onClick={resetLogin}
                  className="flex gap-2 items-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium shadow-sm hover:bg-gray-50 text-indigo-600 hover:text-indigo-500"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-4 h-4 text-indigo-600 mr-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                  Try another Email
                </button>

                <button
                  onClick={resendPin}
                  disabled={resendPinCountdownActive}
                  className={`flex gap-2 items-center rounded-md border border-gray-300 py-2 px-4 text-sm font-medium shadow-sm text-indigo-600 hover:text-indigo-500 ${
                    resendPinCountdownActive
                      ? 'bg-slate-200 cursor-not-allowed'
                      : 'bg-white'
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-4 h-4 text-indigo-600 mr-1"
                  >
                    <path
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                    />
                  </svg>
                  Resend pin
                  {resendingPin && (
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-indigo-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                  )}
                  {resendPinCountdownActive && (
                    <span>{resendPinCountdown}s</span>
                  )}
                </button>
              </div>

              <form onSubmit={tokenLogin}>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email address
                  </label>
                  <div className="mt-1 mb-2">
                    <span className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 bg-slate-200 focus:outline-none focus:ring-0 sm:text-sm">
                      {loginForm.Email}
                    </span>
                  </div>
                  <label
                    htmlFor="pin"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Verification Pin
                  </label>
                  <div className="mt-1 relative">
                    <input
                      type="text"
                      name="pin"
                      value={loginForm.Token}
                      onChange={(evt) =>
                        setLoginForm((prevLoginForm) => ({
                          ...prevLoginForm,
                          Token: evt.target.value,
                        }))
                      }
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div className="mb-2">
                  <button
                    type="submit"
                    className="flex justify-center items-center px-3 mt-2 h-9 relative rounded group text-sm font-medium text-white w-full"
                  >
                    <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow bg-gradient-to-r from-violet-500 to-fuchsia-500 filter group-hover:from-violet-600 group-hover:to-fuchsia-600"></span>
                    <span className="z-0">Continue</span>
                  </button>
                </div>
              </form>
            </div>
          )}
          {/* ENDS STEP 2 */}
        </div>
      </div>

      {/* STARTS Blue Background Image */}
      <div className="hidden lg:block relative w-0 flex-1">
        <Image
          src={'/bglog.jpg'}
          alt={''}
          width={100}
          height={100}
          className="absolute z-0 inset-0 w-full h-full object-cover"
        />
      </div>
      {/* ENDS Blue Background Image */}
    </div>
  );
};

export default LoginFormPage;

const Writingherologo = () => {
  return (
    <>
      <div className="flex justify-center">
        <svg
          version="1.1"
          className="fill-violet-500 h-10 mb-6 minified-hidden closed-hidden"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 211 40"
        >
          <path
            d="M17.5,30.2l-8-22.6h5.1L19.7,23l5.5-15.4h3.6l5.3,15.7l5.4-15.7h4.8l-8.1,22.6h-4l-5.3-15l-5.3,15H17.5z
	            M44.5,30.2V14.4h4.7v2.7c0.7-1.8,2.3-2.8,4.8-3l1.4-0.1l0.3,4.1L53,18.4c-2.4,0.2-3.6,1.5-3.6,3.6v8.1H44.5z M57.2,11.4V6.9h5.2
	        v4.5H57.2z M57.4,30.2V14.4h4.8v15.7H57.4z M73.4,30.5c-4.4,0-6.6-2.1-6.6-6.4v-6h-3v-3.6h3V9.8h4.8v4.6h4.6v3.6h-4.6v5.8
	        c0,0.9,0.2,1.6,0.6,2c0.4,0.4,1.1,0.7,2,0.7c0.3,0,0.6,0,0.9-0.1c0.3-0.1,0.7-0.1,1-0.3l0.7,3.5c-0.4,0.2-1,0.4-1.6,0.5
	        C74.7,30.4,74,30.5,73.4,30.5z M78.2,11.4V6.9h5.2v4.5H78.2z M78.4,30.2V14.4h4.8v15.7H78.4z M86.7,30.2V14.4h4.7v2.3
	        c0.5-0.9,1.2-1.5,2.1-2c0.9-0.4,1.9-0.7,3-0.7c1.9,0,3.2,0.5,4.2,1.6c0.9,1.1,1.4,2.7,1.4,5v9.4h-4.8v-9.2c0-1.1-0.2-1.9-0.6-2.3
	        c-0.4-0.5-1-0.7-1.8-0.7c-1,0-1.8,0.3-2.5,1c-0.6,0.6-0.9,1.5-0.9,2.6v8.8H86.7z M113.1,36.3c-1.5,0-2.9-0.2-4.3-0.5
	        c-1.3-0.3-2.4-0.8-3.4-1.5l1.3-3.3c0.9,0.5,1.8,0.9,2.9,1.2c1.1,0.3,2.1,0.4,3.1,0.4c2.7,0,4.1-1.3,4.1-3.8v-1.8
	        c-0.4,0.8-1.1,1.5-2,2c-0.9,0.5-1.9,0.7-3,0.7c-1.4,0-2.6-0.3-3.7-1c-1-0.7-1.9-1.6-2.4-2.8s-0.9-2.5-0.9-4.1c0-1.6,0.3-2.9,0.9-4.1
	        s1.4-2.1,2.4-2.7c1-0.7,2.3-1,3.7-1c1.1,0,2.1,0.2,3,0.7c0.9,0.5,1.6,1.1,2,2v-2.4h4.7v13.9c0,2.6-0.7,4.6-2.1,6
	        S115.8,36.3,113.1,36.3z M113.1,26.2c1.1,0,1.9-0.4,2.6-1.1c0.7-0.7,1-1.8,1-3.1c0-1.3-0.3-2.3-1-3.1c-0.6-0.7-1.5-1.1-2.6-1.1
	        c-1.1,0-2,0.4-2.6,1.1c-0.6,0.7-1,1.7-1,3.1c0,1.3,0.3,2.4,1,3.1C111.2,25.8,112.1,26.2,113.1,26.2z M125.3,30.2V7.6h5v9.1h10.5V7.6
	        h5v22.6h-5v-9.4h-10.5v9.4H125.3z M157.8,30.5c-1.9,0-3.5-0.3-4.8-1c-1.3-0.7-2.3-1.6-3.1-2.8c-0.7-1.2-1.1-2.7-1.1-4.4
	        c0-1.6,0.3-3,1-4.3c0.7-1.2,1.7-2.2,2.8-2.9c1.2-0.7,2.6-1.1,4.2-1.1c2.3,0,4.1,0.7,5.4,2.2c1.3,1.4,2,3.4,2,5.8v1.2h-10.9
	        c0.2,1.2,0.6,2.1,1.3,2.7c0.7,0.6,1.8,0.8,3.1,0.8c0.9,0,1.7-0.1,2.6-0.4c0.9-0.3,1.7-0.7,2.4-1.2l1.3,3.2c-0.8,0.6-1.8,1.1-2.9,1.4
	        C160.1,30.3,159,30.5,157.8,30.5z M157.1,17.3c-1,0-1.9,0.3-2.5,0.9c-0.6,0.6-1,1.5-1.2,2.6h6.9C160.3,18.5,159.2,17.3,157.1,17.3z
	            M166.9,30.2V14.4h4.7v2.7c0.7-1.8,2.3-2.8,4.8-3l1.4-0.1l0.3,4.1l-2.7,0.3c-2.4,0.2-3.6,1.5-3.6,3.6v8.1H166.9z M187.2,30.5
	        c-1.7,0-3.2-0.3-4.4-1c-1.2-0.7-2.2-1.6-2.9-2.8c-0.7-1.2-1-2.7-1-4.4c0-1.7,0.3-3.1,1-4.3c0.7-1.2,1.6-2.2,2.9-2.8
	        c1.3-0.7,2.7-1,4.4-1c1.7,0,3.1,0.3,4.4,1c1.3,0.7,2.2,1.6,2.9,2.8c0.7,1.2,1.1,2.7,1.1,4.3c0,1.7-0.4,3.1-1.1,4.4
	        c-0.7,1.2-1.7,2.2-2.9,2.8C190.3,30.2,188.8,30.5,187.2,30.5z M187.2,26.9c1,0,1.9-0.4,2.5-1.1c0.7-0.7,1-1.9,1-3.5
	        c0-1.6-0.3-2.7-1-3.4c-0.6-0.7-1.5-1.1-2.5-1.1c-1,0-1.9,0.4-2.5,1.1c-0.6,0.7-1,1.9-1,3.4c0,1.6,0.3,2.7,1,3.5
	        C185.3,26.5,186.1,26.9,187.2,26.9z M197.4,30.2V25h5.2v5.1H197.4z"
          ></path>
        </svg>
      </div>
    </>
  );
};
