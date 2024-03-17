import { Space_Grotesk } from "next/font/google";

const SpaceGrotesk = Space_Grotesk({
  weight: ["300", "400", "700", "500"],
  style: ["normal"],
  subsets: ["latin"],
});

import { unstable_setRequestLocale } from "next-intl/server";
import React, { Suspense } from "react";
import { AppConfig, typeOfLocale } from "../utils/AppConfig";
import TopAdvertisement from "../components/shared/Header/TopAdvertisement";
import HeaderMain from "../components/shared/Header/HeaderMain";
import Loading from "../components/Common/Loading";
import FooterMain from "../components/shared/Footer/FooterMain";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { notFound } from "next/navigation";
import { QueryClientProvider } from "@tanstack/react-query";
import Providers from "../libs/Provider";

type Props = {
  children: React.ReactNode;
  params: {
    locale: typeOfLocale;
  };
};

export function generateStaticParams() {
  return AppConfig.locales.map((locale) => ({ locale }));
}



const AdminLayout = ({ children, params: { locale } }: Props) => {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  // verify locale

  if (!AppConfig.locales.includes(locale)) notFound();

  const messages = useMessages();

  return (
    <html lang={locale} data-theme="winter">
      <body className={SpaceGrotesk.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <TopAdvertisement />
          <HeaderMain />
          <main>
            <Providers>
              <Suspense fallback={<Loading />}>{children}</Suspense>
            </Providers>
          </main>
          <FooterMain />
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default AdminLayout;
