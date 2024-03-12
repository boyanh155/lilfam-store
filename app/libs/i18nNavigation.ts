import { createLocalizedPathnamesNavigation } from "next-intl/navigation";
import { AppConfig, pathnames } from '../utils/AppConfig';

const { localePrefix, locales } = AppConfig;
export const { usePathname, useRouter, Link, redirect,getPathname } =
  createLocalizedPathnamesNavigation({
    locales,
    localePrefix,
    pathnames,
  });
