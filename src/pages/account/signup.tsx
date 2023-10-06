/* eslint-disable @next/next/no-html-link-for-pages */
import Image from 'next/image';
import { ErrorPop } from '@/components/Error';

import React, { useEffect, useState } from 'react';
import { Stepper1, Stepper2 } from '@/components/Stepper';
import { AlertSuccess, AlertDanger } from '@/components/Alert';
import { Signupfaq1, Signupfaq2 } from '@/components/signupfaq';

interface SignupForm {
  Firstname: string;
  Lastname: string;
  Email: string;
  Token: string;
  Session: string;
  Verification: string;
}

interface SignupResponse {
  status: boolean;
  message: string;
  session: string;
  verification: string;
  failedReason: SignupFailedReason;
}

interface TokenSignupResponse {
  // Status: boolean;
  // Message: string;
  status: boolean;
  message: string;
}

enum SignupFailedReason {
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

const SignupFormPage = (): JSX.Element => {
  const [signupForm, setSignupForm] = useState<SignupForm>({
    Firstname: '',
    Lastname: '',
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
  const [validateRegister, setValidateRegister] = useState(false);

  // resend pin
  const [resendingPin, setResendingPin] = useState(false);
  const [resendingPinAlert, setResendingPinAlert] = useState(false);

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
      setResendingPinAlert(!resendingPinAlert);
    }
  }, [resendPinCountdown, resendPinCountdownActive, resendingPinAlert]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (magicTimerBlocked || currentStep === 1) {
        return;
      }

      //   magicPost(
      //     signupForm,
      //     `${process.env.NEXT_PUBLIC_BASE_URL}/account/validatemagiclogin`
      //   ).then((data) => {
      //     if (data === true) {
      //       window.location.href = `${process.env.NEXT_PUBLIC_BASE_URL}/customer`;
      //     }
      //   });

      setMagicTimerBlocked(true);

      setTimeout(() => {
        setMagicTimerBlocked(false);
      }, 1000);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [signupForm, currentStep, magicTimerBlocked]);

  const validateForm = () => {
    setErrors({});

    if (
      !signupForm.Firstname ||
      !signupForm.Firstname.match(/^[A-Za-z0-9\s]+$/)
    ) {
      setErrors((prevErrors: { [key: string]: string }) => ({
        ...prevErrors,
        firstname: 'Please enter a valid Firstname',
      }));
    }

    if (
      !signupForm.Lastname ||
      !signupForm.Lastname.match(/^[A-Za-z0-9\s]+$/)
    ) {
      setErrors((prevErrors: { [key: string]: string }) => ({
        ...prevErrors,
        lastname: 'Please enter a valid Lastname',
      }));
    }

    if (
      !signupForm.Email ||
      !signupForm.Email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
    ) {
      setErrors((prevErrors: { [key: string]: string }) => ({
        ...prevErrors,
        email: 'Please enter a valid E-Mail',
      }));
    }
    return Object.keys(errors).length === 0;
  };

