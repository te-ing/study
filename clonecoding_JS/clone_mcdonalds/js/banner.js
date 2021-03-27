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



