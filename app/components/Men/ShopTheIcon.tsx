import React from "react";
import Title from "../Home/common/Title";
import SnapScrollList from "../Common/SnapScrollList";
import { popularData } from "../Home/dummyData/popular";

type Props = {};

const ShopTheIcon = (props: Props) => {
  return (
    <div className="flex flex-col mt-14">
      <Title title="shop the icon" />
      <SnapScrollList data={popularData} />
    </div>
  );
};

export default ShopTheIcon;
