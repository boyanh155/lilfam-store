import Image from "next/image";
import React from "react";
import imgPlaceHolder from "@/app/assets/imgs/imgs/img-placeholder.svg";

const PlaceHolderImage = (props: { style?: {}; className?: string }) => {
  return <Image src={imgPlaceHolder} alt="place holder image" {...props} />;
};

export default PlaceHolderImage;
