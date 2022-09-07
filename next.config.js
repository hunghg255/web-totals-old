const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.js',
  unstable_flexsearch: true,
  unstable_staticImage: true,
  unstable_defaultShowCopyCode: true
})

module.exports = withNextra({
  i18n: {
    locales: ["en-US",  "ko"],
    defaultLocale: "en-US",
  },
})
