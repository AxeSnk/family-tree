import path from 'path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import webpack from 'webpack';
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const { PATHS, isProduction } = require('./variables');
 
const config: webpack.Configuration = {
  target: 'web',
  entry: path.resolve(PATHS.app, 'index.tsx'),
  output: {
    path: PATHS.build,
    filename: `[name]${isProduction ? '.[contenthash]' : ''}.js`,
    publicPath: '/',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(c|sa|sc)ss$/i,
        use: [
          isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  isProduction && autoprefixer(),
                ].filter(Boolean),
              },
            },
          },
          {
            loader: 'sass-loader',
            options: {
              additionalData: '@use "sass:math";@import "styles/global/index.scss";',
              sassOptions: {
                includesPaths: [path.resolve(PATHS.src, 'styles')],
              },
            }
          }
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
        type: 'asset/resource',
        generator: { filename: 'images/[hash][ext]' },
        // exclude: /assets[\\\/]images[\\\/]icons/,
      },
      {
        test: /[\\\/]fonts[\\\/]\.(svg|ttf|woff|woff2|eot)$/i,
        type: 'asset/resource',
        generator: { filename: 'fonts/[hash][ext]' },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    modules: ['src', 'node_modules'],
    fallback: {
      'react/jsx-runtime': 'react/jsx-runtime.js',
      'react/jsx-dev-runtime': 'react/jsx-dev-runtime.js',
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(PATHS.app, 'index.html'),
      hash: true,
      inject: 'body',
    }),
    new CopyWebpackPlugin({ patterns: [
      { from: 'src/locales', to: 'locales' },
    ] }),
    new webpack.ProgressPlugin(),
    new webpack.DefinePlugin({
      BASE_API_URL: JSON.stringify(process.env.BASE_API_URL || 'http://localhost:8000'),
      IS_PRODUCTION: JSON.stringify(isProduction),
    }),
    // new SpriteLoaderPlugin(),
  ]
};

export default config;
