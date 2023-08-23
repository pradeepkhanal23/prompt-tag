"use client";

import Profile from "@components/Profile";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const MyProfile = () => {
  const { data: session } = useSession();
  const [posts, setPosts] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`./api/users/${session?.user.id}/posts`);

      const data = await response.json();

      setPosts(data);
    };

    if (session?.user.id) fetchPosts();
  }, [session?.user.id]);

  console.log(posts);

  const handleEdit = async (post) => {
    return router.push(`./update-prompt?id=${post._id}`);
  };

  const handleDelete = async (post) => {
    const postId = post._id;
    const confirmation = confirm("Are you sure you wanna delete this propmt?");

    if (confirmation) {
      try {
        await fetch(`/api/prompt/${postId}`, {
          method: "DELETE",
        });

        const filteredPosts = posts.filter((item) => {
          return item._id !== post._id;
        });

        setPosts(filteredPosts);
      } catch (error) {
        console.log(error);
      }
    }
  };

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
