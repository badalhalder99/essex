const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const mode =
  process.env.NODE_ENV === 'development' ? 'development' : 'production';

module.exports = {
  mode: mode,
  entry: './src',
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: [/node_modules/, /\.test\./],
        use: [
          {
            loader: 'ts-loader',
          },
        ],
      },
      {
        test: /\.jsx$/,
        exclude: [/node_modules/, /\.test\./],
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-react'
              ]
            }
          },
        ],
      },
      {
        test: /\.(png|jp(e*)g|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name]___[hash:base64:5].[ext]',
              outputPath: 'assets/img',
              userRelativePaths: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './public/index.html',
      filename: './index.html',
    }),
  ],
  output: {
    filename: '[name]___[hash:base64:5].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
