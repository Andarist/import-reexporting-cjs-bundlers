const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "webpacked.js",
    library: {
      type: "umd",
    },
  },
  mode: "development",
  devtool: false,
};
