/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["a.storyblok.com"],
  },
  i18n: {
    locales: ["sv"],
    defaultLocale: "sv",
  },
};

module.exports = nextConfig;
