import { useTranslations } from "next-intl";
import React from "react";

type Props = {};

const UnderAdvertisement = (props: Props) => {
  const t = useTranslations("Dictionary");
  return (
    <div className="w-full whitespace-nowrap mt-16  relative leading-10  animate-ben-thanh-market-background-changing h-10 d-flex align-middle bg-light-beige text-dark-main uppercase tracking-widest">
      <span
        style={{
          right: "-28%",
        }}
        className="block absolute animate-ben-thanh-market-text-runner font-bold"
      >
        {t('buy_now_or_cry_later')}
      </span>
      <span
        className="block absolute animate-ben-thanh-market-text-runner font-bold"
        style={{
          right: "-28%",
          animationDelay: "2s",
          MozAnimationDelay: "2s",
          WebkitAnimationDelay: "2s",
        }}
      >
        {t('buy_now_or_cry_later')}
      </span>
      <span
        style={{
          right: "-28%",
          animationDelay: "4s",
          MozAnimationDelay: "4s",
          WebkitAnimationDelay: "4s",
        }}
        className="block absolute animate-ben-thanh-market-text-runner font-bold"
      >
        {t('buy_now_or_cry_later')}
      </span>
      <span
        style={{
          right: "-28%",
          animationDelay: "6s",
          MozAnimationDelay: "6s",
          WebkitAnimationDelay: "6s",
        }}
        className="block absolute animate-ben-thanh-market-text-runner font-bold"
      >
        {t('buy_now_or_cry_later')}
      </span>
      <span
        style={{
          right: "-28%",
          animationDelay: "8s",
          MozAnimationDelay: "8s",
          WebkitAnimationDelay: "8s",
        }}
        className="block absolute animate-ben-thanh-market-text-runner font-bold"
      >
        {t('buy_now_or_cry_later')}
      </span>
      <span
        style={{
          right: "-28%",
          animationDelay: "10s",
          MozAnimationDelay: "10s",
          WebkitAnimationDelay: "10s",
        }}
        className="block absolute animate-ben-thanh-market-text-runner font-bold"
      >
        {t('buy_now_or_cry_later')}
      </span>
    </div>
  );
};

export default UnderAdvertisement;
