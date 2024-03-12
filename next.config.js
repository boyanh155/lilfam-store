const createNextIntlPlugin = require('next-intl/plugin')("./app/libs/i18n.ts");

/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = createNextIntlPlugin(nextConfig);