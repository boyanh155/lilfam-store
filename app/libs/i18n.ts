import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";
import { AppConfig, typeOfLocale } from "@/app/utils/AppConfig";

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  return {
    messages: (await import(`../locales/${locale}.json`)).default,
    timeZone: locale === "en" ? "America/New_York" : "Asia/Bangkok",
  };
});
