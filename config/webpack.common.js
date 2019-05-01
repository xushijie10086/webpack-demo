const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
  entry: './src/index.js',
  resolve: {
    alias: { // 配置一个别名， 如果目录太深，可以简化输入目录的烦恼
      '@': path.resolve(__dirname, '../src/')
    },
    extensions: ['.js', 'json', '.jsx', '.vue', '.css', '.less'] // 默认值【js,json 】模块名可以省略后缀名
  },
  externals: { // 作为外部模块的依赖不会打包到index.js
    jquery: 'jQuery'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/, // 加快编译速度，不包含node_modules文件夹内容
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true
            }
          },
          // {
          //   loader: 'eslint-loader',
          //   options: {
          //     fix: true
          //   }
          // }
        ]
      },
      {
        test: /\.(png|jpg|svg|gif|jepg)$/,
        use: [{
          loader: 'url-loader', // 根据图片大小，把图片优化成base64
          options: {
            limit: 30000 // 限制文件大小满足此条件才进行处理
          }
        },
        {
          loader: 'image-webpack-loader',
          options: {
            mozjpeg: {
              progressive: true,
              quality: 65
            },
            optipng: {
              enabled: false
            },
            pngquant: {
              quality: '65-90',
              speed: 4
            },
            gifsicle: {
              interlaced: false
            },
            webp: {
              quality: 75
            }
          }
        }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'hello webpack', // 默认值： webpack App
      filename: 'index.html', // 默认值   index.html
      template: path.resolve(__dirname, '../src/main.html'),
      minify: {
        collapseWhitespace: true,
        removeComments: true, // 是否移除注释
        removeAttributeQuotes: true // 移除属性的引号
      }
    }),
    new CleanWebpackPlugin()
  ]
};
