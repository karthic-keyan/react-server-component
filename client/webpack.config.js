// webpack.config.js
const path = require("path");

module.exports = {
  entry: "./src/index.js", // Your client-side entry point
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundled-client.js",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
};
