import Stepper from '@/components/Stepper';
import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import { Error } from '@/components/Error';

export default function Signup() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    token: '',
    trackingId: null,
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};

    const nameRegex = /^[A-Za-z\s]+$/; // Hanya huruf dan spasi diizinkan

    if (!formData.firstname.trim()) {
      newErrors.firstname = 'First name is required';
    } else if (!nameRegex.test(formData.firstname)) {
      newErrors.firstname = 'Invalid characters in first name';
    }

    if (!formData.lastname.trim()) {
      newErrors.lastname = 'Last name is required';
    } else if (!nameRegex.test(formData.lastname)) {
      newErrors.lastname = 'Invalid characters in last name';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = 'Invalid email address';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const response = await fetch('/api/emailregister', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          alert('Registrasi success!');
          const data = await response.json();
          Cookies.set('user', JSON.stringify(data));
          router.push('/account/signupconfirm');
        } else {
          alert('Registrasi failed.');
        }
      } catch (error) {
        console.error('Terjadi kesalahan:', error);
      }
    }
  };

  return (
    <>
      <section>
        <div className=" flex flex-wrap items-center justify-center text-neutral-800 ">
          <div>
            <div className="h-auto block  bg-white shadow-lg ">
              <div className="g-0 lg:flex lg:flex-wrap">
                <div className="h-[100vh] px-4 md:px-0 lg:w-6/12">
                  <div className="md:mx-6 md:p-12">
                    {/* <!--Logo--> */}
                    <div className="text-center max-w-lg">
                      <div className="font-bold text-3xl text-purple-600">
                        WritingHero.
                      </div>
                    </div>
                    <div className="mt-4 mb-8 max-w-lg">
                      <Stepper
                        child1={
                          <li className="flex w-full items-center  after:content-[''] after:w-full after:h-1  after:border-gray-300 after:border-2 after:inline-block ">
                            <span className="flex items-center justify-center w-6 h-6 bg-white border-2 border-indigo-600 rounded-full lg:h-6 lg:w-6  shrink-0">
                              <span
                                className="h-2.5 w-2.5 rounded-full bg-indigo-600"
                                aria-hidden="true"
                              ></span>
                            </span>
                          </li>
                        }
                        child2={
                          <li className="flex w-full items-center after:content-[''] after:w-full after:h-1  after:border-gray-300 after:border-2 after:inline-block ">
                            <span className="flex items-center justify-center w-6 h-6 bg-white border-2 border-gray-300 rounded-full lg:h-6 lg:w-6  shrink-0"></span>
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
                    <div className="text-left">
                      <div className="font-extrabold text-3xl text-black">
                        Please enter your E-mail
                      </div>
                      <div className=" text-md text-black">
                        Or{' '}
                        <a href="#" className="text-indigo-600">
                          sign in
                        </a>
                      </div>
                    </div>

                    <form
                      className="w-full max-w-lg mt-6"
                      onSubmit={handleSubmit}
                    >
                      <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                          <label
                            className="block  tracking-wide text-gray-700 text-sm font-bold mb-2"
                            htmlFor="grid-first-name"
                          >
                            First name
                          </label>
                          <input
                            name="firstname"
                            className="bg-white appearance-none border-2 border-gray-300 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-500"
                            value={formData.firstname}
                            onChange={handleChange}
                            required
                          />
                          {errors.firstname && (
                            <Error message={errors.firstname} />
                          )}
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                          <label
                            className="block  tracking-wide text-gray-700 text-sm font-bold mb-2"
                            htmlFor="grid-last-name"
                          >
                            Last name
                          </label>
                          <input
                            name="lastname"
                            className="bg-white appearance-none border-2 border-gray-300 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-500"
                            value={formData.lastname}
                            onChange={handleChange}
                            required
                          />
                          {errors.lastname && (
                            <Error message={errors.lastname} />
                          )}
                        </div>
                      </div>
                      <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                          <label
                            className="block  tracking-wide text-gray-700 text-sm font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Email address
                          </label>
                          <input
                            name="email"
                            className="bg-white appearance-none border-2 border-gray-300 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-500"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                          {errors.email && <Error message={errors.email} />}
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm">
                        By creating your account, you agree to the{' '}
                        <Link
                          href="/Terms-of-service"
                          className="text-indigo-600"
                        >
                          Terms of Service
                        </Link>{' '}
                        and{' '}
                        <Link
                          href="/Privacy-policy"
                          className="text-indigo-600"
                        >
                          Privacy Policy.
                        </Link>
                      </p>

                      <div className="mt-6">
                        <button
                          className="shadow w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-semibold py-2 px-4 rounded"
                          type="submit"
                          // onClick={onNext}
                        >
                          Continue
                        </button>
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
                    <div className="pt-8 space-y-4 ">
                      <details className="w-full bg-transparent border-b-2 border-gray-300  ">
                        <summary className=" pb-8 list-none text-md font-semibold cursor-pointer w-full flex justify-between">
                          Why do I need to provide my first name, last name, and
                          email?
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
                          We ask for your first name, last name, and email to
                          create a personalized user account for you and to
                          communicate important updates, account-related
                          information, and promotional offers.
                        </p>
                      </details>

                      <details className="w-full bg-transparent border-b-2 border-gray-300  ">
                        <summary className=" pb-8 list-none text-md font-semibold cursor-pointer w-full flex justify-between">
                          Is my personal information safe and secure?
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
                          Yes, we prioritize the security and privacy of your
                          personal information. We implement industry-standard
                          security measures to safeguard your data and ensure it
                          is protected. You can view our Privacy Policy.
                        </p>
                      </details>

                      <details className="w-full bg-transparent border-b-2 border-gray-300  ">
                        <summary className=" pb-8 list-none text-md font-semibold cursor-pointer w-full flex justify-between">
                          Will I receive unwanted emails or spam after signing
                          up?
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
                          No, we respect your inbox. We will only send you
                          relevant emails related to your account, service
                          updates, and occasional promotional offers. You can
                          easily manage your email preferences in your account
                          settings or at the bottom of every email.
                        </p>
                      </details>

                      <details className="w-full bg-transparent border-b-2 border-gray-300  ">
                        <summary className=" pb-8 list-none text-md font-semibold cursor-pointer w-full flex justify-between">
                          Can I use the same email address for multiple users?
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
                          Each user account requires a unique email address. If
                          you wish to create multiple accounts or add team
                          members, you can create a team within the settings
                          page of your account.
                        </p>
                      </details>

                      <details className="w-full bg-transparent border-b-2 border-gray-300  ">
                        <summary className=" pb-8 list-none text-md font-semibold cursor-pointer w-full flex justify-between">
                          Can I delete my account if I no longer wish to use
                          Writing Hero?
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
                          Yes, in the unlikely event that you aren’t completely
                          in love with Writing Hero, you can request to delete
                          your account. Please reach out to our support team,
                          and they will assist you with the account deletion
                          process.
                        </p>
                      </details>
                    </div>
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
