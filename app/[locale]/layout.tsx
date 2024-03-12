// import { notFound } from "next/navigation";
// import { NextIntlClientProvider, useMessages } from "next-intl";

// import { AppConfig } from "@/app/utils/AppConfig";
import { Space_Grotesk } from "next/font/google";

// import type { typeOfLocale } from "@/app/utils/AppConfig";

// interface RootLayoutProps {
//   children: React.ReactNode;
//   params: {
//     locale: typeOfLocale;
//   };
// }
const SpaceGrotesk = Space_Grotesk({
  weight: ["300", "400", "700", "500"],
  style: ["normal"],
  subsets: ["latin"],
});

// export default function RootLayout({
//   children,
//   params: { locale },
// }: RootLayoutProps) {
//   // validate locale
//   //   un handle 404

//   if (!AppConfig.locales.includes(locale)) notFound();

//   //  message
//   const messages = useMessages();

import { unstable_setRequestLocale } from "next-intl/server";
import React, { Suspense } from "react";
import { AppConfig } from "../utils/AppConfig";
import TopAdvertisement from "../components/shared/Header/TopAdvertisement";
import HeaderMain from "../components/shared/Header/HeaderMain";
import Loading from "../components/Common/Loading";
import FooterMain from "../components/shared/Footer/FooterMain";
import { NextIntlClientProvider, useMessages } from "next-intl";

type Props = {
  children: React.ReactNode;
  params: {
    locale: string;
  };
};

export function generateStaticParams() {
  return AppConfig.locales.map((locale) => ({ locale }));
}

const AdminLayout = ({ children, params: { locale } }: Props) => {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  const messages = useMessages();
  return (
    <html lang={locale} data-theme="winter">
      <body className={SpaceGrotesk.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <TopAdvertisement />
          <HeaderMain />
          <main>
            <Suspense fallback={<Loading />}>{children}</Suspense>
          </main>
          <FooterMain />
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default AdminLayout;
