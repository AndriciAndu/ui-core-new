const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs)"],
  addons: ["@storybook/addon-essentials", "@storybook/addon-webpack5-compiler-babel"],
  framework: "@storybook/react-webpack5",
  docs: {
    autodocs: "tag",
  }
};

export default config;
