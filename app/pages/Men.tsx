import React from "react";
import Category from "../components/Men/Category";
import HeroBanner from "../components/Men/HeroBanner";
import Featured from "../components/Men/Featured";
import ShopTheIcon from "../components/Men/ShopTheIcon";
import CarnivalBanner from "../components/Men/CarnivalBanner";
import MiddleBanner from "../components/Men/MiddleBanner";

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
