import React from "react";
import PlaceHolderImage from "../Common/PlaceHolderImage";
import { object } from "zod";

type Props = {};

const HeroBanner = (props: Props) => {
  return (
    <div className="bg-dark-main w-full fluid h-[415px] rounded-2xl">
      <PlaceHolderImage
        style={{
          width: "100%",
          height: "100%",
          objectFit: "none",
        }}
      />
    </div>
  );
};

export default HeroBanner;
