module.exports = {
  reactOptions: {
    fastRefresh: true,
    strictMode: true,
  },
  typescript: {
    check: true,
    reactDocgen: "react-docgen-typescript",
  },
  stories: ["../stories/*.stories.@(js|jsx|ts|tsx|mdx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "storybook-dark-mode",
  ],
}
