const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const autoprefixer = require('autoprefixer')
const dev = process.env.NODE_ENV !== 'production'


const extractSassPlugin = new ExtractTextPlugin({
  filename: '[name].[contenthash].css',
  disable: dev
})

const plugins = [
  extractSassPlugin,
  new HtmlWebpackPlugin({
    template: path.resolve(__dirname, 'index.html')
  }),
  new webpack.EnvironmentPlugin(['NODE_ENV'])
]


if (!dev) {
  plugins.push(new webpack.optimize.UglifyJsPlugin())
}


const postCssLoader = {
  loader: 'postcss-loader',
  options: {
    plugins: () => [autoprefixer('last 5 versions')]
  }
}

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        options: {
          presets: ['react-app', 'stage-0']
        },
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              camelCase: 'dashes',
              minimize: !dev,
              modules: 1,
              importLoaders: 1,
            }
          },
          postCssLoader
        ]
      },
      {
        test: /\.scss/,
        use: extractSassPlugin.extract({
          use: [{
            loader: 'css-loader',
            options: {
              minimize: !dev
            }
          }, postCssLoader, 'sass-loader'],
          fallback: 'style-loader'
        })
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
  },
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, './dist'), // boolean | string | array, static file location
  },
  plugins: plugins
};