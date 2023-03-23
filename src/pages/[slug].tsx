import { type NextPage } from "next";
import Head from "next/head";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

const ProfilePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>t3 emoji</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex h-screen justify-center ">
        <div className="flex h-full flex-col">Profile View</div>
      </main>
    </>
  );
};

export default ProfilePage;
