import React from "react";

type Props = {};

const Category = (props: Props) => {
  return (
    <div className="flex gap-20 justify-center items-center py-11">
      <div className="hover:opacity-40 transition-all cursor-pointer">
        Shoes
      </div>
      <div className="hover:opacity-40 transition-all cursor-pointer">
        Clothing
      </div>
      <div className="hover:opacity-40 transition-all cursor-pointer">
        Accessories
      </div>
    </div>
  );
};

export default Category;
