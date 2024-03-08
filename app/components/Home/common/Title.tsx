import React from "react";

type Props = {
  title: string;
  startDirection?: "text-start" | "text-center";
};

const Title = ({ title, startDirection }: Props) => {
  return (
    <div
      className={`w-full ${`md:${
        startDirection || `text-start`
      }`}  text-center pb-10 pt-16`}
    >
      <p className="text-2xl font-bold uppercase text-black">{title}</p>
    </div>
  );
};

export default Title;
