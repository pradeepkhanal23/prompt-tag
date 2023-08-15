"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Navbar = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const [providers, setProviders] = useState(null);
  const isUserLoggedIn = true;

  useEffect(() => {
    const setProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    };
    // setProviders();
  }, []);
  return (
    <nav className=" p-5 flex justify-between items-center w-full ">
      <div className="flex items-center gap-2 ">
        <Link href="/">
          <Image
            src="/assests/images/logo.svg"
            alt="main-logo"
            width={50}
            height={50}
            className="object-contain"
          />
        </Link>
        <span className=" text-3xl  uppercase font-semibold hidden md:block ">
          hashtag
        </span>
      </div>

      {isUserLoggedIn ? (
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
              src="/assests/images/user.svg"
              alt="profile-image"
              width={50}
              height={50}
              className="rouded-full"
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

      <div className="block md:hidden items-center">
        {isUserLoggedIn ? (
          <div className="relative">
            <Image
              src="/assests/images/user.svg"
              alt="main-logo"
              width={50}
              height={50}
              className="object-contain rounded-full"
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
