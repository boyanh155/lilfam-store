import React from "react";
import PlaceHolderImage from "../Common/PlaceHolderImage";
import { useTranslations } from "next-intl";

type Props = {};

const list = [
  {
    name: "Product card title",
  },
  {
    name: "Product card title",
  },
  {
    name: "Product card title",
  },
  {
    name: "Product card title",
  },
];
const RecommendList = (props: Props) => {
  const t = useTranslations("Product");
  return (
    <div className="mt-24">
      <div className="capitalize font-semibold text-black text-xl">
        {t("you_might_also_like")}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 mt-6 ">
        {list.map((v, id) => (
          <div
            key={id}
            className="col-span-1 w-[272px] h-[352px] p-3 border rounded-xl border-black relative"
          >
            <PlaceHolderImage
              style={{
                width: "auto",
                height: "100%",
                objectFit: "none",
              }}
              className="bg-dark-main  rounded-xl"
            />
            <p className="absolute bottom-6 left-8 text-white capitalize">
              {v.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendList;
