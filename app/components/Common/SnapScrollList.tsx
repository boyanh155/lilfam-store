import React from "react";
import { popularItem } from "../Home/dummyData/popular";
import Image from "next/image";

type Props = {
  data: popularItem[];
};

const SnapScrollList = ({ data }: Props) => {
  return (
    <div className="flex overflow-x-scroll gap-10 snap-x snap-mandatory">
      <div className=" basis-48 snap-center flex-shrink-0"></div>
      {data.map((v, i) => (
        <div
          key={i}
          className="snap-center basis-64 flex-shrink-0 landing_card gap-6"
        >
          <div className="img_wrapper h-32 w-full">
            <Image
              src={v.img}
              alt="Shoes"
              className="content-center align-middle"
            />
          </div>
          <div className="items-start text-start ">
            <p className="card-title text-base font-medium">{v.name}</p>
            <p className="text-sm text-zinc-400">{v.category}</p>
          </div>
          <div className="flex justify-between content-center">
            <button className="yellow-button rounded-bt">{v.price}$</button>

            <div className="button-arrow rounded-bt">See more</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SnapScrollList;
