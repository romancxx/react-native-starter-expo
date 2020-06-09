const plugins = [
  [
    require.resolve("babel-plugin-module-resolver"),
    {
      root: [".."],
      alias: {
        "@screens": "./src/screens",
        "@locales": "./src/locales",
        "@components": "./src/components",
        "@assets": "./src/assets",
        "@navigation": "./src/navigation",
        "@api": "./src/api",
        "@states": "./src/states",
        "@services": "./src/services",
        "@constants": "./src/constants",
      },
    },
  ],
];

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [...plugins],
  };
};
