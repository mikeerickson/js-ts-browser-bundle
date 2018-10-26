var path = require("path");

module.exports = {
  entry: "./app.ts",
  devtool: "inline-source-map",
  target: "node",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        use: "ts-loader",
        test: /\.ts?$/
      }
    ]
  }
};
