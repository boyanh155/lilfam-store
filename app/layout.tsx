import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import Loading from "./components/Common/Loading";
import TopAdvertisement from "./components/shared/Header/TopAdvertisement";
import HeaderMenu from "./components/shared/Header/HeaderMain";
import FooterMain from "./components/shared/Footer/FooterMain";

// const inter = Inter({ subsets: ['latin'] })

const SpaceGrotesk = Space_Grotesk({
  weight: ["300", "400", "700", "500"],
  style: ["normal"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lilfam Store",
  description: "Our family's store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="winter">
      <body className={SpaceGrotesk.className}>
        <TopAdvertisement />
        <HeaderMenu />
        <main>
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </main>
        <FooterMain />
      </body>
    </html>
  );
}
