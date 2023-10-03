import React, { useState } from 'react';

export const Signupfaq1 = () => {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);

  const ChangeShow = () => {
    setShow(!show);
  };

  const ChangeShow2 = () => {
    setShow2(!show2);
  };

  const ChangeShow3 = () => {
    setShow3(!show3);
  };

  const ChangeShow4 = () => {
    setShow4(!show4);
  };

  const ChangeShow5 = () => {
    setShow5(!show5);
  };
  return (
    <>
      <div className="relative z-10 px-4 mt-12 text-white md:mx-6 md:p-4">
        <h4 className="mb-6 text-3xl font-bold">Frequently asked questions</h4>
        <p className="text-sm">
          Have a different question and can’t find the answer you’re looking
          for? Reach out to our support team and we’ll get back to you as soon
          as we can.
        </p>
        <div className="pt-8 space-y-4 ">
          <button onClick={ChangeShow} className="w-full">
            <details className="w-full bg-transparent border-b-2 border-gray-300  ">
              <summary className=" pb-8 list-none text-md font-semibold cursor-pointer w-full flex justify-between">
                Why do I need to provide my first name, last name, and email?
                <span className="text-white bg-transparent rounded-full">
                  {show ? (
                    <>
                      <svg
                        className="h-6 w-6 "
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#fff"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M18 12H6"
                        ></path>
                      </svg>
                    </>
                  ) : (
                    <>
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
                    </>
                  )}
                </span>
              </summary>
              <p className=" pb-6 text-left text-md text-white">
                We ask for your first name, last name, and email to create a
                personalized user account for you and to communicate important
                updates, account-related information, and promotional offers.
              </p>
            </details>
          </button>

          <button onClick={ChangeShow2} className="w-full">
            <details className="w-full bg-transparent border-b-2 border-gray-300  ">
              <summary className=" pb-8 list-none text-md font-semibold cursor-pointer w-full flex justify-between">
                Is my personal information safe and secure?
                <span className="text-white bg-transparent rounded-full">
                  {show2 ? (
                    <>
                      <svg
                        className="h-6 w-6 "
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#fff"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M18 12H6"
                        ></path>
                      </svg>
                    </>
                  ) : (
                    <>
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
                    </>
                  )}
                </span>
              </summary>
              <p className=" pb-6 text-left text-md text-white">
                Yes, we prioritize the security and privacy of your personal
                information. We implement industry-standard security measures to
                safeguard your data and ensure it is protected. You can view our
                Privacy Policy.
              </p>
            </details>
          </button>

          <button onClick={ChangeShow3} className="w-full">
            <details className="w-full bg-transparent border-b-2 border-gray-300  ">
              <summary className=" pb-8 list-none text-md font-semibold cursor-pointer w-full flex justify-between">
                Will I receive unwanted emails or spam after signing up?
                <span className="text-white bg-transparent rounded-full">
                  {show3 ? (
                    <>
                      <svg
                        className="h-6 w-6 "
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#fff"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M18 12H6"
                        ></path>
                      </svg>
                    </>
                  ) : (
                    <>
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
                    </>
                  )}
                </span>
              </summary>
              <p className=" pb-6 text-left text-md text-white">
                No, we respect your inbox. We will only send you relevant emails
                related to your account, service updates, and occasional
                promotional offers. You can easily manage your email preferences
                in your account settings or at the bottom of every email.
              </p>
            </details>
          </button>

          <button onClick={ChangeShow4} className="w-full">
            <details className="w-full bg-transparent border-b-2 border-gray-300  ">
              <summary className=" pb-8 list-none text-md font-semibold cursor-pointer w-full flex justify-between">
                Can I use the same email address for multiple users?
                <span className="text-white bg-transparent rounded-full">
                  {show4 ? (
                    <>
                      <svg
                        className="h-6 w-6 "
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#fff"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M18 12H6"
                        ></path>
                      </svg>
                    </>
                  ) : (
                    <>
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
                    </>
                  )}
                </span>
              </summary>
              <p className=" pb-6 text-left text-md text-white">
                Each user account requires a unique email address. If you wish
                to create multiple accounts or add team members, you can create
                a team within the settings page of your account.
              </p>
            </details>
          </button>

          <button onClick={ChangeShow5} className="w-full">
            <details className="w-full bg-transparent border-b-2 border-gray-300  ">
              <summary className=" pb-8 list-none text-md font-semibold cursor-pointer w-full flex justify-between">
                Can I delete my account if I no longer wish to use Writing Hero?
                <span className="text-white bg-transparent rounded-full">
                  {show5 ? (
                    <>
                      <svg
                        className="h-6 w-6 "
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#fff"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M18 12H6"
                        ></path>
                      </svg>
                    </>
                  ) : (
                    <>
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
                    </>
                  )}
                </span>
              </summary>
              <p className=" pb-6 text-left text-md text-white">
                Yes, in the unlikely event that you aren’t completely in love
                with Writing Hero, you can request to delete your account.
                Please reach out to our support team, and they will assist you
                with the account deletion process.
              </p>
            </details>
          </button>
        </div>
      </div>
    </>
  );
};

