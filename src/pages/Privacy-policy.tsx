import React, { lazy, Suspense, useState, useRef } from 'react';
import Head from 'next/head';
import Loading from '@/components/Loading';
const Navbar = lazy(() => import('../components/Navbar'));
const Footer = lazy(() => import('../components/Footer'));

export default function Privarypolicy() {
  return (
    <>
      <Head>
        <title>Writing Hero</title>
        <link rel="icon" href="/robohead2.ico" />
        <meta
          name="description"
          content="Boost your writing prowess with over 100+ AI tools 
          at Writing Hero! Bid farewell to the mundane task of 
          generating content and focus on propelling your business 
          forward at lightning speed. Choose from a wide array of tools, 
          unleash your ideas, and witness the incredible content you can 
          create. Whether it&#039;s crafting flawless emails, 
          compelling ads, persuasive sales letters, or comprehensive 
          outreach responses, our tools will save you time and amplify 
          your bottom line. Experience an efficient and productive 
          writing process with Writing Hero&#039;s comprehensive suite 
          of tools, designed to help your business thrive."
        />
        <meta property="url" content="https://writinghero.ai/" />

        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:title" content="Writing Hero AI" />
        <meta
          property="og:description"
          content="Boost your writing prowess with over 100+ AI tools 
          at Writing Hero! Bid farewell to the mundane task of 
          generating content and focus on propelling your business 
          forward at lightning speed. Choose from a wide array of tools, 
          unleash your ideas, and witness the incredible content you can 
          create. Whether it&#039;s crafting flawless emails, 
          compelling ads, persuasive sales letters, or comprehensive 
          outreach responses, our tools will save you time and amplify 
          your bottom line. Experience an efficient and productive 
          writing process with Writing Hero&#039;s comprehensive suite 
          of tools, designed to help your business thrive."
        />
        <meta property="og:image" content="/robohead2.png" />
        <meta
          property="og:url"
          content="https://www.facebook.com/WritingHeroAI/"
        />
        <meta property="og:type" content="website" />
      </Head>

      <Suspense fallback={<Loading />}>
        <div className="bg-gray-50">
          <Navbar
            link1="Features"
            link1To="#section2"
            link2="Pricing"
            link2To="#section3"
            link3="FAQs"
            link3To="#section4"
            link4={'Contact'}
            link4To={'/contact'}
            link5={'Log in'}
            link5To={'/login'}
            link6={'Sign up'}
            link6To={'/signup'}
          />
          <div className="bg-gray-50 min-h-screen  justify-center py-12">
            <div className="container px-4 mx-auto  pb-10">
              <div className="max-w-3xl mx-auto ">
                <span className="text-3xl lg:text-6xl font-bold h-fit">
                  Privacy Policy
                </span>
                <p className=" text-black mt-6">
                  Type of website: Ecommerce <br />
                  Effective date: 30 th day of June 2022
                </p>
                <p className=" text-black mt-6 max-w-2xl">
                  Writinghero.ai (the ’’Site’’) is owned and operated by AI
                  WRITING IMPROVEMENT INC. O/A WRITING HERO. AI WRITING
                  IMPROVEMENT INC. O/A WRITING HERO is the data controller and
                  can be contacted at:
                </p>
                <p className=" text-black mt-6 mb-6">
                  info@writinghero.ai <br />
                  540-810 Wilson Ave. North York, Ontario, M3K 1E5
                </p>
                <span className=" text-lg lg:text-xl font-bold h-fit">
                  <u>Purpose</u>
                </span>
                <p className=" text-black mt-6 max-w-2xl">
                  The purpose of this privacy policy (this ’’Privacy Policy’’)
                  is to inform users of our Site of the following:
                </p>
                <ol className=" text-black mt-4 list-decimal mx-4">
                  <li>The personal data we will collect;</li>
                  <li>Use of collected data;</li>
                  <li>Who has access to the data collected;</li>
                  <li>The rights of Site users; and</li>
                  <li>The Site’s cookie policy.</li>
                </ol>
                <p className=" text-black mt-6 max-w-2xl mb-6">
                  This Privacy Policy applies in addition to the terms and
                  conditions of our Site.
                </p>
                <span className=" text-lg lg:text-xl font-bold h-fit">
                  <u>GDPR</u>
                </span>
                <p className=" text-black mt-6 max-w-2xl">
                  For users in the European Union, we adhere to the Regulation
                  (EU) 2016/679 of the European Parliament and of the Council of
                  27 April 2016, known as the General Data Protection Regulation
                  (the ’’GDPR’’). For users in the United Kingdom, we adhere to
                  the GDPR as enshrined in the Data Protection Act 2018.
                </p>
                <p className=" text-black mt-6 max-w-2xl mb-6">
                  We have not appointed a Data Protection Officer as we do not
                  fall within the categories of controllers and processors
                  required to appoint a Data Protection Officer under Article 37
                  of the GDPR.
                </p>
                <span className=" text-lg lg:text-xl font-bold h-fit ">
                  <u>Consent</u>
                </span>
                <p className=" text-black mt-6 max-w-2xl">
                  By using our Site users agree that they consent to:
                </p>
                <ol className=" text-black mt-4 list-decimal mx-4">
                  <li>The conditions set out in this Privacy Policy.</li>
                </ol>
                <p className=" text-black mt-6 max-w-2xl">
                  When the legal basis for us processing your personal data is
                  that you have provided your consent to that processing, you
                  may withdraw your consent at any time. If you withdraw your
                  consent, it will not negate prior processing, which we
                  completed before you withdrew your consent, unlawful.
                </p>
                <p className=" text-black mt-6 max-w-2xl mb-6">
                  You can withdraw your consent by: Contacting
                  info@writinghero.ai
                </p>
                <span className=" text-lg lg:text-xl font-bold h-fit ">
                  <u>Legal Basis for Processing</u>
                </span>
                <p className=" text-black mt-6 max-w-2xl">
                  We collect and process personal data about users in the EU
                  only when we have a legal basis for doing so under Article 6
                  of the GDPR.
                </p>
                <p className=" text-black mt-6 max-w-2xl">
                  We rely on the following legal bases to collect and process
                  the personal data of users in the EU:
                </p>
                <ol className=" text-black mt-4 list-decimal mx-4 max-w-2xl mb-6">
                  <li>
                    Users have provided their consent to the processing of their
                    data for one or more specific purposes; and
                  </li>
                  <li>
                    Processing of user personal data is necessary for us to
                    take, at the request of a user, steps before entering a
                    contract or for the performance of a contract to which a
                    user is a party. If a user does not provide the personal
                    data necessary to perform a contract the consequences are as
                    follows: The use of the service will be restricted.
                  </li>
                </ol>
                <span className=" text-lg lg:text-xl font-bold h-fit ">
                  <u>Personal Data We Collect</u>
                </span>
                <p className=" text-black mt-6 max-w-2xl mb-6">
                  We only collect data that helps us achieve the purpose set out
                  in this Privacy Policy. We will not collect any additional
                  data beyond the data listed below without notifying you first.
                </p>
                <span className=" text-lg lg:text-xl font-bold h-fit ">
                  <u>Data Collected Automatically</u>
                </span>
                <p className=" text-black mt-6 max-w-2xl ">
                  When you visit and use our Site, we may automatically collect
                  and store the following information:
                </p>
                <ol className=" text-black mt-4 list-decimal mx-4 max-w-2xl mb-6">
                  <li>IP address;</li>
                  <li>Location;</li>
                  <li>Hardware and software details; </li>
                  <li>Clicked links; and</li>
                  <li>Content viewed.</li>
                </ol>
                <span className=" text-lg lg:text-xl font-bold h-fit ">
                  <u>Data Collected in a Non-Automatic Way</u>
                </span>
                <p className=" text-black mt-6 max-w-2xl ">
                  We may also collect the following data when you perform
                  certain functions on our Site:
                </p>
                <ol className=" text-black mt-4 list-decimal mx-4 max-w-2xl">
                  <li>First and last name;</li>
                  <li>Email address;</li>
                  <li>Address; and</li>
                  <li>Payment information.</li>
                </ol>
                <p className=" text-black mt-6 max-w-2xl ">
                  This data may be collected using the following methods:
                </p>
                <ol className=" text-black mt-4 list-decimal mx-4 max-w-2xl mb-6">
                  <li>When creating an account and subscribing.</li>
                </ol>
                <span className=" text-lg lg:text-xl font-bold h-fit ">
                  <u>How We Use Personal Data</u>
                </span>
                <p className=" text-black mt-6 max-w-2xl ">
                  Data collected on our Site will only be used for the purposes
                  specified in this Privacy Policy or indicated on the relevant
                  pages of our Site. We will not use your data beyond what we
                  disclose in this Privacy Policy.
                </p>
                <p className=" text-black mt-6 max-w-2xl ">
                  The data we collect automatically is used for the following
                  purposes:
                </p>
                <ol className=" text-black mt-4 list-decimal mx-4 max-w-2xl">
                  <li>
                    To ensure our service is not misused by restricted parties;
                    and
                  </li>
                  <li>To prevent the abuse of Trial Account offers.</li>
                </ol>
                <p className=" text-black mt-6 max-w-2xl ">
                  The data we collect when the user performs certain functions
                  may be used for the following purposes:
                </p>
                <ol className=" text-black mt-4 list-decimal mx-4 max-w-2xl mb-6">
                  <li>To fulfill the subscription service or trial account.</li>
                </ol>
                <span className=" text-lg lg:text-xl font-bold h-fit ">
                  <u>Who We Share Personal Data With</u>
                </span>
                <p className=" text-black mt-6 max-w-2xl ">
                  <u>Employees</u>
                </p>
                <p className=" text-black  max-w-2xl ">
                  We may disclose user data to any member of our organization
                  who reasonably needs access to user data to achieve the
                  purposes set out in this Privacy Policy.
                </p>
                <p className=" text-black mt-6 max-w-2xl ">
                  <u>Third Parties</u>
                </p>
                <p className=" text-black  max-w-2xl ">
                  We may share user data with the following third parties:
                </p>
                <p className=" text-black  max-w-2xl mt-6">
                  We may share the following user data with third parties:
                </p>
                <ol className=" text-black mt-4 list-decimal mx-4 max-w-2xl">
                  <li>
                    All data input and generated from our writing generation
                    user interface.
                  </li>
                </ol>
                <p className=" text-black  max-w-2xl mt-6">
                  We may share user data with third parties for the following
                  purposes:
                </p>
                <ol className=" text-black mt-4 list-decimal mx-4 max-w-2xl">
                  <li>To facilitate the use of the service.</li>
                </ol>
                <p className=" text-black  max-w-2xl mt-6">
                  Third parties will not be able to access user data beyond what
                  is reasonably necessary to achieve the given purpose.
                </p>
                <p className=" text-black mt-6 max-w-2xl ">
                  <u>Other Disclosures</u>
                </p>
                <p className=" text-black  max-w-2xl ">
                  We will not sell or share your data with other third parties,
                  except in the following cases:
                </p>
                <ol className=" text-black mt-4 list-decimal mx-4 max-w-2xl">
                  <li>If the law requires it;</li>
                  <li>If it is required for any legal proceeding; </li>
                  <li>To prove or protect our legal rights; and </li>
                  <li>
                    To buyers or potential buyers of this company in the event
                    that we seek to sell the company.
                  </li>
                </ol>
                <p className=" text-black  max-w-2xl mt-6 mb-6">
                  If you follow hyperlinks from our Site to another Site, please
                  note that we are not responsible for and have no control over
                  their privacy policies and practices.
                </p>
                <span className=" text-lg lg:text-xl font-bold h-fit ">
                  <u>How Long We Store Personal Data</u>
                </span>
                <p className=" text-black  max-w-2xl mt-6 ">
                  User data will be stored until the purpose the data was
                  collected for has been achieved.
                </p>
                <p className=" text-black  max-w-2xl mt-6 mb-6">
                  You will be notified if your data is kept for longer than this
                  period.
                </p>
                <span className=" text-lg lg:text-xl font-bold h-fit ">
                  <u>How We Protect Your Personal Data</u>
                </span>
                <p className=" text-black  max-w-2xl mt-6 ">
                  In order to protect your security, we use the strongest
                  available browser encryption and store all of our data on
                  servers in secure facilities. All data is only accessible to
                  our employees. Our employees are bound by strict
                  confidentiality agreements and a breach of this agreement
                  would result in the employee’s termination.
                </p>
                <p className=" text-black  max-w-2xl mt-6 mb-6">
                  While we take all reasonable precautions to ensure that user
                  data is secure and that users are protected, there always
                  remains the risk of harm. The Internet as a whole can be
                  insecure at times and therefore we are unable to guarantee the
                  security of user data beyond what is reasonably practical.
                </p>
                <span className=" text-lg lg:text-xl font-bold h-fit ">
                  <u>Your Rights as a User</u>
                </span>
                <p className=" text-black  max-w-2xl mt-6 ">
                  Under the GDPR, you have the following rights:
                </p>
                <ol className=" text-black mt-4 list-decimal mx-4 max-w-2xl mb-6">
                  <li>Right to be informed;</li>
                  <li>Right of access;</li>
                  <li>Right to rectification;</li>
                  <li>Right to erasure;</li>
                  <li>Right to restrict processing; </li>
                  <li>Right to data portability; and </li>
                  <li>Right to object.</li>
                </ol>
                <span className=" text-lg lg:text-xl font-bold h-fit ">
                  <u>Children</u>
                </span>
                <p className=" text-black  max-w-2xl mt-6 mb-6">
                  The minimum age to use our website is 18 years of age. We do
                  not knowingly collect or use personal data from children under
                  16 years of age. If we learn that we have collected personal
                  data from a child under 16 years of age, the personal data
                  will be deleted as soon as possible. If a child under 16 years
                  of age has provided us with personal data their parent or
                  guardian may contact our privacy officer.
                </p>
                <span className=" text-lg lg:text-xl font-bold h-fit ">
                  <u>
                    How to Access, Modify, Delete, or Challenge the Data
                    Collected
                  </u>
                </span>
                <p className=" text-black  max-w-2xl mt-6">
                  If you would like to know if we have collected your personal
                  data, how we have used your personal data, if we have
                  disclosed your personal data and to who we disclosed your
                  personal data, if you would like your data to be deleted or
                  modified in any way, or if you would like to exercise any of
                  your other rights under the GDPR, please contact our privacy
                  officer here:
                </p>
                <p className=" text-black  max-w-2xl mt-6 mb-6">
                  AI WRITING IMPROVEMENT INC. O/A WRITING HERO <br />
                  info@writinghero.ai <br />
                  _________________________ <br />
                  540-810 Wilson Ave. North York, Ontario, M3K 1E5
                </p>
                <span className=" text-lg lg:text-xl font-bold h-fit ">
                  <u>Do Not Track Notice</u>
                </span>
                <p className=" text-black  max-w-2xl mt-6 mb-6">
                  Do Not Track (’’DNT’’) is a privacy preference that you can
                  set in certain web browsers. We respond to browser-initiated
                  DNT signals. If we receive a DNT signal that indicates a user
                  does not wish to be tracked, we will not track that user. We
                  are not responsible for and cannot guarantee how any third
                  parties who interact with our Site and your data will respond
                  to DNT signals.
                </p>
                <span className=" text-lg lg:text-xl font-bold h-fit ">
                  <u>How to Opt-Out of Data Collection, Use or Disclosure</u>
                </span>
                <p className=" text-black  max-w-2xl mt-6 ">
                  In addition to the method(s) described in the How to Access,
                  Modify, Delete, or Challenge the Data Collected section, we
                  provide the following specific opt-out methods for the forms
                  of collection, use, or disclosure of your personal data
                  specified below:
                </p>
                <ol className=" text-black mt-4 list-decimal mx-4 max-w-2xl mb-6">
                  <li>
                    You can opt-out of the use of your personal data for
                    marketing emails or by emailing us to delete your data. You
                    can opt-out by clicking ’’unsubscribe’’ on the bottom of any
                    marketing email or updating your email preferences under
                    ’’Your Account’’
                  </li>
                </ol>
                <span className=" text-lg lg:text-xl font-bold h-fit ">
                  <u>Cookie Policy</u>
                </span>
                <p className=" text-black  max-w-2xl mt-6 ">
                  A cookie is a small file, stored on a user’s hard drive by a
                  website. Its purpose is to collect data relating to the user’s
                  browsing habits. You can choose to be notified each time a
                  cookie is transmitted. You can also choose to disable cookies
                  entirely in your internet browser, but this may decrease the
                  quality of your user experience.
                </p>
                <p className=" text-black  max-w-2xl mt-6 ">
                  We use the following types of cookies on our Site:
                </p>
                <ol className=" text-black mt-4 list-decimal mx-4 max-w-2xl mb-6">
                  <li>Functional cookies</li>
                  <p className=" text-black  max-w-2xl  ">
                    Functional cookies are used to remember the selections you
                    make on our Site so that your selections are saved for your
                    next visits;
                  </p>
                  <li>Analytical cookies</li>
                  <p className=" text-black  max-w-2xl  ">
                    Analytical cookies allow us to improve the design and
                    functionality of our Site by collecting data on how you
                    access our Site, for example data on the content you access,
                    how long you stay on our Site, etc;
                  </p>
                  <li>Targeting cookies</li>
                  <p className=" text-black  max-w-2xl  ">
                    Targeting cookies collect data on how you use the Site and
                    your preferences. This allows us to personalize the
                    information you see on our Site for you; and
                  </p>
                  <li>Third-Party Cookies</li>
                  <p className=" text-black  max-w-2xl  ">
                    Third-party cookies are created by a website other than
                    ours. We may use third-party cookies to achieve the
                    following purposes:
                  </p>
                  <ol className=" text-black list-decimal mx-4 max-w-2xl mt-4">
                    <li>
                      Monitor user preferences to tailor advertisements around
                      their interests; and
                    </li>
                    <li>
                      To check and identify unique users for the purpose of
                      mitigating trial account abuse.
                    </li>
                  </ol>
                </ol>

                <span className=" text-lg lg:text-xl font-bold h-fit ">
                  <u>Modifications</u>
                </span>
                <p className=" text-black  max-w-2xl mt-6 mb-6">
                  This Privacy Policy may be amended from time to time in order
                  to maintain compliance with the law and to reflect any changes
                  to our data collection process. When we amend this Privacy
                  Policy we will update the ’’Effective Date’’ at the top of
                  this Privacy Policy. We recommend that our users periodically
                  review our Privacy Policy to ensure that they are notified of
                  any updates. If necessary, we may notify users by email of
                  changes to this Privacy Policy.
                </p>

                <span className=" text-lg lg:text-xl font-bold h-fit ">
                  <u>Complaints</u>
                </span>
                <p className=" text-black  max-w-2xl mt-6 mb-6">
                  If you have any complaints about how we process your personal
                  data, please contact us through the contact methods listed in
                  the Contact Information section so that we can, where
                  possible, resolve the issue. If you feel we have not addressed
                  your concern in a satisfactory manner you may contact a
                  supervisory authority. You also have the right to directly
                  make a complaint to a supervisory authority. You can lodge a
                  complaint with a supervisory authority by contacting the The
                  Office of the Privacy Commissioner (OPC).
                </p>

                <span className=" text-lg lg:text-xl font-bold h-fit ">
                  <u>Contact Information</u>
                </span>
                <p className=" text-black  max-w-2xl mt-6 ">
                  If you have any questions, concerns or complaints, you can
                  contact our privacy officer, AI WRITING IMPROVEMENT INC. O/A
                  WRITING HERO, at:
                </p>
                <p className=" text-black  max-w-2xl mt-6 mb-6">
                  info@writinghero.ai <br />
                  _________________________ <br />
                  540-810 Wilson Ave. North York, Ontario, M3K 1E5
                </p>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </Suspense>
    </>
  );
}
