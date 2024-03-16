"use client";

import Image from "next/image";
import React from "react";
import cartIcon from "@/app/assets/imgs/icons/icon-cart.svg";
import useCartStore, { selectCartStoreState } from "@/stores/useCartStore";

type Props = {};

const CartClient = (props: Props) => {
  const cart = useCartStore(selectCartStoreState);

  return (
    <div className="relative">
      <Image
        className="col-span-1 hover:opacity-60 cursor-pointer transition-opacity text-dark-main"
        src={cartIcon}
        alt="cart"
      />
      <div className="absolute -top-2 -right-2.5 bg-dark-main rounded-box text-white h-4 w-4 text-xs text-center">
        {cart.quantity}
      </div>
    </div>
  );
};

export default CartClient;
