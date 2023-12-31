"use-client";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className="px-5 border border-gray-200 bg-white/10 py-10 mx-auto mt-10  backdrop-blur-md shadow-custom w-[95%] rounded-lg max-w-5xl flex flex-col  gap-y-5">
      <h1 className="text-4xl capitalize font-semibold secondary_text">
        {type} <span className="text-orange-500">Post</span>
      </h1>
      <p className="para_text w-full text-lg">
        <q>
          {type} and share amazing prompts with the world and let your
          imagination run wild with any AI powered platform.
        </q>
      </p>

      <form onSubmit={handleSubmit} className="para_text">
        <div className="flex flex-col gap-y-3">
          <label htmlFor="prompt" className="font-bold">
            Your AI Prompt
          </label>
          <textarea
            name="prompt"
            id="prompt"
            cols="30"
            rows="10"
            value={post.prompt}
            className="p-3 rounded-lg focus:outline-orange-500 "
            placeholder="Enter your prompt here......"
            onChange={(e) => {
              setPost({ ...post, prompt: e.target.value });
            }}
          ></textarea>
          <label htmlFor="prompt" className="font-bold ">
            Tag{` `}
            <span>(#webdevelopment,#product,#idea)</span>
          </label>
          <input
            type="text"
            className="p-3 rounded-lg focus:outline-orange-500"
            placeholder="#webdevelopment,#product,#idea...."
            value={post.tag}
            onChange={(e) => {
              setPost({
                ...post,
                tag: e.target.value,
              });
            }}
          />
        </div>

        <div className="flex items-center justify-end w-[90%] mx-auto gap-x-4 mt-5 -end">
          <button className="px-8 py-2 rounded-md  primary_bg text-white  cursor-pointer">
            {submitting ? `${type}...` : type}
          </button>
          <button className="px-8 py-2 rounded-md border-2 border-black cursor-pointer">
            Cancel
          </button>
        </div>
      </form>
    </section>
  );
};
export default Form;
