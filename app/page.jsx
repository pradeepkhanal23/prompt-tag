"use client";

import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="flex flex-col items-center max-w-7xl p-5 rounded-lg  w-[98%] mx-auto text-center ">
      <div className="text-black ">
        <p className="text-5xl font-bold secondary_text dark:text-orange-500">
          Discover &
        </p>
        <p className="primary_text text-5xl font-bold"> Share</p>
        <p className="primary_text text-5xl font-bold">Ideas & Prompts</p>
      </div>
      <p className="text-xl para_text dark:text-slate-100 mt-5 w-[90%] tracking-tight ">
        PromptTag, a remarkable and forward-thinking open-source AI prompting
        tool, emerges as an innovative solution designed for the contemporary
        world.
      </p>
      <Feed />
    </section>
  );
};
export default Home;
