"use strict";

// 메인 배너 변경
const prevBtn = document.querySelector('.leftBtn');
const nextBtn = document.querySelector('.rightBtn');
const bannerNum = 2; // 배너 수
let bannerCount = 0;

nextBtn.addEventListener('click', function(){
  if(bannerCount < bannerNum){
    bannerCount ++;
    document.querySelector('.banner').style.transform = `translateX(-${bannerCount*100}vw)`;
  }
  else{
    bannerCount = 0;
    document.querySelector('.banner').style.transform = `translateX(-${bannerCount*100}vw)`;
  }
});

prevBtn.addEventListener('click', function(){
  if(bannerCount > 0){
    bannerCount --;
    document.querySelector('.banner').style.transform = `translateX(-${bannerCount*100}vw)`;
  }
  else{
    bannerCount = bannerNum;
    document.querySelector('.banner').style.transform = `translateX(-${bannerCount*100}vw)`;
  }
});

// 배너 자동재생
let autoPlay = true

setInterval(function playBar() { 
  if(autoPlay && bannerCount < bannerNum){
    document.querySelector('.banner').style.transform = `translateX(-${(bannerCount+1)*100}vw)`;
    bannerCount ++;
  }
  else if(bannerCount = bannerNum, autoPlay){
    bannerCount = 0;
    document.querySelector('.banner').style.transform = `translateX(-${bannerCount*100}vw)`;
 }
}, 5000);

// 배너 정지버튼
const playBtn = document.querySelector('.playBtn');
const stopBtn = document.querySelector('.stopBtn');

stopBtn.addEventListener('click', function(){
  document.querySelector('.playBar').classList.add("hidden");
  document.querySelector('.stopBtn').classList.add("hidden");
  autoPlay = false;
});

playBtn.addEventListener('click', function(){
  document.querySelector('.playBar').classList.remove("hidden");
  document.querySelector('.stopBtn').classList.remove("hidden");
  autoPlay = true;
});