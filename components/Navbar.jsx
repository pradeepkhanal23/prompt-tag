"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Navbar = () => {
  const isNavOpen = true;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [providers, setProviders] = useState(null);
  const isUserLoggedIn = true;

  useEffect(() => {
    const setProviders = async () => {
      const response = await getProviders();

      setProviders(response);
    };
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
        <span className=" text-3xl uppercase font-semibold hidden md:block ">
          hashtag
        </span>
      </div>

      {isUserLoggedIn ? (
        <div className="hidden md:flex items-center  space-x-4 cursor-pointer">
          <Link
            href="/create-prompt"
            className="text-white bg-orange-500 px-4 py-2 rounded-lg"
          >
            Create Post
          </Link>
          <button
            className="text-black px-4 py-1.5 rounded-lg border-2 border-black"
            type="button"
          >
            Sign Out
          </button>

          <Link href="/profile">
            <Image
              src="/assests/images/logo.svg"
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
                  className="text-black px-4 py-1.5 rounded-lg border-2 border-black"
                >
                  Sign In
                </button>
              );
            })}
        </>
      )}

      {isNavOpen && (
        <div className="block md:hidden items-center pt-2 md:pt-0">
          <button className="relative" onClick={(prev) => !prev}>
            <Image
              src="/assests/images/menu.svg"
              alt="main-logo"
              width={50}
              height={50}
              className="object-contain"
            />
          </button>
        </div>
      )}
      {isDropdownOpen && (
        <div
          className="absolute w-40 top-0 right-0 bottom-0 left-0 mt-2 md:hidden border-b border-gray-800 rounded-md"
          style={{ zIndex: 100 }}
        >
          <ul>
            <li>
              <a href="#">My Profile</a>
            </li>
            <li>
              <a href="#">Login</a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
