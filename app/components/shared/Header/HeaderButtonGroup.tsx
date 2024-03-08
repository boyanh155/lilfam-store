import React from "react";

import userIcon from "@/app/assets/imgs/icons/icon-user.svg";
import heartIcon from "@/app/assets/imgs/icons/icon-heart.svg";
import cartIcon from "@/app/assets/imgs/icons/icon-cart.svg";
import Image from "next/image";
type Props = {};

const HeaderButtonGroup = (props: Props) => {
  return (
    <div className="grid grid-cols-3 w-full">
      <div className="col-span-2 flex bg-zinc-100 rounded-box px-4 py-1 h-9">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-full"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          style={{
            marginLeft: "-5px",
          }}
          type="text"
          className="input bg-transparent h-full text-dark-main"
          placeholder="Search"
        />
      </div>
      <div className="col-span-1 grid grid-cols-3 content-center justify-items-center">
        <Image
          className="col-span-1 hover:opacity-60 cursor-pointer transition-opacity text-dark-main"
          src={userIcon}
          alt="user"
        />
        <Image
          className="col-span-1 hover:opacity-60 cursor-pointer transition-opacity text-dark-main"
          src={heartIcon}
          alt="heart"
        />
        <Image
          className="col-span-1 hover:opacity-60 cursor-pointer transition-opacity text-dark-main"
          src={cartIcon}
          alt="cart"
        />
      </div>
    </div>
  );
};

export default HeaderButtonGroup;
