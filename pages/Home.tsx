import React from "react";
import HeroBanner from "../app/components/Home/HeroBanner";
import BestSeller from "../app/components/Home/BestSeller";
import News from "../app/components/Home/News";
import Popular from "../app/components/Home/Popular";
import UnderAdvertisement from "../app/components/Home/UnderAdvertisement";
import CarnivalBanner from "../app/components/Home/CarnivalBanner";

type Props = {};

const Home = (props: Props) => {
  return (
    <div className="w-screen">
      <HeroBanner />
      <BestSeller />
      <News />
      <Popular />
      <UnderAdvertisement />
      <CarnivalBanner />
    </div>
  );
};

export default Home;
