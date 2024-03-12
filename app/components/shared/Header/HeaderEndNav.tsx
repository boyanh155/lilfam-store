import { useTranslations } from "next-intl";
import React from "react";

type Props = {};

const HeaderEndNav = (props: Props) => {
  const t = useTranslations("Dictionary")
  return (
    <div className="flex justify-end content-center gap-7 text-dark-main">
      <div className="cursor-pointer transition-opacity opacity-60 hover:opacity-100 text-s text-right">
        {t('help')}
      </div>
      <div className="cursor-pointer transition-opacity opacity-60 hover:opacity-100 text-s text-right">
        {t('order_tracker')}
      </div>
      <div className="cursor-pointer transition-opacity opacity-60 hover:opacity-100 text-s text-right">
        {t('become_a_member')}
      </div>
    </div>
  );
};

export default HeaderEndNav;
