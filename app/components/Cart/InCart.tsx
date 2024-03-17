"use client";
import { formatVND } from "@/app/libs/format";
import useCartStore, { selectCartStoreState } from "@/stores/useCartStore";
import { Close } from "@mui/icons-material";
import React, { useState } from "react";
import IncartList from "./Incart/IncartList";

type Props = {};

const InCart = (props: Props) => {
  const [isOpenFreeShipping, setIsOpenFreeShipping] = useState(true);
  const cart = useCartStore(selectCartStoreState);
  return (
    <div className="w-full flex flex-col">
      {/* FREE SHIPPING */}
      {isOpenFreeShipping && (
        <div className="flex justify-between w-full bg-zinc-200 px-3 py-2 items-center">
          <div className="flex flex-col">
            <div className="font-semibold uppercase text-md tracking-wider">
              free shipping
            </div>
            <p className="text-xs">
              Applied to orders of {formatVND(5000000)} or more.
            </p>
          </div>
          <div onClick={() => setIsOpenFreeShipping(false)}>
            <Close fontSize="small" />
          </div>
        </div>
      )}

      {/* In cart */}
      <div className="flex flex-col">
        <div className="capitalize text-3xl font-semibold">bag</div>
        <div className="flex flex-col gap-8">
          {cart.items.map((item, _id) => (
            <IncartList item={item} key={_id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default InCart;
