import React from "react";
import Title from "../Home/common/Title";
import PlaceHolderImage from "../Common/PlaceHolderImage";
import { useTranslations } from "next-intl";

type Props = {};

const Featured = (props: Props) => {
  const t = useTranslations("Dictionary")
  return (
    <div className="flex flex-col">
      <Title title={t('featured')} />
      <div className="grid grid-cols-1 gap-5">
        <div className="w-full bg-dark-main h-24 rounded-full">
          <PlaceHolderImage
            style={{
              width: "100%",
              height: "100%",
              objectFit: "none",
            }}
          />
        </div>
        <div className="w-full bg-dark-main h-24 rounded-full">
          <PlaceHolderImage
            style={{
              width: "100%",
              height: "100%",
              objectFit: "none",
            }}
          />
        </div>
        <div className="w-full bg-dark-main h-24 rounded-full">
          <PlaceHolderImage
            style={{
              width: "100%",
              height: "100%",
              objectFit: "none",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Featured;
