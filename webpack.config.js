const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");
const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});
module.exports = (env, argv) => {
  console.log(argv.mode);
  return {
    entry: "./src/index.jsx",
    output: {
      path: path.join(__dirname, "dist"),
      filename: "[name].js"
    },
    devtool: "eval-source-map",
    plugins: [htmlPlugin],
    module: {
      rules: [
        {
          test: /\.(png|svg|jpg|gif)$/,
          loader: "file-loader",
          options: { name: "/static/[name].[ext]" }
        },
        {
          test: /\.svg$/,
          use: ["@svgr/webpack"]
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"]
        }
      ]
    },

    watch: argv.mode === "development"
  };
};
