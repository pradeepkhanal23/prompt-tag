"use client";

import PromptCard from "./PromptCard";

import { useState, useEffect } from "react";

const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 ">
      {data.map((post) => {
        return (
          <PromptCard
            key={post._id}
            post={post}
            handleTagClick={handleTagClick}
          />
        );
      })}
    </div>
  );
};

const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const [prompts, setPrompts] = useState([]);

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  useEffect(() => {
    const getPrompts = async () => {
      const response = await fetch("./api/prompt");

      const data = await response.json();

      setPrompts(data);
    };

    getPrompts();
  }, []);

  const handleTagClick = () => {
    console.log("Tag clicked");
  };

  return (
    <section className="my-10 w-full ">
      <form className="mb-10">
        <input
          required
          type="text"
          className="w-full md:w-2/3  p-3 mb-10 rounded-md shadow-custom outline-orange-500 dark:border dark:border-white"
          placeholder="Search for a tag or a username..."
          onChange={handleChange}
          value={searchText}
        />
      </form>

      <PromptCardList data={prompts} handleTagClick={handleTagClick} />
    </section>
  );
};
export default Feed;
