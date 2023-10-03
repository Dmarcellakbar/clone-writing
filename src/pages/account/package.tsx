import Link from 'next/link';
import React, { useState } from 'react';
import Stepper from '@/components/Stepper';
import Image from 'next/image';

export default function Package() {
  const [btnPremium, setBtnpremium] = useState(true);
  const [btnUnlimited, setBtnunlimited] = useState(true);
  const handlePremium = () => {
    setBtnpremium(!btnPremium);
  };
  const handleUnlimited = () => {
    setBtnunlimited(true);
  };

  const [premiumPrice, setPremiumPrice] = useState(24);
  const [wpPrice, setwpPrice] = useState(21.5);
  const [unlimitedPrice, setUnlimitedPrice] = useState(48);

  const [premiumValue, setPremiumValue] = useState(25);
  const [premiumSeat, setPremiumSeat] = useState(1);
  const [unlimitedSeat, setUnlimitedSeat] = useState(1);
  const handlePremiumChange = (e: any) => {
    setPremiumValue(parseInt(e.target.value));
    const newwpPremium = parseInt(e.target.value) * 2.5;
    setwpPrice(newwpPremium + 19);
  };
  const handlePremiumSeatChange = (e: any) => {
    setPremiumSeat(parseInt(e.target.value));
    const newPricePremium = parseInt(e.target.value) * 5;
    setPremiumPrice(newPricePremium + 19);
  };
  const handleUnlimitedSeatChange = (e: any) => {
    setUnlimitedSeat(parseInt(e.target.value));
    const newPriceUnlimited = parseInt(e.target.value) * 19;
    setUnlimitedPrice(newPriceUnlimited + 29);
  };

  return (
    <>
      <section>
        <div className=" flex flex-wrap items-center justify-center text-neutral-800 ">
          <div>
            <div className="h-auto block  bg-white shadow-lg ">
              <div className="g-0 lg:flex lg:flex-wrap">
                {/* <!-- Left column container--> */}
                <div className="h-auto px-4 md:px-0 lg:w-6/12">
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
                                  clipRule="evenodd"
                                ></path>
                              </svg>
                            </span>
                          </li>
                        }
                        child2={
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
                                  clipRule="evenodd"
                                ></path>
                              </svg>
                            </span>
                          </li>
                        }
                        child3={
                          <li
                            data-te-stepper-step-ref
                            className="w-[4.5rem] flex-auto"
                          >
                            <span className="flex items-center justify-center w-6 h-6 bg-white border-2 border-indigo-600 rounded-full lg:h-6 lg:w-6  shrink-0">
                              <span
                                className="h-2.5 w-2.5 rounded-full bg-indigo-600"
                                aria-hidden="true"
                              ></span>
                            </span>
                          </li>
                        }
                      />
                    </div>
                    <div className="text-left ">
                      <div className="font-extrabold text-3xl text-black ">
                        Select your prefered package ✨
                      </div>
                    </div>

                    <form>
                      <ul className="grid w-full gap-6 md:grid-cols-1 mt-8">
                        {/* Premium */}
                        <li className="relative">
                          <input
                            type="radio"
                            id="packed-premium"
                            name="packed"
                            value="packed-premium"
                            className="hidden peer"
                            required
                            onChange={handlePremium}
                          />
                          <label
                            htmlFor="packed-premium"
                            className="grid w-full px-4 py-3 text-white bg-white border-2  rounded-lg cursor-pointer peer-checked:border-indigo-600 peer-checked:text-black hover:text-indigo-600 hover:bg-gray-100 peer-checked:pb-60"
                          >
                            <div className="w-full text-black items-center justify-between flex ">
                              <div className="block">
                                <div className="w-full text-lg font-semibold">
                                  Premium
                                </div>
                                <div className="w-full text-sm">
                                  <b>{premiumValue}K</b> words .{' '}
                                  <b>{premiumSeat}</b> seats
                                </div>
                              </div>
                              <div className="inline-flex items-end">
                                <div className="font-bold text-2xl">
                                  ${premiumPrice - 5}
                                </div>
                                <div className="text-sm">/mo</div>
                              </div>
                            </div>
                          </label>
                          <div className="absolute top-16  w-full px-4 hidden peer-checked:block  ">
                            <hr
                              className="my-5 border-t border-indigo-500"
                              aria-hidden="true"
                            />
                            <div className="text-sm font-semibold">Words</div>
                            <div className="w-full flex justify-between">
                              <div>25K</div>
                              <div>1000K</div>
                            </div>
                            <div className="pt-2 pb-4">
                              <input
                                type="range"
                                className="w-full h-1.5 appearance-none rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                                min="25"
                                max="1000"
                                step="10"
                                value={premiumValue}
                                onChange={handlePremiumChange}
                              />
                            </div>
                            <div className="text-sm font-semibold">Seats</div>
                            <div className="w-full flex justify-between">
                              <div>1</div>
                              <div>10</div>
                            </div>
                            <div className="pt-2 pb-4">
                              <input
                                type="range"
                                className="w-full h-1.5 appearance-none rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                                min="1"
                                max="10"
                                step="1"
                                value={premiumSeat}
                                onChange={handlePremiumSeatChange}
                              />
                            </div>
                          </div>

                          <button
                            style={{ top: '-10px', left: '10px' }}
                            className="absolute cursor-default font-semibold text-sm px-2  text-white rounded-lg bg-indigo-500"
                          >
                            <span className=" align-middle">
                              Limited time discount
                            </span>
                          </button>
                        </li>

                        {/* Unlimited */}
                        <li className="relative">
                          <input
                            type="radio"
                            id="packed-unlimited"
                            name="packed"
                            value="packed-unlimited"
                            className="hidden peer"
                            required
                          />
                          <label
                            htmlFor="packed-unlimited"
                            className="inline-flex items-center justify-between w-full px-4 py-3 text-black bg-white border-2  rounded-lg cursor-pointer peer-checked:border-indigo-600 peer-checked:text-black hover:text-indigo-600 hover:bg-gray-100 peer-checked:pb-32"
                          >
                            <div className="block">
                              <div className="w-full text-lg font-semibold">
                                Unlimited
                              </div>
                              <div className="w-full text-sm">
                                <b>Unlimited</b> words . <b>{unlimitedSeat}</b>{' '}
                                seats
                              </div>
                            </div>
                            <div className="inline-flex items-end">
                              <div className="font-bold text-2xl">
                                ${unlimitedPrice - 19}
                              </div>
                              <div className="text-sm">/mo</div>
                            </div>
                          </label>
                          <div className="absolute top-16  w-full px-4 hidden peer-checked:block  ">
                            <hr
                              className="my-5 border-t border-indigo-500"
                              aria-hidden="true"
                            />

                            <div className="text-sm font-semibold">Seats</div>
                            <div className="w-full flex justify-between">
                              <div>1</div>
                              <div>25</div>
                            </div>
                            <div className="pt-2 pb-4">
                              <input
                                type="range"
                                className="w-full h-1.5 appearance-none rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                                min="1"
                                max="25"
                                step="1"
                                value={unlimitedSeat}
                                onChange={handleUnlimitedSeatChange}
                              />
                            </div>
                          </div>
                          <button
                            style={{ top: '-10px', left: '10px' }}
                            className="absolute cursor-default font-semibold text-sm px-2  text-white rounded-lg bg-indigo-500"
                          >
                            <span className=" align-middle">Best value</span>
                          </button>
                        </li>

                        {/* Unlimited */}
                        <li className="relative">
                          <input
                            type="radio"
                            id="packed-free"
                            name="packed"
                            value="packed-free"
                            className="hidden peer"
                            required
                          />
                          <label
                            htmlFor="packed-free"
                            className="inline-flex items-center justify-between w-full px-4 py-3 text-black bg-white border-2  rounded-lg cursor-pointer peer-checked:border-indigo-600 peer-checked:text-black hover:text-indigo-600 hover:bg-gray-100 "
                          >
                            <div className="block">
                              <div className="w-full text-lg font-semibold">
                                Free
                              </div>
                              <div className="w-full text-sm">
                                <b>2K</b> words . <b>1</b> seats
                              </div>
                            </div>
                            <div className="inline-flex items-end">
                              <div className="font-bold text-2xl">$0</div>
                              <div className="text-sm">/mo</div>
                            </div>
                          </label>
                          <button
                            style={{ top: '-10px', left: '10px' }}
                            className="absolute cursor-default font-semibold text-sm px-2  text-white rounded-lg bg-indigo-500"
                          >
                            <span className=" align-middle">
                              Limited time 1+1k words
                            </span>
                          </button>
                        </li>
                      </ul>
                      <div className="flex flex-wrap -mx-3 mb-2 mt-4">
                        <div className=" w-4/5 px-3 mb-2 md:mb-0">
                          <label
                            className="block  tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="grid-first-name"
                          >
                            Discount code
                          </label>
                          <input
                            className="bg-white text-xs appearance-none border-2 border-gray-300 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-500"
                            id="grid-first-name"
                            placeholder="Discount code"
                            type="text"
                          />
                        </div>
                        <div className=" w-1/5 px-3 pt-7">
                          <button
                            className="shadow text-xs bg-gray-300  focus:shadow-outline focus:outline-none text-gray-500 font-bold py-2 px-4 rounded"
                            type="button"
                          >
                            Apply
                          </button>
                        </div>
                      </div>
                      <div className="mt-6">
                        <button
                          className="shadow text-sm w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                          type="submit"
                        >
                          Try it now!
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
                    <p className="text-sm w-full">
                      Have a different question and can’t find the answer you’re
                      looking for? Reach out to our support team and we’ll get
                      back to you as soon as we can.
                    </p>
                    <div className="pt-8 space-y-4 ">
                      <details className="w-full bg-transparent border-b-2 border-gray-300  ">
                        <summary className=" pb-8 list-none text-md font-semibold cursor-pointer w-full flex justify-between">
                          What happens if I exceed the word limit on my selected
                          plan?
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
                          If you exceed the word limit on your selected plan,
                          you have the option to purchase additional word
                          credits to cover the excess. These credits can be
                          added to your account and used as needed.
                        </p>
                      </details>

                      <details className="w-full bg-transparent border-b-2 border-gray-300  ">
                        <summary className=" pb-8 list-none text-md font-semibold cursor-pointer w-full flex justify-between">
                          Can I upgrade, downgrade, or switch my plan at any
                          time?
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
                          Yes, you can easily upgrade, downgrade, or switch
                          plans at any time through your account settings.
                          Simply pick the desired package from the Plan &
                          Billing section in Settings and the changes will take
                          effect immediately.
                        </p>
                      </details>

                      <details className="w-full bg-transparent border-b-2 border-gray-300  ">
                        <summary className=" pb-8 list-none text-md font-semibold cursor-pointer w-full flex justify-between">
                          How does the auto-renewal feature work for the monthly
                          plans?
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
                          Our monthly plans are set to auto-renew by default to
                          ensure uninterrupted access to our services. However,
                          you have the freedom to cancel your plan before the
                          renewal date to avoid any further charges. Simply
                          follow the cancellation instructions provided in your
                          account settings.
                        </p>
                      </details>

                      <details className="w-full bg-transparent border-b-2 border-gray-300  ">
                        <summary className=" pb-8 list-none text-md font-semibold cursor-pointer w-full flex justify-between">
                          Can I cancel my subscription and receive a refund for
                          the remaining unused period?
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
                          Unfortunately, we do not provide refunds for unused
                          portions of the subscription period. Once you have
                          paid for a month, it is considered non-refundable.
                          However, you can continue to enjoy the benefits of
                          your subscription until the end of the billing cycle.
                          We offer a FREE account with 1000 words per month, so
                          you can get an idea of whether Writing Hero is right
                          for you.
                        </p>
                      </details>

                      <details className="w-full bg-transparent border-b-2 border-gray-300  ">
                        <summary className=" pb-8 list-none text-md font-semibold cursor-pointer w-full flex justify-between">
                          Will I lose access to my subscription immediately upon
                          cancellation?
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
                          No, upon cancelling your subscription, you will retain
                          access to the features and benefits of your selected
                          plan until the end of the current billing period. This
                          allows you to utilize Writing Hero for the duration
                          you have already paid for. If you have any specific
                          concerns or questions regarding the refund policy or
                          cancellation process, our support team is available to
                          provide further assistance.
                        </p>
                      </details>

                      <details className="w-full bg-transparent border-b-2 border-gray-300  ">
                        <summary className=" pb-8 list-none text-md font-semibold cursor-pointer w-full flex justify-between">
                          If I choose to skip a month’s subscription, what
                          happens to my content?
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
                          You will always be able to access your account and
                          previously written content, unless you’ve requested to
                          delete your account, or it has been over 90 days from
                          your last payment. If you have any specific concerns
                          or questions regarding the refund policy or
                          cancellation process, our support team is available to
                          provide further assistance.
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
