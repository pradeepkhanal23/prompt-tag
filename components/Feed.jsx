"use client";
import PromptCard from "./PromptCard";
import { useState, useEffect } from "react";
import PromptCardSkeleton from "./PromptCardSkeleton";

const PromptCardList = ({ data, handleTagClick, loading }) => {
  if (loading) {
    return <PromptCardSkeleton />;
  }

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {data &&
        data.map((card) => {
          return (
            <PromptCard
              key={card._id}
              post={card}
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
  const [loading, setLoading] = useState(true);

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  useEffect(() => {
    const getPrompts = async () => {
      try {
        const response = await fetch("./api/prompt");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();

        setPrompts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    getPrompts();
  }, []);

  const handleTagClick = () => {
    console.log("Tag clicked");
  };

  return (
    <section className="my-10 w-full">
      <form className="mb-10">
        <input
          required
          type="text"
          className="w-full md:w-2/3 p-3 mb-10 rounded-md shadow-custom outline-orange-500 dark:bg-black/20 dark:border dark:border-white"
          placeholder="Search for a tag or a username..."
          onChange={handleChange}
          value={searchText}
        />
      </form>

      <PromptCardList
        data={prompts}
        handleTagClick={handleTagClick}
        loading={loading}
      />
    </section>
  );
};

export default Feed;
