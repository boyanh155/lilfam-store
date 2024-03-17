"use client";
import { formatVND } from "@/app/libs/format";
import useCartStore, { selectCartStoreState } from "@/stores/useCartStore";
import { Info } from "@mui/icons-material";
import React from "react";

type Props = {};

const CartInfo = (props: Props) => {
  const cart = useCartStore(selectCartStoreState);
  return (
    <div className="flex flex-col px-4">
      <div className="capitalize font-semibold">summary</div>
      {/* INFO */}
      <div className="pt-8 pb-5">
        <div className="flex justify-between">
          <div>
            Subtotal
            <Info />
          </div>
          <div>{formatVND(cart.total)}</div>
        </div>
        {/* SHIPPING */}
        <div className="flex justify-between">
          <div className="capitalize">estimate delivery & handling</div>
          <div>{formatVND(250000)}</div>
        </div>
      </div>
      {/* TOTAL */}
      <div className="w-full border-y py-3 mb-8">
        <div className=" flex justify-between">
          <div className="capitalize">
            Total
            <Info />
          </div>
          <div>{formatVND(cart.total + 250000)}</div>
        </div>
      </div>

      {/* Button group */}
      <div className="flex flex-col items-stretch gap-2">
        <button className="bg-black text-white rounded-full py-4 capitalize font-semibold text-sm">
          guest checkout
        </button>
        <button className="bg-black text-white rounded-full py-4 capitalize font-semibold text-sm">
          memeber checkout
        </button>
      </div>
    </div>
  );
};

export default CartInfo;
