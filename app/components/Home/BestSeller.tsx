import React from "react";
import { bestSellerData } from "./bestsellerData/data";
import Image from "next/image";
import Title from "./common/Title";

type Props = {};

const BestSeller = (props: Props) => {
  return (
    <div className="flex flex-col content-container pt-14 ">

      <Title title="best seller" />

      <div className="grid row-span-1 mt-14 grid-rows-1 grid-cols-1 gap-20 md:grid-cols-3">
        {bestSellerData.map((v, i) => (
          <div key={i} className="col-span-1 landing_card">
            <div className="  h-52 img_wrapper">
              <Image
                src={v.img}
                alt="Shoes"
                className="content-center align-middle "
              />
            </div>
            <div className="card-body items-center text-center">
              <p className="card-title text-base font-medium">{v.name}</p>
              <p className="text-sm text-zinc-400">{v.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
