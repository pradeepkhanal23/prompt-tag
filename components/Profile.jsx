"use client";

import PromptCard from "./PromptCard";

const Profile = ({ name, desc, data, handleEdit, handleDelete }) => {
  return (
    <section className="w-[90%] mx-auto max-w-6xl ">
      <h2 className="text-center text-5xl secondary_text mt-10 mb-3 font-bold">
        {name}
        <span className="primary_text">{` `}Profile</span>
      </h2>
      <p className="text-gray-500 text-center text-xl mb-10">
        <q>{desc}</q>
      </p>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 ">
        {data.map((post) => {
          return (
            <PromptCard
              key={post._id}
              post={post}
              handleDelete={() => handleDelete && handleDelete(post)}
              handleEdit={() => handleEdit && handleEdit(post)}
            />
          );
        })}
      </div>
    </section>
  );
};
export default Profile;
