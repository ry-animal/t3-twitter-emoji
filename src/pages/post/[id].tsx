import { type NextPage } from "next";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

const SinglePostPage: NextPage = () => {
  return (
    <>
      <main className="flex h-screen justify-center ">
        <div className="flex h-full flex-col">Post View</div>
      </main>
    </>
  );
};

export default SinglePostPage;
