const path = require("path");
//Export this webpack.config.js file
module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, "public"),
        filename: 'app.bundle.js'
    },mode: 'development',
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
          }
        ]
    }
}