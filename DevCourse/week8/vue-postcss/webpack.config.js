const HtmlPlugin = require('html-webpack-plugin')
module.exports = {
  entry: './main.js',
  output: {
    publicPath: '/',
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlPlugin ({
      template: './index.html'
    })
  ]
}