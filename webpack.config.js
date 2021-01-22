const webpack = require('webpack');
const path = require('path');
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const RemovePlugin = require('remove-files-webpack-plugin');

module.exports = () => {
  const config = {
    devtool: 'inline-source-map',
    entry: {
      'main/main': [path.resolve(__dirname, './src/main/js/index.js'), './src/main/sass/styles.scss'],
      'pets/pets': [path.resolve(__dirname, './src/pets/js/index.js'), './src/pets/sass/styles.scss'],
    },
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, './dist/'),
      assetModuleFilename: '../assets/[name][ext]',
    },
    module: {
      rules: [{
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        },
        //
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        //
        {
          test: /\.s[ac]ss$/i,
          use: [{
              loader: MiniCssExtractPlugin.loader,
              options: {
                publicPath: '',
              }
            },
            {
              loader: "css-loader"
            },
            {
              loader: "sass-loader"
            }
          ]
        },
        {
          test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.(woff(2)?|eot|ttf|otf)$/,
          type: 'asset/inline',
        }
      ]
    },

    plugins: [
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin({
        filename: '[name].css',
      }),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, './src/main/html/index.html'),
        filename: '/main/main.html',
        chunks: [''],
        // favicon: './src/main/assets/icons/favicon.ico',
      }),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, './src/pets/html/pets.html'),
        filename: '/pets/pets.html',
        chunks: [''],
        // favicon: './src/main/assets/icons/favicon.ico',
      }),
      new CopyPlugin({
        patterns: [
          { from: 'src/main/assets/images', to: 'main/assets/images' },
          { from: 'src/main/assets/icons', to: 'main/assets/icons' },
          { from: 'src/pets/assets/images', to: 'pets/assets/images' },
          { from: 'src/pets/assets/icons', to: 'pets/assets/icons' },
        ],
      }),
      new RemovePlugin({
        before: {
          include: [
            './dist',
          ],
        },
      }),
    ],
  };
  return config;
};
