import React from "react";
import Category from "../app/components/Men/Category";
import HeroBanner from "../app/components/Men/HeroBanner";
import Featured from "../app/components/Men/Featured";
import ShopTheIcon from "../app/components/Men/ShopTheIcon";
import CarnivalBanner from "../app/components/Men/CarnivalBanner";
import MiddleBanner from "../app/components/Men/MiddleBanner";

type Props = {};

const Men = (props: Props) => {
  return (
    <div className="w-screen content-container">
      <Category />
      <HeroBanner />
      <Featured />
      <MiddleBanner />
      <ShopTheIcon />
      <CarnivalBanner />
    </div>
  );
};

export default Men;
