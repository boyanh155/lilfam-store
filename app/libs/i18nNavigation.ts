import { createSharedPathnamesNavigation } from "next-intl/navigation";
import { AppConfig } from "../utils/AppConfig";

const { localePrefix, locales } = AppConfig;
export const { usePathname, useRouter, Link, redirect } =
  createSharedPathnamesNavigation({
    locales,
    localePrefix,
  });
