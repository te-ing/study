"use strict";
// 상단알림 닫기

const notify = document.querySelector(".notify");
const var_notify = document.querySelector(".var_notify");
const closeBtn = document.querySelector(".notify_utility_btn");


closeBtn.addEventListener('click', function(){
  notify.classList.add("hidden");
  var_notify.classList.remove("hidden");
})