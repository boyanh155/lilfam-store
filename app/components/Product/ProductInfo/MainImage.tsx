import React from "react";
import PlaceHolderImage from "../../Common/PlaceHolderImage";

type Props = {
  mainImageSrc: {
    type: "img" | "video";
    src: string;
  };
};

const MainImage = ({ mainImageSrc }: Props) => {
  return (
    <div className="w-full rounded-lg h-full">
      {mainImageSrc.type === "img" ? (
        <img
          src={mainImageSrc.src}
          alt="main"
          className="w-full h-full rounded-lg"
        />
      ) : (
        <video
          className="rounded-lg"
          src={mainImageSrc.src}
          autoPlay
          loop
          controls={false}
        />
      )}
    </div>
  );
};

export default MainImage;
