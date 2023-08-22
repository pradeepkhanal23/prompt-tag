import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="flex flex-col items-center max-w-6xl p-5 rounded-lg  w-[98%] mx-auto text-center ">
      <div className="text-black ">
        <h1 className="text-5xl font-bold secondary_text ">Discover & Share</h1>
        <p className="primary_text text-5xl font-bold">Ideas &</p>
        <p className="primary_text text-5xl font-bold">Prompts</p>
      </div>
      <p className="text-xl para_text  mt-5 w-full  ">
        PromptTag, a remarkable and forward-thinking open-source AI prompting
        tool, emerges as an innovative solution designed for the contemporary
        world.
      </p>
      <Feed />
    </section>
  );
};
export default Home;
