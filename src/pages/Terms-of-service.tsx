import React, { lazy, Suspense, useState, useRef } from 'react';
import Head from 'next/head';
import Loading from '@/components/Loading';
const Navbar = lazy(() => import('../components/Navbar'));
const Footer = lazy(() => import('../components/Footer'));

export default function Terms() {
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
            <div className="container px-4 mx-auto pb-10">
              <div className="max-w-3xl mx-auto">
                <span className=" text-3xl lg:text-6xl font-bold h-fit">
                  Terms and Conditions
                </span>
                <p className=" text-black mt-6 max-w-2xl">
                  These terms and conditions (the ’’Terms and Conditions’’)
                  govern the use of <br />
                  <b>Writinghero.ai</b> <br />
                  (the ’’Site’’). This Site is owned and operated by AI WRITING
                  IMPROVEMENT INC. O/A WRITING HERO. This Site is an ecommerce
                  website that provides software as a service.
                </p>
                <p className=" text-black mt-6 max-w-2xl">
                  By using this Site, you indicate that you have read and
                  understand these Terms and Conditions and agree to abide by
                  them at all times.
                </p>
                <p className=" text-black mt-6 mb-6 max-w-2xl">
                  THESE TERMS AND CONDITIONS CONTAIN A DISPUTE RESOLUTION CLAUSE
                  THAT IMPACTS YOUR RIGHTS ABOUT HOW TO RESOLVE DISPUTES. PLEASE
                  READ IT CAREFULLY.
                </p>
                <span className=" text-lg lg:text-xl font-bold h-fit">
                  <u>Intellectual Property</u>
                </span>
                <p className=" text-black mt-6 max-w-2xl mb-6">
                  All content published and made available on our Site is the
                  property of AI WRITING IMPROVEMENT INC. O/A WRITING HERO and
                  the Site’s creators. This includes, but is not limited to
                  images, text, logos, documents, downloadable files and
                  anything that contributes to the composition of our Site.
                </p>

                <span className=" text-lg lg:text-xl font-bold h-fit">
                  <u>Acceptable Use</u>
                </span>
                <p className=" text-black mt-6 max-w-2xl">
                  As a user of our Site, you agree to use our Site legally, not
                  to use our Site for illegal purposes, and not to:
                </p>
                <ol className=" text-black mt-4 list-decimal mx-4 max-w-2xl">
                  <li>Harass or mistreat other users of our Site;</li>
                  <li>
                    Violate the intellectual property rights of the Site owners
                    or any third party to the Site;
                  </li>
                  <li>Hack into the account of another user of the Site;</li>
                  <li>Act in any way that could be considered fraudulent;</li>
                  <li>
                    Post any material that may be deemed inappropriate or
                    offensive; or
                  </li>
                  <li>
                    Engage in any restricted uses, outlined below under
                    Restricted Uses as they are not allowed by our service
                    provider and may lead to your account being terminated
                  </li>
                </ol>
                <p className=" text-black mt-6 max-w-2xl mb-6">
                  If we believe you are using our Site illegally or in a manner
                  that violates these Terms and Conditions, we reserve the right
                  to limit, suspend or terminate your access to our Site. We
                  also reserve the right to take any legal steps necessary to
                  prevent you from accessing our Site.
                </p>

                <span className=" text-lg lg:text-xl font-bold h-fit ">
                  <u>Restricted Uses</u>
                </span>
                <p className=" text-black mt-6 max-w-2xl">
                  You cannot use WritingHero.ai to generate the following
                  content:
                </p>
                <ol className=" text-black mt-4 list-decimal mx-4 mb-6 max-w-2xl">
                  <li>
                    <b className="text-lg">Hate speech:</b> <br />
                    content that expresses, incites, or promotes hate based on
                    identity.
                  </li>
                  <li>
                    <b className="text-lg">Harassment:</b> <br />
                    content that intends to harass, threaten, or bully an
                    individual.
                  </li>
                  <li>
                    <b className="text-lg">Violence:</b> <br />
                    content that promotes or glorifies violence or celebrates
                    the suffering or humiliation of others.
                  </li>
                  <li>
                    <b className="text-lg">Self-harm:</b> <br />
                    content that promotes, encourages, or depicts acts of
                    self-harm, such as suicide, cutting, and eating disorders.
                  </li>
                  <li>
                    <b className="text-lg">Sexual:</b> <br />
                    content meant to arouse sexual excitement, such as the
                    description of sexual activity, or that promotes sexual
                    services (excluding sex education and wellness).
                  </li>
                  <li>
                    <b className="text-lg">Political:</b> <br />
                    content attempting to influence the political process or to
                    be used for campaigning purposes.
                  </li>
                  <li>
                    <b className="text-lg">Spam:</b> <br />
                    unsolicited bulk content.
                  </li>
                  <li>
                    <b className="text-lg">Deception:</b> <br />
                    content that is false or misleading, such as attempting to
                    defraud individuals or spread disinformation.
                  </li>
                  <li>
                    <b className="text-lg">Malware:</b> <br />
                    content that attempts to generate ransomware, keyloggers,
                    viruses, or other software intended to impose some level of
                    harm.
                  </li>
                </ol>

                <span className=" text-lg lg:text-xl font-bold h-fit ">
                  <u>Accounts</u>
                </span>
                <p className=" text-black mt-6 max-w-2xl">
                  When you create an account on our Site, you agree to the
                  following:
                </p>

                <ol className=" text-black mt-4 list-decimal mx-4 max-w-2xl mb-6">
                  <li>
                    You are solely responsible for your account and the security
                    and privacy of your account, including passwords or
                    sensitive information attached to that account; and
                  </li>
                  <li>
                    All personal information you provide to us through your
                    account is up to date, accurate, and truthful and that you
                    will update your personal information if it changes.
                  </li>
                </ol>
                <p className=" text-black max-w-2xl mb-6">
                  We reserve the right to suspend or terminate your account if
                  you are using our Site illegally or if you violate these Terms
                  and Conditions.
                </p>

                <span className=" text-lg lg:text-xl font-bold h-fit ">
                  <u>Sale of Services</u>
                </span>
                <p className=" text-black mt-6 max-w-2xl mb-6">
                  These Terms and Conditions govern the sale of services
                  available on our Site. <br />
                  The following services are available on our Site:
                </p>
                <ol className=" text-black list-decimal mx-4 max-w-2xl ">
                  <li>
                    Writing Hero Subscriptions (yearly and monthly) based on
                    various amounts of words you want to generate.
                  </li>
                </ol>
                <p className=" text-black mt-6 max-w-2xl ">
                  The services will be paid for in full when the services are
                  ordered. Monthly subscriptions are paid at the beginning of
                  each month or every 30 days and yearly subscriptions are paid
                  at the start of the subscription and run for 365 days.
                </p>
                <p className=" text-black mt-6 max-w-2xl ">
                  These Terms and Conditions apply to all the services that are
                  displayed on our Site at the time you access it. All
                  information, descriptions, or images that we provide about our
                  services are as accurate as possible. However, we are not
                  legally bound by such information, descriptions, or images as
                  we cannot guarantee the accuracy of all services we provide.
                  You agree to purchase services from our Site at your own risk.
                </p>
                <p className=" text-black mt-6 max-w-2xl mb-6">
                  We reserve the right to modify, reject or cancel your order
                  whenever it becomes necessary. If we cancel your order and
                  have already processed your payment, we will give you a refund
                  equal to the amount you paid. You agree that it is your
                  responsibility to monitor your payment instrument to verify
                  receipt of any refund.
                </p>

                <span className=" text-lg lg:text-xl font-bold h-fit ">
                  <u>Subscriptions</u>
                </span>
                <p className=" text-black mt-6 max-w-2xl ">
                  Your subscription automatically renews and you will be
                  automatically billed until we receive notification that you
                  want to cancel the subscription.
                </p>
                <p className=" text-black mt-6 max-w-2xl mb-6">
                  To cancel your subscription, please follow these steps: The
                  subscription is non-refundable upon subscribing after the Free
                  Trial, except in exceptional circumstances.
                </p>

                <span className=" text-lg lg:text-xl font-bold h-fit ">
                  <u>Free Trial</u>
                </span>
                <p className=" text-black mt-6 max-w-2xl mb-6">
                  We offer a free account that provides a monthly allowance of
                  1000 words, allowing you to experience our services without
                  any cost. At any time, you can upgrade to a paid plan offering
                  additional features and higher word limits. As the free
                  account serves as an opportunity to try our services, we do
                  not offer refunds for monthly subscriptions once the purchase
                  has been made.
                </p>

                <span className=" text-lg lg:text-xl font-bold h-fit ">
                  <u>Payments</u>
                </span>
                <p className=" text-black mt-6 max-w-2xl">
                  We accept the following payment methods on our Site:
                </p>
                <ol className=" text-black mt-4 list-decimal mx-4 max-w-2xl">
                  <li>Credit Card processed via Stripe.com</li>
                </ol>
                <p className=" text-black mt-6 max-w-2xl ">
                  When you provide us with your payment information, you
                  authorize our use of and access to the payment instrument you
                  have chosen to use. By providing us with your payment
                  information, you authorize us to charge the amount due to this
                  payment instrument.
                </p>
                <p className=" text-black mt-6 max-w-2xl mb-6">
                  If we believe your payment has violated any law or these Terms
                  and Conditions, we reserve the right to cancel or reverse your
                  transaction.
                </p>

                <span className=" text-lg lg:text-xl font-bold h-fit ">
                  <u>Guarantees</u>
                </span>
                <p className=" text-black mt-6 max-w-2xl ">
                  The following guarantees apply to our Site:
                </p>
                <ol className=" text-black mt-4 list-decimal mx-4 max-w-2xl mb-6">
                  <li>We will maintain a 98% uptime guarantee.</li>
                </ol>

                <span className=" text-lg lg:text-xl font-bold h-fit ">
                  <u>Consumer Protection Law</u>
                </span>
                <p className=" text-black mt-6 max-w-2xl mb-6">
                  Where the Consumer Protection Act, or any other consumer
                  protection legislation in your jurisdiction applies and cannot
                  be excluded, these Terms and Conditions will not limit your
                  legal rights and remedies under that legislation. These Terms
                  and Conditions will be read subject to the mandatory
                  provisions of that legislation. If there is a conflict between
                  these Terms and Conditions and that legislation, the mandatory
                  provisions of the legislation will apply.
                </p>

                <span className=" text-lg lg:text-xl font-bold h-fit ">
                  <u>Limitation of Liability</u>
                </span>
                <p className=" text-black mt-6 max-w-2xl mb-6">
                  AI WRITING IMPROVEMENT INC. O/A WRITING HERO and our
                  directors, officers, agents, employees, subsidiaries, and
                  affiliates will not be liable for any actions, claims, losses,
                  damages, liabilities and expenses including legal fees from
                  your use of the Site.
                </p>

                <span className=" text-lg lg:text-xl font-bold h-fit ">
                  <u>Indemnity</u>
                </span>
                <p className=" text-black  max-w-2xl mt-6 mb-6">
                  Except where prohibited by law, by using this Site you
                  indemnify and hold harmless AI WRITING IMPROVEMENT INC. O/A
                  WRITING HERO and our directors, officers, agents, employees,
                  subsidiaries, and affiliates from any actions, claims, losses,
                  damages, liabilities and expenses including legal fees arising
                  out of your use of our Site or your violation of these Terms
                  and Conditions.
                </p>

                <span className=" text-lg lg:text-xl font-bold h-fit ">
                  <u>Warranties/Claims</u>
                </span>
                <p className=" text-black  max-w-2xl mt-6 mb-6">
                  AI WRITING IMPROVEMENT INC. O/A WRITING HERO MAKE NO
                  REPRESENTATIONS OR WARRANTIES, EXPRESSED OR IMPLIED, AND
                  HEREBY DISCLAIMS AND NEGATES ALL OTHER WARRANTIES, INCLUDING
                  WITHOUT LIMITATION, IMPLIED WARRANTIES OR CONDITIONS OF
                  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE. If you
                  believe that any Service you have purchased from us has a
                  defect please contact info@writinghero.ai with the subject
                  line WARRANTY CLAIM. CLAIMS A LIMITED TO THE TOTAL PAID FOR
                  THE SERVICE OR $100. THIS MEANS IF YOU ARE NOT HAPPY WITH
                  SOMETHING YOU PURCHASED THROUGH THE SERVICE, OR IF SOMETHING
                  YOU PURCHASED DOES NOT WORK PROPERLY, THE COMPANY AND ITS
                  SUPPLIERS CAN ONLY BE HELD RESPONSIBLE FOR THE AMOUNT OF MONEY
                  YOU ACTUALLY PAID FOR THE SERVICE, OR $100 IF YOU DID NOT
                  PURCHASE ANYTHING THROUGH THE SERVICE.
                </p>

                <span className=" text-lg lg:text-xl font-bold h-fit ">
                  <u>Applicable Law</u>
                </span>
                <p className=" text-black  max-w-2xl mt-6 mb-6">
                  These Terms and Conditions are governed by the laws of the
                  Province of Ontario.
                </p>

                <span className=" text-lg lg:text-xl font-bold h-fit ">
                  <u>Dispute Resolution</u>
                </span>
                <p className=" text-black  max-w-2xl mt-6">
                  Subject to any exceptions specified in these Terms and
                  Conditions, if you and AI WRITING IMPROVEMENT INC. O/A WRITING
                  HERO are unable to resolve any dispute through informal
                  discussion, then you and AI WRITING IMPROVEMENT INC. O/A
                  WRITING HERO agree to submit the issue first before a
                  non-binding mediator and to an arbitrator in the event that
                  mediation fails. The decision of the arbitrator will be final
                  and binding. Any mediator or arbitrator must be a neutral
                  party acceptable to both you and AI WRITING IMPROVEMENT INC.
                  O/A WRITING HERO. The costs of any mediation or arbitration
                  will be paid by the unsuccessful party. This is valid where
                  permitted by law.
                </p>
                <p className=" text-black  max-w-2xl mt-6 mb-6">
                  Notwithstanding any other provision in these Terms and
                  Conditions, you and AI WRITING IMPROVEMENT INC. O/A WRITING
                  HERO agree that you both retain the right to bring an action
                  in small claims court and to bring an action for injunctive
                  relief or intellectual property infringement.
                </p>

                <span className=" text-lg lg:text-xl font-bold h-fit ">
                  <u>European Union Users</u>
                </span>
                <p className=" text-black  max-w-2xl mt-6 mb-6">
                  If you live in the European Union, you will be protected by
                  the law of the country in which you reside.
                </p>

                <span className=" text-lg lg:text-xl font-bold h-fit ">
                  <u>Severability</u>
                </span>
                <p className=" text-black  max-w-2xl mt-6 mb-6">
                  If at any time any of the provisions set forth in these Terms
                  and Conditions are found to be inconsistent or invalid under
                  applicable laws, those provisions will be deemed void and will
                  be removed from these Terms and Conditions. All other
                  provisions will not be affected by the removal and the rest of
                  these Terms and Conditions will still be considered valid.
                </p>

                <span className=" text-lg lg:text-xl font-bold h-fit ">
                  <u>Changes</u>
                </span>
                <p className=" text-black  max-w-2xl mt-6 mb-6">
                  These Terms and Conditions may be amended from time to time in
                  order to maintain compliance with the law and to reflect any
                  changes to the way we operate our Site and the way we expect
                  users to behave on our Site. We will notify users by email of
                  changes to these Terms and Conditions or post a notice on our
                  Site.
                </p>

                <span className=" text-lg lg:text-xl font-bold h-fit ">
                  <u>Contact Details</u>
                </span>
                <p className=" text-black  max-w-2xl mt-6">
                  Please contact us if you have any questions or concerns. Our
                  contact details are as follows:
                </p>
                <p className=" text-black  max-w-2xl mt-6 mb-6">
                  Email: info@writinghero.ai – we will respond within one
                  business day Monday to Friday and within 48 hours if your
                  request is received after 5:00 PM EST on Friday. You can
                  generally expect a response within 18 hours between 9:00 AM
                  and 5:00 PM EST Monday to Friday, except during holidays. We
                  respond to all emails, so please be patient.
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
