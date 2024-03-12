import { useTranslations } from "next-intl";
import React from "react";

type Props = {};

const Category = (props: Props) => {
  const t=  useTranslations("Dictionary")
  return (
    <div className="flex gap-20 justify-center items-center py-11">
      <div className="capitalize hover:opacity-40 transition-all cursor-pointer">
        {t('shoes')}
      </div>
      <div className="capitalize hover:opacity-40 transition-all cursor-pointer">
        {t('clothing')}
      </div>
      <div className="capitalize hover:opacity-40 transition-all cursor-pointer">
        {t('accessories')}
      </div>
    </div>
  );
};

export default Category;