  // e: React.FormEvent<HTMLFormElement>
  const emailSignup = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateForm()) {
      jsonPost<SignupResponse>(
        signupForm,
        `${process.env.NEXT_PUBLIC_BASE_URL}/account/emailregister`
      ).then((data) => {
        if (data.message === '') {
          setCurrentStep(2);
          setSignupForm((prevSignupForm) => ({
            ...prevSignupForm,
            message: data.message,
          }));

          // setResendPinCountdownActive(false);
          setValidateRegister(false);
        } else {
          setValidateRegister(true);
          // window.location.href = `${process.env.NEXT_PUBLIC_BASE_URL}/account/signup`;
        }
      });
    }
    // startMagicTimer();
  };

  const tokenSignup = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    jsonPost<TokenSignupResponse>(
      signupForm,
      `${process.env.NEXT_PUBLIC_BASE_URL}/account/tokenlogin`
    ).then((data) => {
      if (data.status === true) {
        window.location.href = `${process.env.NEXT_PUBLIC_BASE_URL}/account/package`;
      } else {
        setHasError(true);
        setErrorMessage(data.message);
      }
    });
  };

  const resetSignup = () => {
    setCurrentStep(1);
    setSignupForm({
      Firstname: '',
      Lastname: '',
      Email: '',
      Token: '',
      Session: '',
      Verification: '',
    });
    setHasError(false);
    setHasInfoMessage(false);
    setResendPinCountdownActive(false);
    setResendPinCountdown(60);
    setResendingPinAlert(!resendingPinAlert);
  };

  const resendPin = () => {
    setResendingPin(true);
    setResendingPinAlert(resendingPinAlert);
    jsonPost<SignupResponse>(
      signupForm,
      `${process.env.NEXT_PUBLIC_BASE_URL}/account/resendregistrationpin`
    ).then((data) => {
      setResendingPinAlert(!resendingPinAlert);
      setResendingPin(false);
      setResendPinCountdownActive(true);
      setSignupForm((prevSignupForm) => ({
        ...prevSignupForm,
      }));
    });
  };

  return (
    <div className="h-full min-h-screen flex bg-white">
      <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24 max-w-screen-md">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          {/* <!--Logo--> */}
          <Writingherologo />

          {/* STARTS STEP 1 */}
          {currentStep === 1 && (
            <>
              <div className="mt-4 mb-8 max-w-lg">
                <Stepper1 />
              </div>
              <div className="mb-6">
                <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
                  Please enter your E-mail
                </h2>
                <p className="mt-2 text-sm text-gray-600">
                  Or
                  <a
                    href="/account/login"
                    className="font-medium pl-1 text-indigo-600 hover:text-indigo-500"
                  >
                    sign in
                  </a>
                </p>
              </div>
              {validateRegister ? (
                <AlertDanger childern="User already registered." />
              ) : (
                <></>
              )}

              <div className="mt-8">
                <div className="mt-6">
                  <form onSubmit={emailSignup} className="space-y-6">
                    <div className="flex flex-wrap -mx-3 mb-6">
                      {/* First Name */}
                      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label
                          htmlFor="firstname"
                          className="block text-sm font-medium text-gray-700"
                        >
                          First name
                        </label>
                        <div className="mt-1 relative">
                          <input
                            type="text"
                            name="firstname"
                            autoComplete="firstname"
                            value={signupForm.Firstname}
                            onChange={(evt) =>
                              setSignupForm((prevSignupForm) => ({
                                ...prevSignupForm,
                                Firstname: evt.target.value,
                              }))
                            }
                            className="appearance-none text-black block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          />
                          {errors.firstname && (
                            <ErrorPop message={errors.firstname} />
                          )}
                        </div>
                      </div>
                      {/* Last Name */}
                      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label
                          htmlFor="lastname"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Last name
                        </label>
                        <div className="mt-1 relative">
                          <input
                            type="text"
                            name="lastname"
                            autoComplete="lastname"
                            value={signupForm.Lastname}
                            onChange={(evt) =>
                              setSignupForm((prevSignupForm) => ({
                                ...prevSignupForm,
                                Lastname: evt.target.value,
                              }))
                            }
                            className="appearance-none text-black block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          />
                          {errors.lastname && (
                            <ErrorPop message={errors.lastname} />
                          )}
                        </div>
                      </div>
                    </div>
                    {/* Email */}
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
                          value={signupForm.Email}
                          onChange={(evt) =>
                            setSignupForm((prevSignupForm) => ({
                              ...prevSignupForm,
                              Email: evt.target.value,
                            }))
                          }
                          className="appearance-none text-black block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                        {errors.email && <ErrorPop message={errors.email} />}
                      </div>
                    </div>

                    <p className="text-gray-500 text-sm">
                      By creating your account, you agree to the{' '}
                      <a href="/Terms-of-service" className="text-blue-600">
                        Terms of Service
                      </a>{' '}
                      and{' '}
                      <a href="/Privacy-policy" className="text-blue-600">
                        Privacy Policy
                      </a>
                      .
                    </p>

                    <div>
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
              </div>
            </>
          )}
          {/* ENDS STEP 1 */}

          {/* STARTS STEP 2 */}
          {currentStep === 2 && (
            <>
              <div className="mt-4 mb-8 max-w-lg">
                <Stepper2 />
              </div>
              <div>
                <h2 className="mt-6 mb-6 text-3xl font-extrabold text-gray-900">
                  Confirm your E-Mail
                </h2>
              </div>
              {resendingPinAlert && (
                <AlertSuccess childern="Email has been re-sent with the pincode to verify your email." />
              )}
              {!resendingPinAlert && (
                <AlertSuccess childern="Email has been sent with the pincode to verify your email." />
              )}
              <div className="items-center justify-center">
                <div className="flex items-center justify-between mb-6">
                  <button
                    onClick={resetSignup}
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

                <form onSubmit={tokenSignup}>
                  <div className="mb-4">
                    <div className="flex flex-wrap -mx-3 mb-2">
                      <div className="w-full md:w-1/2 px-3 mb-2 md:mb-0">
                        <label
                          className="block  tracking-wide text-gray-700 text-sm font-bold mb-2"
                          htmlFor="grid-first-name"
                        >
                          First name
                        </label>
                        <span className="appearance-none text-black block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 bg-slate-200 focus:outline-none focus:ring-0 sm:text-sm">
                          {signupForm.Firstname}
                        </span>
                      </div>
                      <div className="w-full md:w-1/2 px-3">
                        <label
                          className="block  tracking-wide text-gray-700 text-sm font-bold mb-2"
                          htmlFor="grid-last-name"
                        >
                          Last name
                        </label>
                        <span className="appearance-none text-black block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 bg-slate-200 focus:outline-none focus:ring-0 sm:text-sm">
                          {signupForm.Lastname}
                        </span>
                      </div>
                    </div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email address
                    </label>
                    <div className="mt-1 mb-2">
                      <span className="appearance-none text-black block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 bg-slate-200 focus:outline-none focus:ring-0 sm:text-sm">
                        {signupForm.Email}
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
                        value={signupForm.Token}
                        onChange={(evt) =>
                          setSignupForm((prevSignupForm) => ({
                            ...prevSignupForm,
                            Token: evt.target.value,
                          }))
                        }
                        className="appearance-none text-black block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
            </>
          )}
          {/* ENDS STEP 2 */}
        </div>
      </div>

      {/* STARTS Blue Background Image */}
      <div className="hidden lg:block relative w-0 flex-1">
        {currentStep === 1 && <Signupfaq1 />}
        {currentStep === 2 && <Signupfaq2 />}
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

export default SignupFormPage;

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
