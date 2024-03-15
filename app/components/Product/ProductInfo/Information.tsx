import { formatVND } from "@/app/libs/format";
import useProductStore, {
  selectSpecificProductStoreState,
  setSpecificProductStoreState,
} from "@/stores/useProductStore";
import React, { useState } from "react";

type Props = {
  product: ProductResponseType;
};

const Information = ({ product }: Props) => {
  const { category, specificList, genericProduct } = product;
  const [pickedSize, setPickedSize] = useState<number | null>(null);
  const [isSubmit, setIsSubmit] = useState(false);
  // const [selectedSpecific, setSelectedSpecific] = useState(
  //   specificList[0].specificId
  // );
  // store
  const currentSpecific = useProductStore(selectSpecificProductStoreState);
  const setSpecific = useProductStore(setSpecificProductStoreState);

  const addToCartClickHandler = () => {
    setIsSubmit(true);
  };
  return (
    <div className="flex flex-col">
      <div className="capitalize ">{category?.name}</div>
      <div className=" font-bold text-black text-2xl uppercase">
        {genericProduct?.name}
      </div>
      <div className="text-black pt-4 font-semibold">
        {specificList[0].price && formatVND(specificList[0].price)}
      </div>
      {/* COLOR PICK */}
      <div className="pt-7">
        <div className="capitalize text-black mb-1 font-semibold">color</div>
        <div className="flex flex-row gap-2">
          {specificList.map((v) => (
            <div
              className={
                "cursor-pointer transition-all hover:opacity-60 w-16 max-h-20  " +
                `${
                  currentSpecific?.specificId === v.specificId
                    ? "border-black border"
                    : ""
                } rounded-md`
              }
              onClick={() =>
                v.specificId !== currentSpecific?.specificId && setSpecific(v)
              }
              key={v.specificId}
            >
              <img
                src={v.images[0]}
                className="w-full h-auto rounded-md"
                alt="image"
              />
            </div>
          ))}
        </div>
      </div>
      {/* SIZE PICK */}
      <div className="flex flex-col pt-7">
        <div className="flex flex-row justify-between">
          <div
            className={`capitalize ${
              isSubmit && !pickedSize ? "text-red-600" : "text-black"
            } mb-3 font-semibold`}
          >
            select size
          </div>
          <div className="capitalize text-zinc-400">size guide</div>
        </div>
        {/* SIZE LIST */}
        <ul
          className={
            "grid grid-cols-4 gap-3" +
            ` ${isSubmit && !pickedSize && "border border-red-600 rounded"}`
          }
        >
          {currentSpecific?.sizes?.map((v) => (
            <li
              key={v.id}
              className={
                "border grid-cols-1 font-semibold text-black rounded text-center py-2 cursor-pointer transition-all hover:opacity-60 " +
                `${v.id === pickedSize ? "border-black" : "border-zinc-300"}`
              }
              onClick={() => {
                setIsSubmit(false);
                setPickedSize(v.id!);
              }}
            >
              {v.name}
            </li>
          ))}
        </ul>
        {isSubmit && !pickedSize && (
          <div className="text-red-600 mt-2">Please select a size.</div>
        )}

        {/* Button group */}
        <div className="grid grid-rows-2 gap-2 pt-7">
          <button
            className="rounded-full hover:opacity-70 transition-all  text-white w-full py-3 font-semibold bg-[#A09A93] "
            onClick={addToCartClickHandler}
          >
            Add to cart
          </button>

          <button className="rounded-full hover:opacity-70 transition-all border text-black font-semibold  w-full py-3 border-zinc-300 ">
            Favourite
          </button>
        </div>
        {/* Description */}
        <div className="mt-8 text-black">{genericProduct?.description}</div>
      </div>
    </div>
  );
};

export default Information;
