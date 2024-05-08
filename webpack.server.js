const path = require("path");
const { merge } = require("webpack-merge");
const base = require("./webpack.base");
const WNE = require("webpack-node-externals");

const config = {
  target: "node",
  entry: "./src/index.tsx",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
  },
  externals: [WNE()],
};

module.exports = merge(base, config);
