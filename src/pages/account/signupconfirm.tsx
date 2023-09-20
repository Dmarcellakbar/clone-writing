import Stepper from '@/components/Stepper';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { AlertDanger, AlertSuccess, AlertWarning } from '@/components/Alert';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

export default function Signup() {
  const router = useRouter();
  const handletryemail = () => {
    router.push('/account/signup');
  };

  const [user, setUser] = useState({
    firstname: '',
    lastname: '',
    email: '',
  });

  useEffect(() => {
    // Ambil data pengguna dari cookie
    const userData = Cookies.get('user');
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  return (
    <>
      <section>
        <div className=" flex flex-wrap items-center justify-center text-neutral-800 ">
          <div>
            <div className="h-auto block rounded-lg bg-white shadow-lg dark:bg-neutral-800 ">
              <div className="g-0 lg:flex lg:flex-wrap">
                {/* <!-- Left column container--> */}
                <div className="h-[100vh] px-4 md:px-0 lg:w-6/12">
                  <div className="md:mx-6 md:p-12 ">
                    {/* <!--Logo--> */}
                    <div className="text-center max-w-lg">
                      <div className="font-bold text-3xl text-purple-600">
                        WritingHero.
                      </div>
                    </div>
                    <div className="mt-4 mb-8 max-w-lg">
                      <Stepper
                        child1={
                          <li className="flex w-full items-center  after:content-[''] after:w-full after:h-1  after:border-indigo-600 after:border-2 after:inline-block ">
                            <span className="flex items-center justify-center w-6 h-6 bg-indigo-600 border-2 border-indigo-600 rounded-full lg:h-6 lg:w-6  shrink-0">
                              <svg
                                className="h-5 w-5 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                  clip-rule="evenodd"
                                ></path>
                              </svg>
                            </span>
                          </li>
                        }
                        child2={
                          <li className="flex w-full items-center  after:content-[''] after:w-full after:h-1  after:border-gray-300 after:border-2 after:inline-block ">
                            <span className="flex items-center justify-center w-6 h-6 bg-white border-2 border-indigo-600 rounded-full lg:h-6 lg:w-6  shrink-0">
                              <span
                                className="h-2.5 w-2.5 rounded-full bg-indigo-600"
                                aria-hidden="true"
                              ></span>
                            </span>
                          </li>
                        }
                        child3={
                          <li
                            data-te-stepper-step-ref
                            className="w-[4.5rem] flex-auto"
                          >
                            <span className="flex items-center justify-center w-6 h-6 bg-white border-2 border-gray-300 rounded-full lg:h-6 lg:w-6  shrink-0"></span>
                          </li>
                        }
                      />
                    </div>
                    <div className="text-left max-w-lg">
                      <div className="font-extrabold text-3xl text-black">
                        Confirm your E-Mail
                      </div>
                    </div>

                    {/* <AlertSuccess /> */}

                    <div className="mt-6 max-w-lg flex items-center justify-between">
                      <button
                        className="flex gap-2 items-center text-sm shadow w-fit bg-white text-indigo-700 font-semibold hover:bg-cyan-50  py-2 px-4 rounded border border-gray-300"
                        type="button"
                        onClick={handletryemail}
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
                          ></path>
                        </svg>
                        Try another Email
                      </button>

                      <button
                        className="flex gap-2 items-center text-sm shadow w-fit bg-white text-indigo-700 font-semibold hover:bg-cyan-50  py-2 px-4 rounded border border-gray-300"
                        type="button"
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
                            d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                          ></path>
                        </svg>
                        Resend pin
                      </button>
                    </div>

                    <form className="w-full max-w-lg mt-6">
                      <div className="flex flex-wrap -mx-3 mb-2">
                        <div className="w-full md:w-1/2 px-3 mb-2 md:mb-0">
                          <label
                            className="block  tracking-wide text-gray-700 text-sm font-bold mb-2"
                            htmlFor="grid-first-name"
                          >
                            First name
                          </label>
                          <span className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 bg-slate-200 focus:outline-none focus:ring-0 sm:text-sm">
                            {user?.firstname}
                          </span>
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                          <label
                            className="block  tracking-wide text-gray-700 text-sm font-bold mb-2"
                            htmlFor="grid-last-name"
                          >
                            Last name
                          </label>
                          <span className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 bg-slate-200 focus:outline-none focus:ring-0 sm:text-sm">
                            {user?.lastname}
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-wrap -mx-3 mb-2">
                        <div className="w-full px-3">
                          <label
                            className="block  tracking-wide text-gray-700 text-sm font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Email address
                          </label>
                          <span className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 bg-slate-200 focus:outline-none focus:ring-0 sm:text-sm">
                            {user?.email}
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                          <label
                            className="block  tracking-wide text-gray-700 text-sm font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Verification Pin
                          </label>
                          <input
                            className="bg-white appearance-none border-2 border-gray-300 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-500"
                            id="grid-password"
                            type="email"
                          />
                        </div>
                      </div>
                      <div className="mt-6">
                        <Link href={'/account/package'}>
                          <button
                            className="shadow w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                            type="button"
                          >
                            Continue
                          </button>
                        </Link>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="relative h-auto flex items-center lg:w-6/12 ">
                  <div className="relative z-10 px-4 py-6 text-white md:mx-6 md:p-4">
                    <h4 className="mb-6 text-3xl font-bold">
                      Frequently asked questions
                    </h4>
                    <p className="text-sm">
                      Have a different question and can’t find the answer you’re
                      looking for? Reach out to our support team and we’ll get
                      back to you as soon as we can.
                    </p>
                    {/* <div className="pt-8 space-y-4 ">
            <details className="w-full bg-transparent border-b-2 border-gray-300  ">
              <summary className=" pb-8 list-none text-md font-semibold cursor-pointer w-full flex justify-between">
                Why do I need to confirm my email address?
                <span className="text-white bg-transparent rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </span>
              </summary>
              <p className=" pb-6 text-left text-md text-white">
                Confirming your email address helps ensure that you have
                provided a valid email and allows us to communicate important
                information, updates, and account-related notifications to the
                correct email address.
              </p>
            </details>

            <details className="w-full bg-transparent border-b-2 border-gray-300  ">
              <summary className=" pb-8 list-none text-md font-semibold cursor-pointer w-full flex justify-between">
                Where do I get the Verification Pin?
                <span className="text-white bg-transparent rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </span>
              </summary>
              <p className=" pb-6 text-left text-md text-white">
                It should be in your inbox now. A PIN will be sent to the email
                address you provided during sign-up. Check your email inbox,
                including the spam or junk folder, for an email from Writing
                Hero containing the PIN. Sometimes you may need to refresh your
                email inbox to see new emails quickly.
              </p>
            </details>

            <details className="w-full bg-transparent border-b-2 border-gray-300  ">
              <summary className=" pb-8 list-none text-md font-semibold cursor-pointer w-full flex justify-between">
                What should I do if I haven’t received the verification email?
                <span className="text-white bg-transparent rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </span>
              </summary>
              <p className=" pb-6 text-left text-md text-white">
                If you haven’t received the verification email, please wait for
                a few minutes and check your spam or junk folder. If you still
                haven’t received it, you can click on the ’’Resend PIN’’ button
                on this page. Sometimes emails take a bit longer to receive so
                it’s important to be patient and always check the time/date of
                the email so you always use the most recent PIN.
              </p>
            </details>

            <details className="w-full bg-transparent border-b-2 border-gray-300  ">
              <summary className=" pb-8 list-none text-md font-semibold cursor-pointer w-full flex justify-between">
                What happens if I enter the verification PIN incorrectly?
                <span className="text-white bg-transparent rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </span>
              </summary>
              <p className=" pb-6 text-left text-md text-white">
                If you enter the verification PIN incorrectly, you will receive
                an error message. Double-check the PIN you received in your
                email and ensure you enter it accurately in the Verification Pin
                field. Sometimes it’s better to type the pin in manually rather
                than copying and pasting it.
              </p>
            </details>

            <details className="w-full bg-transparent border-b-2 border-gray-300  ">
              <summary className=" pb-8 list-none text-md font-semibold cursor-pointer w-full flex justify-between">
                Can I change my email address after confirming it?
                <span className="text-white bg-transparent rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </span>
              </summary>
              <p className=" pb-6 text-left text-md text-white">
                Yes, you can change your email address in your account settings
                after confirming it. Please reach out to our support staff to
                request an email update.
              </p>
            </details>

            <details className="w-full bg-transparent border-b-2 border-gray-300  ">
              <summary className=" pb-8 list-none text-md font-semibold cursor-pointer w-full flex justify-between">
                What should I do if I encounter technical issues during the
                email verification process?
                <span className="text-white bg-transparent rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </span>
              </summary>
              <p className=" pb-6 text-left text-md text-white">
                If you encounter any technical issues during the email
                verification process, please reach out to our support team for
                assistance. They will be able to guide you through the
                verification process or address any technical difficulties you
                may be experiencing.
              </p>
            </details>
          </div> */}
                  </div>
                  <Image
                    src={'/bglog.jpg'}
                    alt={''}
                    width={100}
                    height={100}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
