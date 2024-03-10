// Layout component
import HeaderMenu from "@/app/components/shared/Header/HeaderMain";
import FooterMain from "@/app/components/shared/Footer/FooterMain";
import TopAdvertisement from "../../shared/Header/TopAdvertisement";

// Loading
import Loading from "@/app/components/Common/Loading";

// React
import { Suspense } from "react";

import "@/app/globals.css";
export default function ConsumerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <TopAdvertisement />
      <HeaderMenu />
      <main>
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </main>
      <FooterMain />
    </>
  );
}
