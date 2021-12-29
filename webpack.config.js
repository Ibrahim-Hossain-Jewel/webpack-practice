const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin'); //Plugin for HTML
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: './src/script/app.js',
    output: {
        path: path.resolve(__dirname, "public"),
        filename: 'app.bundle.js'
    },
    mode: 'development',
    module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          },
          //Below code are for CSS loader
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin()],
    plugins: [
        new MiniCssExtractPlugin({
          linkType: "text/css",
        }),
      ]
}