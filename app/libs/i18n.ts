import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ locale }) => {
  // const _path = (
  //   await (locale === "en"
  //     ? import("../locales/en.json")
  //     : import(`../locales/${locale}.json`))
  // ).default;
  const _path = (await import(`../locales/en.json`)).default;

  return {
    messages: _path,
    timeZone: locale === "en" ? "America/New_York" : "Asia/Bangkok",
  };
});
