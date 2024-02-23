import React from "react";

type Props = {};

const UnderAdvertisement = (props: Props) => {
  return (
    <div className="w-full  relative   animate-ben-thanh-market-background-changing h-10 d-flex align-middle bg-light-beige text-dark-main uppercase tracking-widest">
      <span
        style={{
          right: "-28%",
        }}
        className="block absolute animate-ben-thanh-market-text-runner font-bold"
      >
        buy now or cry later
      </span>
    </div>
  );
};

export default UnderAdvertisement;
