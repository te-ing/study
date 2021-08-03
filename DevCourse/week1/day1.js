// const obj = { name: "김태중", company: "Programmers. Inc." };

// obj["email"] = "hi2177@naver.com"; // 객체 요소 추가 방법
// obj.phone = "01025723129"

// console.log(obj);

// delete obj.phone; // 객체 요소 삭제방법

// console.log(obj);
// console.log("email" in obj); // 객체 요소 유무 확인방법
// console.log("phone" in obj); // 객체 요소 유무 확인방법

// console.log(Object.keys(obj)); // 키값 출력
// console.log(Object.values(obj)); // 밸류값 출력

// for (const key in obj) {
//   console.log(key, obj[key])
// };

function counting() {
  let i = 0;
  for ( i=0; i<5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 100);
  }
}
counting();