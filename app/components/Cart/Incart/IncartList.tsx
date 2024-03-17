import { formatVND } from "@/app/libs/format";
import {
  Delete,
  DeleteOutline,
  FavoriteBorder,
  HeartBroken,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";

type Props = {
  item: CartItemType;
};

const IncartList = ({ item }: Props) => {
  return (
    <div className="grid grid-cols-4 justify-between gap-4">
      {/* img */}
      <div className="col-span-1 w-32 max-h-36">
        <img
          className="w-full h-auto"
          src={item.specificProduct.images[0]}
          alt="image"
        />
      </div>
      {/* info */}
      <div className="flex flex-col col-span-2">
        <div>{item.genericProduct.name}</div>
        <div>{item.categoryName}</div>
        <div>{item.genericProduct.name}</div>
        <div className="flex flex-row">
          <div>{item.sizeName}</div>
          <div>{item.quantity}</div>
        </div>
        {/* button group */}
        <div className="flex flex-row">
          <IconButton>
            <FavoriteBorder />
          </IconButton>
          <IconButton>
            <DeleteOutline />
          </IconButton>
        </div>
      </div>
      {/* price */}
      <div className="col-span-1 text-right">
        {formatVND(item.specificProduct.price! * item.quantity)}
      </div>
    </div>
  );
};

export default IncartList;
