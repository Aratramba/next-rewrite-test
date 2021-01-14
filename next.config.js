module.exports = {
  async rewrites() {
    return [
      { source: "/cms", destination: "/cms/index.html" },
      { source: "/cms/:path*", destination: "/cms/index.html" },
      { source: "/cms2", destination: "/cms2/index.html" },
      { source: "/cms2/:path*", destination: "/cms2/index.html" },
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
