const path = require('path')
const webpack = require('webpack')
var CopyWebpackPlugin = require('copy-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');

const postcssOpts = {
  ident: 'postcss', // https://webpack.js.org/guides/migrating/#complex-options
  plugins: () => [
    autoprefixer({
      browsers: ['last 2 versions', 'Firefox ESR', '> 1%', 'ie >= 8', 'iOS >= 8', 'Android >= 4'],
    }),
    // pxtorem({ rootValue: 100, propWhiteList: [] })
  ],
};

module.exports = {
  devtool: 'source-map', // or 'inline-source-map'
  devServer: {
    disableHostCheck: true
  },

  entry: { "index": path.resolve(__dirname, 'src/index') },

  output: {
    filename: '[name].js',
    chunkFilename: '[id].chunk.js',
    path: path.join(__dirname, '/dist'),
    publicPath: '/dist/'
  },

  resolve: {
    modules: [path.resolve(__dirname, 'node_modules'), path.join(__dirname, 'src')],
    extensions: ['.web.js', '.jsx', '.js', '.json'],
  },

  module: {
    rules: [
      {
        test: /\.(jsx|js)$/, exclude: /node_modules/, loader: 'babel-loader',
        options: {
          plugins: [
            'external-helpers', // why not work?
            ["transform-runtime", { polyfill: false }],
            ["import", [{ "style": "css", "libraryName": "antd-mobile" }]]
          ],
          presets: ['es2015', 'stage-0', 'react']
          // presets: [['es2015', { modules: false }], 'stage-0', 'react'] // tree-shaking
        }
      },
      { test: /\.(jpg|png|svg)$/, loader: "url-loader?limit=8192&name=[name].[ext]" },
      // 注意：如下不使用 ExtractTextPlugin 的写法，不能单独 build 出 css 文件
      // { test: /\.less$/i, loaders: ['style-loader', 'css-loader', 'less-loader'] },
      // { test: /\.css$/i, loaders: ['style-loader', 'css-loader'] },
      {
        test: /\.less$/i, use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader', { loader: 'postcss-loader', options: postcssOpts }, 'less-loader'
          ]
        })
      },
      {
        test: /\.css$/i, use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader', { loader: 'postcss-loader', options: postcssOpts }
          ]
        })
      }
    ]
  },
  // externals: {
  //   "react": "React",
  //   "react-dom": "ReactDOM"
  // },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    // new webpack.optimize.CommonsChunkPlugin('shared.js'),
    new webpack.optimize.CommonsChunkPlugin({
      // minChunks: 2,
      name: 'shared',
      filename: 'shared.js'
    }),

    new ExtractTextPlugin({ filename: '[name].css', allChunks: true }),
    new HtmlWebpackPlugin({
        filename:  path.resolve(__dirname, '../dist/index.html'),
        template: 'index.html',
        inject: true,
        minify: {
            removeComments: true,
            collapseWhitespace: true,
            removeAttributeQuotes: true
              // more options:
              // https://github.com/kangax/html-minifier#options-quick-reference
        }
    }),
      new CopyWebpackPlugin([
          {
              from: path.resolve(__dirname, './src/assets'),
              to: 'assets',
              ignore: ['.*']
          }
      ])
  ],
    devServer: { // DevServer 相关的配置
        proxy: { // 代理到后端服务接口
            '/api': 'http://localhost:3000'
        },
        // contentBase: path.join(__dirname, 'public'), // 配置 DevServer HTTP 服务器的文件根目录
        // compress: true, // 是否开启 gzip 压缩
        historyApiFallback: false, // 是否开发 HTML5 History API 网页
        // hot: true, // 是否开启模块热替换功能
        https: false, // 是否开启 HTTPS 模式
    }
}
