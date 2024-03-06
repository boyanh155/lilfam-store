import React from "react";

type Props = {};

const TopAdvertisement = (props: Props) => {
  return (
    <div className="w-screen bg-dark-red text-center overflow-hidden flex flex-col justify-center item-center h-10  animate-ben-thanh-market-background-changing">
      <span className=" text-center block text-md top-[14px] relative text-white font-bold pt-2.5 tracking-wide animate-ben-thanh-market-text-jumper">
        FREE SHIPPING FOR BILLS FROM 200K
      </span>
      <span className=" text-center block text-md top-[14px] relative text-white font-bold pt-2.5 tracking-wide animate-ben-thanh-market-text-jumper">
        {/* FREE SHIPPING FOR BILLS FROM 200K */}
        BLACK FRIDAY UPTO 70% FOR &apos;LILFAM&apos; COLLECTION
      </span>
    </div>
  );
};

export default TopAdvertisement;
