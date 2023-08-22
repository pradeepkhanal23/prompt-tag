"use client";

import Profile from "@components/Profile";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

const MyProfile = () => {
  const { data: session } = useSession();
  const [posts, setPosts] = useState([]);
  const handleEdit = () => {
    console.log("edit clicked");
  };
  const handleDelete = () => {
    console.log("delete clicked");
  };

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`./api/users/${session?.user.id}/posts`);

      const data = await response.json();

      setPosts(data);
    };

    if (session?.user.id) fetchPosts();
  }, [session?.user.id]);

  return (
    <Profile
      name="My"
      desc="Welcome to my personalized profile section"
      data={posts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};
export default MyProfile;
