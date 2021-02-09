"use strict";

/*
console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = "Correct Number!";

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;

console.log(document.querySelector(".guess").value); // .guess의 value값 가져오기
document.querySelector(".guess").value = 23;
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
// document.querySelector(".number").textContent = secretNumber;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value); // Number로 타입변환
  // console.log(typeof guess); // 얻게되는 값은 대부분 string

  // 숫자를 입력하지 않았을 때
  if (!guess) {
    // document.querySelector(".message").textContent = "🚫No number!🚫";
    displayMessage("🚫No number!🚫");
    // Code refactoring

    // 정답을 맞췄을 때
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🎈Correct Number!🎈";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;
    // 하이스코어
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
    // 자바스크립트에서는 낙타 표시법을 사용하기 때문에 CSS에서도 background-color 가 아닌 backgroundColor으로 작성한다.

    // 예상 숫자가 틀렸을 때
    else if (guess !== secretNumber) {
      document.querySelector(".message").textContent =
        guess > secretNumber ? "Too high! ⤴" : "Too low! ⤵";
      score--;
      document.querySelector(".score").textContent = score;
      // 패배
      if (score <= 0) {
        document.querySelector(".message").textContent =
          "💥You lost the game💥";
        document.querySelector(".score").textContent = 0;
      }
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = score;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".guess").value = null;
});
