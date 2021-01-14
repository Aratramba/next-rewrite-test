module.exports = {
  async rewrites() {
    return [
      { source: "/cms", destination: "/sanity/" }, // ?
      { source: "/cms/:path*", destination: "/sanity/" }, // ?
    ];
  },
  serverRuntimeConfig: {
    rootDir: __dirname,
  },
  i18n: {
    locales: ["en", "nl"],
    defaultLocale: "nl",
  },
  basePath: "",
};
