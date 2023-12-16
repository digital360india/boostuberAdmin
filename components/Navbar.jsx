// TopNavbar.js

import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className=" h-16 bg-white  opacity-70 fixed top-4 right-8 rounded-xl backdrop-blur-2xl ml-5 w-[82vw]" >
      <div className="flex items-center justify-between h-full px-4">
        <div className="text-sm font-light">
          Home/ Pages / <p className="text-base font-normal">Dashboard</p>
        </div>
        <div className="flex gap-3 items-center justify-center align-middle">
          <svg
            width="30px"
            height="64px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">

              <path
                d="M5 21C5 17.134 8.13401 14 12 14C15.866 14 19 17.134 19 21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </g>
          </svg>

          <Link href="/" className="text-sm font-normal  ">
            Sign Out
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
