import React from "react";
import InCart from "./InCart";
import CartInfo from "./CartInfo";

type Props = {};

const CartMain = (props: Props) => {
  return (
    <div className="content-container">
      <div className="grid grid-cols-3">
        {/*  */}
        <div className="col-span-2">
          <InCart />
        </div>
        {/*  */}
        <div className="col-span-1">
          <CartInfo />
        </div>
      </div>
    </div>
  );
};

export default CartMain;
