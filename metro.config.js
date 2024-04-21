// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require("expo/metro-config");

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

module.exports = {
  resolver: {
    assetExts: [...config.resolver.assetExts, "xml"], // Add 'xml' to assetExts to handle XML files
    sourceExts: [...config.resolver.sourceExts, "jsx", "tsx"], // Add 'jsx' and 'tsx' to sourceExts for TypeScript support
  },
};
