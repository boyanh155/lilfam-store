import { useTranslations } from "next-intl";
import React, { use } from "react";

type Props = {};

const TopAdvertisement = (props: Props) => {
  const t = useTranslations('Dictionary')
  return (
    <div className="w-screen bg-dark-red text-center overflow-hidden flex flex-col justify-center item-center h-10  animate-ben-thanh-market-background-changing">
      <span className=" text-center uppercase block text-md top-[14px] relative text-white font-bold pt-2.5 tracking-wide animate-ben-thanh-market-text-jumper">
      {t("freeShippingAdvertise")}
      </span>
      <span className=" text-center block uppercase text-md top-[14px] relative text-white font-bold pt-2.5 tracking-wide animate-ben-thanh-market-text-jumper">
      {t("blackFridayAdvertise")}
      </span>
    </div>
  );
};

export default TopAdvertisement;
