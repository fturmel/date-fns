/** @type {import('@date-fns/docs').DateFnsDocs.Config} */
module.exports.config = {
  package: "..",

  json: "../tmp/docs.json",

  categories: [
    "General",
    "Misc",
    "Common Helpers",
    "Conversion Helpers",
    "Interval Helpers",
    "Timestamp Helpers",
    "Millisecond Helpers",
    "Second Helpers",
    "Minute Helpers",
    "Hour Helpers",
    "Day Helpers",
    "Weekday Helpers",
    "Week Helpers",
    "ISO Week Helpers",
    "Month Helpers",
    "Quarter Helpers",
    "Year Helpers",
    "ISO Week-Numbering Year Helpers",
    "Decade Helpers",
    "Generic Helpers",
  ],

  files: [
    {
      type: "markdown",
      slug: "Getting-Started",
      category: "General",
      title: "Getting Started",
      summary: "Introduction & installation instructions",
      path: "gettingStarted.md",
    },
    {
      type: "markdown",
      slug: "Change-Log",
      category: "General",
      title: "Change Log",
      summary: "Changes for each version of the library",
      path: "../CHANGELOG.md",
    },
    {
      type: "markdown",
      slug: "Contributing",
      category: "General",
      title: "Contributing",
      summary: "Contribution manual",
      path: "../CONTRIBUTING.md",
    },
    {
      type: "markdown",
      slug: "Security",
      category: "General",
      title: "Security policy",
      summary: "Security policy",
      path: "../SECURITY.md",
    },
    {
      type: "markdown",
      slug: "I18n",
      category: "General",
      title: "I18n",
      summary: "Internationalization",
      path: "i18n.md",
    },
    {
      type: "markdown",
      slug: "I18n-Contribution-Guide",
      category: "General",
      title: "I18n Contribution Guide",
      summary: "Locales manual",
      path: "i18nContributionGuide.md",
    },
    {
      type: "markdown",
      slug: "Time-Zones",
      category: "General",
      title: "Time Zones",
      summary: "Time zone functions",
      path: "timeZones.md",
    },
    {
      type: "markdown",
      slug: "ECMAScript-Modules",
      category: "General",
      title: "ECMAScript Modules",
      summary: "Tree-shaking guide",
      path: "esm.md",
    },
    {
      type: "markdown",
      slug: "webpack",
      category: "General",
      title: "webpack",
      summary: "Using date-fns with webpack",
      path: "webpack.md",
    },
    {
      type: "markdown",
      slug: "FP-Guide",
      category: "General",
      title: "FP Guide",
      summary: "Curried functions",
      path: "fp.md",
    },
    {
      type: "markdown",
      slug: "Unicode-Tokens",
      category: "General",
      title: "Unicode Tokens",
      summary: "Usage of the Unicode tokens in parse and format",
      path: "unicodeTokens.md",
    },
    {
      type: "markdown",
      slug: "Upgrade-Guide",
      category: "General",
      title: "Upgrade guide",
      summary: "Changes from v1 to v2",
      path: "upgradeGuide.md",
    },
    {
      type: "markdown",
      slug: "License",
      category: "General",
      title: "License",
      summary: "MIT © Sasha Koss",
      path: "../LICENSE.md",
    },
  ],

  kindsMap: {
    "src/constants/index.ts": {
      kind: "constants",
      category: "Misc",
    },
  },
};
