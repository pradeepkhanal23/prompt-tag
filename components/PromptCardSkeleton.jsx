import React from "react";

const PromptCardSkeleton = () => {
  return (
    <article className="shadow-custom p-4 rounded-md border-gray-400 backdrop-blur-lg bg-white dark:bg-black/20 dark:border-white dark:border-2 dark:text-slate-200">
      <div className="flex flex-col">
        <div className="flex items-center justify-between gap-x-3 mb-5">
          <figure className="flex items-center gap-2">
            {/* Placeholder for profile image */}
            <div className="h-8 w-8 rounded-full bg-gray-200 animate-pulse"></div>
            <div className="flex flex-col gap-2 justify-start text-sm tracking-tighter">
              {/* Placeholder for username */}
              <h4 className="self-start font-bold bg-gray-200 animate-pulse w-20 h-4"></h4>
              {/* Placeholder for email */}
              <p className="text-gray-500 bg-gray-200 animate-pulse w-24 h-3"></p>
            </div>
          </figure>
          <figure className="h-9 w-9 rounded-full bg-gray-100 mb-1 p-2 cursor-pointer">
            {/* Placeholder for copy icon */}
          </figure>
        </div>
        <div className="flex flex-col gap-y-2 text-left">
          {/* Placeholder for prompt text */}
          <p className="para_text w-full tracking-tighter dark:text-white bg-gray-200 animate-pulse h-32"></p>

          {/* Placeholder for tag */}
          <span className="secondary_text w-20 cursor-pointer break-words dark:text-blue-400 bg-gray-200 animate-pulse h-3"></span>

          {/* Placeholder for edit and delete buttons */}
          <div className="flex items-center gap-5 justify-end px-3">
            <button className="text-green-500 cursor-pointer drop-shadow-sm bg-gray-200 animate-pulse w-16 h-4"></button>
            <button className="text-red-500 cursor-pointer drop-shadow-sm bg-gray-200 animate-pulse w-16 h-4"></button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default PromptCardSkeleton;
