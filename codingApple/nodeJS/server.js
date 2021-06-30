const express = require('express'); // 설치한 라이브러리(express)를 첨부해 달라는 코드
const app = express(); // express 객체 생성

app.listen(8080, function(){ // 서버를 띄우기 위한 기본세팅(express 라이브러리)
  console.log('listen on 8080')
}); // 서버를 어디다 열지 ()에 작성

app.get('/pet', function(요청, 응답){ //pet이라는 경로로 접근하면 안내문을 띄워줌
  응답.send('펫용품을 쇼핑할 수 있는 페이지입니다.');
});
// 이후 컨트롤+C를 통해 서버를 닫고 다시 열면 변경된 페이지를 볼 수 있음
// npm install -g nodemon 을 통해 자동으로 열고닫아주는 nodemon 설치가능(-g는 모든 폴더에서 사용 가능하도록 설치한다는 뜻)
// nodemon server.js로 실행
// powershell 보안오류시 powershell 관리자권한 실행 후 executionpolicy 입력 후 set-executionpolicy unrestricted입력 후 y
app.get('/beauty', (req, res)=>{res.send('뷰티용품을 쇼핑할 수 있는 페이지입니다.')});

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html') // /하나만 있는 것은 홈페이지. __dirname은 디렉션 네임
}); // html 파일을 보내주는 방법