export const Signupfaq2 = () => {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);
  const [show6, setShow6] = useState(false);

  const ChangeShow = () => {
    setShow(!show);
  };

  const ChangeShow2 = () => {
    setShow2(!show2);
  };

  const ChangeShow3 = () => {
    setShow3(!show3);
  };

  const ChangeShow4 = () => {
    setShow4(!show4);
  };

  const ChangeShow5 = () => {
    setShow5(!show5);
  };
  const ChangeShow6 = () => {
    setShow6(!show6);
  };
  return (
    <>
      <div className="relative z-10 px-4 mt-12 text-white md:mx-6 md:p-4">
        <h4 className="mb-6 text-3xl font-bold">Frequently asked questions</h4>
        <p className="text-sm">
          Have a different question and can’t find the answer you’re looking
          for? Reach out to our support team and we’ll get back to you as soon
          as we can.
        </p>
        <div className="pt-8 space-y-4 ">
          <button onClick={ChangeShow} className="w-full">
            <details className="w-full bg-transparent border-b-2 border-gray-300  ">
              <summary className=" pb-8 list-none text-md font-semibold cursor-pointer w-full flex justify-between">
                Why do I need to confirm my email address?
                <span className="text-white bg-transparent rounded-full">
                  {show ? (
                    <>
                      <svg
                        className="h-6 w-6 "
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#fff"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M18 12H6"
                        ></path>
                      </svg>
                    </>
                  ) : (
                    <>
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
                    </>
                  )}
                </span>
              </summary>
              <p className=" pb-6 text-left text-md text-white">
                Confirming your email address helps ensure that you have
                provided a valid email and allows us to communicate important
                information, updates, and account-related notifications to the
                correct email address.
              </p>
            </details>
          </button>

          <button onClick={ChangeShow2} className="w-full">
            <details className="w-full bg-transparent border-b-2 border-gray-300  ">
              <summary className=" pb-8 list-none text-md font-semibold cursor-pointer w-full flex justify-between">
                Where do I get the Verification Pin?
                <span className="text-white bg-transparent rounded-full">
                  {show2 ? (
                    <>
                      <svg
                        className="h-6 w-6 "
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#fff"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M18 12H6"
                        ></path>
                      </svg>
                    </>
                  ) : (
                    <>
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
                    </>
                  )}
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
          </button>

          <button onClick={ChangeShow3} className="w-full">
            <details className="w-full bg-transparent border-b-2 border-gray-300  ">
              <summary className=" pb-8 list-none text-md font-semibold cursor-pointer w-full flex justify-between">
                What should I do if I haven’t received the verification email?
                <span className="text-white bg-transparent rounded-full">
                  {show3 ? (
                    <>
                      <svg
                        className="h-6 w-6 "
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#fff"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M18 12H6"
                        ></path>
                      </svg>
                    </>
                  ) : (
                    <>
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
                    </>
                  )}
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
          </button>

          <button onClick={ChangeShow4} className="w-full">
            <details className="w-full bg-transparent border-b-2 border-gray-300  ">
              <summary className=" pb-8 list-none text-md font-semibold cursor-pointer w-full flex justify-between">
                What happens if I enter the verification PIN incorrectly?
                <span className="text-white bg-transparent rounded-full">
                  {show4 ? (
                    <>
                      <svg
                        className="h-6 w-6 "
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#fff"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M18 12H6"
                        ></path>
                      </svg>
                    </>
                  ) : (
                    <>
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
                    </>
                  )}
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
          </button>

          <button onClick={ChangeShow5} className="w-full">
            <details className="w-full bg-transparent border-b-2 border-gray-300  ">
              <summary className=" pb-8 list-none text-md font-semibold cursor-pointer w-full flex justify-between">
                Can I change my email address after confirming it?
                <span className="text-white bg-transparent rounded-full">
                  {show5 ? (
                    <>
                      <svg
                        className="h-6 w-6 "
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#fff"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M18 12H6"
                        ></path>
                      </svg>
                    </>
                  ) : (
                    <>
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
                    </>
                  )}
                </span>
              </summary>
              <p className=" pb-6 text-left text-md text-white">
                Yes, you can change your email address in your account settings
                after confirming it. Please reach out to our support staff to
                request an email update.
              </p>
            </details>
          </button>

          <button onClick={ChangeShow6} className="w-full">
            <details className="w-full bg-transparent border-b-2 border-gray-300  ">
              <summary className=" pb-8 list-none text-md font-semibold cursor-pointer w-full flex justify-between">
                What should I do if I encounter technical issues during the
                email verification process?
                <span className="text-white bg-transparent rounded-full">
                  {show6 ? (
                    <>
                      <svg
                        className="h-6 w-6 "
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#fff"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M18 12H6"
                        ></path>
                      </svg>
                    </>
                  ) : (
                    <>
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
                    </>
                  )}
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
          </button>
        </div>
      </div>
    </>
  );
};
