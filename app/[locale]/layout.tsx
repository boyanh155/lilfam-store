// import { notFound } from "next/navigation";
// import { NextIntlClientProvider, useMessages } from "next-intl";

// import { AppConfig } from "@/app/utils/AppConfig";
// import { Space_Grotesk } from "next/font/google";

// import type { typeOfLocale } from "@/app/utils/AppConfig";

// interface RootLayoutProps {
//   children: React.ReactNode;
//   params: {
//     locale: typeOfLocale;
//   };
// }
// const SpaceGrotesk = Space_Grotesk({
//   weight: ["300", "400", "700", "500"],
//   style: ["normal"],
//   subsets: ["latin"],
// });

// export default function RootLayout({
//   children,
//   params: { locale },
// }: RootLayoutProps) {
//   // validate locale
//   //   un handle 404

//   if (!AppConfig.locales.includes(locale)) notFound();

//   //  message
//   const messages = useMessages();

//   return (
//     <html lang={locale} data-theme="winter">
//       <body className={SpaceGrotesk.className}>
//         {/* <NextIntlClientProvider messages={messages} locale={locale}>
//           {children}
//         </NextIntlClientProvider> */}
//         <NextIntlClientProvider locale={locale} messages={messages}>
//           {children}
//         </NextIntlClientProvider>
//       </body>
//     </html>
//   );
// }

import React from "react";

type Props = {
  children: React.ReactNode;
};

const layout = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default layout;
