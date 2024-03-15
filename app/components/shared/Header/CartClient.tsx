"use client";

import Image from "next/image";
import React from "react";
import cartIcon from "@/app/assets/imgs/icons/icon-cart.svg";
import useCartStore, { selectCartStoreState } from "@/stores/useCartStore";

type Props = {};

const CartClient = (props: Props) => {
  const cart = useCartStore(selectCartStoreState);

  return (
    <div>
      <Image
        className="col-span-1 hover:opacity-60 cursor-pointer transition-opacity text-dark-main"
        src={cartIcon}
        alt="cart"
      />
      <div>{cart.quantity}</div>
    </div>
  );
};

export default CartClient;
