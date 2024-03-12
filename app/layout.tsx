// import type { Metadata } from "next";
// import { Space_Grotesk } from "next/font/google";
// import { Suspense } from "react";
// import Loading from "./components/Common/Loading";
// import TopAdvertisement from "./components/shared/Header/TopAdvertisement";
// import HeaderMenu from "./components/shared/Header/HeaderMain";
// import FooterMain from "./components/shared/Footer/FooterMain";

// // const inter = Inter({ subsets: ['latin'] })

// const SpaceGrotesk = Space_Grotesk({
//   weight: ["300", "400", "700", "500"],
//   style: ["normal"],
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   title: "Lilfam Store",
//   description: "Our family's store",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html  data-theme="winter">
//       <body className={SpaceGrotesk.className}>
//         <TopAdvertisement />
//         <HeaderMenu />
//         <main>
//           <Suspense fallback={<Loading />}>{children}</Suspense>
//         </main>
//         <FooterMain />
//       </body>
//     </html>
//   );
// }

import { ReactNode } from "react";
import "./globals.css";


type Props = {
  children: ReactNode;
};

// Since we have a `not-found.tsx` page on the root, a layout file
// is required, even if it's just passing children through.
export default function RootLayout({ children }: Props) {
  return children;
}
