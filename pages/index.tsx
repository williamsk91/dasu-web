import type { NextPage } from "next";
import Head from "next/head";

import { Contact } from "../components/Contact";
import { DemoBook } from "../components/DemoBook";
import { Features } from "../components/Features";
import { Logo } from "../components/Logo";
import { Spacer } from "../components/Spacer";
import { Steps } from "../components/Steps";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Dasu | Publish Book Online</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center max-w-5xl p-12 mb-24 mx-auto">
        <div className="sticky top-12 w-full py-4">
          <Logo />
        </div>

        <h1 className="text-7xl text-slate-600 text-center mt-28 leading-tight">
          Publish Your{" "}
          <span className="underline decoration-wavy decoration-red-500">
            Book
          </span>
          <br />
          Online for Free
        </h1>

        <Spacer />
        <DemoBook />

        <Spacer />
        <Contact />

        <Spacer />
        <Features />

        <Spacer />
        <Steps />
      </main>
    </div>
  );
};

export default Home;
