"use-client";

import { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

const PromptCard = ({ post, handleTagClick, handleDelete, handleEdit }) => {
  const { data: session } = useSession();
  const pathName = usePathname();
  const router = useRouter();
  const [copy, setCopy] = useState("");

  const handleCopy = () => {
    setCopy(post.prompt);
    navigator.clipboard.writeText(post.prompt);
    setTimeout(() => {
      setCopy("");
    }, 2000);
  };

  return (
    <article className="shadow-custom rounded-md p-3 border-gray-400 backdrop-blur-lg bg-white dark:bg-black/20 dark:border-white dark:border-2 dark:text-slate-200 h-auto w-auto">
      <div className="grid grid-cols-1 grid-rows-3 h-full w-full    ">
        <div className="flex items-center justify-between gap-x-3">
          <div className="flex items-center gap-2">
            <Image
              src={post?.creator.image}
              alt="profile-image"
              width={30}
              height={30}
              className="h-8 w-8 rounded-full border-[#2b6cb0] border-2 p-0.5 "
            />
            <div className="flex flex-col justify-start text-sm tracking-tighter">
              <h4 className="self-start font-bold">{post?.creator.username}</h4>
              <p className="text-gray-500">{post?.creator.email}</p>
            </div>
          </div>
          <div
            className="h-9 w-9 rounded-full bg-gray-100 mb-1 p-2 cursor-pointer "
            onClick={handleCopy}
          >
            <Image
              alt="copy-image"
              src={
                copy === post.prompt
                  ? "/assests/images/checks.svg"
                  : "/assests/images/copy.svg"
              }
              width={25}
              height={25}
              className="h-full w-full object-contain "
            />
          </div>
        </div>
        <div className="w-full h-full text-left  ">
          <p className="para_text w-full tracking-tighter dark:text-white">
            {post.prompt}
          </p>
        </div>

        <div className="h-auto w-full text-left flex">
          <span
            className="secondary_text w-full tracking-tighter cursor-pointer self-center break-words dark:text-blue-400 "
            onClick={() => {
              handleTagClick && handleTagClick(post.tag);
            }}
          >
            {post.tag}
          </span>
        </div>

        {session?.user.id === post.creator._id && pathName === "/profile" && (
          <div className="flex items-center gap-5 justify-end px-3 pb-2">
            <button
              className="text-green-500  cursor-pointer drop-shadow-sm"
              onClick={handleEdit}
            >
              Edit
            </button>
            <button
              className="text-red-500 cursor-pointer drop-shadow-sm"
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>
        )}
      </div>
    </article>
  );
};
export default PromptCard;
