"use strict";

// 메뉴 펼치기
const depth = document.querySelector(".depth");
const depth2 = document.querySelector(".depth2Line");

depth.addEventListener('mouseover', function(){
  depth2.classList.remove("hidden");
});

depth2.addEventListener('mouseleave', function(){
  depth2.classList.add("hidden");
});
