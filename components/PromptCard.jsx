"use-client";

import { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

const PromptCard = ({ post }) => {
  return (
    <article className="shadow-custom p-4 rounded-md border-gray-400 backdrop-blur-lg bg-white ">
      <div className="flex items-center justify-between gap-x-3 mb-5">
        <div className="flex items-center gap-2">
          <Image
            src={post?.creator.image}
            alt="profile-image"
            width={30}
            height={30}
            className="h-8 w-8 rounded-full border-[#2b6cb0] border-2 p-0.5 cursor-pointer"
          />
          <div className="flex flex-col justify-start text-sm">
            <h4 className="self-start font-bold">{post?.creator.username}</h4>
            <p className="text-gray-500">{post?.creator.email}</p>
          </div>
        </div>
        <div className="h-full w-8 rounded-full bg-gray-200 mb-1 p-2 cursor-pointer">
          <Image
            alt="copy-image"
            src="/assests/images/copy.svg"
            width={25}
            height={25}
            className="h-full w-full object-contain "
          />
        </div>
      </div>
      <div className="flex flex-col gap-y-3 text-left ">
        <p className="para_text w-full">{post.prompt}</p>
        <p className="secondary_text w-full cursor-pointer">{post.tag}</p>
      </div>
    </article>
  );
};
export default PromptCard;
