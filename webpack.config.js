const isDev = process.env.NODE_ENV === 'development'
var path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  entry: [
    './src/index.js',
    '@babel/polyfill'
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  mode: isDev ? 'development' : 'production',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',

        ]
      },
      {
        test: /\.css$/,
        use: [
          !isDev ? MiniCssExtractPlugin.loader : "style-loader",
          "css-loader"
        ]
      },
      {
        test: /\.(jpg|png|svg|gif|jpeg)$/,
        use: {
          loader: 'url-loader',
        },
      },
    ],
  },
  devtool: 'source-map',
  watchOptions: {
    ignored: /node_modules/
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  }

}
