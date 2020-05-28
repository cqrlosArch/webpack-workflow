const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');
const CssnanoPlugin = require('cssnano-webpack-plugin');

module.exports = {
  // mode: 'development',
  entry: path.join(__dirname, '../src/app.js'),
  watch: true,
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: './js/bundle.js',
  },
  devtool: 'source-map',
  devServer: {
    port: 3000,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use:
          [
            {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env'],
                plugins: ['@babel/plugin-proposal-object-rest-spread'],
              },
            },
            {
              loader: 'eslint-loader',
              options: {
                cache: true,
                failOnError: true,
                emitWarning: true,
                configFile: './.eslintrc.json',
              },
            },
          ],
      },
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [
                autoprefixer,
              ],
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'static/assets/',
          publicPath: 'static/assets/',
          useRelativePath: true,
        },

      },
      {
        loader: 'image-webpack-loader',
        options: {
          mozjpeg: {
            progressive: true,
            quality: 65,
          },
          // optipng.enabled: false will disable optipng
          optipng: {
            enabled: true,
          },
          pngquant: {
            quality: [0.65, 0.90],
            speed: 4,
          },
          gifsicle: {
            interlaced: false,
          },
          // the webp option will enable WEBP
          webp: {
            quality: 75,
          },
        },
      },
      {
        test: /\.(handlebars|hbs)$/,
        loader: 'handlebars-loader',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'static/fonts/',
              publicPath: 'static/fonts/',
              useRelativePath: true,
            },
          },
        ],
      },
    ],
  },
  optimization: {
    minimizer: [
      new CssnanoPlugin(),
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.hbs',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
      },
    }),
    new MiniCssExtractPlugin({
      filename: './css/[name].css',
    }),
  ],
};
