import { type NextPage } from "next";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { api } from "~/utils/api";
import { LoadingPage } from "~/components/loading";
dayjs.extend(relativeTime);

const ProfilePage: NextPage = () => {
  const { data, isLoading } = api.profile.getUserByUsername.useQuery({
    username: "johndoe",
  });

  if (isLoading) return <LoadingPage />;
  if (!data) return <div>Something went wrong</div>;

  return (
    <>
      <main className="flex h-screen justify-center ">
        <div className="flex h-full flex-col">{data.username}</div>
      </main>
    </>
  );
};

export default ProfilePage;
