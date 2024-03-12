import React from "react";
import Title from "../Home/common/Title";
import SnapScrollList from "../Common/SnapScrollList";
import { popularData } from "../Home/dummyData/popular";
import { useTranslations } from "next-intl";

type Props = {};

const ShopTheIcon = (props: Props) => {
  const t = useTranslations("Dictionary");
  return (
    <div className="flex flex-col mt-14">
      <Title title={t("shop_the_icon")} />
      <SnapScrollList data={popularData} />
    </div>
  );
};

export default ShopTheIcon;
