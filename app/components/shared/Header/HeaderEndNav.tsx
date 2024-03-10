import React from "react";

type Props = {};

const HeaderEndNav = (props: Props) => {
  return (
    <div className="flex justify-end content-center gap-7 text-dark-main">
      <div className="cursor-pointer transition-opacity opacity-60 hover:opacity-100 text-s text-right">
        help
      </div>
      <div className="cursor-pointer transition-opacity opacity-60 hover:opacity-100 text-s text-right">
        order tracker
      </div>
      <div className="cursor-pointer transition-opacity opacity-60 hover:opacity-100 text-s text-right">
        become a member
      </div>
    </div>
  );
};

export default HeaderEndNav;
