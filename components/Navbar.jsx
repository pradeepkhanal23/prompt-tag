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
            priority="high"
            src="/assests/images/logo.svg"
            alt="main-logo"
            width={50}
            height={50}
            className="object-contain"
          />
        </Link>
        <p className=" text-3xl secondary_text  uppercase font-semibold hidden sm:flex ">
          promp <span className="primary_text">tag</span>
        </p>
      </div>

      {/* Desktop view */}
      <div className="hidden sm:flex items-center  space-x-4 cursor-pointer">
        {session?.user ? (
          <div className="flex items-center justify-between gap-x-3">
            <Link
              href="/create-prompt"
              className="text-white primary_bg px-4 py-2 rounded-lg"
            >
              Create Post
            </Link>

            <button
              type="button"
              onClick={signOut}
              className="text-black btn border-2 border-black"
            >
              Sign Out
            </button>

            <Link href="/profile">
              <Image
                src={session?.user.image}
                width={37}
                height={37}
                className="h-11 w-11 rounded-full border-[#2b6cb0] border-2 p-0.5"
                alt="profile-image"
              />
            </Link>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => {
                    signIn(provider.id);
                  }}
                  className="text-black btn border-2 border-black"
                >
                  Sign in
                </button>
              ))}
          </>
        )}
      </div>

      {/* Mobile View */}
      <div className="sm:hidden flex relative">
        {session?.user ? (
          <div className="flex">
            <Image
              src={session?.user.image}
              width={37}
              height={37}
              className="h-11 w-11 rounded-full border-[#2b6cb0] border-2 p-0.5"
              alt="profile"
              onClick={() => setToggleDropdown(!toggleDropdown)}
            />

            {toggleDropdown && (
              <div
                className="dropdown_menu"
                style={{
                  zIndex: 100,
                }}
              >
                <Link
                  href="/profile"
                  onClick={() => setToggleDropdown(false)}
                  className="para_text"
                >
                  My Profile
                </Link>
                <Link
                  href="/create-prompt"
                  className="para_text"
                  onClick={() => setToggleDropdown(false)}
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
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => {
                    signIn(provider.id);
                  }}
                  className="text-black btn border-2 border-black"
                >
                  Sign in
                </button>
              ))}
          </>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
