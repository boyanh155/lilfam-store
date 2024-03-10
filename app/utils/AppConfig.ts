import type {
  LocalePrefix,
  Pathnames,
} from "@/node_modules/next-intl/dist/types/src/shared/types";
// FIXME: Update this configuration file based on your project information

export const locales = ["en", "vi"] as const;

export type typeOfLocale = (typeof locales)[number];
export type typeOfLocales = typeof locales;

const localePrefix: LocalePrefix = "as-needed";
export const AppConfig: {
  name: string;
  locales: typeOfLocale[];
  defaultLocale: typeOfLocale;
  localePrefix: LocalePrefix;
} = {
  name: "Lilfam Store",
  locales: [...locales],
  defaultLocale: "en" satisfies typeOfLocale,
  localePrefix,
};

export const pathnames = {
  "/": "/",
  "/men": {
    en: "/men",
    vi: "/nam",
  },
  "/women": {
    en: "/women",
    vi: "/nu",
  },
  "/kids": {
    en: "/kids",
    vi: "/tre-em",
  },
  "/accessories": {
    en: "/accessories",
    vi: "/phu-kien",
  },
  "/about": {
    en: "/about",
    vi: "/gioi-thieu",
  },
  "/products": {
    en: "/products",
    vi: "/san-pham",
  },
  casual: {
    en: "/casual",
    vi: "/thuong-thuc",
  },
} satisfies Pathnames<typeOfLocales>;
