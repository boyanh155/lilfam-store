import { formatVND } from "@/app/libs/format";
import useCartStore, {
  addToCartStoreState,
  resetNewItemStoreState,
  selectCartStoreState,
  selectNewItemStoreState,
} from "@/stores/useCartStore";
import { Check, Close } from "@mui/icons-material";
// import { Link } from "@/app/libs/i18nNavigation";
import Link from "next/link";

import React, { useEffect } from "react";
import { useTranslations } from "next-intl";

type Props = {};

const CartPopup = (props: Props) => {
  const newItem = useCartStore(selectNewItemStoreState);
  const cart = useCartStore(selectCartStoreState);
  const _resetNewItem = useCartStore(resetNewItemStoreState);
  const resetNewItem = () => _resetNewItem();
  const t = useTranslations("Product");
  console.log('cart popup')
  // useEffect(() => {
  //   setTimeout(resetNewItem, 5000);
  // }, [newItem]);
  return (
    newItem && (
      <div
        className=" fixed  w-screen inset-x-0  bg-black/80 rg h-full"
        onClick={resetNewItem}
      >
        <div
          className="relative  top-0 left-0 bottom-0"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="bg-white w-96 h-[270px] px-4 absolute right-16 top-0 z-50">
            {/*  HEADER */}
            <div className="flex flex-row justify-between py-4">
              <div className="font-semibold text-black flex items-center">
                <div className=" me-3 success w-3.5 h-3.5 rounded-full flex justify-center items-center bg-green-700">
                  <Check
                    className="text-white"
                    sx={{
                      fontSize: 10,
                    }}
                  />
                </div>
                <p className="capitalize">{t("added_to_cart")}</p>
              </div>
              <div onClick={resetNewItem}>
                <Close className="text-black cursor-pointer font-thin" />
              </div>
            </div>
            {/* ITEM */}
            <div className="flex gap-4 px-2 mt-2 ">
              {/* IMG */}
              <div className="w-24 h-14">
                <img
                  className="w-full h-auto"
                  src={newItem?.specificProduct.images[0]}
                  alt="image"
                />
              </div>
              {/* INFO */}
              <div className="flex flex-col gap-1.5 justify-center">
                <div className="text-black uppercase font-semibold">
                  {newItem?.genericProduct.name}
                </div>
                <div className="capitalize text-sm">
                  {newItem?.categoryName}
                </div>
                <div className=" text-sm">{newItem?.sizeName}</div>
                <div className="text-black">
                  {formatVND(newItem?.specificProduct.price!)}
                </div>
              </div>
            </div>
            {/* BUTTON GROUP */}
            <div className="flex flex-row justify-evenly mt-8">
              <Link href="/en/cart">
                <div className=" w-100 h-100 rounded-full border hover:opacity-70 transition-all border-zinc-200 text-black font-semibold px-8 py-4 capitalize bg-white">
                  {t("view_cart")}
                  {` (${cart.quantity})`}
                </div>
              </Link>
              <Link href="/en/cart">
                <div className=" w-100 h-100 rounded-full border hover:opacity-70 transition-all border-zinc-200 text-white font-semibold px-8 py-4 capitalize bg-black">
                  {t("check_out")}
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default CartPopup;
