"use strict";

/*
console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = "Correct Number!";

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;

console.log(document.querySelector(".guess").value); // .guess의 value값 가져오기
document.querySelector(".guess").value = 23;
*/

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value); // Number로 타입변환
  console.log(typeof guess); // 얻게되는 값은 대부분 string

  if (!guess) {
    document.querySelector(".message").textContent = "🚫No number!🚫";
  }
});
