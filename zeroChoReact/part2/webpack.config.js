const path = require('path'); // 노드에서 경로를 설정

module.exports = {
  name: 'WordRelay-setting', // 꼭 필요한 것은 아니나 파일 설명용
  mode: 'development', // 실서비스용은 production
  devtool: 'eval', // 빠른 속도
  resolve: {
    extensions: ['.js','.jsx'] // app에 확장자 명을 적지 않아도 .js와 jsx 확장자명을 가진 것이 있으면 자동탐색. 다른 확장자명도 가능
  },

  entry: { // 입력
    app: ['./client.jsx'], // 파일명 (WordRelay는 client.jsx에서 불러오기 때문에 필요없음)
  }, 

  module: {
    rules: [{
      test: /\.jsx?/, // js와 jsx파일에 바벨로더를 적용
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env', '@babel/preset-react']
      }
    }],
  },

  output: { // 출력
    path: path.join(__dirname, 'dist'), // 노드에서 경로 탐색, 설정
    filename: 'app.js'
  }, 
}; // 작성 후 터미널에 webpack 타이핑
// 'webpack'은(는) 내부 또는 외부 명령, 실행할 수 있는 프로그램, 또는 배치 파일이 아닙니다.
// 뜰 경우 1. 명령어로 등록하거나 
// 2. package.json script에 "dev":"webpack"을 넣고 터미널에서 npm run dev을 타이핑하거나 
// 3. npx webpack을 타이핑

