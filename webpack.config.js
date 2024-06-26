const path = require("path");
const yaml = require("yamljs");
const toml = require("toml");
const json5 = require("json5");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource"
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource"
      },
      {
        test: /\.(csv|tsv)$/i,
        use: ["csv-loader"]
      },
      {
        test: /\.xml$/i,
        use: ["xml-loader"]
      },
      // parse toml, yaml and json5 to json;
      // toml, yamljs, and json5 needs to be installed (dev dependencies)
      {
        test: /\.toml/i,
        type: "json",
        parser: {
          parse: toml.parse
        }
      },
      {
        test: /\.yaml/i,
        type: "json",
        parser: {
          parse: yaml.parse
        }
      },
      {
        test: /\.json5/i,
        type: "json",
        parser: {
          parse: json5.parse
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
      filename: "index.html",
      inject: "head",
      scriptLoading: "defer"
    })
  ]
}
