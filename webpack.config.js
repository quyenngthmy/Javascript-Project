const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack'); 
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlMinimizerPlugin = require("html-minimizer-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const BasePath = "/";
module.exports = {
  mode: "development",
  devServer: {
    watchFiles: ["src/**/*"],
    port: 2000,
    hot: true,
  },
  optimization: {
    usedExports: true,
    minimize: true,
    minimizer: [
       new HtmlMinimizerPlugin(),
       new CssMinimizerPlugin(),
       new TerserWebpackPlugin({
        extractComments: false,
      }),
    ],
  },
  stats: {
    children: true,
  },
  entry: {
    index: {
      import:'./src/js/index.js',
      filename: 'js/index.js'
    },
  },
  output: {
    publicPath: BasePath,
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: "fonts/[name][ext]",
        },
      },
      {
        test: /\.(sass|scss|css)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader"],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: "images/[name][ext]",
        },
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js",".scss"],
  },
  plugins: [
    // new webpack.ProvidePlugin({
    //   $: "jquery",
    //   jquery: "jQuery",
    //   "window.jQuery": "jquery"
    // }),
    
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      inject: "body",
      chunks: ['index'],
      'base': BasePath
    }),
    new HtmlWebpackPlugin({
      filename: 'mask-image.html',
      template: './src/mask-image.html',
      inject: "body",
      chunks: ['index'],
      'base': BasePath
    }),
    new HtmlWebpackPlugin({
      filename: 'sprite-animation.html',
      template: './src/sprite-animation.html',
      inject: "body",
      chunks: ['index'],
      'base': BasePath
    }),
    new HtmlWebpackPlugin({
      filename: 'parallax.html',
      template: './src/parallax.html',
      inject: "body",
      chunks: ['index'],
      'base': BasePath
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].min.css",
    }),
    
  ],
};