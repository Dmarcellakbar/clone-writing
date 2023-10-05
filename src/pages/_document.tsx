/* eslint-disable @next/next/no-title-in-document-head */
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
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
        <meta property="og:image" content="/headrobo.svg" />
        <meta
          property="og:url"
          content="https://www.facebook.com/WritingHeroAI/"
        />
        <meta property="og:type" content="website" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
