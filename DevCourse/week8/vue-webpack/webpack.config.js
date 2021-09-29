const path = require('path')
const { VueLoaderPlugin} = require('vue-loader')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  resolve: {
    extensions: ['.vue', '.js'],
    alias: {
      '~': path.resolve(__dirname, 'src')
    }
  },
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.vue$/, // 정규표현식으로 vue확장자를 모두 선택
        use: 'vue-loader', // vue 해석을 도와주는 패키지
      },
      {
        test: /\.s?css$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlPlugin({
			template: 'src/index.html'
		}),
    new CopyPlugin({
      patterns: [
        {from:'static', to:''} // to 위치생략시 output의 위치로 설정됨
      ]
    })
  ]
  
}