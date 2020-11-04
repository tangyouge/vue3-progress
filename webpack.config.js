const path = require("path");
const { VueLoaderPlugin } = require("vue-loader-v16");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.bundle.js",
    libraryTarget: "umd",
    library: "vue3Progress",
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader-v16",
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
    ],
  },
  plugins: [new VueLoaderPlugin()],
};
