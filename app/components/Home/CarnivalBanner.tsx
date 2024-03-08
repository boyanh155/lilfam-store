import Image from "next/image";
import React from "react";
import PlaceHolderImage from "../Common/PlaceHolderImage";

type Props = {};

const CarnivalBanner = (props: Props) => {
  return (
    <div className="w-screen bg-dark-main h-[237px]">
      <PlaceHolderImage
        style={{
          objectFit: "none",
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );
};

export default CarnivalBanner;
