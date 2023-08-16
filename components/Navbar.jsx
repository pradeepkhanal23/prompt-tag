"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Navbar = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const [providers, setProviders] = useState(null);
  const { data: session } = useSession();

  useEffect(() => {
    const fetchProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    };
    fetchProviders();
  }, []);
  return (
    <nav className=" p-5 flex justify-between items-center w-full ">
      <div className="flex items-center gap-1">
        <Link href="/">
          <Image
            src="/assests/images/logo.svg"
            alt="main-logo"
            width={50}
            height={50}
            className="object-contain"
          />
        </Link>
        <span className=" text-3xl secondary_text  uppercase font-semibold hidden md:block ">
          hashtag
        </span>
      </div>

      {/* Desktop view */}

      {session?.user ? (
        <div className="hidden md:flex items-center  space-x-4 cursor-pointer">
          <Link
            href="/create-prompt"
            className="text-white primary_bg px-4 py-2 rounded-lg"
          >
            Create Post
          </Link>
          <button
            className="text-black btn border-2 border-black"
            type="button"
            onClick={signOut}
          >
            Sign Out
          </button>

          <Link href="/profile">
            <Image
              src={session?.user.image}
              alt="profile-image"
              width={50}
              height={50}
              className="h-11 w-11 rounded-full border-[#2b6cb0] border-2 p-0.5 "
            />
          </Link>
        </div>
      ) : (
        <>
          {providers &&
            Object.values(providers).map((provider) => {
              return (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="text-black btn border-2 border-black"
                >
                  Sign In
                </button>
              );
            })}
        </>
      )}

      {/* Mobile View */}
      <div className="flex md:hidden items-center">
        {session?.user ? (
          <div className="relative ">
            <Image
              src={session?.user.image}
              alt="main-logo"
              width={50}
              height={50}
              className="h-11 w-11 rounded-full border-[#2b6cb0] border-2 p-0.5 "
              onClick={() => {
                setToggleDropdown((prev) => !prev);
              }}
            />
            {toggleDropdown && (
              <div className="dropdown_menu" style={{ zIndex: 100 }}>
                <Link
                  href="/profile"
                  onClick={() => {
                    setToggleDropdown(false);
                  }}
                  className="para_text"
                >
                  My Profile
                </Link>
                <Link
                  href="/create-prompt"
                  onClick={() => {
                    setToggleDropdown(false);
                  }}
                  className="para_text"
                >
                  Create Prompt
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    setToggleDropdown(false);
                    signOut();
                  }}
                  className="text-white btn w-full  border-2 bg-black"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => {
                return (
                  <button
                    type="button"
                    key={provider.name}
                    onClick={() => signIn(provider.id)}
                    className="text-black btn border-2 border-black"
                  >
                    Sign In
                  </button>
                );
              })}
          </>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
