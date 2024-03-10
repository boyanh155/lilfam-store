import React from "react";
import PlaceHolderImage from "../Common/PlaceHolderImage";

type Props = {};

const MiddleBanner = (props: Props) => {
  return (
    <div className="w-full bg-dark-main h-[500px] mt-24 rounded-2xl">
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

export default MiddleBanner;
