import React from "react";
import PlaceHolderImage from "../Common/PlaceHolderImage";

type Props = {};

const CarnivalBanner = (props: Props) => {
  return (
    <div className="bg-dark-main w-full fluid h-[237px] mt-28 mb-12 ">
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

export default CarnivalBanner;
